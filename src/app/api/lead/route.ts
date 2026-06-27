import { NextResponse, type NextRequest } from "next/server";

/**
 * Recebe os cadastros do formulário da isca (Nome + WhatsApp) e os encaminha
 * para a planilha do Google via a URL do Apps Script Web App, definida na
 * variável de ambiente LEAD_WEBHOOK_URL.
 *
 * Enquanto LEAD_WEBHOOK_URL não estiver configurada, o formulário continua
 * funcionando (o lead é só registrado no log do servidor) — assim dá para
 * testar a tela antes de ligar a planilha.
 *
 * Passo a passo da planilha: docs/configurar-planilha-leads.html
 */
export async function POST(request: NextRequest) {
  let dados: unknown;
  try {
    dados = await request.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "Requisição inválida." }, { status: 400 });
  }

  const corpo = dados as { nome?: unknown; whatsapp?: unknown };
  const nome = String(corpo?.nome ?? "").trim();
  const whatsapp = String(corpo?.whatsapp ?? "").replace(/\D/g, "");

  if (nome.length < 2) {
    return NextResponse.json({ ok: false, erro: "Informe seu nome." }, { status: 422 });
  }
  if (whatsapp.length < 10 || whatsapp.length > 13) {
    return NextResponse.json(
      { ok: false, erro: "Informe um WhatsApp válido com DDD." },
      { status: 422 },
    );
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    // Planilha ainda não conectada: não perde o lead, registra no servidor.
    console.warn("[lead] LEAD_WEBHOOK_URL não configurada. Lead recebido:", { nome, whatsapp });
    return NextResponse.json({ ok: true, salvo: false });
  }

  try {
    const resp = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        whatsapp,
        origem: "landing",
        criadoEm: new Date().toISOString(),
      }),
    });
    if (!resp.ok) throw new Error(`webhook respondeu ${resp.status}`);
  } catch (erro) {
    console.error("[lead] falha ao enviar para a planilha:", erro);
    return NextResponse.json(
      { ok: false, erro: "Não consegui registrar agora. Tente de novo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, salvo: true });
}

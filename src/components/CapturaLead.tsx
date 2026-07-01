"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "enviando" | "ok" | "erro";

export function CapturaLead() {
  const lm = site.leadMagnet;
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [erro, setErro] = useState("");
  const [baixado, setBaixado] = useState(false);

  if (!lm.ativo) return null;

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setStatus("enviando");
    setErro("");
    try {
      const resp = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, whatsapp }),
      });
      const dados = await resp.json();
      if (!resp.ok || !dados.ok) {
        throw new Error(dados?.erro ?? "Não consegui enviar. Tente de novo.");
      }
      setStatus("ok");
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Algo deu errado. Tente de novo.");
      setStatus("erro");
    }
  }

  return (
    <section id="amostra" className="bg-beige px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-terra-deep">
            {lm.selo}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-ink sm:text-[2.4rem]">
            {lm.titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            {lm.subtitulo}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 rounded-3xl bg-white px-6 py-8 text-left shadow-[0_24px_50px_rgba(70,50,30,0.12)] sm:px-8">
            {status === "ok" ? (
              <div className="text-center">
                <h3 className="font-serif text-2xl font-medium text-ink">
                  {lm.sucessoTitulo}
                </h3>
                <p className="mt-2 text-muted">{lm.sucessoTexto}</p>
                <a
                  href={lm.arquivoPdf}
                  download={lm.nomeArquivoDownload}
                  onClick={() => setBaixado(true)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-terra py-4 text-[17px] font-extrabold text-white shadow-[0_14px_30px_rgba(217,154,108,0.4)] transition-transform hover:-translate-y-0.5 hover:brightness-[1.04]"
                >
                  {baixado ? (
                    <>Baixada! Clique para baixar de novo <span aria-hidden>✓</span></>
                  ) : (
                    <>{lm.textoDownload} <span aria-hidden>↓</span></>
                  )}
                </a>
              </div>
            ) : (
              <form onSubmit={enviar} className="space-y-4">
                <div>
                  <label htmlFor="lead-nome" className="block text-sm font-semibold text-ink">
                    Seu nome
                  </label>
                  <input
                    id="lead-nome"
                    type="text"
                    autoComplete="name"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Como você se chama?"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-ink outline-none transition-colors focus:border-terra"
                  />
                </div>
                <div>
                  <label htmlFor="lead-whatsapp" className="block text-sm font-semibold text-ink">
                    Seu WhatsApp (com DDD)
                  </label>
                  <input
                    id="lead-whatsapp"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(27) 99999-9999"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-ink outline-none transition-colors focus:border-terra"
                  />
                </div>

                {status === "erro" && (
                  <p className="text-sm font-semibold text-terra-deep">{erro}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "enviando"}
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-terra py-4 text-[17px] font-extrabold text-white shadow-[0_14px_30px_rgba(217,154,108,0.4)] transition-transform hover:-translate-y-0.5 hover:brightness-[1.04] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "enviando" ? "Enviando…" : lm.textoBotao}
                  {status !== "enviando" && <span aria-hidden>→</span>}
                </button>
                <p className="text-center text-xs text-soft">
                  Sem spam. É só para te enviar o material e novidades do método.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

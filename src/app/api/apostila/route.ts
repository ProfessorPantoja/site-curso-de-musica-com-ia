import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/lib/site";

/**
 * Serve o PDF da apostila com o nome de arquivo correto.
 *
 * O servidor estático do Vercel para arquivos em /public sempre manda
 * `Content-Disposition: inline; filename="apostila-completa.pdf"` — esse
 * header tem prioridade sobre o atributo `download` do link no HTML, então
 * o nome customizado (site.leadMagnet.nomeArquivoDownload) nunca era usado
 * de verdade pelo navegador. Servindo por aqui, controlamos o header.
 */
export async function GET() {
  const filePath = path.join(process.cwd(), "public", "iscas", "apostila-completa.pdf");
  const arquivo = await readFile(filePath);
  const nomeCodificado = encodeURIComponent(site.leadMagnet.nomeArquivoDownload);

  return new Response(new Uint8Array(arquivo), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="apostila-completa.pdf"; filename*=UTF-8''${nomeCodificado}`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

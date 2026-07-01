/**
 * Configuração central do site — Curso "Método Pantoja" (presente musical com IA).
 *
 * EDITE ESTE ARQUIVO para personalizar tudo sem mexer no resto do código:
 * textos, preço, link de checkout, músicas, FAQ e SEO.
 */

/**
 * URL pública do site (sem barra no final).
 * Substituto temporário enquanto o domínio fabiopantoja.com.br não é comprado.
 * Quando comprar o domínio, troque o valor abaixo (ou defina NEXT_PUBLIC_SITE_URL).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://curso-de-musica-com-ia.vercel.app"
).replace(/\/$/, "");

export const site = {
  // ── Identidade ──────────────────────────────────────────────
  marca: "Método Pantoja",
  sobrescrita: "Crie uma música pra quem você ama",
  tagline: "Um presente que fica para sempre",
  // Frase de descrição usada no SEO e no Open Graph
  descricaoCurta:
    "Crie uma música única para quem você ama — mãe, pai, um amigo, sua igreja. Em 3 horas, do zero, você aprende o Método Pantoja de criação musical com inteligência artificial.",
  url: SITE_URL,
  email: "artpantoja@gmail.com",
  whatsapp: "5527992681959", // só números, com DDI e DDD. Ex: 5511988887777

  // ── Oferta ──────────────────────────────────────────────────
  oferta: {
    // Mude para false para esconder o preço e só captar interesse (lista de espera)
    mostrarPreco: true,
    precoDe: "R$ 197",
    moedaSimbolo: "R$",
    precoNumeroInteiro: "97",
    precoNumerico: "97.00", // usado no SEO (structured data)
    moeda: "BRL",
    formaPagamento: "à vista no Pix · ou em até 12x no cartão",
    // ⬇️ LINK DO CHECKOUT DA KIWIFY. Troque aqui se mudar de produto/oferta.
    // URL "https://..." → todos os botões viram compra e abrem em nova aba.
    // (Para voltar a só rolar até o preço, use "#oferta".)
    linkCheckout: "https://pay.kiwify.com.br/6RBV7e9",
    duracao: "3 horas",
  },

  // ── Isca / captura de leads (PDF gratuito) ──────────────────
  // Formulário pede só Nome + WhatsApp e entrega o PDF na hora.
  // Os contatos vão para a sua planilha (veja docs/configurar-planilha-leads.html).
  leadMagnet: {
    ativo: true, // mude para false para esconder a seção inteira
    selo: "Apostila completa · de graça",
    titulo: "Baixe a apostila completa do curso — de graça",
    subtitulo:
      "São 16 páginas com o método do Pantoja condensado: o passo a passo, as dicas e os macetes que ele ensina no curso. Deixe seu nome e WhatsApp e baixe agora.",
    textoBotao: "Quero a apostila grátis",
    // ⬇️ Caminho do PDF dentro de /public. Troque pelo arquivo final.
    arquivoPdf: "/iscas/apostila-completa.pdf",
    // Tela exibida depois que o cadastro dá certo:
    sucessoTitulo: "Prontinho! Sua apostila está liberada 🎉",
    sucessoTexto:
      "Aproveite cada página. E quando quiser aplicar tudo isso ao vivo, comigo te guiando, o curso te espera.",
    textoDownload: "Baixar a apostila agora",
  },

  // ── Instrutor ───────────────────────────────────────────────
  instrutor: {
    nome: "Fábio Pantoja",
    titulo: "Criador do Método Pantoja e do projeto A Escritura Cantada",
    bio: "Eu já criei centenas de músicas. Fiz para a minha mãe nos 70 anos dela, fiz para a minha irmã — que se emocionou —, fiz para a pequena Sofia, que passou a pedir para ouvir a “música dela” todo dia. E criei o projeto A Escritura Cantada, transformando os Salmos e a Palavra em canção. Foi vendo a reação das pessoas que eu entendi uma coisa: o segredo não é a inteligência artificial — é o jeito de conduzir ela. Eu reviso, eu refino, eu mentalizo a música como se já estivesse cantando, crio repetições que dão alma à letra. Isso a IA não faz sozinha. É exatamente esse método que eu te ensino aqui.",
    // Parágrafo de fechamento da seção "Quem te ensina" (proposta do curso)
    proposta:
      "Aqui eu abro o método por inteiro. Passo a passo, do meu jeito de pensar uma canção, eu te mostro exatamente como crio — o mesmo método que usei em cada música do projeto A Escritura Cantada. É só copiar, colar e seguir. Mesmo que você não saiba nada de música, nem nada de inteligência artificial, ao concluir este curso você estará criando as suas próprias músicas: começando por Deus, depois para você e para quem você ama.",
  },

  // ── Projeto-prova: Escritura Cantada ────────────────────────
  escrituraCantada: {
    titulo: "A Escritura Cantada",
    subtitulo: "Os Salmos e a Palavra transformados em canção",
    link: "https://a-escritura-cantada.vercel.app/",
    // Faixas tocáveis no player. O `src` aponta para /public/songs.
    // Para trocar/adicionar: copie o MP3 em public/songs e ajuste aqui.
    faixas: [
      { nome: "Salmo 7 — A Armadilha", src: "/songs/salmo-07.mp3" },
      { nome: "Salmo 18 — O Meu Rochedo", src: "/songs/salmo-18.mp3" },
      { nome: "Salmo 47 — Rei Sobre Toda a Terra", src: "/songs/salmo-47.mp3" },
      { nome: "Salmo 148 — Louvai Desde os Céus", src: "/songs/salmo-148.mp3" },
    ],
  },

  // ── Redes sociais (deixe vazio para esconder) ───────────────
  social: {
    instagram: "",
    youtube: "",
    tiktok: "",
  },
} as const;

/**
 * Props prontas para todos os botões de compra do site.
 * - Se `linkCheckout` for uma URL externa (Kiwify), abre em NOVA ABA.
 * - Se for uma âncora interna (`#oferta`), navega na própria página.
 * Use com spread: <a {...checkoutLinkProps} className="...">…</a>
 */
export const checkoutLinkProps = site.oferta.linkCheckout.startsWith("http")
  ? {
      href: site.oferta.linkCheckout,
      target: "_blank" as const,
      rel: "noopener noreferrer",
    }
  : { href: site.oferta.linkCheckout };

/** Palavras-chave para SEO. Ajuste conforme sua pesquisa de termos. */
export const SEO_KEYWORDS = [
  "presente musical personalizado",
  "música para o dia das mães",
  "criar música para presente",
  "música cristã com IA",
  "método pantoja",
  "homenagem em música",
  "presente de aniversário diferente",
  "criar música com inteligência artificial",
  "música personalizada para igreja",
];

/** Ocasiões para presentear (seção "para cada pessoa que importa"). */
export const OCASIOES = [
  {
    emoji: "🌷",
    titulo: "Dia das Mães",
    descricao: "A homenagem que ela vai guardar para sempre.",
  },
  {
    emoji: "🎂",
    titulo: "Aniversários",
    descricao: "Um presente que nenhuma loja consegue vender.",
  },
  {
    emoji: "⛪",
    titulo: "Sua igreja",
    descricao: "Um hino para uma data, um culto, um aniversário.",
  },
  {
    emoji: "💛",
    titulo: "Quem você ama",
    descricao: "Pai, filho, amigo, irmão — qualquer história vira canção.",
  },
];

/** Os 4 degraus do Método Pantoja. O último é o destaque (IA completa). */
export const METODO = [
  {
    numero: "01",
    titulo: "Comece pela emoção, não pela técnica",
    descricao:
      "Tudo nasce de uma ideia simples e verdadeira — um nome, uma história, um sentimento. É daí que sai uma música que toca de verdade.",
  },
  {
    numero: "02",
    titulo: "A letra que vem de você",
    descricao:
      "Meu jeito de transformar o que você sente em letra — sem depender de talento musical, com ferramentas que qualquer pessoa já tem na mão.",
  },
  {
    numero: "03",
    titulo: "Metade você, metade inteligência artificial",
    descricao:
      "Você dá a alma e a história; a IA ajuda na forma. É o equilíbrio que destrava qualquer pessoa — e o ponto exato onde a maioria erra, deixando a IA fazer tudo sozinha.",
  },
  {
    numero: "04",
    titulo: "A inteligência artificial trabalhando no seu comando",
    descricao:
      "Quando você quer ir além: a IA gera músicas completas a partir do seu direcionamento — sempre conduzida por você, nunca solta. É aí que mora o toque que ninguém copia.",
    destaque: true,
  },
];

/** Perguntas frequentes. */
export const FAQ = [
  {
    pergunta: "Preciso saber tocar algum instrumento?",
    resposta:
      "Não. O curso foi feito para quem entra sabendo zero. Você usa a sua história e ferramentas simples.",
  },
  {
    pergunta: "Preciso ter voz boa ou saber cantar?",
    resposta:
      "Não precisa cantar nada. Quem canta é a inteligência artificial. Você traz a história e a emoção — a voz e a melodia ficam por conta da ferramenta.",
  },
  {
    pergunta: "A música precisa ser religiosa?",
    resposta:
      "Não. Serve para qualquer presente: aniversário, Dia das Mães, homenagem a um amigo ou à sua igreja. Você escolhe o tema.",
  },
  {
    pergunta: "Vou realmente sair com uma música pronta?",
    resposta:
      "Sim. As 3 horas são pensadas para você terminar com uma música criada do começo ao fim, com o método aplicado em tempo real.",
  },
  {
    pergunta: "Preciso de equipamento ou programas caros?",
    resposta:
      "Não. Usamos ferramentas gratuitas ou acessíveis, como o Google Docs e inteligência artificial. Um computador ou celular já basta.",
  },
];

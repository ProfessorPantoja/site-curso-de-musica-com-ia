/**
 * Configuração central do site.
 *
 * EDITE ESTE ARQUIVO para personalizar o curso sem precisar mexer no resto do
 * código: nome, preço, instrutor, links de checkout/WhatsApp, depoimentos etc.
 * Tudo que aparece na landing page e no SEO sai daqui.
 */

/**
 * URL pública do site (sem barra no final).
 * Em produção, defina a variável de ambiente NEXT_PUBLIC_SITE_URL com o domínio real.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.musicacomia.com.br"
).replace(/\/$/, "");

export const site = {
  // ── Identidade ──────────────────────────────────────────────
  nome: "Música com IA",
  tagline: "Crie suas próprias músicas com Inteligência Artificial",
  descricaoCurta:
    "Curso online que ensina, do zero, a compor, produzir e finalizar músicas profissionais usando ferramentas de Inteligência Artificial — mesmo sem saber teoria musical.",
  url: SITE_URL,
  // E-mail e telefone de contato (aparecem no rodapé)
  email: "contato@musicacomia.com.br",
  whatsapp: "5500000000000", // só números, com DDI e DDD. Ex: 5511988887777

  // ── Oferta ──────────────────────────────────────────────────
  oferta: {
    precoDe: "R$ 997",
    precoPor: "R$ 497",
    parcelas: "12x de R$ 49,70",
    moeda: "BRL",
    precoNumerico: "497.00", // usado no SEO (structured data)
    // Cole aqui o link do seu checkout (Hotmart, Kiwify, Eduzz, Stripe...)
    linkCheckout: "#inscricao",
    garantiaDias: 7,
  },

  // ── Instrutor ───────────────────────────────────────────────
  instrutor: {
    nome: "Seu Nome",
    titulo: "Produtor musical e especialista em IA aplicada à música",
    bio: "Há anos produzindo música e, mais recentemente, mergulhado nas ferramentas de IA que estão transformando a indústria. Já ajudei centenas de alunos a tirarem suas ideias da cabeça e transformá-las em faixas reais.",
  },

  // ── Prova social rápida (números do hero) ───────────────────
  numeros: [
    { valor: "+1.200", rotulo: "alunos" },
    { valor: "4,9/5", rotulo: "avaliação média" },
    { valor: "+40", rotulo: "aulas práticas" },
  ],

  // ── Redes sociais (deixe vazio para esconder) ───────────────
  social: {
    instagram: "",
    youtube: "",
    tiktok: "",
  },
} as const;

/** Palavras-chave para SEO. Ajuste conforme sua pesquisa de termos. */
export const SEO_KEYWORDS = [
  "curso de música com IA",
  "criar música com inteligência artificial",
  "produção musical com IA",
  "compor música com IA",
  "fazer música com inteligência artificial",
  "curso de produção musical online",
  "música com inteligência artificial",
  "Suno IA",
  "Udio",
];

/** Módulos / conteúdo programático do curso. */
export const MODULOS = [
  {
    numero: "01",
    titulo: "Fundamentos da música com IA",
    descricao:
      "Entenda o panorama das ferramentas de IA musical e como elas funcionam por trás dos panos. Você sai com clareza total de por onde começar.",
    topicos: [
      "Como a IA gera música hoje",
      "Mapa das principais ferramentas (Suno, Udio e mais)",
      "Montando seu setup gratuito ou de baixo custo",
    ],
  },
  {
    numero: "02",
    titulo: "Da ideia ao prompt perfeito",
    descricao:
      "O segredo de músicas boas com IA está no prompt. Aprenda a descrever estilo, instrumentos, clima e estrutura para obter resultados profissionais.",
    topicos: [
      "Anatomia de um prompt musical",
      "Controlando gênero, andamento e emoção",
      "Escrevendo letras que a IA canta bem",
    ],
  },
  {
    numero: "03",
    titulo: "Produção e refinamento",
    descricao:
      "Transforme a saída bruta da IA em uma faixa coesa: cortes, transições, mixagem básica e camadas para dar identidade à sua música.",
    topicos: [
      "Editando e remontando trechos",
      "Mixagem essencial para iniciantes",
      "Combinando IA com gravações reais",
    ],
  },
  {
    numero: "04",
    titulo: "Publicação e monetização",
    descricao:
      "Coloque suas músicas no mundo: distribuição em Spotify e demais plataformas, direitos autorais e formas reais de ganhar com isso.",
    topicos: [
      "Distribuindo nas plataformas de streaming",
      "Direitos autorais e uso comercial de IA",
      "Caminhos para monetizar suas faixas",
    ],
  },
];

/** Benefícios / diferenciais do curso. */
export const BENEFICIOS = [
  {
    titulo: "Do zero, sem teoria musical",
    descricao:
      "Você não precisa saber tocar nenhum instrumento nem ler partitura. O caminho é prático desde a primeira aula.",
  },
  {
    titulo: "100% prático e atualizado",
    descricao:
      "Aulas curtas e diretas, sempre com as ferramentas mais atuais do mercado de IA musical.",
  },
  {
    titulo: "Acesso vitalício",
    descricao:
      "Estude no seu ritmo, quando e quantas vezes quiser, incluindo todas as atualizações futuras.",
  },
  {
    titulo: "Comunidade e suporte",
    descricao:
      "Tire dúvidas e troque experiências com outros alunos que estão na mesma jornada.",
  },
  {
    titulo: "Certificado de conclusão",
    descricao:
      "Receba um certificado ao finalizar o curso para comprovar seu novo conhecimento.",
  },
  {
    titulo: "Garantia incondicional",
    descricao:
      "Experimente sem risco. Se não for para você, devolvemos 100% do valor.",
  },
];

/** Depoimentos de alunos. Substitua pelos seus reais. */
export const DEPOIMENTOS = [
  {
    nome: "Marina Alves",
    papel: "Criadora de conteúdo",
    texto:
      "Eu nunca tinha feito música na vida. Em uma semana já tinha minha primeira faixa publicada no Spotify. Surreal!",
  },
  {
    nome: "Rafael Souza",
    papel: "Empreendedor",
    texto:
      "Uso as músicas que crio nos meus vídeos e anúncios. Economizei uma fortuna em trilhas e o resultado ficou profissional.",
  },
  {
    nome: "Juliana Lima",
    papel: "Professora de música",
    texto:
      "Mesmo já sendo da área, a IA abriu um mundo novo pra mim. O curso é didático e direto ao ponto.",
  },
];

/** Perguntas frequentes. */
export const FAQ = [
  {
    pergunta: "Preciso saber tocar algum instrumento ou ter conhecimento musical?",
    resposta:
      "Não. O curso foi desenhado para iniciantes absolutos. A IA cuida da parte técnica e você aprende a guiá-la para obter o resultado que quer.",
  },
  {
    pergunta: "Preciso de um computador potente?",
    resposta:
      "Não. A maior parte das ferramentas roda no navegador. Você consegue acompanhar até pelo celular na maioria das etapas.",
  },
  {
    pergunta: "As ferramentas de IA são pagas?",
    resposta:
      "Há ótimas opções gratuitas para começar, e mostramos quando vale a pena investir em planos pagos. Você não precisa gastar nada para fazer suas primeiras músicas.",
  },
  {
    pergunta: "Por quanto tempo tenho acesso ao curso?",
    resposta:
      "O acesso é vitalício. Você assiste no seu ritmo e recebe todas as atualizações futuras sem pagar nada a mais.",
  },
  {
    pergunta: "Posso vender ou monetizar as músicas que criar?",
    resposta:
      "Sim, e tem um módulo inteiro sobre isso: distribuição, direitos autorais e formas de monetização.",
  },
  {
    pergunta: "E se eu não gostar do curso?",
    resposta:
      "Você tem 7 dias de garantia incondicional. Se não for para você, basta pedir o reembolso integral, sem burocracia.",
  },
];

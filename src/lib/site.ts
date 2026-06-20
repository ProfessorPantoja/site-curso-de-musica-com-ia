/**
 * Configuração central do site — Curso "Método Pantoja" (presente musical com IA).
 *
 * EDITE ESTE ARQUIVO para personalizar tudo sem mexer no resto do código:
 * textos, preço, link de checkout, músicas, FAQ e SEO.
 */

/**
 * URL pública do site (sem barra no final).
 * Em produção, defina NEXT_PUBLIC_SITE_URL com o domínio real.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fabiopantoja.com.br"
).replace(/\/$/, "");

export const site = {
  // ── Identidade ──────────────────────────────────────────────
  marca: "Método Pantoja",
  sobrescrita: "Música feita com amor",
  tagline: "Um presente que fica para sempre",
  // Frase de descrição usada no SEO e no Open Graph
  descricaoCurta:
    "Crie uma música única para quem você ama — mãe, pai, um amigo, sua igreja. Em 3 horas, do zero, você aprende o Método Pantoja de criação musical com inteligência artificial.",
  url: SITE_URL,
  email: "contato@fabiopantoja.com.br",
  whatsapp: "5500000000000", // só números, com DDI e DDD. Ex: 5511988887777

  // ── Oferta ──────────────────────────────────────────────────
  oferta: {
    // Mude para false para esconder o preço e só captar interesse (lista de espera)
    mostrarPreco: true,
    precoDe: "R$ 197",
    moedaSimbolo: "R$",
    precoNumeroInteiro: "97",
    precoNumerico: "97.00", // usado no SEO (structured data)
    moeda: "BRL",
    formaPagamento: "à vista no Pix · valor de lançamento",
    // Cole aqui o link do seu checkout (Pix, Hotmart, Kiwify...)
    linkCheckout: "#oferta",
    duracao: "3 horas",
  },

  // ── Instrutor ───────────────────────────────────────────────
  instrutor: {
    nome: "Fábio Pantoja",
    titulo: "Criador do Método Pantoja e do projeto Escritura Cantada",
    bio: "Criei um método próprio de transformar histórias, versículos e memórias em música — e o apliquei no projeto Escritura Cantada, com mais de 10 canções inspiradas na Bíblia. Quando compus a música dos 10 anos da minha igreja e vi a reação das pessoas, percebi que esse método podia estar nas mãos de qualquer um. Este curso nasceu disso.",
  },

  // ── Projeto-prova: Escritura Cantada ────────────────────────
  escrituraCantada: {
    titulo: "Escritura Cantada",
    subtitulo: "10 músicas inspiradas na Bíblia",
    link: "https://a-escritura-cantada.vercel.app/",
    // Algumas faixas de amostra (edite/atualize com as reais)
    faixas: [
      { nome: "Salmo do Caminho", duracao: "3:24" },
      { nome: "Graça que me Encontrou", duracao: "4:01" },
      { nome: "Luz nas Sombras", duracao: "2:58" },
    ],
  },

  // ── Redes sociais (deixe vazio para esconder) ───────────────
  social: {
    instagram: "",
    youtube: "",
    tiktok: "",
  },
} as const;

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
    titulo: "O tema e a base instrumental",
    descricao:
      "A ideia primeiro. A partir de um tema simples você cria a base sobre a qual a música nasce.",
  },
  {
    numero: "02",
    titulo: 'A letra "de cabeça", com o Google Docs',
    descricao:
      "Meu método de escrever uma música inteira só com a sua mente e uma ferramenta gratuita.",
  },
  {
    numero: "03",
    titulo: "Metade você, metade inteligência artificial",
    descricao:
      "Você dá a alma e a história, a IA ajuda na forma. O equilíbrio que destrava qualquer pessoa.",
  },
  {
    numero: "04",
    titulo: "A IA criando dezenas de músicas para você",
    descricao:
      "Quando quer escala: a inteligência artificial gera músicas completas a partir do seu direcionamento — sem perder o toque pessoal.",
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

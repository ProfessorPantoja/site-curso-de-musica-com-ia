import { site, SITE_URL, FAQ } from "@/lib/site";

/**
 * Dados estruturados (schema.org) para o Google entender que a página é um
 * Curso, com instrutor, preço e perguntas frequentes. Melhora a aparência nos
 * resultados de busca (rich results) e o ranqueamento.
 */
export function JsonLd() {
  const courseName = `${site.marca} — curso de criação musical com IA`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: site.marca,
        url: SITE_URL,
        email: site.email,
        founder: { "@type": "Person", name: site.instrutor.nome },
      },
      {
        "@type": "Course",
        "@id": `${SITE_URL}/#course`,
        name: courseName,
        description: site.descricaoCurta,
        url: SITE_URL,
        inLanguage: "pt-BR",
        provider: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          category: "Paid",
          price: site.oferta.precoNumerico,
          priceCurrency: site.oferta.moeda,
          availability: "https://schema.org/InStock",
          url: SITE_URL,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT3H",
          instructor: {
            "@type": "Person",
            name: site.instrutor.nome,
            description: site.instrutor.titulo,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.pergunta,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.resposta,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

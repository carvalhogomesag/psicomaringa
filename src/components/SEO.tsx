import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  specialty?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, specialty }) => {
  const siteName  = 'Psico Maringá';
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl   = typeof window !== 'undefined' ? window.location.origin : 'https://psicomaringa.com.br';

  const keywords = [
    'psicólogo maringá',
    'psicologia maringá',
    'terapia maringá',
    'psicólogo zona 07 maringá',
    'psicólogo centro maringá',
    'psicólogo vila operária maringá',
    'terapia de casal maringá',
    'psicologia infantil maringá',
    'ansiedade maringá',
    'depressão maringá',
    specialty || '',
  ].filter(Boolean).join(', ');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Psychologist',
    name: siteName,
    description,
    url: siteUrl,
    areaServed: {
      '@type': 'City',
      name: 'Maringá',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Especialidades',
      itemListElement: [
        'Tratamento de Ansiedade',
        'Tratamento de Depressão',
        'Terapia de Casal',
        'Psicologia Infantil',
        'Terapia Cognitivo-Comportamental',
        'Apoio no Luto',
      ].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
  };

  return (
    <React.Fragment>
      {/* Título */}
      <title>{fullTitle}</title>

      {/* Meta padrão */}
      <meta name="description"  content={description} />
      <meta name="keywords"     content={keywords} />
      <meta name="robots"       content="index, follow" />
      <meta name="author"       content={siteName} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name"   content={siteName} />
      <meta property="og:locale"      content="pt_BR" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </React.Fragment>
  );
};
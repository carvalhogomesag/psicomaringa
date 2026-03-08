import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  specialty?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, specialty }) => {
  const siteName = "Psico Maringá";
  const fullTitle = `${title} | ${siteName}`;
  
  return (
    <React.Fragment>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`psicólogo maringá, psicologia maringá, terapia maringá, ${specialty || ''}, psicólogo zona 01 maringá, psicólogo centro maringá`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Psychologist",
          "name": siteName,
          "description": description,
          "url": window.location.origin,
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "20:00"
            }
          ]
        })}
      </script>
    </React.Fragment>
  );
};

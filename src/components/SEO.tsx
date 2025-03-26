import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Clínica Olher | Oftalmologia em Maringá",
  description = "Clínica oftalmológica especializada em Maringá. Oferecemos atendimento personalizado, tecnologia de ponta e profissionais altamente qualificados para cuidar da saúde dos seus olhos.",
  keywords = "oftalmologista, clínica oftalmológica, oftalmologia Maringá, exame de vista, cirurgia ocular, tratamento ocular, saúde dos olhos",
  canonicalUrl = "https://www.olher.com.br"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${canonicalUrl}/og-image.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Clínica Olher",
          "image": `${canonicalUrl}/clinic-image.jpg`,
          "@id": canonicalUrl,
          "url": canonicalUrl,
          "telephone": "(44) 3025-5500",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Colombo, 5790",
            "addressLocality": "Maringá",
            "addressRegion": "PR",
            "postalCode": "87020-900",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.4103039,
            "longitude": -51.9379369
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "12:00"
            }
          ],
          "sameAs": [
            "https://facebook.com/olherclinica",
            "https://instagram.com/olherclinica"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 
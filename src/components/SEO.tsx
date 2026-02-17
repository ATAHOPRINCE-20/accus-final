import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  name?: string;
  type?: string;
  canonical?: string;
}

export function SEO({ title, description, keywords, name = 'Accus Capital', type = 'website', canonical }: SEOProps) {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Facebook Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}

      {/* Twitter Tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Accus Capital",
          "alternateName": "Accus Capital Limited",
          "url": "https://accuscapital.com",
          "logo": "https://accuscapital.com/logo.png",
          "description": "Trusted financial solutions for individuals and businesses in Uganda.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plot 123, Kampala Road",
            "addressLocality": "Kampala",
            "addressRegion": "Central Region",
            "postalCode": "00000",
            "addressCountry": "UG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+256 763 820 376",
            "contactType": "customer service",
            "areaServed": "UG",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/accuscapital",
            "https://twitter.com/accuscapital",
            "https://www.linkedin.com/company/accuscapital",
            "https://www.tiktok.com/@accuscapital"
          ]
        })}
      </script>
    </Helmet>
  );
}

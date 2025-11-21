import { Helmet } from "react-helmet-async";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.nextlayerconsulting.com/#organization",
    name: "Next Layer Consulting Ltd",
    alternateName: "Next Layer Consulting",
    url: "https://www.nextlayerconsulting.com",
    logo: "https://www.nextlayerconsulting.com/assets/nlc-logo-transside.png",
    description:
      "UK-based NetSuite consulting firm specialising in ERP implementation, system optimisation, and ongoing support.",
    email: "hello@nextlayerconsulting.com",
    telephone: "+441784902047",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "England",
    },
    sameAs: [
      "https://www.linkedin.com/company/next-layer-consulting-ltd",
    ],
    knowsAbout: [
      "NetSuite",
      "ERP Implementation",
      "NetSuite Consulting",
      "Business Process Automation",
      "System Integration",
      "Cloud ERP",
    ],
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.nextlayerconsulting.com/#localbusiness",
    name: "Next Layer Consulting Ltd",
    image: "https://www.nextlayerconsulting.com/assets/nlc-logo-transside.png",
    url: "https://www.nextlayerconsulting.com",
    telephone: "+441784902047",
    email: "hello@nextlayerconsulting.com",
    priceRange: "£££",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "England",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "GB",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [
      "https://www.linkedin.com/company/next-layer-consulting-ltd",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.nextlayerconsulting.com/#website",
    url: "https://www.nextlayerconsulting.com",
    name: "Next Layer Consulting",
    description:
      "Expert NetSuite consulting, implementation, and support for UK businesses",
    publisher: {
      "@id": "https://www.nextlayerconsulting.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.nextlayerconsulting.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-GB",
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}

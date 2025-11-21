import { Helmet } from "react-helmet-async";

const DEFAULTS = {
  siteName: "Next Layer Consulting",
  tagName: "NetSuite Consultants UK",
  baseUrl: "https://www.nextlayerconsulting.com",
  image: "https://www.nextlayerconsulting.com/assets/nlc-logo-transside.png",
  description:
    "UK-based NetSuite implementation, migration, and ongoing support.",
  locale: "en_GB",
  twitterHandle: "@NextLayerUK", // Update if you have a Twitter handle
};

function buildTitle(pageTitle) {
  const brand = `${DEFAULTS.siteName} - ${DEFAULTS.tagName}`;
  return pageTitle ? `${pageTitle} | ${brand}` : brand;
}

export default function SEO({
  title,
  description = DEFAULTS.description,
  path = "",
  image = DEFAULTS.image,
  type = "website",
  keywords,
}) {
  const fullTitle = buildTitle(title);
  const url = `${DEFAULTS.baseUrl}${path || ""}`;
  const fullImage = image.startsWith("http")
    ? image
    : `${DEFAULTS.baseUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={DEFAULTS.siteName} />
      <meta property="og:locale" content={DEFAULTS.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      {DEFAULTS.twitterHandle && (
        <meta name="twitter:site" content={DEFAULTS.twitterHandle} />
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />
      <meta httpEquiv="content-language" content="en-GB" />
    </Helmet>
  );
}

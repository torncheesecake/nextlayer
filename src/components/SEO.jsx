import { Helmet } from "react-helmet-async";

const DEFAULTS = {
  siteName: "Next Layer Consulting",
  tagName: "NetSuite Consultants UK",
  baseUrl: "https://nextlayerconsulting.com",
  image: "/assets/nlc-logo-transside.png",
  description:
    "UK-based NetSuite implementation, migration, and ongoing support.",
};

function buildTitle(pageTitle) {
  const brand = `${DEFAULTS.siteName} — ${DEFAULTS.tagName}`;
  return pageTitle ? `${pageTitle} | ${brand}` : brand;
}

export default function SEO({
  title,
  description = DEFAULTS.description,
  path = "",
  image = DEFAULTS.image,
}) {
  const fullTitle = buildTitle(title);
  const url = `${DEFAULTS.baseUrl}${path || ""}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

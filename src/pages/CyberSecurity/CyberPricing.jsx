"use client";
import { ArrowRight, ChevronDown, ChevronUp, Info } from "lucide-react";
import { useId, useMemo, useState } from "react";
import PricingMatrix from "./PriceMatrix";
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-seasalt focus-visible:ring-offset-2 focus-visible:ring-offset-techblack";
/* Button uses semantic variants; no duplicated prefixes */ function Button({
  as = "button",
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-lg font-semibold tracking-wide shadow transition";
  const variants = {
    primary:
      "bg-bittersweet-dark2 text-seasalt hover:bg-bittersweet-dark1 " +
      focusRing,
    secondary:
      "border border-default-dark bg-graphite /90 text-seasalt hover:bg-graphite /70 " +
      focusRing,
    ghost: "text-seasalt/90 hover:text-seasalt " + focusRing,
  };
  const Comp = href ? "a" : as;
  return (
    <Comp
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
/* Card uses semantic surface and border tokens */ function Card({
  as = "article",
  className = "",
  children,
  ...props
}) {
  const Comp = as;
  return (
    <Comp
      className={`border-default-dark bg-graphite /80 rounded-2xl border p-8 shadow-lg ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
/* Section maps to bg-graphite  and seasalt text inside */ function Section({
  id,
  title,
  description,
  children,
  className = "",
}) {
  const headingId = `${id}-heading`;
  const descId = description ? `${id}-desc` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      aria-describedby={descId}
      className={`${className} bg-techblack  py-24`}
    >
      <div className="mx-auto w-[90%] max-w-7xl px-6 md:px-12">
        <header className="mx-auto max-w-4xl text-center">
          <h2
            id={headingId}
            className="text-seasalt mb-8 text-5xl leading-tight font-black"
          >
            {title}
          </h2>
          {description && (
            <p
              id={descId}
              className="text-seasalt mx-auto max-w-xl text-lg leading-relaxed font-light"
            >
              {description}
            </p>
          )}
        </header>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}
/* Toggle uses techblack/seasalt equivalents via semantic tokens */
function MatrixToggle({ open, onToggle }) {
  const regionId = useId();
  return (
    <button
      type="button"
      className={`bg-bittersweet-dark2 text-seasalt hover:bg-bittersweet-dark1 mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold ${focusRing}`}
      aria-expanded={open}
      aria-controls={regionId}
      onClick={onToggle}
    >
      {open ? "Hide" : "Show"} detailed pricing
      {open ? (
        <ChevronUp className="h-4 w-4" aria-hidden="true" />
      ) : (
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
/* PricingTile adopts semantic tokens */ function PricingTile({
  index,
  title,
  startingPrice,
  typicalRange,
  description,
  factors,
}) {
  const baseId = useMemo(() => `price-${index}`, [index]);
  const startId = `${baseId}-start`;
  const rangeId = `${baseId}-range`;
  return (
    <Card as="article" aria-labelledby={`${baseId}-title`}>
      <header className="mb-5">
        <h3
          id={`${baseId}-title`}
          className="text-seasalt mb-6 text-3xl font-extrabold tracking-tight"
        >
          {title}
        </h3>
        <p className="text-seasalt/80 text-base font-light">{description}</p>
      </header>
      <div className="mb-5">
        <div className="mb-2">
          <span
            id={`${startId}-label`}
            className="text-seasalt text-xs tracking-wider uppercase"
          >
            Starts from
          </span>
          <div aria-labelledby={`${startId}-label ${startId}-value`}>
            <span
              id={`${startId}-value`}
              className="text-seasalt block text-3xl font-black"
            >
              {startingPrice}
            </span>
          </div>
        </div>
        <div className="border-bittersweet mt-3 border-t pt-3">
          <span id={`${rangeId}-label`} className="text-seasalt text-base">
            Typical range,
          </span>
          <span
            id={`${rangeId}-value`}
            aria-labelledby={`${rangeId}-label ${rangeId}-value`}
            className="text-seasalt text-base font-bold"
          >
            {typicalRange}
          </span>
        </div>
      </div>
      <div className="mt-auto">
        <div className="border-sideral bg-graphite /90 flex items-start gap-3 rounded-lg border p-4">
          <Info className="text-seasalt mt-0.5 h-4 w-4" aria-hidden="true" />
          <p className="text-seasalt text-sm">{factors}</p>
        </div>
      </div>
    </Card>
  );
}
function TileList({ tiles }) {
  if (!tiles) {
    return (
      <Card as="div" role="status" aria-live="polite">
        <p className="text-seasalt/90">Loading pricing tiles, please wait.</p>
      </Card>
    );
  }
  if (Array.isArray(tiles) && tiles.length === 0) {
    return (
      <Card as="div" role="status" aria-live="polite">
        <p className="text-seasalt/">No pricing tiles available right now.</p>
        <p className="text-seasalt mt-2">
          Request a tailored quote for an accurate estimate.
        </p>
        <div className="mt-4">
          <Button href="#contact" as="a" variant="secondary">
            Request a tailored quote
          </Button>
        </div>
      </Card>
    );
  }
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {tiles.map((tile, index) => (
        <li key={`tile-${index}`} className="list-none">
          <PricingTile {...tile} index={index} />
        </li>
      ))}
    </ul>
  );
}
export default function PricingSummary({
  heading = "Penetration testing pricing, ranges, and factors",
  subheading = "Every environment is different. These are starting prices, final cost depends on scope, complexity, and timeline. Book a free scoping call for exact pricing.",
  tiles,
  isLoading = false,
  isError = false,
  variant = "default",
}) {
  const [showDetails, setShowDetails] = useState(false);
  const pricingTiles = tiles ?? getDefaultTiles();
  const empty = !Array.isArray(pricingTiles) || pricingTiles.length === 0;
  if (isLoading) {
    return (
      <section className="bg-graphite  text-seasalt px-6 py-24">
        <div className="mx-auto w-[90%] max-w-7xl animate-pulse">
          <div className="bg-seasalt/10 mb-8 h-8 w-2/3 rounded" />
          <div className="bg-seasalt/10 h-4 w-1/2 rounded" />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-graphite /60 h-48 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="bg-graphite  text-seasalt px-6 py-24">
        <div className="mx-auto w-[90%] max-w-7xl">
          <Card as="div">
            <h3 className="mb-6 text-3xl font-semibold">
              Unable to load pricing
            </h3>
            <p className="text-seasalt/70">
              Refresh the page or try again later.
            </p>
          </Card>
        </div>
      </section>
    );
  }
  return (
    <Section
      id="pricing"
      title={heading}
      description={subheading}
      className="px-6"
    >
      <div className="text-center">
        <Button
          href="#contact"
          as="a"
          variant="primary"
          aria-label="Book a scoping call"
        >
          Book a scoping call{" "}
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
      <div className="mt-14">
        <TileList tiles={empty ? [] : pricingTiles} />
      </div>
      <div className="text-center">
        <MatrixToggle
          open={showDetails}
          onToggle={() => setShowDetails((v) => !v)}
        />
      </div>
      <div className="mt-10">
        {showDetails && (
          <Card as="section" aria-label="Detailed pricing breakdown">
            <PricingMatrix />
            <div className="mt-8 text-center">
              <p className="text-seasalt text-sm">
                Need exact pricing? Book a free 15-minute scoping call.
              </p>
              <div className="mt-4">
                <Button
                  href="#contact"
                  as="a"
                  variant="primary"
                  aria-label="Book a scoping call"
                >
                  Book a scoping call
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
}
function getDefaultTiles() {
  return [
    {
      title: "Network Testing",
      startingPrice: "£550",
      typicalRange: "£1,500 - £5,000",
      description: "External and internal infrastructure",
      factors: "Based on IP count and complexity",
    },
    {
      title: "Web Application",
      startingPrice: "£3,000",
      typicalRange: "£6,000 - £12,000",
      description: "Full manual testing beyond scans",
      factors: "Based on app size and features",
    },
    {
      title: "API Testing",
      startingPrice: "£1,200",
      typicalRange: "£2,600 - £10,000",
      description: "Endpoint security assessment",
      factors: "Based on endpoint count",
    },
    {
      title: "Mobile App",
      startingPrice: "£5,000",
      typicalRange: "£8,000 - £15,000",
      description: "iOS and Android security",
      factors: "Based on platform and API complexity",
    },
    {
      title: "Desktop App",
      startingPrice: "£3,000",
      typicalRange: "£5,000 - £20,000",
      description: "Client server applications",
      factors: "Based on functionality scope",
    },
    {
      title: "Cloud Review",
      startingPrice: "£3,000",
      typicalRange: "£6,000 - £30,000+",
      description: "Azure and AWS configurations",
      factors: "Based on account count and services",
    },
  ];
}

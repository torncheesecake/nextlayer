import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  useScrollAnimation,
  useScrollAnimationList,
} from "../../hooks/useScrollAnimation";

const basePackages = [
  {
    name: "Launch",
    price: "From £3,500",
    priceValue: "3500",
    summary: "For new sites or fast relaunches.",
    features: [
      "Planning workshop",
      "Up to 3 custom-designed pages",
      "SEO-ready & mobile responsive",
      "Simple contact/form setup",
      "Go-live support & follow-up",
    ],
  },
  {
    name: "Growth",
    price: "From £7,500",
    priceValue: "7500",
    summary: "Full business websites and deeper redesigns.",
    features: [
      "Discovery & content planning",
      "Up to 6 bespoke pages",
      "Conversion-focused UI/UX",
      "Blog or news module",
      "Image galleries/testimonials",
      "Basic animation and effects",
      "30 days improvements support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "From £14,500",
    priceValue: "14500",
    summary: "Advanced or technically complex builds.",
    features: [
      "Bespoke project scoping",
      "10+ pages, custom components",
      "Custom forms, advanced navigation",
      "Content migration or rebuilding",
      "Accessibility & best practise QA",
      "Training & documentation",
    ],
  },
  {
    name: "Enterprise",
    price: "From £25,000",
    priceValue: "25000",
    summary: "High-volume, multi-lingual, or highly custom sites.",
    features: [
      "Comprehensive design & build planning",
      "Multi-site or multi-language features",
      "High-performance hosting setup",
      "Bespoke integrations, advanced features",
      "Accessibility auditing & quarterly improvements",
      "Ongoing support retainers",
    ],
  },
];

const supportPackages = [
  {
    name: "Launch",
    price: "£300/mo",
    priceValue: "300",
    notes:
      "Basic updates, backups, uptime monitoring, minor fixes, limited monthly support.",
  },
  {
    name: "Growth",
    price: "£500/mo",
    priceValue: "500",
    notes:
      "More frequent updates, SEO tweaks, priority fixes, moderate monthly support hours, and performance monitoring.",
  },
  {
    name: "Scale",
    price: "£700/mo",
    priceValue: "700",
    notes:
      "Advanced monitoring, performance improvements, content migration assistance, increased priority fixes and support hours.",
  },
  {
    name: "Enterprise",
    price: "£1,500/mo",
    priceValue: "1500",
    notes:
      "Multi-site/multi-language hosting, bespoke integrations monitoring, quarterly audits, dedicated account management, ongoing improvements.",
  },
];

export default function PricingSimple() {
  const [headerRef1, headerVisible1] = useScrollAnimation(0.2);
  const [headerRef2, headerVisible2] = useScrollAnimation(0.2);
  const [setPackageRef, visiblePackages] = useScrollAnimationList(4, 0.2, 100);
  const [setSupportRef, visibleSupport] = useScrollAnimationList(4, 0.2, 150);

  return (
    <>
      {/* Project Pricing Section */}
      <section className="bg-black py-40 md:py-56 relative overflow-hidden border-b border-gray-800 z-10">
        {/* Gradient glow accents - top right emphasis */}
        <div
          className="absolute top-0 right-1/4 w-[900px] h-[900px] bg-violet-500/20 rounded-full blur-[250px] pointer-events-none z-1"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-bittersweet/15 rounded-full blur-[250px] pointer-events-none z-1"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        ></div>

        {/* Schema.org markup for Pricing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: basePackages.map((pkg, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Offer",
                name: `${pkg.name} Website Package`,
                description: pkg.summary,
                price: pkg.priceValue,
                priceCurrency: "GBP",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: pkg.priceValue,
                  priceCurrency: "GBP",
                },
                itemOffered: {
                  "@type": "Service",
                  name: `${pkg.name} Web Development Package`,
                  provider: {
                    "@type": "Organization",
                    name: "Next Layer Consulting",
                  },
                },
              },
            })),
          })}
        </script>

        <div className="mx-auto max-w-7xl px-8 md:px-16 relative z-10">
          {/* Editorial header */}
          <div ref={headerRef1} className="mb-32">
            <div
              className={`flex items-center gap-8 mb-12 transition-all duration-1000 ${headerVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div
                className={`h-0.5 bg-bittersweet transition-all duration-1000 delay-100 ${headerVisible1 ? "w-20" : "w-0"}`}
              ></div>
              <span
                aria-hidden="true"
                className="text-sm tracking-[0.5em] uppercase text-gray-300 font-bold"
                style={{ fontFamily: "monospace" }}
              >
                07 / Pricing
              </span>
            </div>
            <h2
              className={`text-white mb-16 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight max-w-4xl transition-all duration-1000 delay-200 ${headerVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Clear &
              <br />
              <span className="text-violet-400 font-black italic">
                transparent
              </span>
            </h2>
            <p
              className={`text-gray-200 text-xl md:text-2xl max-w-3xl leading-[1.65] font-normal transition-all duration-1000 delay-400 ${headerVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Choose the package that fits your needs. All prices are starting
              points - we'll provide a detailed quote after understanding your
              requirements.
            </p>
          </div>

          {/* Packages grid with subgrid for aligned CTAs */}
          <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-[auto] pt-8">
            {basePackages.map((pkg, index) => {
              const isVisible = visiblePackages.has(index);

              return (
                <article
                  key={pkg.name}
                  ref={setPackageRef(index)}
                  className={`group relative transition-all duration-700 ease-out hover:scale-[1.02] ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    display: "grid",
                    gridTemplateRows: "subgrid",
                    gridRow: "span 6",
                  }}
                >
                  {/* Popular badge - subtler glow instead of pulse */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                      <span className="inline-block px-6 py-2.5 text-sm font-bold tracking-widest uppercase text-white bg-violet-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Package card - now using subgrid rows */}
                  <div
                    className={`border-t-2 pt-12 relative transition-all duration-300 ${pkg.popular ? "border-violet-400" : "border-bittersweet"}`}
                    style={{ gridRow: "1" }}
                  >
                    {/* Package name */}
                    <h3 className="text-white mb-6 text-3xl md:text-4xl font-bold">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div
                    className="text-white mb-6 text-4xl md:text-5xl font-black"
                    style={{ gridRow: "2" }}
                  >
                    {pkg.price}
                  </div>

                  {/* Summary */}
                  <p
                    className="text-gray-300 mb-12 text-lg leading-[1.65]"
                    style={{ gridRow: "3" }}
                  >
                    {pkg.summary}
                  </p>

                  {/* Features - this row will flex to fill space */}
                  <ul
                    className="text-gray-200 space-y-4 mb-12"
                    style={{ gridRow: "4" }}
                  >
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check
                          className="shrink-0 mt-0.5 text-bittersweet"
                          size={20}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span className="text-base leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - will align across all cards */}
                  <div style={{ gridRow: "5" }}>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-base transition-all duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-violet-400 ${
                        pkg.popular
                          ? "bg-violet-500 text-white hover:bg-violet-400 hover:shadow-lg"
                          : "bg-white text-black hover:bg-violet-400 hover:text-white"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 text-base">
              All prices exclude VAT · Bespoke quotes available for unique
              requirements · Payment plans available
            </p>
          </div>
        </div>
      </section>

      {/* Support Packages Section */}
      <section className="bg-black py-40 md:py-56 relative overflow-hidden border-b border-gray-800 z-10">
        {/* Gradient glow accents - bottom left emphasis */}
        <div
          className="absolute top-1/3 left-0 w-[700px] h-[700px] bg-bittersweet/18 rounded-full blur-[250px] pointer-events-none z-1"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-0 right-1/3 w-[800px] h-[800px] bg-violet-500/18 rounded-full blur-[250px] pointer-events-none z-1"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        ></div>

        <div className="mx-auto max-w-7xl px-8 md:px-16 relative z-10">
          {/* Editorial header */}
          <div ref={headerRef2} className="mb-32">
            <div
              className={`flex items-center gap-8 mb-12 transition-all duration-1000 ${headerVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div
                className={`h-0.5 bg-bittersweet transition-all duration-1000 delay-100 ${headerVisible2 ? "w-20" : "w-0"}`}
              ></div>
              <span
                aria-hidden="true"
                className="text-sm tracking-[0.5em] uppercase text-gray-300 font-bold"
                style={{ fontFamily: "monospace" }}
              >
                08 / Support
              </span>
            </div>
            <h2
              className={`text-white mb-16 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight max-w-4xl transition-all duration-1000 delay-200 ${headerVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Ongoing
              <br />
              <span className="text-violet-400 font-black italic">support</span>
            </h2>
            <p
              className={`text-gray-200 text-xl md:text-2xl max-w-3xl leading-[1.65] font-normal transition-all duration-1000 delay-400 ${headerVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Keep your website running smoothly with ongoing maintenance,
              updates, and support.
            </p>
          </div>

          {/* Support cards - grid layout with subgrid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 md:grid-rows-[auto]">
            {supportPackages.map((support, index) => {
              const isVisible = visibleSupport.has(index);

              return (
                <article
                  key={support.name}
                  ref={setSupportRef(index)}
                  className={`group relative bg-gray-900/20 backdrop-blur-sm border-2 border-gray-800 rounded-2xl p-8 md:p-10 hover:border-violet-400/50 hover:bg-gray-900/40 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    display: "grid",
                    gridTemplateRows: "auto auto auto 1fr auto",
                    alignContent: "start",
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-bittersweet/0 group-hover:from-violet-500/5 group-hover:to-bittersweet/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>

                  {/* Package name */}
                  <h3
                    className="relative text-white text-2xl md:text-3xl font-bold mb-4 group-hover:text-violet-400 transition-colors duration-300"
                    style={{ gridRow: "1" }}
                  >
                    {support.name}
                  </h3>

                  {/* Price */}
                  <div
                    className="relative text-white text-4xl md:text-5xl font-black mb-6"
                    style={{ gridRow: "2" }}
                  >
                    {support.price}
                  </div>

                  {/* Description */}
                  <p
                    className="relative text-gray-200 text-base md:text-lg leading-[1.65] mb-8"
                    style={{ gridRow: "3" }}
                  >
                    {support.notes}
                  </p>

                  {/* Spacer */}
                  <div style={{ gridRow: "4" }}></div>

                  {/* CTA Button - will align across all cards */}
                  <div style={{ gridRow: "5" }}>
                    <Link
                      to="/contact"
                      className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-base bg-white text-black hover:bg-violet-400 hover:text-white transition-all duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-violet-400"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Support note */}
          <div className="mt-20 p-8 border-l-4 border-violet-400 bg-gray-900/30">
            <p className="text-gray-300 text-base leading-relaxed">
              <strong className="text-white">Note:</strong> All support packages
              include hosting, SSL certificates, regular backups, and security
              updates. Custom support packages available on request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

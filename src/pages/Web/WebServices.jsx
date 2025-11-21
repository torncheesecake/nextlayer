import { Code, Database, MonitorCheck, TrendingUp } from "lucide-react";
import {
  useScrollAnimation,
  useScrollAnimationList,
} from "../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";

export default function ServicesOverview() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [setCardRef, visibleCards] = useScrollAnimationList(4, 0.2, 150);

  const services = [
    {
      icon: Code,
      title: "Bespoke Website Development",
      description:
        "Custom websites built from scratch - fast, secure, and tailored to your business needs. We create responsive, modern sites that grow with your business.",
      examples: "E-commerce platforms, corporate websites, web applications",
      link: "/contact",
    },
    {
      icon: MonitorCheck,
      title: "Performance & SEO Optimisation",
      description:
        "Blazing load times and SEO best practices to help your site rank and convert. We optimise Core Web Vitals, implement technical SEO, and ensure your site performs flawlessly.",
      examples:
        "Page speed optimisation, search engine ranking, mobile performance",
      link: "/contact",
    },
    {
      icon: TrendingUp,
      title: "Conversion-Focused Design",
      description:
        "UI/UX that turns visitors into customers, backed by data, not guesswork. We design clear user journeys, compelling CTAs, and interfaces that drive measurable results.",
      examples: "Landing pages, sales funnels, lead generation forms",
      link: "/contact",
    },
    {
      icon: Database,
      title: "Integrations & Automation",
      description:
        "Seamless integrations with your business tools, from CRMs to marketing platforms. Connect your website to the systems you already use and automate workflows.",
      examples: "CRM integration, payment gateways, email marketing, analytics",
      link: "/contact",
    },
  ];

  return (
    <section className="bg-black w-full py-40 md:py-56 transition-colors duration-300 relative overflow-hidden border-b border-gray-800 z-10">
      {/* Gradient glow accents - optimized with will-change */}
      <div
        className="absolute -top-40 -left-40 w-[900px] h-[900px] bg-violet-500/25 rounded-full blur-[250px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
      ></div>
      <div
        className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-bittersweet/25 rounded-full blur-[250px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
      ></div>

      {/* Schema.org markup for Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: {
                "@type": "Organization",
                name: "Next Layer Consulting",
              },
            },
          })),
        })}
      </script>

      <div className="mx-auto max-w-7xl px-8 md:px-16 relative z-10">
        {/* Editorial header */}
        <div ref={headerRef} className="mb-32">
          <div
            className={`flex items-center gap-8 mb-12 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div
              className={`h-0.5 bg-bittersweet transition-all duration-1000 delay-100 ${headerVisible ? "w-20" : "w-0"}`}
            ></div>
            <span
              aria-hidden="true"
              className="text-sm tracking-[0.5em] uppercase text-gray-300 font-bold"
              style={{ fontFamily: "monospace" }}
            >
              02 / What We Do
            </span>
          </div>
          <h2
            className={`text-white mb-16 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight max-w-4xl transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Websites that
            <br />
            <span className="text-violet-400 font-black italic">
              work wonders
            </span>
          </h2>
          <p
            className={`text-gray-200 text-xl md:text-2xl max-w-3xl leading-[1.65] font-normal transition-all duration-1000 delay-400 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            From bespoke builds to lightning-fast optimisations. Delivering
            results that matter to your business.
          </p>
        </div>

        {/* Clean grid - Swiss style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);

            return (
              <article
                key={index}
                ref={setCardRef(index)}
                className={`group border-t-2 border-bittersweet pt-10 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <div className="mb-8 relative">
                  <Icon
                    className="h-12 w-12 text-white transition-all duration-500 group-hover:text-violet-400 group-hover:scale-125 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-white mb-5 text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-lg md:text-xl leading-[1.65] mb-4">
                  {service.description}
                </p>
                <p className="text-violet-400 text-base leading-relaxed italic">
                  {service.examples}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

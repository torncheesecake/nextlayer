import { ArrowUpRight, ExternalLink } from "lucide-react";
import TiltCard from "../../components/TiltCard";
import {
  useScrollAnimation,
  useScrollAnimationList,
} from "../../hooks/useScrollAnimation";

export default function PortfolioShowcase() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [setProjectRef, visibleProjects] = useScrollAnimationList(3, 0.15, 200);

  const projects = [
    {
      name: "Next Layer Consulting",
      screenshot: "/dev/portfolio/next-layer.png",
      desc: "Modern consultancy website showcasing our expertise. Features interactive NetSuite cost calculator, optimised performance, and conversion-focused design. We practise what we preach.",
      url: "#portfolio",
      tags: ["React", "SEO", "Performance"],
      metrics: "100/100 Lighthouse score",
      imagePosition: "object-top",
    },
    {
      name: "ERP Experts",
      screenshot: "/dev/portfolio/erp-experts.png",
      desc: "Enterprise resource planning consultancy website with service showcases, team profiles, and client testimonials. Built with performance and conversion in mind.",
      url: "https://www.erp-experts.co.uk",
      tags: ["Consultancy", "B2B", "Responsive"],
      imagePosition: "object-top",
    },
    {
      name: "Blunsdon Blinds UK",
      screenshot: "/dev/portfolio/blunsdon-blinds.png",
      desc: "Lead-generating website with CMS, advanced product filters, and fully responsive layouts for a window furnishings retailer. Integrated with booking system.",
      url: "https://www.blunsdonblinds.co.uk",
      tags: ["E-commerce", "CMS", "Lead Gen"],
      metrics: "3x mobile conversion rate",
      imagePosition: "object-top",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-black w-full py-40 md:py-56 transition-colors duration-300 relative overflow-hidden border-b border-gray-800 z-10"
    >
      {/* Gradient glow accents - positioned to blend with services above */}
      <div
        className="absolute top-1/3 -right-40 w-[900px] h-[900px] bg-violet-500/20 rounded-full blur-[250px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
      ></div>
      <div
        className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-bittersweet/20 rounded-full blur-[250px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
      ></div>

      {/* Schema.org markup for CreativeWork */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: projects
            .filter((p) => p.url.startsWith("http"))
            .map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "CreativeWork",
                name: project.name,
                description: project.desc,
                url: project.url,
                creator: {
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
              03 / Our Work
            </span>
          </div>
          <h2
            className={`text-white mb-16 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight max-w-4xl transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Recent
            <br />
            <span className="text-violet-400 font-black italic">projects</span>
          </h2>
        </div>

        {/* Clean stacked layout */}
        <div className="space-y-32">
          {projects.map((proj, index) => {
            const isExternal = proj.url.startsWith("http");
            const Component = isExternal ? "a" : "div";
            const isVisible = visibleProjects.has(index);

            return (
              <Component
                key={proj.name}
                ref={setProjectRef(index)}
                {...(isExternal
                  ? {
                      href: proj.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className={`group block ${isExternal ? "cursor-pointer" : ""} focus:outline-2 focus:outline-offset-8 focus:outline-violet-400 rounded transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <article className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                  {/* Screenshot Side with browser mockup */}
                  <div
                    className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                  >
                    <div className="relative">
                      {/* Browser chrome mockup */}
                      <div className="relative bg-gray-900 border-2 border-gray-800 rounded-xl overflow-hidden transition-all duration-500 group-hover:border-violet-400 group-hover:shadow-2xl group-hover:shadow-violet-400/20">
                        {/* Browser header */}
                        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex-1 ml-4 bg-gray-900 rounded px-3 py-1 text-xs text-gray-400 truncate">
                            {proj.url.startsWith("http")
                              ? proj.url
                              : "nextlayerconsulting.com"}
                          </div>
                        </div>
                        {/* Screenshot */}
                        <div className="relative overflow-hidden bg-white h-[400px]">
                          <img
                            src={proj.screenshot}
                            alt={`${proj.name} - professional website design and development by Next Layer Consulting`}
                            className={`w-full h-full object-cover ${proj.imagePosition || "object-top"} transition-all duration-700 group-hover:scale-105`}
                            loading="lazy"
                            decoding="async"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-gray-300 border border-bittersweet/50 rounded-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-white mb-6 text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                      {proj.name}
                    </h3>

                    <p className="text-gray-200 text-lg md:text-xl leading-[1.65] mb-8">
                      {proj.desc}
                    </p>

                    {/* Metrics */}
                    {proj.metrics && (
                      <p className="text-violet-400 text-base font-semibold mb-8">
                        ✓ {proj.metrics}
                      </p>
                    )}

                    {/* CTA */}
                    {isExternal && (
                      <div className="inline-flex items-center gap-3 text-white font-bold text-base group-hover:gap-5 group-hover:text-violet-400 transition-all duration-300">
                        <span>View project</span>
                        <ArrowUpRight
                          className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                          aria-hidden="true"
                        />
                        <span className="sr-only">(opens in new window)</span>
                      </div>
                    )}
                  </div>
                </article>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}

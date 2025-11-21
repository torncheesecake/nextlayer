import { Search, Lightbulb, Palette, Code, Rocket } from "lucide-react";
import {
  useScrollAnimation,
  useScrollAnimationList,
} from "../../hooks/useScrollAnimation";

export default function WebProcess() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [setStepRef, visibleSteps] = useScrollAnimationList(5, 0.2, 100);

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, audience, and goals through detailed research and consultation.",
      icon: Search,
      duration: "1-2 weeks",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Mapping user journeys, defining content hierarchy, and creating a roadmap that aligns with your objectives.",
      icon: Lightbulb,
      duration: "1 week",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Crafting bespoke, conversion-focused designs that reflect your brand and engage your audience.",
      icon: Palette,
      duration: "2-3 weeks",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Building fast, secure, and scalable websites using modern technologies and best practises.",
      icon: Code,
      duration: "3-6 weeks",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "Rigorous testing, seamless deployment, and ongoing support to ensure your site performs flawlessly.",
      icon: Rocket,
      duration: "1 week",
    },
  ];

  return (
    <section className="bg-black w-full py-32 md:py-40 transition-colors duration-300 relative overflow-hidden border-b border-gray-800 z-10">
      {/* Gradient glow accents - more subtle */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-bittersweet/10 rounded-full blur-[200px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-violet-500/12 rounded-full blur-[200px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
      ></div>

      <div className="mx-auto max-w-6xl px-8 md:px-16 relative z-10">
        {/* Editorial header */}
        <div ref={headerRef} className="mb-24">
          <div
            className={`flex items-center gap-8 mb-8 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div
              className={`h-0.5 bg-gradient-to-r from-bittersweet to-violet-500 transition-all duration-1000 delay-100 relative ${headerVisible ? "w-20" : "w-0"}`}
            >
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-bittersweet animate-pulse"
                style={{ boxShadow: "0 0 10px rgba(232, 115, 78, 0.8)" }}
              ></div>
            </div>
            <span
              aria-hidden="true"
              className="text-sm tracking-[0.5em] uppercase text-gray-300 font-bold"
              style={{ fontFamily: "monospace" }}
            >
              04 / How We Work
            </span>
          </div>
          <h2
            className={`text-white mb-10 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight max-w-3xl transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            A proven
            <br />
            <span className="text-violet-400 font-black italic">process</span>
          </h2>
          <p
            className={`text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-normal transition-all duration-1000 delay-400 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            From discovery to launch, every step designed for success.
          </p>
        </div>

        {/* Process timeline - cleaner card-based design */}
        <div className="relative">
          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.has(index);
              const isLast = index === steps.length - 1;

              return (
                <article
                  key={index}
                  ref={setStepRef(index)}
                  className={`group relative bg-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 md:p-10 hover:border-violet-400/50 hover:bg-gray-900/40 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-bittersweet/0 group-hover:from-violet-500/5 group-hover:to-bittersweet/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>

                  <div className="relative grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                    {/* Icon and Number */}
                    <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-violet-400/20 rounded-full blur-xl group-hover:bg-violet-400/40 transition-all duration-500"></div>
                        <Icon
                          className="relative h-12 w-12 md:h-14 md:w-14 text-violet-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                      <span
                        className="text-violet-400/40 text-5xl md:text-6xl font-black leading-none group-hover:text-violet-400/60 transition-colors duration-500"
                        style={{ fontFamily: "monospace" }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                        <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight group-hover:text-violet-400 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <span className="inline-flex items-center gap-2 text-violet-400 text-sm font-semibold px-3 py-1 rounded-full border border-violet-400/30 bg-violet-400/5 whitespace-nowrap w-fit">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Process note - more elegant */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-violet-400/10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-violet-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Timelines are estimates and vary based on project scope and
              complexity. We'll provide a detailed timeline during discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

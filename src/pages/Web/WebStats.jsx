import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function WebStats() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    brands: 0,
  });
  const sectionRef = useRef(null);

  const stats = [
    { label: "Years Experience", value: 20, suffix: "+", key: "years" },
    { label: "Projects Delivered", value: 200, suffix: "+", key: "projects" },
    {
      label: "Global Brands",
      value: 40,
      suffix: "+",
      key: "brands",
    },
  ];

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Stats counter observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // If reduced motion, show final values immediately
          if (prefersReducedMotion) {
            setCounts({
              years: stats[0].value,
              projects: stats[1].value,
              brands: stats[2].value,
            });
            return;
          }

          // Animate counters
          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepDuration = duration / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
              years: Math.floor(stats[0].value * progress),
              projects: Math.floor(stats[1].value * progress),
              brands: Math.floor(stats[2].value * progress),
            });

            if (currentStep >= steps) {
              clearInterval(interval);
              setCounts({
                years: stats[0].value,
                projects: stats[1].value,
                brands: stats[2].value,
              });
            }
          }, stepDuration);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <section className="bg-black w-full py-40 md:py-56 transition-colors duration-300 relative overflow-hidden border-b border-gray-800 z-10">
      {/* Gradient glow accents - subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-violet-500/12 rounded-full blur-[300px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      ></div>

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
              05 / The Numbers
            </span>
          </div>
          <h2
            className={`text-white mb-16 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight max-w-4xl transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Proven
            <br />
            <span className="text-violet-400 font-black italic">results</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-24"
        >
          {stats.map((stat, index) => {
            const currentValue = counts[stat.key];

            return (
              <div
                key={index}
                className="group border-t-2 border-bittersweet pt-10"
              >
                {/* Visible counter */}
                <div
                  className="text-white text-7xl md:text-8xl font-black mb-6 transition-all duration-500 group-hover:text-violet-400"
                  aria-hidden="true"
                >
                  {currentValue}
                  {stat.suffix}
                </div>

                {/* Screen reader friendly version that announces final value */}
                <div className="sr-only" role="status" aria-live="polite">
                  {hasAnimated
                    ? `${stat.value}${stat.suffix} ${stat.label}`
                    : ""}
                </div>

                <div className="text-gray-200 text-xl md:text-2xl font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Context for stats */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-16">
            Built on decades of experience, hundreds of successful projects, and
            a commitment to client satisfaction that's second to none.
          </p>

          {/* Trusted by logos - Fancy version with animations */}
          <div className="pt-16 border-t border-gray-700 relative">
            {/* Gradient line accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>

            <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-12 font-bold flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gray-600"></span>
              Trusted by
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gray-600"></span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
              {/* Dyson */}
              <div className="group flex items-center justify-center h-16 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:via-transparent group-hover:to-bittersweet/5 transition-all duration-500"></div>
                <svg
                  className="h-8 fill-current text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                  viewBox="0 0 200 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="100"
                    y="35"
                    fontFamily="Arial, sans-serif"
                    fontSize="32"
                    fontWeight="bold"
                    fill="currentColor"
                    textAnchor="middle"
                  >
                    Dyson
                  </text>
                </svg>
              </div>

              {/* Volvo */}
              <div className="group flex items-center justify-center h-16 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:via-transparent group-hover:to-bittersweet/5 transition-all duration-500"></div>
                <svg
                  className="h-10 fill-current text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                  viewBox="0 0 200 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="100"
                    y="35"
                    fontFamily="Arial, sans-serif"
                    fontSize="32"
                    fontWeight="bold"
                    fill="currentColor"
                    textAnchor="middle"
                  >
                    VOLVO
                  </text>
                </svg>
              </div>

              {/* Intel */}
              <div className="group flex items-center justify-center h-16 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:via-transparent group-hover:to-bittersweet/5 transition-all duration-500"></div>
                <svg
                  className="h-8 fill-current text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                  viewBox="0 0 200 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="100"
                    y="35"
                    fontFamily="Arial, sans-serif"
                    fontSize="32"
                    fontWeight="bold"
                    fill="currentColor"
                    textAnchor="middle"
                  >
                    intel
                  </text>
                </svg>
              </div>

              {/* EasyJet */}
              <div className="group flex items-center justify-center h-16 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:via-transparent group-hover:to-bittersweet/5 transition-all duration-500"></div>
                <svg
                  className="h-8 fill-current text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                  viewBox="0 0 200 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="100"
                    y="35"
                    fontFamily="Arial, sans-serif"
                    fontSize="28"
                    fontWeight="bold"
                    fill="currentColor"
                    textAnchor="middle"
                  >
                    easyJet
                  </text>
                </svg>
              </div>

              {/* Heathrow */}
              <div className="group flex items-center justify-center h-16 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:via-transparent group-hover:to-bittersweet/5 transition-all duration-500"></div>
                <svg
                  className="h-8 fill-current text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                  viewBox="0 0 200 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="100"
                    y="35"
                    fontFamily="Arial, sans-serif"
                    fontSize="26"
                    fontWeight="600"
                    fill="currentColor"
                    textAnchor="middle"
                  >
                    Heathrow
                  </text>
                </svg>
              </div>

              {/* Premier Inn */}
              <div className="group flex items-center justify-center h-16 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:via-transparent group-hover:to-bittersweet/5 transition-all duration-500"></div>
                <svg
                  className="h-8 fill-current text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                  viewBox="0 0 200 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="100"
                    y="35"
                    fontFamily="Arial, sans-serif"
                    fontSize="24"
                    fontWeight="bold"
                    fill="currentColor"
                    textAnchor="middle"
                  >
                    Premier Inn
                  </text>
                </svg>
              </div>

              {/* Pets at Home */}
              <div className="group flex items-center justify-center h-16 relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:via-transparent group-hover:to-bittersweet/5 transition-all duration-500"></div>
                <svg
                  className="h-8 fill-current text-gray-400 group-hover:text-white transition-all duration-500 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                  viewBox="0 0 200 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="100"
                    y="35"
                    fontFamily="Arial, sans-serif"
                    fontSize="22"
                    fontWeight="600"
                    fill="currentColor"
                    textAnchor="middle"
                  >
                    Pets at Home
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

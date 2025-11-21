import { CheckCircle2, LifeBuoy, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const myths = [
  {
    myth: "You can patch anything with workarounds",
    reality:
      "A strong foundation is the only way to ensure data accuracy and system reliability.",
  },
  {
    myth: "More custom scripts solve every problem",
    reality:
      "Simplicity and standard NetSuite features reduce technical debt and make scale easier.",
  },
  {
    myth: "Painful month-end closes are just part of ERP",
    reality:
      "Streamlined core processes bring stress-free reporting and real productivity.",
  },
  {
    myth: "All NetSuite consultants approach problems the same way",
    reality:
      "Next Layer rebuilds based on how your business runs, making NetSuite fit you, not the other way around.",
  },
  {
    myth: "NetSuite is too complex to fix without starting over",
    reality:
      "A structured plan, clean migration, and targeted enablement gets you back on track, often faster than you think.",
  },
  {
    myth: "Bad data means you need a new system",
    reality:
      "You can cleanse, validate, and migrate data correctly without re-platforming, saving time and cost.",
  },
  {
    myth: "Once custom workflows are broken, the solution is more custom code",
    reality:
      "Best-practice design and configuration avoids endless scripting and returns reliability.",
  },
  {
    myth: "You can't rebuild NetSuite while running the business",
    reality:
      "Phased reimplementation minimises disruption, with parallel testing and gradual adoption to keep teams productive throughout.",
  },
];

export default function MythVsRealityGrid() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 },
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="bg-biscay dark:bg-techblack py-16 sm:py-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-bittersweet/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-biscay-light2/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto w-[90%] max-w-7xl px-6 relative z-10">
        <h2 className="text-seasalt dark:text-seasalt mb-8 text-center text-5xl font-bold">
          Myth vs Reality
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {myths.map((pair, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`bg-seasalt dark:bg-graphite flex h-full flex-col gap-6 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-700 ${
                visibleCards.includes(idx)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(idx % 2) * 150}ms` }}
            >
              <div className="flex items-start gap-3">
                <XCircle className="mt-1 h-7 w-7 shrink-0 text-bittersweet" />
                <div>
                  <div className="mb-1 text-lg font-bold text-techblack dark:text-red-400">
                    Myth
                  </div>
                  <p className="text-graphite dark:text-seasalt text-lg">
                    {pair.myth}
                  </p>
                </div>
              </div>
              <div className="border-graphite dark:border-silver/40 mt-2 flex items-start gap-3 border-t pt-5">
                <CheckCircle2 className="text-graphite dark:text-seasalt mt-1 h-7 w-7 shrink-0" />
                <div>
                  <div className="text-techblack dark:text-seasalt mb-1 text-lg font-bold">
                    Reality
                  </div>
                  <p className="text-techblack dark:text-seasalt text-lg">
                    {pair.reality}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Special OneSupport CTA Card */}
          <div className="bg-biscay-light2 dark:bg-black border-biscay-light1 mt-6 flex flex-col items-center justify-center rounded-2xl border-2 p-10 shadow-md md:col-span-2 hover:shadow-xl transition-all duration-500">
            <div className="mb-4 flex items-center gap-4">
              <LifeBuoy className="text-bittersweet dark:text-bittersweet-dark2 h-8 w-8" />
              <span className="text-seasalt text-xl font-bold md:text-2xl">
                Ongoing support, not just rescue
              </span>
            </div>
            <p className="text-seasalt mb-6 max-w-2xl text-center text-lg">
              Even after a successful rescue, your NetSuite system and team
              deserves ongoing care. Explore our OneSupport packages to keep
              things running smoothly, avoid future issues, and get fast,
              friendly expert help.
            </p>
            <Link
              to="/netsuite/support"
              className="bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 rounded-full px-8 py-3 text-lg font-semibold transition hover:scale-105"
            >
              Learn More: OneSupport
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

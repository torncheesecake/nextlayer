import { Lightbulb, Smile, Star, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Values() {
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

  const values = [
    {
      icon: Lightbulb,
      title: "Integrity",
      description:
        "Hundreds of NetSuite projects under our belt. If it can go wrong, chances are we've already solved it.",
      color: {
        border: "border-silver dark:border-graphite/50",
        accent: "bg-biscay dark:bg-seasalt",
        hoverBorder: "hover:border-bittersweet/40",
      },
    },
    {
      icon: Smile,
      title: "Excellence",
      description:
        "You'll always speak to someone who knows their stuff, no scripts, no runarounds, no long waits.",
      color: {
        border: "border-silver dark:border-graphite/50",
        accent: "bg-biscay dark:bg-seasalt",
        hoverBorder: "hover:border-bittersweet/40",
      },
    },
    {
      icon: Star,
      title: "Partnership",
      description:
        "We keep clients long-term because we never disappear or pass you around.",
      color: {
        border: "border-silver dark:border-graphite/50",
        accent: "bg-biscay dark:bg-seasalt",
        hoverBorder: "hover:border-bittersweet/40",
      },
    },
    {
      icon: TrendingUp,
      title: "Simple, Not Stressful",
      description:
        "Work should be enjoyable. We bring some humour and keep things simple.",
      color: {
        border: "border-silver dark:border-graphite/50",
        accent: "bg-biscay dark:bg-seasalt",
        hoverBorder: "hover:border-bittersweet/40",
      },
    },
  ];

  return (
    <section className="dark:bg-graphite bg-seasalt py-20 relative z-40 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto w-[90%] max-w-7xl px-6 relative z-10">
        <h2 className="dark:text-seasalt mb-4 text-center text-5xl font-bold text-techblack">
          What makes us any different?
        </h2>
        <p className="text-graphite dark:text-seasalt mb-16 text-center text-lg max-w-3xl mx-auto">
          Our values aren't just words on a page, they're the foundation of
          everything we do and how we work with you.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative transition-all duration-700 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div
                  className={`relative bg-seasalt/80 dark:bg-graphite/80 backdrop-blur-sm border ${value.color.border} ${value.color.hoverBorder} rounded-xl p-6 shadow-lg transition-all duration-500 group-hover:shadow-2xl h-full flex flex-col`}
                >
                  <span
                    className={`${value.color.accent} absolute top-0 left-0 h-full w-1 rounded-l-xl`}
                  />
                  <div className="mb-3 text-bittersweet dark:text-bittersweet-dark2">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-graphite dark:text-seasalt text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

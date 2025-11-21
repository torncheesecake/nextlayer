import { useEffect, useRef, useState } from "react";

export default function PainPoints() {
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

  const painPoints = [
    "Want to replace manual work with smart, connected systems and escape together?",
    "Lost orders, double shipments, or mystery numbers making your team chase shadows?",
    "Slow decisions because your systems do not speak to each other?",
    "Want to break free from legacy tech and actually move forward? You've found your answer.",
  ];

  const colorSchemes = [
    {
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
  ];

  return (
    <section className="bg-seasalt dark:bg-graphite py-24 transition-colors duration-300 z-40 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto w-[90%] max-w-7xl px-4 relative z-10">
        <h2 className="text-techblack dark:text-seasalt mb-8 text-center text-5xl font-bold">
          Do any of these sound familiar?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {painPoints.map((text, index) => (
            <PainPointCard
              key={index}
              index={index}
              isVisible={visibleCards.includes(index)}
              cardRef={(el) => (cardRefs.current[index] = el)}
              colorScheme={colorSchemes[index]}
            >
              {text}
            </PainPointCard>
          ))}
        </div>
        <div className="text-techblack dark:text-seasalt mx-auto mt-16 max-w-xl text-center text-lg font-normal">
          Everything we build is simple to use, secure by design, ready to
          scale.
        </div>
      </div>
    </section>
  );
}

function PainPointCard({ children, index, isVisible, cardRef, colorScheme }) {
  return (
    <div
      ref={cardRef}
      className={`group relative flex min-h-[140px] items-center justify-center rounded-xl md:rounded-2xl px-8 py-8 text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Card */}
      <div
        className={`absolute inset-0 dark:bg-techblack/80 bg-seasalt/80 backdrop-blur-sm border ${colorScheme.border} ${colorScheme.hoverBorder} rounded-xl md:rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl`}
      ></div>

      <span className="relative text-techblack dark:text-seasalt text-lg leading-relaxed font-normal md:text-xl">
        {children}
      </span>
    </div>
  );
}

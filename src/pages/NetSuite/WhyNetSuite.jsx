import { Database, Repeat, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function WhyNetSuite() {
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

  const features = [
    {
      icon: Database,
      title: "Unified Data, One Truth",
      description:
        "Say goodbye to disconnected silos. NetSuite combines your financials, sales, and inventory into a single source of truth - empowering smarter decisions.",
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      icon: Zap,
      title: "Automation That Works For You",
      description:
        "Automate your routine tasks, workflows, and approvals with NetSuite's flexible tools - freeing your team to focus on growth, not grunt work.",
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      icon: Repeat,
      title: "Scales As You Grow",
      description:
        "Whether you're entering new markets or expanding product lines, NetSuite's modular design means no painful upgrades or expensive migrations.",
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security",
      description:
        "With continuous updates and built-in compliance, your data stays protected and your systems stay up-to-date - without you lifting a finger.",
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
  ];

  return (
    <section className="dark:bg-techblack bg-seasalt py-28 transition-colors duration-300 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-20 w-[500px] h-[500px] bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto w-[90%] max-w-7xl px-6 text-center">
        <h2 className="text-techblack dark:text-seasalt mb-8 text-5xl leading-[1.08] font-semibold">
          Why NetSuite? The ERP Built To Fit Your Business
        </h2>
        <p className="text-graphite dark:text-seasalt mx-auto mb-16 max-w-5xl text-lg leading-relaxed">
          NetSuite isn't just another ERP - it's a cloud-native platform that
          unifies your finance, CRM, inventory, and operations on one adaptable
          system. Unlike Salesforce or Microsoft Dynamics 365, NetSuite was
          designed specifically to scale with fast-growing mid-market and
          enterprise businesses. No shoehorning your processes into rigid
          software - NetSuite flexes to fit the way you work.
        </p>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative flex flex-col items-center text-left md:text-center transition-all duration-700 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="mb-6 text-icon-brand-light transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-12 w-12" />
                </span>
                <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl leading-[1.1] font-bold">
                  {feature.title}
                </h3>
                <p className="text-graphite dark:text-seasalt mt-1 max-w-xs text-lg leading-[1.5]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

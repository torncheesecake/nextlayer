import { AlertTriangle, BarChart2, Layers, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function NetSuiteAdvantages() {
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
    {
      icon: AlertTriangle,
      description:
        "Overwhelmed by complicated interfaces or too many add-ons? NetSuite's intuitive design and tailored setup means your team actually uses the system - not avoids it.",
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      icon: Zap,
      description:
        "Automation should simplify, not complicate. We build workflows that actually save time - reducing manual tasks without creating bottlenecks.",
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      icon: Layers,
      description:
        "Struggling to grow because your software can't keep up? NetSuite is built for growth, and we make sure your implementation scales smoothly with your business.",
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      icon: BarChart2,
      title: "Lack Of Real-Time Insights",
      description:
        "Waiting on reports slows decision-making. NetSuite delivers real-time dashboards and reporting, so you're always ahead of the curve.",
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
  ];

  return (
    <section className="bg-seasalt dark:bg-graphite py-28 transition-colors duration-300 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-0 w-[500px] h-[500px] bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section using CSS Grid */}
      <div className="container relative z-10 mx-auto grid w-[90%] max-w-7xl grid-cols-1 items-center gap-16 px-6 xl:grid-cols-2">
        {/* Text Content */}
        <div className="text-graphite dark:text-seasalt">
          <h2 className="mb-8 text-5xl leading-[1.1] font-semibold">
            Frustrated With Your Current ERP?
          </h2>
          <p className="mb-6 max-w-lg text-lg leading-relaxed">
            Salesforce too focused on CRM? Microsoft Dynamics 365 too complex or
            costly? Other ERPs often force you to change how you work - wasting
            time, money, and patience.
          </p>
          <p className="mb-6 max-w-lg text-lg leading-relaxed">
            NetSuite with Next Layer flips the script. We tailor your system to
            your exact needs, eliminating pain points that slow you down and
            empowering your team to focus on growth.
          </p>
          <p className="max-w-lg text-lg leading-relaxed">
            From clunky workflows to disconnected data, we tackle your unique
            challenges - delivering an ERP that just works.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex h-full w-full items-center justify-center">
          <div className="group relative h-full w-full max-w-md overflow-hidden rounded-2xl shadow-lg lg:max-w-full hover:shadow-2xl transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
              alt="Business team collaborating with technology"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Points Section */}
      <div className="text-graphite dark:text-seasalt container relative z-10 mx-auto mt-20 grid w-[90%] max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative flex items-start gap-5 transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Icon className="h-10 w-10 shrink-0 text-icon-brand-light transition-transform duration-500 group-hover:scale-110" />
              <div>
                {point.title && (
                  <h3 className="mb-6 text-3xl font-bold">{point.title}</h3>
                )}
                <p className="max-w-md text-lg">{point.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

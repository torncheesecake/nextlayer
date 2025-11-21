import { ClipboardCheck, Headset, LifeBuoy, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function NetSuiteSupport() {
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

  const services = [
    {
      icon: ClipboardCheck,
      title: "Proactive Issue Resolution",
      description:
        "Continuous system monitoring, preventive maintenance, and compliance checks to keep your NetSuite environment running smoothly.",
    },
    {
      icon: LifeBuoy,
      title: "Dedicated Support & Troubleshooting",
      description:
        "Expert help available on demand for troubleshooting, upgrades, and user support, ensuring immediate assistance when you need it.",
    },
    {
      icon: Headset,
      title: "User Training & Empowerment",
      description:
        "Comprehensive training programs to empower your team with the knowledge and skills to maximise NetSuite's potential.",
    },
    {
      icon: Rocket,
      title: "Scalable Support Plans",
      description:
        "Flexible support plans that grow with your business needs, adapting continuously as your team and NetSuite usage expands.",
    },
  ];

  return (
    <section className="bg-surface-light dark:bg-surface-dark py-24 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-primary-light dark:text-primary-dark mb-8 text-center text-5xl font-bold">
          Comprehensive NetSuite Support
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`border-default-light bg-card-light dark:border-default-dark dark:bg-card-dark flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg dark:shadow-[0_2px_20px_0_rgba(0,0,0,0.22)] transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="text-icon-brand-light dark:text-icon-brand-dark mb-4 transition-transform duration-500 hover:scale-110">
                  <Icon className="h-10 w-10" />
                </span>
                <h3 className="text-primary-light dark:text-primary-dark mb-6 text-3xl font-bold">
                  {service.title}
                </h3>
                <p className="text-primary-light dark:text-primary-dark text-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

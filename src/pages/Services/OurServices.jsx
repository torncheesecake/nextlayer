import { Code2, LifeBuoy, Rocket, Workflow } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function OurServices() {
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
      icon: Rocket,
      title: "NetSuite Implementation",
      description:
        "Scope, configure, migrate, and test for a clean go-live, or rescue a project for a strategic reset.",
      items: [
        "SuiteSuccess-style plans",
        "Data migration, validation",
        "Change management",
        "Adoption",
      ],
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      icon: Workflow,
      title: "NetSuite Optimisation",
      description:
        "Make daily work faster and cleaner: tune roles, searches, and dashboards for your exact needs.",
      items: [
        "Workflow & SuiteFlow upgrades",
        "Dashboard and search tidy-ups",
        "Roles, permissions, audits",
      ],
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      icon: Code2,
      title: "Build",
      description:
        "SuiteScript and API connectors built for your unique process. Real custom, no compromise.",
      items: [
        "SuiteScript 2.1, RESTlets, SuiteTalk",
        "Dashboards, PDFs, forms",
        "Integrations and custom flows",
      ],
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      icon: LifeBuoy,
      title: "Support",
      description:
        "Ticketed help, upgrades, and one-to-one training, so your NetSuite stays smooth and up to date.",
      items: [
        "SLA targets and clear comms",
        "Upgrade readiness",
        "Team training",
      ],
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
  ];

  return (
    <section className="bg-seasalt dark:bg-graphite min-h-[80vh] py-20 relative z-40 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Intro */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-techblack dark:text-seasalt mb-8 text-5xl font-black tracking-tight">
            NetSuite Expertise Without The Headaches
          </h2>
          <p className="text-graphite dark:text-seasalt/90 mb-6 text-lg font-light md:text-xl">
            Implementation, automation, support, and custom builds. Outcomes:
            faster teams, cleaner data, and fewer manual steps, every day.
          </p>
          {/* Quick bullet highlights */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <span className="text-graphite dark:text-seasalt inline-flex items-center gap-2 font-medium">
              <Rocket className="h-5 w-5 text-icon-brand-light" /> Go-live
              rescue
            </span>
            <span className="text-graphite dark:text-seasalt inline-flex items-center gap-2 font-medium">
              <Workflow className="h-5 w-5 text-icon-brand-light" /> Full
              integration
            </span>
            <span className="text-graphite dark:text-seasalt inline-flex items-center gap-2 font-medium">
              <LifeBuoy className="h-5 w-5 text-icon-brand-light" /> Support
              that's there
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative flex flex-col items-start gap-4 rounded-xl p-8 transition-all duration-700 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div
                  className={`absolute inset-0 dark:bg-graphite/80 bg-seasalt/80 backdrop-blur-sm border ${service.border} ${service.hoverBorder} rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl`}
                ></div>

                <Icon className="relative mb-2 h-12 w-12 text-icon-brand-light transition-transform duration-500 group-hover:scale-110" />
                <h3 className="relative text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
                  {service.title}
                </h3>
                <p className="relative text-graphite dark:text-seasalt text-lg">
                  {service.description}
                </p>
                <ul className="relative text-graphite dark:text-seasalt mt-3 list-disc space-y-1 pl-2 text-base">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

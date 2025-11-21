import { Settings, Users, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Tailored() {
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
        { threshold: 0.2 },
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const services = [
    {
      title: "NetSuite Implementation",
      description:
        "We fit NetSuite to your business, with workshops, go-live, and support all built for you.",
      icon: Database,
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      title: "Automation & Dashboards",
      description:
        "Remove admin, get dashboards everyone trusts, and make decisions fast.",
      icon: Settings,
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
    {
      title: "Integration",
      description:
        "Connect ecommerce, finance, CRM and fulfilment - all your data in one place.",
      icon: Users,
      border: "border-silver dark:border-graphite/50",
      hoverBorder: "hover:border-bittersweet/40",
    },
  ];

  return (
    <section className="dark:bg-graphite bg-seasalt py-20 text-center transition-colors duration-300 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto w-[90%] max-w-7xl px-6">
        {/* Main Heading */}
        <h2 className="text-techblack dark:text-seasalt mb-8 text-center text-5xl font-bold">
          Services tailored for you
        </h2>

        {/* Subtitle */}
        <p className="text-graphite dark:text-seasalt mb-16 text-center text-lg max-w-2xl mx-auto">
          From implementation to ongoing support, we provide comprehensive
          NetSuite solutions designed to fit your business needs.
        </p>

        {/* Three Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative flex flex-col items-center transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div
                className={`bg-silver/50 dark:bg-techblack/50 backdrop-blur-sm border ${service.border} ${service.hoverBorder} mb-6 w-full aspect-4/3 rounded-2xl flex items-center justify-center overflow-hidden p-8 transition-all duration-500 group-hover:shadow-2xl`}
              >
                <service.icon
                  className={`w-24 h-24 text-bittersweet dark:text-bittersweet-dark2 transition-transform duration-700 ease-in-out ${
                    service.icon === Settings
                      ? "group-hover:rotate-180"
                      : service.icon === Database
                        ? "group-hover:scale-110 group-hover:-translate-y-2"
                        : "group-hover:scale-110"
                  }`}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-techblack dark:text-seasalt mb-4 text-2xl font-bold">
                {service.title}
              </h3>
              <p className="text-graphite dark:text-seasalt text-center text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mt-12">
          <Link
            to="/netsuite/support"
            className="bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition hover:scale-105"
          >
            Explore services
          </Link>
          <Link
            to="/contact"
            className="text-techblack dark:text-seasalt font-semibold hover:underline flex items-center gap-2 transition-all hover:gap-3"
          >
            Contact us
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

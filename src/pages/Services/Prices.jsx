import { Flame, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Prices() {
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

  const plans = [
    {
      name: "OneSupport 25",
      hours: "25 hours per month",
      price: "£4,250",
      subtitle: "For steady, essential support",
      features: [
        "25 hours monthly support",
        "Unused hours roll forward",
        "Senior consultant access",
        "Email & phone support",
      ],
    },
    {
      name: "OneSupport 50",
      hours: "50 hours per month",
      price: "£8,000",
      subtitle: "For expanding teams",
      popular: true,
      features: [
        "50 hours monthly support",
        "Unused hours roll forward",
        "Priority senior consultant",
        "Email, phone & video support",
        "Quarterly reviews",
      ],
    },
    {
      name: "OneSupport 80",
      hours: "80 hours per month",
      price: "£12,000",
      subtitle: "Best for rapid growth",
      features: [
        "80 hours monthly support",
        "Unused hours roll forward",
        "Dedicated senior consultant",
        "24/7 emergency support & monthly reviews",
      ],
    },
  ];

  return (
    <section
      className="bg-biscay dark:bg-techblack scroll-mt-20 py-32 relative overflow-hidden"
      id="pricing"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-bittersweet/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-biscay-light2/10 rounded-full blur-3xl"></div>
        {/* Large central circle like RouteHero - positioned higher to avoid boxes */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-biscay-light2/30 dark:bg-seasalt/5 rounded-full"></div>
      </div>

      <div className="mx-auto w-[90%] max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-seasalt dark:text-seasalt mb-8 text-center text-5xl font-bold">
            OneSupport 12 and 24 Month Contracts
          </h2>
          <p className="text-seasalt dark:text-seasalt mb-20 text-center text-lg">
            Our senior consultants have delivered hundreds of implementations
            and support projects. These are our rates, clear and transparent,
            exactly what it costs to put proven experience on your side. Unused
            hours roll forward each month within your contract period.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-20 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${plan.popular ? "md:scale-110 z-10" : "pt-6 md:scale-95"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              id={plan.name.toLowerCase().replace(/\s+/g, "-")}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${plan.popular ? "from-bittersweet/30 to-bittersweet-dark1/30" : "from-biscay/20 to-biscay-light2/20"} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10`}
              ></div>

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="bg-bittersweet dark:bg-bittersweet-dark2 inline-flex items-center gap-2 rounded-full px-6 py-2 font-bold text-seasalt shadow-lg">
                    <Flame className="h-5 w-5" /> Most Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative flex flex-col rounded-2xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 h-full ${
                  plan.popular
                    ? "bg-seasalt/95 dark:bg-graphite/95 backdrop-blur-sm border-4 border-bittersweet dark:border-bittersweet-dark2 pt-14 shadow-bittersweet/30 dark:shadow-bittersweet-dark2/30"
                    : "bg-seasalt/90 dark:bg-graphite/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50"
                }`}
              >
                <h3 className="text-graphite dark:text-seasalt mb-4 text-3xl font-bold">
                  {plan.name}
                </h3>

                <p className="text-graphite dark:text-seasalt mb-2 text-lg font-semibold">
                  {plan.hours}
                </p>

                <p className="text-graphite dark:text-seasalt mb-6 text-4xl font-extrabold">
                  {plan.price}
                  <span className="text-lg font-normal"> / month</span>
                </p>

                <span className="text-seasalt bg-biscay-light1 dark:bg-biscay-light2 dark:text-seasalt mx-auto rounded-full px-4 py-2 text-base mb-8">
                  {plan.subtitle}
                </span>

                {/* Features list */}
                <ul className="space-y-3 mb-6 mx-auto max-w-fit">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-bittersweet dark:text-bittersweet-dark2 mt-0.5 shrink-0" />
                      <span className="text-graphite dark:text-seasalt text-base text-left">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-biscay-light2/20 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-biscay-light1/30 dark:border-bittersweet/20">
          <p className="text-seasalt dark:text-seasalt text-lg font-semibold mb-2">
            💡 Smart Value
          </p>
          <p className="text-seasalt/90 dark:text-seasalt/90 text-lg">
            OneSupport 80 gives you more hours for your investment, making it
            your smartest choice for growing businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

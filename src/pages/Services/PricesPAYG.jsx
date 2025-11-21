import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PricesPAYG() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    "Pay only for hours used",
    "No ongoing commitment",
    "Senior consultant access",
    "Billed monthly, 14-day terms",
  ];

  return (
    <section className="bg-seasalt dark:bg-graphite scroll-mt-20 py-32 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-biscay/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-bittersweet/8 rounded-full blur-3xl"></div>
        {/* Large circle positioned behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-biscay-light2/15 dark:bg-seasalt/5 rounded-full"></div>
      </div>

      <div className="mx-auto w-[90%] max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-graphite dark:text-seasalt mb-8 text-center text-5xl font-bold">
            OneSupport Pay As You Go Option
          </h2>
          <p className="text-graphite dark:text-seasalt mb-20 text-center text-lg">
            Our senior consultants have delivered hundreds of successful
            NetSuite projects and ongoing support. If you're not ready for a
            OneSupport contract, our PAYG plan lets you pay only for the hours
            you use, with no ongoing commitment - billed monthly, payment due in
            14 days.
          </p>
        </div>

        <div className="flex justify-center mb-20">
          <div
            ref={cardRef}
            className={`group relative transition-all duration-700 max-w-md w-full ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-bittersweet/30 to-bittersweet-dark1/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

            {/* Card */}
            <div className="relative flex flex-col rounded-2xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 h-full bg-white dark:bg-techblack backdrop-blur-sm border-4 border-bittersweet dark:border-bittersweet-dark2">
              <h3 className="text-graphite dark:text-seasalt mb-4 text-3xl font-bold">
                OneSupport PAYG
              </h3>

              <p className="text-graphite dark:text-seasalt mb-6 text-4xl font-extrabold">
                £200
                <span className="text-lg font-normal"> / hour</span>
              </p>

              <span className="text-seasalt bg-biscay-light1 dark:bg-biscay-light2 dark:text-seasalt mx-auto rounded-full px-4 py-2 text-base mb-8">
                Best for ad hoc needs
              </span>

              {/* Features list */}
              <ul className="space-y-3 mb-6 mx-auto max-w-fit">
                {features.map((feature, i) => (
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
        </div>

        <div className="text-center bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-biscay/20 dark:border-bittersweet/20">
          <p className="text-graphite dark:text-seasalt text-lg font-semibold mb-2">
            💡 Flexible Support
          </p>
          <p className="text-graphite dark:text-seasalt text-lg">
            OneSupport PAYG gives you full access to our experienced NetSuite
            consultants, with simple hourly pricing and no commitment.
          </p>
        </div>
      </div>
    </section>
  );
}

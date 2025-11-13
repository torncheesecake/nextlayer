import PropTypes from "prop-types";
import { CircleUserRound, FileLock, LampDesk, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    icon: LampDesk,
    title: "Straight-talking",
    description:
      "We keep things straightforward. No sales waffle, just honest advice.",
    delay: "delay-150",
  },
  {
    icon: CircleUserRound,
    title: "Fit for Humans",
    description:
      "Your business isn't a one-size-fits-all, so your solutions shouldn't be either.",
    delay: "delay-300",
  },
  {
    icon: Target,
    title: "Own the Result",
    description:
      "From first chat to long-term partnership, you're always in the loop.",
    delay: "delay-[450ms]",
  },
  {
    icon: FileLock,
    title: "Security by Default",
    description: "Your business and your brand stay protected, always.",
    delay: "delay-[600ms]",
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the section is visible
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="dark:bg-techblack bg-biscay py-28 text-center transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Circle Background - positioned off left side */}
      <div className="absolute -left-64 sm:-left-1/4 top-1/2 z-0 -translate-y-1/2">
        <div className="bg-biscay-light2/20 dark:bg-seasalt/10 h-[1000px] w-[1000px] rounded-full"></div>
      </div>

      <div className="container relative z-10 mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-seasalt dark:text-seasalt mb-12 text-center text-5xl leading-[1.08] font-semibold">
          Why choose Next Layer?
        </h2>
        <div className="sm:gird-cols-2 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`transform transition-all duration-700 ease-out ${feature.delay} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                } flex flex-col items-center text-left md:text-center`}
              >
                <span className="text-bittersweet mb-6">
                  <Icon className="h-12 w-12" />
                </span>
                <h3 className="text-seasalt dark:text-seasalt mb-2 text-2xl leading-[1.1] font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-seasalt mt-1 max-w-xs text-lg leading-normal sm:text-center">
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

WhyUs.propTypes = {};

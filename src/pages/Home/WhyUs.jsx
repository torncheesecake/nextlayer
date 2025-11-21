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
      className="bg-gradient-to-r from-biscay-light2 via-biscay to-biscay dark:from-techblack dark:via-graphite dark:to-techblack py-20 text-center transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-biscay-light2/30 via-transparent to-transparent dark:from-seasalt/5 dark:via-transparent dark:to-transparent"></div>

      <div className="container relative z-10 mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-seasalt dark:text-seasalt mb-4 text-center text-5xl font-bold">
          Why choose Next Layer?
        </h2>
        <p className="text-seasalt/90 dark:text-seasalt/90 mb-16 text-center text-lg max-w-3xl mx-auto">
          We deliver NetSuite solutions that work for your business, not the
          other way around.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`transform transition-all duration-700 ease-out ${feature.delay} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                } flex flex-col items-center text-center`}
              >
                <div className="mb-6 p-4 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 shadow-lg">
                  <Icon className="h-10 w-10 text-seasalt dark:text-seasalt" />
                </div>
                <h3 className="text-seasalt dark:text-seasalt mb-4 text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-seasalt/90 dark:text-seasalt/90 text-lg leading-relaxed">
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

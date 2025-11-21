import { HeartPlus, Puzzle, Users, Workflow } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: 44,
      label: "Customers and counting",
    },
    {
      icon: Puzzle,
      value: 228,
      label: "Projects delivered",
    },
    {
      icon: Workflow,
      value: 577,
      label: "Custom solutions",
    },
    {
      icon: HeartPlus,
      value: 10000,
      suffix: "+",
      label: "Support tickets resolved",
    },
  ];

  return (
    <section className="bg-seasalt dark:bg-graphite py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-4 text-center text-5xl font-bold">
          Proven experience
        </h2>
        <p className="text-graphite dark:text-seasalt mb-4 text-center text-lg max-w-3xl mx-auto">
          Numbers that speak to our commitment and expertise in delivering
          NetSuite excellence.
        </p>
        <p className="text-graphite dark:text-seasalt/80 mb-16 text-center text-base max-w-2xl mx-auto">
          Trusted by manufacturing, distribution, retail, and professional
          services companies across the UK.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative bg-white dark:bg-techblack rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-bittersweet/10 dark:bg-bittersweet-dark2/20 group-hover:bg-bittersweet/20 dark:group-hover:bg-bittersweet-dark2/30 transition-colors">
                      <Icon className="h-10 w-10 text-bittersweet dark:text-bittersweet-dark2" />
                    </div>
                    <div className="text-techblack dark:text-seasalt font-sans text-5xl font-bold mb-3">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix || ""}
                      />
                    </div>
                    <h4 className="text-graphite dark:text-seasalt text-lg font-semibold">
                      {stat.label}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

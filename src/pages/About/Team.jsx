import Avatar from "boring-avatars";
import { useEffect, useRef, useState } from "react";

export default function Team() {
  const [isDark, setIsDark] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Check initial dark mode state
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

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

  const avatarColors = isDark
    ? ["#2C2C2C", "#E8734E", "#E8734E", "#E8734E"] // Dark mode: graphite background, bittersweet person
    : ["#FCFEFE", "#E8734E", "#E8734E", "#E8734E"]; // Light mode: seasalt background, bittersweet person

  const team = [
    {
      name: "Pete",
      role: "Founder",
      bio: "With over two decades of ERP and NetSuite experience, Pete founded Next Layer Consulting to provide businesses with expert guidance and support they truly deserve.",
      variant: "beam",
    },
    {
      name: "Ant",
      role: "NetSuite Consultant",
      bio: "Ant brings deep technical expertise and a passion for solving complex NetSuite challenges, helping clients optimise their systems for maximum efficiency.",
      variant: "beam",
    },
    {
      name: "James",
      role: "NetSuite Consultant",
      bio: "James specialises in NetSuite implementation and customisation, ensuring businesses get solutions tailored to their specific operational needs.",
      variant: "beam",
    },
  ];

  return (
    <section className="dark:bg-techblack bg-biscay py-32 relative z-40 overflow-hidden">
      {/* Background gradient orbs - using brand colors only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-bittersweet/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-biscay-light2/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto w-[90%] max-w-7xl px-6 relative z-10">
        <h2 className="dark:text-seasalt mb-8 text-center text-5xl font-bold text-seasalt">
          Meet the team
        </h2>
        <p className="text-seasalt/90 dark:text-seasalt/90 mb-16 text-center text-lg max-w-3xl mx-auto">
          Our experienced team is dedicated to helping you get the most out of
          NetSuite, with expertise spanning implementation, optimisation, and
          ongoing support.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Avatar with bittersweet border */}
              <div className="mb-6 rounded-full overflow-hidden border-4 border-bittersweet dark:border-bittersweet-dark2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <Avatar
                  size={192}
                  name={member.name}
                  variant={member.variant}
                  colors={avatarColors}
                />
              </div>

              <h3 className="text-seasalt dark:text-seasalt mb-2 text-2xl font-bold">
                {member.name}
              </h3>
              <p className="text-seasalt dark:text-seasalt mb-4 text-lg font-semibold">
                {member.role}
              </p>
              <p className="text-seasalt/90 dark:text-seasalt/90 text-lg">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

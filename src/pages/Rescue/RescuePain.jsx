import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    heading: "Start fresh, fix foundations",
    text: `A NetSuite re-implementation is a clean rebuild of a misconfigured account, aligning structures, data, and processes with how the business actually works today, not past assumptions. It is chosen when structural issues like flawed chart of accounts, broken workflows, and unstable integrations block accuracy and scale.`,
    imgSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Start fresh foundations",
  },
  {
    heading: "When patching is not enough",
    text: `Warning signs include unreliable reporting, heavy workarounds, slow month-end close, poor adoption, and technical debt from excessive customisations and scripts. If these persist, starting again with clear scope and best practices is faster and safer than endless tweaks.`,
    imgSrc:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Patching not enough",
  },
  {
    heading: "Diagnose, design, de-risk",
    text: `Begin with an audit of configuration, data, roles, integrations, and KPIs, then define a future-state design that uses standard NetSuite where possible. Prioritise correct financial structures, permissions, and a simplified integration pattern to ensure real-time, trusted data flow.`,
    imgSrc:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Diagnose and design",
  },
  {
    heading: "Build, migrate, prove, adopt",
    text: `Execute in phases: configuration, data cleansing and migration, end-to-end testing, training, and go-live with hypercare to protect operations. Focus on deduped, validated data, scenario testing, and role-based training to replace spreadsheets and restore confidence in reporting.`,
    imgSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Build and adopt",
  },
  {
    heading: "Timeline and planning",
    text: `Rescue timelines vary significantly based on the complexity of issues, data volume, and integration requirements. After our initial assessment, we'll provide a detailed project plan with realistic milestones and delivery dates tailored to your specific situation.`,
    imgSrc:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Timeline planning",
  },
  {
    heading: "Get your project back on track",
    text: `Every rescue is different - the investment depends on the scale of misconfiguration, data volume, integration complexity, and how far the original implementation progressed.`,
    link: {
      text: "Contact us for a free rescue assessment",
      url: "/contact",
    },
    imgSrc:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
    imgAlt: "Get back on track",
  },
];

export default function NetsuiteCheckerboard() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 },
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="bg-seasalt dark:bg-graphite py-12 relative z-40 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <section className="mx-auto w-[90%] max-w-7xl px-6 relative z-10">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`mb-16 flex flex-col items-center gap-8 md:flex-row transition-all duration-700 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } ${
              visibleSections.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${(index % 2) * 150}ms` }}
          >
            <div className="md:flex-1">
              <h3 className="text-techblack mb-6 text-3xl font-semibold">
                {section.heading}
              </h3>
              <p className="text-techblack text-lg">{section.text}</p>
              {section.link && (
                <p className="text-techblack text-lg mt-4">
                  <Link
                    to={section.link.url}
                    className="text-bittersweet dark:text-bittersweet-dark2 underline hover:no-underline font-medium"
                  >
                    {section.link.text}
                  </Link>{" "}
                  where we'll audit your current state, identify the core
                  issues, and provide a clear roadmap and timeline to get your
                  NetSuite working properly.
                </p>
              )}
            </div>
            <div className="w-full md:flex-1">
              <img
                src={section.imgSrc}
                alt={section.imgAlt}
                className="h-auto w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

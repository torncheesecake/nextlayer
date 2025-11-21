"use client";
import { useEffect, useRef, useState } from "react";
import { Shield, Lock, Award, ChevronDown, ChevronUp } from "lucide-react";

export default function ConsultantCredentials() {
  const [expanded, setExpanded] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const certifications = [
    {
      icon: Shield,
      title: "NCSC CHECK Accredited",
      badge: "Government Approved",
      why: "Required for government and Critical National Infrastructure systems",
      detail:
        "All our consultants are CHECK accredited by the National Cyber Security Centre (NCSC), signifying their adherence to the highest standards for government and Critical National Infrastructure (CNI) systems. This accreditation demonstrates proven competency in penetration testing methodologies and ethical security practices.",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10",
    },
    {
      icon: Lock,
      title: "NPPV Level 3 Security Clearance",
      badge: "Top Secret Access",
      why: "Handle UK Secret and occasionally Top Secret materials",
      detail:
        "Every consultant holds NPPV Level 3 (Non-Police Personnel Vetting Level 3) and security clearance, providing an unparalleled level of trust and enabling us to handle highly sensitive information and environments with the utmost discretion and integrity, including access to UK Secret and occasional Top Secret materials.",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/10",
    },
    {
      icon: Award,
      title: "Ethical Standards & ISO 27001",
      badge: "Certified Process",
      why: "Unwavering commitment to responsible security testing",
      detail:
        "We are unwavering in our commitment to ethical penetration testing standards, strictly operating within agreed-upon scopes, ensuring data confidentiality, and always obtaining explicit authorisation. Our processes follow ISO 27001 information security management standards, guaranteeing responsible and professional engagement that prioritises your security and trust above all else.",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10",
    },
  ];

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

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-techblack via-graphite to-techblack py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-bittersweet/10 border border-bittersweet/20 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-bittersweet" />
            <span className="text-bittersweet text-sm font-semibold">
              Trusted by Government & Enterprise
            </span>
          </div>

          <h2 className="text-seasalt mb-4 text-5xl lg:text-6xl font-bold tracking-tight">
            Elite Security Credentials
          </h2>
          <p className="text-seasalt/70 text-lg lg:text-xl max-w-3xl mx-auto">
            Our consultants meet the highest standards for security testing,
            with government-level clearances and accreditations
          </p>
        </div>

        {/* Credentials Cards */}
        <div className="space-y-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const isExpanded = expanded === index;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative">
                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                  ></div>

                  <div className="relative bg-gradient-to-br from-graphite/80 to-techblack/80 backdrop-blur-sm border border-seasalt/10 hover:border-seasalt/20 rounded-2xl transition-all duration-300">
                    {/* Header - Clickable */}
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-bittersweet focus:ring-offset-2 focus:ring-offset-techblack rounded-2xl"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div
                          className={`shrink-0 ${cert.bgGlow} p-4 rounded-xl`}
                        >
                          <Icon className="h-10 w-10 text-seasalt" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-seasalt text-2xl lg:text-3xl font-bold">
                              {cert.title}
                            </h3>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${cert.color} text-white`}
                            >
                              {cert.badge}
                            </span>
                          </div>

                          <p className="text-seasalt/80 text-base lg:text-lg mb-3">
                            {cert.why}
                          </p>

                          {/* Expand indicator */}
                          <div className="flex items-center gap-2 text-seasalt/60 text-sm">
                            <span>
                              {isExpanded ? "Show less" : "Learn more"}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Expandable Detail */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-8 pb-8 pt-4 border-t border-seasalt/10">
                        <p className="text-seasalt/90 text-base lg:text-lg leading-relaxed">
                          {cert.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-seasalt/70 text-lg mb-6">
            Ready to work with government-accredited security professionals?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-bittersweet hover:bg-bittersweet-dark1 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-bittersweet/20"
          >
            Start Your Security Assessment
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

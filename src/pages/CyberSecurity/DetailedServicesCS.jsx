"use client";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CloudCog,
  GlobeLock,
  Laptop2,
  ServerCog,
  Smartphone,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ServicesOverviewSection({
  heading = "Security testing for web, cloud, and apps",
  services: servicesProp,
  isLoading = false,
  error = null,
}) {
  const services = servicesProp ?? getDefaultServices();
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
        { threshold: 0.1 },
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  if (isLoading) {
    return (
      <section className="bg-techblack text-seasalt px-6 py-16">
        <div
          className="mx-auto w-[90%] max-w-7xl animate-pulse space-y-8"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="bg-seasalt/15 h-12 w-2/3 mx-auto rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-seasalt/15 h-96 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-techblack text-seasalt px-6 py-16">
        <div className="mx-auto w-[90%] max-w-7xl text-center">
          <h2 className="mb-8 text-5xl font-bold">Unable to load services</h2>
          <p className="text-seasalt/80 mb-8 text-lg">
            There was a problem loading this section, please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-bittersweet hover:bg-bittersweet/90 text-white rounded-lg px-6 py-3 font-semibold transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-graphite via-techblack to-graphite text-seasalt px-6 py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-seasalt to-seasalt/70 bg-clip-text text-transparent">
            {heading}
          </h2>
          <p className="text-seasalt/70 text-lg lg:text-xl max-w-3xl mx-auto">
            Comprehensive penetration testing services tailored to your
            infrastructure, applications, and cloud environments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`transition-all duration-1000 ${
                visibleCards.includes(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ServiceCard {...svc} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, summary, benefits, highlights, index }) {
  const [open, setOpen] = useState(false);
  const IconEl = icon;

  // Color schemes for each card
  const colorSchemes = [
    {
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/20",
      iconBg: "bg-blue-500/10",
      hoverBorder: "hover:border-blue-500/40",
    },
    {
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/20",
      iconBg: "bg-purple-500/10",
      hoverBorder: "hover:border-purple-500/40",
    },
    {
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/20",
      iconBg: "bg-green-500/10",
      hoverBorder: "hover:border-green-500/40",
    },
    {
      gradient: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/20",
      iconBg: "bg-orange-500/10",
      hoverBorder: "hover:border-orange-500/40",
    },
    {
      gradient: "from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-500/20",
      iconBg: "bg-yellow-500/10",
      hoverBorder: "hover:border-yellow-500/40",
    },
  ];

  const scheme = colorSchemes[index % colorSchemes.length];

  return (
    <article
      className={`group relative bg-gradient-to-br from-graphite/80 to-techblack/80 backdrop-blur-sm border ${scheme.border} ${scheme.hoverBorder} rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full`}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${scheme.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10`}
      ></div>

      {/* Icon Header */}
      <div className="mb-6 flex justify-center">
        <div
          className={`${scheme.iconBg} backdrop-blur-sm rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <IconEl className="h-12 w-12 text-seasalt" />
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-4 text-center text-2xl lg:text-3xl font-bold leading-tight text-seasalt">
        {title}
      </h3>

      {/* Summary */}
      <p className="text-seasalt/80 mb-6 text-center leading-relaxed">
        {summary}
      </p>

      {/* Benefits List */}
      {benefits && (
        <ul className="mb-6 space-y-3 flex-grow">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-seasalt/90">
              <CheckCircle2
                className="text-bittersweet h-5 w-5 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-base leading-snug">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Expandable Section */}
      {Array.isArray(highlights) && highlights.length > 0 && (
        <div className="mt-auto pt-6 border-t border-seasalt/10">
          <button
            aria-expanded={open}
            aria-controls={`highlights-${title.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-seasalt hover:bg-seasalt/5 transition-colors focus:outline-none focus:ring-2 focus:ring-bittersweet focus:ring-offset-2 focus:ring-offset-graphite"
          >
            <span>Key areas covered</span>
            {open ? (
              <ChevronUp className="h-5 w-5 transition-transform duration-300" />
            ) : (
              <ChevronDown className="h-5 w-5 transition-transform duration-300" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
          >
            <ul
              id={`highlights-${title.replace(/\s+/g, "-").toLowerCase()}`}
              className="space-y-2 pl-8 text-base text-seasalt/75"
            >
              {highlights.map((h, i) => (
                <li key={i} className="list-disc leading-relaxed">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

function getDefaultServices() {
  return [
    {
      icon: ServerCog,
      title: "Internal and External Infrastructure Penetration Testing",
      summary:
        "Your network is the backbone of your operations. Our infrastructure penetration testing services delve deep into both your internal and external networks, simulating sophisticated attacks to uncover weaknesses.",
      benefits: [
        "Proactive Threat Mitigation",
        "Compliance Adherence (GDPR, ISO 27001)",
        "Business Continuity Protection",
        "Reputation Protection",
        "Optimised Security Spend",
      ],
      highlights: [
        "Perimeter defense assessment",
        "Internal segmentation testing",
        "Server configuration review",
        "Network device security",
        "Insider risk evaluation",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Application (iOS and Android) Penetration Testing",
      summary:
        "In today's mobile-first world, your applications are often a direct gateway to your users and their data. We rigorously examine your apps for security flaws, insecure data storage, and API vulnerabilities.",
      benefits: [
        "User Trust and Data Protection",
        "OWASP MASVS Standards Compliance",
        "Prevention of Data Leakage",
        "Enhanced App Reputation",
        "Secure API Integration",
      ],
      highlights: [
        "Insecure data storage testing",
        "Authentication mechanism review",
        "API security assessment",
        "Code obfuscation analysis",
        "Platform-specific vulnerabilities",
      ],
    },
    {
      icon: GlobeLock,
      title: "Web Applications and APIs Penetration Testing",
      summary:
        "Your web applications and APIs are frequently exposed to the internet, making them prime targets for cyberattacks. We employ manual techniques to identify logic flaws, injection vulnerabilities, and broken authentication.",
      benefits: [
        "Robust Data Protection",
        "Prevent Financial Loss",
        "Maintain Brand Credibility",
        "OWASP Top 10 Compliance",
        "Secure Integration",
      ],
      highlights: [
        "SQL injection testing",
        "Cross-site scripting (XSS)",
        "Authentication bypass",
        "Business logic flaws",
        "API security review",
      ],
    },
    {
      icon: Laptop2,
      title: "Desktop Applications Penetration Testing",
      summary:
        "Desktop applications can harbour significant vulnerabilities that provide a foothold for attackers. We thoroughly assess the security of your standalone or client-server applications.",
      benefits: [
        "Internal Security Fortification",
        "Protection of Sensitive Data",
        "Compliance for Internal Systems",
        "Reduce Attack Surface",
        "Enhanced Software Integrity",
      ],
      highlights: [
        "Local data storage security",
        "Privilege escalation testing",
        "Insecure communications review",
        "Third-party library vulnerabilities",
        "Binary analysis",
      ],
    },
    {
      icon: CloudCog,
      title: "Azure/AWS Cloud Security Reviews",
      summary:
        "Migrating to or operating in the cloud introduces unique security challenges. Our expert cloud security reviews provide a deep dive into your cloud configurations, identifying misconfigurations and non-compliance.",
      benefits: [
        "Proactive Risk Identification",
        "Optimized Cloud Security Posture",
        "Compliance and Governance",
        "Cost Efficiency",
        "Enhanced Visibility and Control",
        "Reduced Attack Surface",
      ],
      highlights: [
        "IAM policy review",
        "Network security assessment",
        "Storage bucket configuration",
        "Logging and monitoring review",
        "Infrastructure as Code (IaC) analysis",
        "Shared responsibility model clarity",
      ],
    },
  ];
}

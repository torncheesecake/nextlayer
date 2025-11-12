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
import { useState } from "react";

export default function ServicesOverviewSection({
  heading = "Security testing for web, cloud, and apps",
  services: servicesProp,
  isLoading = false,
  error = null,
}) {
  const services = servicesProp ?? getDefaultServices();

  if (isLoading) {
    return (
      <section className="bg-techblack text-seasalt px-6 py-16">
        <div
          className="mx-auto max-w-7xl animate-pulse space-y-8"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="bg-seasalt/15 h-12 w-2/3 mx-auto rounded-lg" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
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
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Unable to load services</h2>
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
    <section className="bg-techblack text-seasalt px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 text-center text-4xl md:text-5xl font-extrabold tracking-tight">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((svc, i) => (
            <ServiceCard key={i} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, summary, benefits, highlights }) {
  const [open, setOpen] = useState(false);
  const IconEl = icon;

  return (
    <article className="bg-graphite border border-seasalt/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col min-h-[500px]">
      {/* Icon Header */}
      <div className="mb-6 flex justify-center">
        <div className="bg-seasalt/10 text-seasalt rounded-2xl p-4 backdrop-blur-sm">
          {IconEl}
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-4 text-center text-2xl font-bold leading-tight">
        {title}
      </h3>

      {/* Summary */}
      <p className="text-seasalt/80 mb-6 text-center leading-relaxed">
        {summary}
      </p>

      {/* Benefits List */}
      {benefits && (
        <ul className="mb-8 space-y-3 flex-grow">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-seasalt/90">
              <CheckCircle2
                className="text-bittersweet h-5 w-5 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-sm leading-snug">{b}</span>
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
            className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-seasalt/90 hover:bg-seasalt/5 transition-colors focus:outline-none focus:ring-2 focus:ring-bittersweet focus:ring-offset-2 focus:ring-offset-graphite"
          >
            <span>Key areas covered</span>
            {open ? (
              <ChevronUp className="h-5 w-5 transition-transform" />
            ) : (
              <ChevronDown className="h-5 w-5 transition-transform" />
            )}
          </button>

          {open && (
            <ul
              id={`highlights-${title.replace(/\s+/g, "-").toLowerCase()}`}
              className="mt-4 space-y-2 pl-8 text-sm text-seasalt/75"
            >
              {highlights.map((h, i) => (
                <li key={i} className="list-disc leading-relaxed">
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}

function getDefaultServices() {
  return [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Application Testing",
      summary:
        "Protect your iOS and Android apps with thorough security testing. We check for insecure data storage, API vulnerabilities, and authentication issues.",
      benefits: [
        "Build user trust and protect data",
        "Comply with mobile security standards",
        "Prevent data leaks and breaches",
        "Protect your app's reputation",
        "Ensure secure backend API connections",
      ],
      highlights: [
        "Insecure data storage",
        "API vulnerabilities",
        "Authentication issues",
        "Platform-specific risks",
      ],
    },
    {
      icon: <GlobeLock className="h-8 w-8" />,
      title: "Web Apps & APIs",
      summary:
        "Web applications and APIs face constant cyber threats. We perform detailed manual testing beyond automated scans to find logic flaws and vulnerabilities.",
      benefits: [
        "Protect sensitive customer and business data",
        "Prevent fraud and financial losses",
        "Maintain trust and brand reputation",
        "Comply with OWASP Top 10 standards",
        "Secure API data exchanges",
      ],
      highlights: [
        "Logic flaws and business logic vulnerabilities",
        "SQL injection and XSS attacks",
        "Broken authentication and session management",
        "API security and rate limiting",
      ],
    },
    {
      icon: <Laptop2 className="h-8 w-8" />,
      title: "Desktop Application",
      summary:
        "Desktop applications often contain hidden security risks. We examine your software for local data security, privilege escalations, and vulnerabilities.",
      benefits: [
        "Strengthen internal security",
        "Protect sensitive locally stored data",
        "Meet security policies and regulations",
        "Reduce attack surface area",
        "Improve software reliability",
      ],
      highlights: [
        "Local data storage security",
        "Privilege escalation vulnerabilities",
        "Insecure communications protocols",
        "Third-party library vulnerabilities",
      ],
    },
    {
      icon: <CloudCog className="h-8 w-8" />,
      title: "Cloud Security Review",
      summary:
        "Cloud environments bring unique security challenges. We review your Azure or AWS setup thoroughly, checking IAM roles, network controls, and compliance.",
      benefits: [
        "Identify cloud misconfigurations",
        "Follow AWS/Azure best practices",
        "Meet compliance standards (GDPR, ISO 27001)",
        "Optimize security and reduce costs",
        "Gain clear visibility of cloud security",
      ],
      highlights: [
        "IAM roles and permission boundaries",
        "Network security groups and firewall rules",
        "Storage access controls and encryption",
        "Logging, monitoring, and incident response",
      ],
    },
    {
      icon: <ServerCog className="h-8 w-8" />,
      title: "Infrastructure Testing",
      summary:
        "Your network is the backbone of your business. We simulate attacks on your external perimeter and internal segments to find weaknesses.",
      benefits: [
        "Detect threats before they cause harm",
        "Ensure compliance with GDPR and ISO",
        "Focus security efforts on critical issues",
        "Protect network boundaries and devices",
      ],
      highlights: [
        "External perimeter penetration testing",
        "Internal network segmentation review",
        "Server configuration audits",
        "Device security and patch management",
      ],
    },
  ];
}

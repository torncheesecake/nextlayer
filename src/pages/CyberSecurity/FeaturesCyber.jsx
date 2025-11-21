"use client";
import { useEffect, useRef, useState } from "react";
import { Search, Bug, FileText, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 },
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const steps = [
    {
      icon: Search,
      title: "Scope",
      description:
        "15-minute discovery call to understand your infrastructure and compliance needs",
      proof: "Tailored test plan delivered",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10",
    },
    {
      icon: Bug,
      title: "Test",
      description:
        "Real-world attack simulation using manual techniques and industry tools",
      proof: "CVEs mapped, OWASP Top 10 covered",
      color: "from-red-500 to-orange-500",
      bgGlow: "bg-red-500/10",
    },
    {
      icon: FileText,
      title: "Report",
      description:
        "Clear findings with risk ratings, compliance mapping, and step-by-step fixes",
      proof: "Prioritised risk list with CVSS scores",
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/10",
    },
    {
      icon: CheckCircle2,
      title: "Remediate & Verify",
      description: "Free re-testing to confirm critical issues are resolved",
      proof: "Verified closure report",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-techblack via-graphite to-techblack px-6 py-24 relative overflow-hidden"
      id="how-it-works"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-seasalt mb-4 text-5xl lg:text-6xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="text-seasalt/70 text-lg lg:text-xl max-w-2xl mx-auto">
            Our proven four-step process ensures comprehensive security
            assessment and verification
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-seasalt/20 to-transparent -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              const isVisible = visibleSteps.includes(index);

              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="relative"
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 transition-all duration-1000 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-12"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="relative group">
                        {/* Card glow effect */}
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                        ></div>

                        <div className="relative bg-gradient-to-br from-graphite to-techblack border border-seasalt/10 rounded-2xl p-8 hover:border-seasalt/20 transition-all duration-300">
                          {/* Step Number Badge */}
                          <div className="absolute -top-4 -left-4 bg-gradient-to-br from-bittersweet to-bittersweet-dark2 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                            {index + 1}
                          </div>

                          {/* Title */}
                          <h3 className="text-seasalt mb-3 text-3xl font-bold tracking-tight">
                            {step.title}
                          </h3>

                          {/* Description */}
                          <p className="text-seasalt/80 mb-6 text-lg leading-relaxed">
                            {step.description}
                          </p>

                          {/* Proof Badge */}
                          <div className="inline-flex items-center gap-2 bg-techblack border border-seasalt/20 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-seasalt text-sm font-medium">
                              {step.proof}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Icon Circle - desktop only */}
                    <div className="hidden lg:block shrink-0">
                      <div
                        className={`relative w-20 h-20 transition-all duration-1000 ${
                          isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-50"
                        }`}
                        style={{ transitionDelay: `${index * 150 + 200}ms` }}
                      >
                        {/* Pulsing ring */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full animate-ping opacity-20`}
                        ></div>

                        {/* Icon container */}
                        <div
                          className={`relative bg-gradient-to-br ${step.color} rounded-full w-full h-full flex items-center justify-center shadow-xl`}
                        >
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block flex-1"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

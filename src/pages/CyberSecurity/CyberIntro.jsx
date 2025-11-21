"use client";
import { useEffect, useState } from "react";
import { Shield, Lock, Eye } from "lucide-react";

export default function CyberIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const fullCommand =
    "$ nlc-security --scan comprehensive --target your-business";

  useEffect(() => {
    setIsVisible(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setTerminalText(fullCommand.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-techblack relative overflow-hidden py-32 px-6">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-bittersweet/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-biscay/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left Column - Content */}
          <div
            className={`flex-1 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-bittersweet/10 border border-bittersweet/20 rounded-full px-4 py-2 mb-6">
              <span className="text-bittersweet text-sm font-semibold">
                NCSC CHECK Accredited
              </span>
            </div>

            {/* Headline with gradient */}
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-seasalt via-seasalt to-seasalt/70 bg-clip-text text-transparent">
                Proactive security{" "}
              </span>
              <br />
              <span className="bg-gradient-to-r from-bittersweet via-bittersweet-dark2 to-bittersweet bg-clip-text text-transparent">
                that protects what matters
              </span>
            </h1>

            {/* Description */}
            <p className="text-seasalt/80 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
              Empowering your business with proactive cybersecurity. We provide
              rigorous, real-world penetration testing to identify and remediate
              vulnerabilities before malicious actors can exploit them.
            </p>

            {/* Key Points with animated icons */}
            <div className="space-y-4 mb-10">
              {[
                {
                  icon: Shield,
                  text: "Comprehensive assessments for critical assets",
                  delay: "100ms",
                },
                {
                  icon: Lock,
                  text: "CHECK-accredited consultants with NPPV Level 3",
                  delay: "200ms",
                },
                {
                  icon: Eye,
                  text: "Real-world attack simulation and verification",
                  delay: "300ms",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: item.delay }}
                >
                  <div className="bg-bittersweet/10 p-2 rounded-lg">
                    <item.icon className="h-5 w-5 text-bittersweet" />
                  </div>
                  <span className="text-seasalt text-lg">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group bg-bittersweet hover:bg-bittersweet-dark1 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-bittersweet/20 inline-flex items-center justify-center gap-2"
              >
                Start Your Security Review
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              <a
                href="#pricing"
                className="bg-transparent border-2 border-seasalt/20 hover:border-bittersweet text-seasalt px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-bittersweet/5 inline-flex items-center justify-center"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Right Column - Terminal Card */}
          <div
            className={`flex-1 w-full transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-bittersweet/20 via-biscay/20 to-bittersweet/20 rounded-2xl blur-xl"></div>

              {/* Terminal Card */}
              <div className="relative bg-gradient-to-br from-graphite via-techblack to-graphite border border-seasalt/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-graphite/50 backdrop-blur-sm border-b border-seasalt/10 px-6 py-4 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-seasalt/60 text-sm ml-4 font-mono">
                    security-assessment.sh
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-8">
                  {/* Command line with typing animation */}
                  <div className="font-mono text-seasalt mb-6 text-base lg:text-lg">
                    <span className="text-bittersweet">root@nextlayer</span>
                    <span className="text-seasalt/60">:</span>
                    <span className="text-biscay">~</span>
                    <span className="text-seasalt/60">$ </span>
                    <span className="text-seasalt">{terminalText}</span>
                    <span className="animate-pulse">|</span>
                  </div>

                  {/* Assessment Coverage */}
                  <div className="space-y-3 mb-6">
                    {[
                      "Infrastructure, internal and external testing",
                      "Web apps, APIs, and mobile platforms",
                      "Azure and AWS cloud security reviews",
                      "Compliance-focused reporting (GDPR, ISO 27001)",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 text-seasalt/90 transition-all duration-500 delay-${(idx + 1) * 100}`}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? "translateY(0)"
                            : "translateY(10px)",
                          transitionDelay: `${800 + idx * 100}ms`,
                        }}
                      >
                        <span className="text-green-400 font-mono text-sm mt-1">
                          ✓
                        </span>
                        <span className="text-base">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Output Box */}
                  <div className="bg-techblack/80 border border-seasalt/20 rounded-lg p-5">
                    <div className="text-seasalt/50 font-mono text-xs mb-3 uppercase tracking-wider">
                      Assessment Output
                    </div>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-seasalt/90">
                          Critical vulnerabilities identified
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-seasalt/90">
                          Clear remediation steps provided
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-seasalt/90">
                          Follow-up verification scheduled
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-400">→</span>
                        <span className="text-seasalt/70">
                          Compliance documentation ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

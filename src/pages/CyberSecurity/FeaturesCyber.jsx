"use client";
import { useState } from "react";
export default function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState(null);
  const steps = [
    {
      title: "Scope",
      description:
        "15-minute discovery call to understand your infrastructure and compliance needs",
      proof: "Tailored test plan delivered",
    },
    {
      title: "Test",
      description:
        "Real-world attack simulation using manual techniques and industry tools",
      proof: "CVEs mapped, OWASP Top 10 covered",
    },
    {
      title: "Report",
      description:
        "Clear findings with risk ratings, compliance mapping, and step-by-step fixes",
      proof: "Prioritised risk list with CVSS scores",
    },
    {
      title: "Remediate & Verify",
      description: "Free re-testing to confirm critical issues are resolved",
      proof: "Verified closure report",
    },
  ];
  return (
    <section className="bg-graphite px-6 py-20" id="how-it-works">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-seasalt mb-8 text-center text-5xl font-bold tracking-tight">
          How It Works
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="bg-seasalt/30 absolute top-0 bottom-0 left-6 hidden w-0.5 md:block"></div>
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Step number badge */}
                <div className="bg-seasalt text-techblack z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-black shadow">
                  {index + 1}
                </div>
                {/* Content card */}
                <div className="bg-graphite /80 flex-1 rounded-xl p-7">
                  <h3 className="text-seasalt mb-6 text-3xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-seasalt/80 mb-4 text-lg">
                    {step.description}
                  </p>
                  {/* Proof badge */}
                  <div className="border-default-dark bg-techblack text-seasalt inline-flex items-center gap-2 rounded-full border px-5 py-2 text-base font-medium">
                    <span className="bg-seasalt/90 inline-flex h-5 w-5 items-center justify-center rounded-full">
                      <svg
                        width={16}
                        height={16}
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-techblack"
                      >
                        <circle cx="12" cy="12" r="12" fill="currentColor" />
                        <path
                          d="M8 12.5l3 3 5-6"
                          stroke="#0a0a0a"
                          strokeWidth="2.1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {step.proof}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

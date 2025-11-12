'use client';
import { useState } from 'react';

export default function HowItWorks() {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      title: "Scope",
      description: "15-minute discovery call to understand your infrastructure and compliance needs",
      proof: "Tailored test plan delivered",
    },
    {
      title: "Test",
      description: "Real-world attack simulation using manual techniques and industry tools",
      proof: "CVEs mapped, OWASP Top 10 covered",
    },
    {
      title: "Report",
      description: "Clear findings with risk ratings, compliance mapping, and step-by-step fixes",
      proof: "Prioritised risk list with CVSS scores",
    },
    {
      title: "Remediate & Verify",
      description: "Free re-testing to confirm critical issues are resolved",
      proof: "Verified closure report",
    }
  ];

  return (
    <section className="px-6 py-20 -b bg-techblack -coal">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-seasalt">
          How It Works
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-nlc-blue hidden md:block"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex gap-6">
                  {/* Step number badge */}
                  <div className="z-10 flex items-center justify-center flex-shrink-0 w-12 h-12 font-bold rounded-full text-seasalt bg-nlc-blue">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6  rounded-lg bg-techblack -coal">
                    <h3 className="mb-2 text-xl font-semibold text-seasalt">
                      {step.title}
                    </h3>
                    <p className="mb-3 text-zinc-300">{step.description}</p>
                    
                    {/* Proof badge */}
                    <div className="inline-block px-4 py-2 mb-3 text-sm  rounded-full text-seasalt -zinc-700 bg-zinc-950">
                      <i className="mr-1 bi-check-circle"></i>
                      {step.proof}
                    </div>
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

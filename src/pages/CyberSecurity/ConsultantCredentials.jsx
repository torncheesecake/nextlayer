"use client";
import { useId, useState } from "react";
export default function ComplianceAccordion() {
  const [expanded, setExpanded] = useState(null);
  const baseId = useId();
  const certifications = [
    {
      title: "NCSC CHECK Accredited",
      why: "Required for government and CNI systems",
      detail:
        "All consultants are CHECK accredited by the National Cyber Security Centre, meeting the highest standards for critical infrastructure testing.",
    },
    {
      title: "NPPV Level 3 Cleared",
      why: "Handle UK Secret materials with discretion",
      detail:
        "Security clearance enabling us to work with highly sensitive information and environments, including access to UK Secret and occasional Top Secret materials.",
    },
    {
      title: "ISO 27001 Compliant",
      why: "Structured information security management",
      detail:
        "Our processes follow international standards for information security management systems, ensuring consistent, auditable procedures.",
    },
  ];
  const onHeaderKeyDown = (e, index) => {
    const count = certifications.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % count;
      document.getElementById(`${baseId}-btn-${next}`)?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + count) % count;
      document.getElementById(`${baseId}-btn-${prev}`)?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      document.getElementById(`${baseId}-btn-0`)?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      document.getElementById(`${baseId}-btn-${count - 1}`)?.focus();
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setExpanded(expanded === index ? null : index);
    }
  };
  return (
    <section
      className="bg-graphite text-seasalt py-16"
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 id={`${baseId}-heading`} className="mb-8 text-5xl font-bold">
            Trusted by Government and Enterprise
          </h2>
        </div>
        <div
          className="mx-auto max-w-3xl space-y-4"
          role="region"
          aria-label="Compliance and certifications"
        >
          {certifications.map((cert, index) => {
            const isOpen = expanded === index;
            const buttonId = `${baseId}-btn-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            const headingId = `${baseId}-h3-${index}`;
            return (
              <div
                key={index}
                className="bg-graphite  ring-default-dark rounded-xl shadow-lg ring-1 ring-inset"
              >
                <h3 id={headingId} className="sr-only">
                  {cert.title}
                </h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-labelledby={headingId}
                  onKeyDown={(e) => onHeaderKeyDown(e, index)}
                  onClick={() => setExpanded(isOpen ? null : index)}
                  className="flex w-full items-center justify-between rounded-xl p-5 text-left transition focus:outline-none focus-visible:ring-2"
                >
                  <div>
                    <p className="text-seasalt font-semibold">{cert.title}</p>
                    <p className="text-seasalt text-sm">{cert.why}</p>
                  </div>
                  <span className="text-seasalt ml-4" aria-hidden="true">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5"
                >
                  <p className="text-seasalt/90">{cert.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

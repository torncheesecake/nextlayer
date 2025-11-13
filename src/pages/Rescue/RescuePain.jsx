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
];
export default function NetsuiteCheckerboard() {
  return (
    <div className="bg-seasalt dark:bg-graphite py-12 relative z-40">
      <section className="mx-auto w-[90%] max-w-7xl px-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col items-center gap-8 md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="md:flex-1">
              <h3 className="text-techblack mb-6 text-3xl font-semibold">
                {section.heading}
              </h3>
              <p className="text-techblack text-lg">{section.text}</p>
            </div>
            <div className="w-full md:flex-1">
              <img
                src={section.imgSrc}
                alt={section.imgAlt}
                className="h-auto w-full rounded-lg shadow-md"
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

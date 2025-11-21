import { useEffect, useRef, useState } from "react";

export default function SuiteAppFeatures() {
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
        { threshold: 0.3 },
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const features = [
    {
      title: "Line Location Checker",
      description:
        "Flags transaction lines where the item location doesn't match the header, ensuring inventory allocation stays precise and fulfilment mistakes are caught early.",
    },
    {
      title: "Hidden Char Scrubber",
      description:
        "Removes zero-width and non-printable characters from names or descriptions, guaranteeing clean data for imports, exports, and external integrations.",
    },
    {
      title: "Saved Search Emailer",
      description:
        "Emails saved search results as CSV to set distribution lists via button or schedule, automating reporting and keeping stakeholders in the loop.",
    },
    {
      title: "Picklist With Thumbnails",
      description:
        "Displays item images in picking and fulfilment PDFs, giving warehouse teams visual prompts and reducing mis-picks.",
    },
    {
      title: "Sandbox/Prod Banner",
      description:
        "Adds a clear header indicating the account and subsidiary, so everyone knows instantly if they're working in a live or test environment.",
    },
    {
      title: "Field Freeze on Status",
      description:
        "Automatically locks chosen fields once a record hits a status threshold, supporting compliance and process integrity.",
    },
    {
      title: "Quality Management Pro",
      description:
        "Manages QC plans, inspections, NCRs/CAPA, COAs, and supplier PPAPs—making comprehensive quality assurance native to NetSuite.",
    },
    {
      title: "Supplier Portal 360",
      description:
        "Onboards suppliers, manages compliance, ASNs, scorecards, and PO collaboration in a central portal—streamlining supplier management.",
    },
    {
      title: "Project Profitability Control",
      description:
        "Tracks work-in-progress, change orders, earned value, and project forecasting so you can manage profitability in real time.",
    },
  ];

  return (
    <section className="bg-seasalt dark:bg-pureblack py-24 relative z-40 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto w-[90%] max-w-7xl px-6 relative z-10">
        <header className="mb-10 text-left">
          <h2 className="text-techblack dark:text-seasalt mb-8 text-5xl leading-tight font-bold">
            Discover Our Most Popular SuiteApps
          </h2>
          <p className="text-techblack dark:text-seasalt mt-4 mb-4 max-w-4xl text-lg font-light">
            This collection of purpose-built SuiteApps brings process
            automation, compliance, and control directly into NetSuite, each
            designed to fit existing workflows and make complex tasks simple.
          </p>
          <div className="text-techblack dark:text-seasalt max-w-4xl mb-8">
            <p className="text-lg font-medium mb-3">How It Works:</p>
            <ol className="list-decimal list-inside space-y-2 text-lg font-light">
              <li>
                Discovery call to understand your specific requirements and
                workflow challenges
              </li>
              <li>
                Scope and design phase - we map out the solution architecture
                and user experience
              </li>
              <li>Development and testing in your sandbox environment</li>
              <li>
                Deployment to production with full documentation and training
              </li>
            </ol>
            <p className="text-lg font-medium mt-6 mb-2">Pricing:</p>
            <p className="text-lg font-light">
              Custom SuiteApp pricing varies based on complexity, scope, and
              integration requirements. For a detailed estimate tailored to your
              needs,{" "}
              <a
                href="/netsuite/cost-calculator"
                className="text-bittersweet dark:text-bittersweet-dark2 underline hover:no-underline"
              >
                use our NetSuite cost calculator
              </a>{" "}
              or contact us for a consultation.
            </p>
          </div>
        </header>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              index={index}
              isVisible={visibleCards.includes(index)}
              cardRef={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, index, isVisible, cardRef }) {
  return (
    <div
      ref={cardRef}
      className={`text-seasalt dark:bg-graphite dark:text-seasalt bg-seasalt flex flex-col rounded-2xl border border-zinc-300 dark:border-zinc-800 p-6 shadow-md hover:shadow-xl transition-all duration-700 hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-semibold">
        {title}
      </h3>
      <p className="dark:text-seasalt/80 text-base text-zinc-700">
        {description}
      </p>
    </div>
  );
}

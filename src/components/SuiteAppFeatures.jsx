import React from "react";

export default function SuiteAppFeatures() {
  return (
    <section className="py-24 bg-seasalt dark:bg-techblack dark:bg-none">
      <div className="px-6 mx-auto max-w-7xl">
        <header className="mb-10 text-left">
          <h2 className="mb-6 text-4xl font-bold leading-tight text-nlc-blue dark:text-white">
            Discover Our Most Popular SuiteApps
          </h2>
          <p className="max-w-4xl mt-4 mb-8 text-lg font-light text-techblack dark:text-white">
            This collection of purpose-built SuiteApps brings process automation, compliance, and control directly into NetSuite, each designed to fit existing workflows and make complex tasks simple.
          </p>
        </header>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Line Location Checker"
            description="Flags transaction lines where the item location doesn't match the header, ensuring inventory allocation stays precise and fulfilment mistakes are caught early."
          />
          <FeatureCard
            title="Hidden Char Scrubber"
            description="Removes zero-width and non-printable characters from names or descriptions, guaranteeing clean data for imports, exports, and external integrations."
          />
          <FeatureCard
            title="Saved Search Emailer"
            description="Emails saved search results as CSV to set distribution lists via button or schedule, automating reporting and keeping stakeholders in the loop."
          />
          <FeatureCard
            title="Picklist With Thumbnails"
            description="Displays item images in picking and fulfilment PDFs, giving warehouse teams visual prompts and reducing mis-picks."
          />
          <FeatureCard
            title="Sandbox/Prod Banner"
            description="Adds a coloured header indicating the account and subsidiary, so everyone knows instantly if they're working in a live or test environment."
          />
          <FeatureCard
            title="Field Freeze on Status"
            description="Automatically locks chosen fields once a record hits a status threshold, supporting compliance and process integrity."
          />
          <FeatureCard
            title="Quality Management Pro"
            description="Manages QC plans, inspections, NCRs/CAPA, COAs, and supplier PPAPs—making comprehensive quality assurance native to NetSuite."
          />
          <FeatureCard
            title="Supplier Portal 360"
            description="Onboards suppliers, manages compliance, ASNs, scorecards, and PO collaboration in a central portal—streamlining supplier management."
          />
          <FeatureCard
            title="Project Profitability Control"
            description="Tracks work-in-progress, change orders, earned value, and project forecasting so you can manage profitability in real time."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="flex flex-col p-6 bg-white shadow-xl dark:bg-techblacker rounded-xl">
      <h3 className="mb-2 text-xl font-semibold text-nlc-blue dark:text-nlc-mint">{title}</h3>
      <p className="text-base text-zinc-700 dark:text-blue-100">{description}</p>
    </div>
  );
}

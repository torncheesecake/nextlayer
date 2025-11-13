import { Check } from "lucide-react";
import React from "react";
const rows = [
  {
    label: "Unified Finance, CRM, Inventory",
    cells: [
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
      "Partial",
      "Partial",
      "Partial",
    ],
  },
  {
    label: "Real-Time Dashboards & Insights",
    cells: [
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
      "Add-on",
      "Add-on",
      "Add-on",
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
    ],
  },
  {
    label: "Flexible Automation & Workflow",
    cells: [
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
      "Basic",
      "Basic",
      "CRM only",
      "Some",
    ],
  },
  {
    label: "Built to Scale with Growth",
    cells: [
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
      "Complex Upgrades",
      "Upgrades needed",
      "CRM only",
      "Mid-size only",
    ],
  },
  {
    label: "Global/UK Partner Support",
    cells: [
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
      "CRM Only",
      <Check className="text-icon-brand-light dark:text-icon-brand-dark h-6 w-6" />,
    ],
  },
  {
    label: "Typical Annual Cost*",
    cells: [
      <span>&pound;25k-&pound;100k</span>,
      <span>&pound;30k-&pound;150k</span>,
      <span>&pound;20k-&pound;80k</span>,
      <span>
        &pound;15k-&pound;70k <br /> <span className="text-xs">(CRM only)</span>
      </span>,
      <span>&pound;15k-&pound;50k</span>,
    ],
  },
  {
    label: "Best For Company Size",
    cells: [
      "50-1000+",
      "100-5000+",
      "20-500",
      <span>
        10-2000 <br /> <span className="text-xs">(CRM)</span>
      </span>,
      "20-500",
    ],
  },
];
export default function ComparisonTable() {
  return (
    <section className="bg-seasalt dark:bg-graphite  py-28 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-12 text-center text-4xl leading-[1.08] font-semibold md:text-5xl">
          ERP Comparison: Which Solution Fits Your Business?
        </h2>
        <p className="text-graphite dark:text-seasalt mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed">
          Compare NetSuite side-by-side with other top ERPs to choose the right
          platform for your business, growth plans, and budget.
        </p>
        <div className="overflow-x-auto">
          {/* Responsive CSS Grid Table */}
          <div className="border-default-light bg-seasalt dark:border-default-dark dark:bg-graphite  grid min-w-[650px] grid-cols-1 overflow-hidden rounded-xl border shadow-lg md:grid-cols-6">
            {/* Table Header */}
            <div className="border-default-light bg-seasalt text-seasalt  dark:border-default-dark dark:bg-graphite  dark:text-seasalt min-w-[140px] border-b px-4 py-4 font-bold">
              Feature
            </div>
            <div className="border-default-light dark:border-default-dark min-w-[140px] border-b bg-nlc-blue px-4 py-4 text-center font-bold text-seasalt">
              NetSuite
            </div>
            <div className="border-default-light bg-seasalt text-seasalt  dark:border-default-dark dark:bg-graphite  dark:text-seasalt min-w-[140px] border-b px-4 py-4 text-center font-bold">
              Microsoft Dynamics 365
            </div>
            <div className="border-default-light bg-seasalt text-seasalt  dark:border-default-dark dark:bg-graphite  dark:text-seasalt min-w-[140px] border-b px-4 py-4 text-center font-bold">
              SAP Business One
            </div>
            <div className="border-default-light bg-seasalt text-seasalt  dark:border-default-dark dark:bg-graphite  dark:text-seasalt min-w-[140px] border-b px-4 py-4 text-center font-bold">
              Salesforce
            </div>
            <div className="border-default-light bg-seasalt text-seasalt  dark:border-default-dark dark:bg-graphite  dark:text-seasalt min-w-[140px] border-b px-4 py-4 text-center font-bold">
              Sage Intacct
            </div>
            {/* Table Body */}
            {rows.map((row) => (
              <React.Fragment key={row.label}>
                <div className="border-default-light bg-seasalt text-seasalt  dark:border-default-dark dark:bg-graphite  dark:text-seasalt min-w-[140px] border-b px-4 py-5 font-semibold transition">
                  {row.label}
                </div>
                {row.cells.map((cell, i) => (
                  <div
                    key={i}
                    className="border-default-light text-seasalt  dark:border-default-dark dark:bg-graphite  dark:text-seasalt flex min-w-[140px] items-center justify-center border-b px-4 py-5 transition hover:bg-bg-emphasis-light dark:hover:bg-bg-emphasis-dark"
                  >
                    {cell}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="text-graphite dark:text-seasalt mt-4 mb-4 text-xs">
            *Costs are typical UK market estimates. Actual project costs can
            vary depending on user count, modules, and implementation needs.
          </div>
        </div>
      </div>
    </section>
  );
}

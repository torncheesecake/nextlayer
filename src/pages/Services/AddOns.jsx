import { PlugZap, Wand2 } from "lucide-react";
export default function AddOns() {
  return (
    <section className="bg-seasalt dark:bg-graphite  py-24">
      <div className="container mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-14 text-center text-5xl font-bold">
          Integrate everything. Enhance anything
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Integrations */}
          <div className="bg-seasalt border-default-light dark:bg-graphite dark:border-default-dark flex items-start gap-5 rounded-xl border p-8 shadow-lg">
            <span className="text-icon-brand-light dark:text-icon-brand-dark">
              <PlugZap className="h-12 w-12" />
            </span>
            <div>
              <h3 className="text-graphite dark:text-seasalt mb-2 text-2xl font-bold">
                Out-of-the-Box and Custom Integrations
              </h3>
              <p className="text-graphite dark:text-seasalt text-lg">
                Connect NetSuite to CRM, eCommerce, POS, finance, or custom apps
                for clean data flow and automation.
              </p>
            </div>
          </div>
          {/* SuiteApp Enhancements */}
          <div className="bg-seasalt border-default-light dark:bg-graphite dark:border-default-dark flex items-start gap-5 rounded-xl border p-8 shadow-lg">
            <span className="text-icon-brand-light dark:text-icon-brand-dark">
              <Wand2 className="h-12 w-12" />
            </span>
            <div>
              <h3 className="text-graphite dark:text-seasalt mb-2 text-2xl font-bold">
                SuiteApp Enhancements
              </h3>
              <p className="text-graphite dark:text-seasalt text-lg">
                Add approvals, analytics, workflows, and mobile tools, built
                around real processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

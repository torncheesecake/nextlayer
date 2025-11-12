import { PlugZap, Wand2 } from 'lucide-react';

export default function AddOns() {
  return (
    <section className="py-24 bg-seasalt dark:bg-techblack dark:bg-none">
      <div className="container px-6 mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center text-techblack mb-14 dark:text-seasalt">
          Integrate everything. Enhance anything
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Integrations */}
          <div className="flex items-start gap-5">
            <span className="text-nlc-blue dark:text-seasalt">
              <PlugZap className="w-12 h-12" />
            </span>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-techblack dark:text-seasalt">
                Out-of-the-Box &amp; Custom Integrations
              </h3>
              <p className="text-lg text-techblack dark:text-seasalt">
                Connect NetSuite to CRM, eCommerce, POS, finance, or custom apps for clean data flow and automation.
              </p>
            </div>
          </div>

          {/* SuiteApp Enhancements */}
          <div className="flex items-start gap-5" id="onesupport">
            <span className="text-nlc-blue dark:text-seasalt">
              <Wand2 className="w-12 h-12" />
            </span>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-techblack dark:text-seasalt">
                SuiteApp Enhancements
              </h3>
              <p className="text-lg text-techblack dark:text-seasalt">
                Add approvals, analytics, workflows, and mobile tools, built around real processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

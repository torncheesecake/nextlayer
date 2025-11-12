import { ClipboardCheck, Gauge, Workflow, LifeBuoy } from 'lucide-react';

export default function NetSuiteLifecycle() {
  return (
    <section className="py-20 bg-seasalt dark:bg-techblack">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-12 text-5xl font-bold text-center text-techblack dark:text-seasalt">
          NetSuite lifecycle, end to end
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Implementation */}
          <div className="flex flex-col items-center p-8 text-center bg-white  shadow-lg rounded-xl  dark:bg-techblack">
            <div className="my-3 text-nlc-blue dark:text-seasalt">
              <ClipboardCheck className="w-12 h-12" />
            </div>
            <h3 className="mt-1 text-lg font-bold text-techblack dark:text-seasalt">Implementation</h3>
            <p className="mt-2 text-lg text-techblack dark:text-seasalt">
              Plan, configure, migrate, and test for a clean go-live with SuiteSuccess-style structure and clear roles.
            </p>
          </div>

          {/* Optimisation */}
          <div className="flex flex-col items-center p-8 text-center bg-white  shadow-lg rounded-xl  dark:bg-techblack">
            <div className="my-3 text-nlc-blue dark:text-seasalt">
              <Gauge className="w-12 h-12" />
            </div>
            <h3 className="mt-1 text-lg font-bold text-techblack dark:text-seasalt">Optimisation</h3>
            <p className="mt-2 text-lg text-techblack dark:text-seasalt">
              Tidy roles, speed up searches, improve dashboards, and tune processes for faster daily work.
            </p>
          </div>

          {/* Automations & Integrations */}
          <div className="flex flex-col items-center p-8 text-center bg-white  shadow-lg rounded-xl  dark:bg-techblack">
            <div className="my-3 text-nlc-blue dark:text-seasalt">
              <Workflow className="w-12 h-12" />
            </div>
            <h3 className="mt-1 text-lg font-bold text-techblack dark:text-seasalt">Automations & Integrations</h3>
            <p className="mt-2 text-lg text-techblack dark:text-seasalt">
              SuiteFlow, SuiteScript, and REST to connect tools and remove manual steps across teams.
            </p>
          </div>

          {/* Support & Aftercare */}
          <div className="flex flex-col items-center p-8 text-center bg-white  shadow-lg rounded-xl  dark:bg-techblack">
            <div className="my-3 text-nlc-blue">
              <LifeBuoy className="w-12 h-12" />
            </div>
            <h3 className="mt-1 text-lg font-bold text-techblack dark:text-seasalt">Support & Aftercare</h3>
            <p className="mt-2 text-lg text-techblack dark:text-seasalt">
              Tickets with SLAs, small change requests, and proactive checks to keep the account healthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

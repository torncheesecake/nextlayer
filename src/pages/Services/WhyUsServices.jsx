import { ClipboardCheck, Gauge, LifeBuoy, Workflow } from "lucide-react";
export default function NetSuiteLifecycle() {
  return (
    <section className="dark:bg-graphite  bg-seasalt py-20">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-8 text-center text-5xl font-bold">
          NetSuite lifecycle, end to end
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Implementation */}
          <div className="bg-seasalt dark:bg-graphite border-default-light dark:border-default-dark flex flex-col items-center rounded-xl border p-8 text-center shadow-[0_1.5px_4px_0_rgba(60,60,67,0.06)] dark:shadow-[0_2px_8px_0_rgba(0,0,0,0.17)]">
            <div className="my-3 text-icon-brand-light">
              <ClipboardCheck className="h-12 w-12" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              Implementation
            </h3>
            <p className="text-graphite dark:text-seasalt mt-2 text-lg">
              Plan, configure, migrate, and test for a clean go-live with
              SuiteSuccess - style structure and clear roles.
            </p>
          </div>
          {/* Automations & Integrations */}
          <div className="bg-seasalt dark:bg-graphite border-default-light dark:border-default-dark flex flex-col items-center rounded-xl border p-8 text-center shadow-[0_1.5px_4px_0_rgba(60,60,67,0.06)] dark:shadow-[0_2px_8px_0_rgba(0,0,0,0.17)]">
            <div className="my-3 text-icon-brand-light">
              <Workflow className="h-12 w-12" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              Automations &amp; Integrations
            </h3>
            <p className="text-graphite dark:text-seasalt mt-2 text-lg">
              SuiteFlow, SuiteScript, and REST to connect tools and remove
              manual steps across teams.
            </p>
          </div>
          {/* Optimisation */}
          <div className="bg-seasalt dark:bg-graphite border-default-light dark:border-default-dark flex flex-col items-center rounded-xl border p-8 text-center shadow-[0_1.5px_4px_0_rgba(60,60,67,0.06)] dark:shadow-[0_2px_8px_0_rgba(0,0,0,0.17)]">
            <div className="my-3 text-icon-brand-light">
              <Gauge className="h-12 w-12" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              Optimisation
            </h3>
            <p className="text-graphite dark:text-seasalt mt-2 text-lg">
              Tidy roles, speed up searches, improve dashboards, and tune
              processes for faster daily work.
            </p>
          </div>
          {/* Support & Aftercare */}
          <div className="bg-seasalt dark:bg-graphite border-default-light dark:border-default-dark flex flex-col items-center rounded-xl border p-8 text-center shadow-[0_1.5px_4px_0_rgba(60,60,67,0.06)] dark:shadow-[0_2px_8px_0_rgba(0,0,0,0.17)]">
            <div className="my-3 text-icon-brand-light">
              <LifeBuoy className="h-12 w-12" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              Support &amp; Aftercare
            </h3>
            <p className="text-graphite dark:text-seasalt mt-2 text-lg">
              Tickets with SLAs, small change requests, and proactive checks to
              keep the account healthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

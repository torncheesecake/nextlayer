import { Code2, LifeBuoy, Rocket, Workflow } from "lucide-react";
export default function OurServices() {
  return (
    <section className="bg-seasalt dark:bg-graphite min-h-[80vh] py-20 relative z-40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Intro */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-techblack dark:text-seasalt mb-8 text-5xl font-black tracking-tight">
            NetSuite Expertise Without The Headaches
          </h2>
          <p className="text-graphite dark:text-seasalt/90 mb-6 text-lg font-light md:text-xl">
            Implementation, automation, support, and custom builds. Outcomes:
            faster teams, cleaner data, and fewer manual steps, every day.
          </p>
          {/* Quick bullet highlights */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <span className="text-graphite dark:text-seasalt inline-flex items-center gap-2 font-medium">
              <Rocket className="h-5 w-5 text-icon-brand-light" /> Go-live
              rescue
            </span>
            <span className="text-graphite dark:text-seasalt inline-flex items-center gap-2 font-medium">
              <Workflow className="h-5 w-5 text-icon-brand-light" /> Full
              integration
            </span>
            <span className="text-graphite dark:text-seasalt inline-flex items-center gap-2 font-medium">
              <LifeBuoy className="h-5 w-5 text-icon-brand-light" /> Support
              that's there
            </span>
          </div>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Implement Card */}
          <div className="dark:bg-graphite  border-default-light dark:border-default-dark bg-seasalt flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg dark:shadow-[0_2px_20px_0_rgba(0,0,0,0.22)]">
            <Rocket className="mb-2 h-12 w-12 text-icon-brand-light" />
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              NetSuite Implementation
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              Scope, configure, migrate, and test for a clean go-live, or rescue
              a project for a strategic reset.
            </p>
            <ul className="text-graphite dark:text-seasalt mt-3 list-disc space-y-1 pl-2 text-base">
              <li>SuiteSuccess-style plans</li>{" "}
              <li>Data migration, validation</li>
              <li>Change management</li> <li>Adoption</li>
            </ul>
          </div>
          {/* Optimise Card */}
          <div className="dark:bg-graphite  border-default-light dark:border-default-dark bg-seasalt flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg dark:shadow-[0_2px_20px_0_rgba(0,0,0,0.22)]">
            <Workflow className="mb-2 h-12 w-12 text-icon-brand-light" />
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              NetSuite Optimisation
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              Make daily work faster and cleaner: tune roles, searches, and
              dashboards for your exact needs.
            </p>
            <ul className="text-graphite dark:text-seasalt mt-3 list-disc space-y-1 pl-2 text-base">
              <li>Workflow & SuiteFlow upgrades</li>{" "}
              <li>Dashboard and search tidy-ups</li>
              <li>Roles, permissions, audits</li>
            </ul>
          </div>
          {/* Build Card */}
          <div className="dark:bg-graphite  border-default-light dark:border-default-dark bg-seasalt flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg dark:shadow-[0_2px_20px_0_rgba(0,0,0,0.22)]">
            <Code2 className="mb-2 h-12 w-12 text-icon-brand-light" />
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              Build
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              SuiteScript and API connectors built for your unique process. Real
              custom, no compromise.
            </p>
            <ul className="text-graphite dark:text-seasalt mt-3 list-disc space-y-1 pl-2 text-base">
              <li>SuiteScript 2.1, RESTlets, SuiteTalk</li>{" "}
              <li>Dashboards, PDFs, forms</li>
              <li>Integrations and custom flows</li>
            </ul>
          </div>
          {/* Support Card */}
          <div className="dark:bg-graphite  border-default-light dark:border-default-dark bg-seasalt flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg dark:shadow-[0_2px_20px_0_rgba(0,0,0,0.22)]">
            <LifeBuoy className="mb-2 h-12 w-12 text-icon-brand-light" />
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              Support
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              Ticketed help, upgrades, and one-to-one training, so your NetSuite
              stays smooth and up to date.
            </p>
            <ul className="text-graphite dark:text-seasalt mt-3 list-disc space-y-1 pl-2 text-base">
              <li>SLA targets and clear comms</li> <li>Upgrade readiness</li>
              <li>Team training</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

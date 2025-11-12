import {
  Rocket,
  LifeBuoy,
  Workflow,
  Code2,
} from 'lucide-react';

export default function OurServices() {
  return (
    <section className="py-20 bg-seasalt dark:bg-techblack min-h-[80vh]">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-14 ">
          <h2 className="mb-4 text-5xl font-black tracking-tight md:text-5xl text-techblack dark:text-seasalt">
            NetSuite Expertise Without The Headaches
          </h2>
          <p className="mb-6 text-lg font-light md:text-xl text-techblack dark:text-seasalt/90">
            Implementation, automation, support, &amp; custom builds. Outcomes: faster teams, cleaner data, and fewer manual steps - every day.
          </p>
          {/* Quick bullet highlights */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-2 font-medium text-techblack dark:text-seasalt">
              <Rocket className="w-5 h-5 text-nlc-blue dark:text-seasalt" /> Go-live rescue
            </span>
            <span className="inline-flex items-center gap-2 font-medium text-techblack dark:text-seasalt">
              <Workflow className="w-5 h-5 text-nlc-blue dark:text-seasalt" /> Full integration
            </span>
            <span className="inline-flex items-center gap-2 font-medium text-techblack dark:text-seasalt">
              <LifeBuoy className="w-5 h-5 text-nlc-blue" /> Support that's there
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Implement Card */}
          <div className="flex flex-col items-start gap-4 p-8 bg-white  shadow-lg  dark:bg-techblack/80 rounded-xl">
            <Rocket className="w-12 h-12 mb-2 text-nlc-blue dark:text-seasalt" />
            <h3 className="text-2xl font-bold text-techblack dark:text-seasalt">Implement</h3>
            <p className="text-lg text-techblack dark:text-seasalt">
              Scope, configure, migrate, and test for a clean go-live - or rescue a project for a strategic reset.
            </p>
            <ul className="pl-2 mt-3 space-y-1 text-base list-disc text-techblack dark:text-seasalt">
              <li>SuiteSuccess-style plans</li>
              <li>Data migration, validation</li>
              <li>Change management</li>
              <li>Adoption</li>
            </ul>
          </div>
          {/* Optimise Card */}
          <div className="flex flex-col items-start gap-4 p-8 bg-white  shadow-lg  dark:bg-techblack/80 rounded-xl">
            <Workflow className="w-12 h-12 mb-2 text-nlc-blue dark:text-seasalt" />
            <h3 className="text-2xl font-bold text-techblack dark:text-seasalt">Optimise</h3>
            <p className="text-lg text-techblack dark:text-seasalt">
              Make daily work faster and cleaner: tune roles, searches, and dashboards for your exact needs.
            </p>
            <ul className="pl-2 mt-3 space-y-1 text-base list-disc text-techblack dark:text-seasalt">
              <li>Workflow &amp; SuiteFlow upgrades</li>
              <li>Dashboard &amp; search tidy-ups</li>
              <li>Roles, permissions, audits</li>
            </ul>
          </div>
          {/* Build Card */}
          <div className="flex flex-col items-start gap-4 p-8 bg-white  shadow-lg  dark:bg-techblack/80 rounded-xl">
            <Code2 className="w-12 h-12 mb-2 text-nlc-blue dark:text-seasalt" />
            <h3 className="text-2xl font-bold text-techblack dark:text-seasalt">Build</h3>
            <p className="text-lg text-techblack dark:text-seasalt">
              SuiteScript &amp; API connectors built for your unique process. Real custom, no compromise.
            </p>
            <ul className="pl-2 mt-3 space-y-1 text-base list-disc text-techblack dark:text-seasalt">
              <li>SuiteScript 2.1, RESTlets, SuiteTalk</li>
              <li>Dashboards, PDFs, forms</li>
              <li>Integrations &amp; custom flows</li>
            </ul>
          </div>
          {/* Support Card */}
          <div className="flex flex-col items-start gap-4 p-8 bg-white  shadow-lg  dark:bg-techblack/80 rounded-xl">
            <LifeBuoy className="w-12 h-12 mb-2 text-nlc-blue" />
            <h3 className="text-2xl font-bold text-techblack dark:text-seasalt">Support</h3>
            <p className="text-lg text-techblack dark:text-seasalt">
              Ticketed help, upgrades, and one-to-one training - so your NetSuite stays smooth and up-to-date.
            </p>
            <ul className="pl-2 mt-3 space-y-1 text-base list-disc text-techblack dark:text-seasalt">
              <li>SLA targets &amp; clear comms</li>
              <li>Upgrade readiness</li>
              <li className="flex items-center gap-2">
              <li>Team training</li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

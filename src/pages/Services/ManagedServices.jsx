import { ClipboardCheck, Headset, LifeBuoy, Rocket } from "lucide-react";
export default function NetSuiteSupport() {
  return (
    <section className="bg-seasalt dark:bg-techblack py-24 relative z-40">
      <div className="container mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-8 text-center text-5xl font-bold">
          Comprehensive NetSuite Support
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {/* Proactive Issue Resolution */}
          <div className="border-nlc-blue-dark bg-seasalt dark:border-nlc-blue-darker dark:bg-graphite flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg transition dark:shadow-lg">
            <span className="text-bittersweet dark:text-bittersweet-dark2 mb-4">
              <ClipboardCheck className="h-10 w-10" />
            </span>
            <h3 className="text-techblack dark:text-seasalt mb-6 text-3xl font-bold">
              Proactive Issue Resolution
            </h3>
            <p className="text-nlc-blue-darker dark:text-seasalt text-lg">
              Continuous system monitoring, preventive maintenance, and
              compliance checks to keep your NetSuite environment running
              smoothly.
            </p>
          </div>
          {/* Dedicated Support & Troubleshooting */}
          <div className="border-nlc-blue-dark bg-seasalt dark:border-nlc-blue-darker dark:bg-graphite flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg transition dark:shadow-lg">
            <span className="text-bittersweet dark:text-bittersweet-dark2 mb-4">
              <LifeBuoy className="h-10 w-10" />
            </span>
            <h3 className="text-nlc-blue-darker dark:text-seasalt mb-6 text-3xl font-bold">
              Dedicated Support &amp; Troubleshooting
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              Expert help available on demand for troubleshooting, upgrades, and
              user support, ensuring immediate assistance when you need it.
            </p>
          </div>
          {/* User Training & Empowerment */}
          <div className="border-nlc-blue-dark bg-seasalt dark:border-nlc-blue-darker dark:bg-graphite flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg transition dark:shadow-lg">
            <span className="text-bittersweet dark:text-bittersweet-dark2 mb-4">
              <Headset className="h-10 w-10" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              NetSuite Support
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              Comprehensive training programs to empower your team with the
              knowledge and skills to maximise NetSuite's potential.
            </p>
          </div>
          {/* Scalable Support Plans */}
          <div className="border-nlc-blue-dark bg-seasalt dark:border-nlc-blue-darker dark:bg-graphite flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg transition dark:shadow-lg">
            <span className="text-bittersweet dark:text-bittersweet-dark2 mb-4">
              <Rocket className="h-10 w-10" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
              Scalable Support Plans
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              Flexible support plans that grow with your business needs,
              adapting continuously as your team and NetSuite usage expands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

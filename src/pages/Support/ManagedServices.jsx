import { ClipboardCheck, Headset, LifeBuoy, Rocket } from "lucide-react";
export default function NetSuiteSupport() {
  return (
    <section className="bg-surface-light dark:bg-surface-dark py-24">
      <div className="container mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-primary-light dark:text-primary-dark mb-8 text-center text-5xl font-bold">
          Comprehensive NetSuite Support
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {/* Proactive Issue Resolution */}
          <div className="border-default-light bg-card-light dark:border-default-dark dark:bg-card-dark flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg transition dark:shadow-[0_2px_20px_0_rgba(0,0,0,0.22)]">
            <span className="text-icon-brand-light dark:text-icon-brand-dark mb-4">
              <ClipboardCheck className="h-10 w-10" />
            </span>
            <h3 className="text-primary-light dark:text-primary-dark mb-6 text-3xl font-bold">
              Proactive Issue Resolution
            </h3>
            <p className="text-primary-light dark:text-primary-dark text-lg">
              Continuous system monitoring, preventive maintenance, and compliance checks to keep
              your NetSuite environment running smoothly.
            </p>
          </div>
          {/* Dedicated Support & Troubleshooting */}
          <div className="border-default-light bg-card-light dark:border-default-dark dark:bg-card-dark flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg transition dark:shadow-[0_2px_20px_0_rgba(0,0,0,0.22)]">
            <span className="text-icon-brand-light dark:text-icon-brand-dark mb-4">
              <LifeBuoy className="h-10 w-10" />
            </span>
            <h3 className="text-primary-light dark:text-primary-dark mb-6 text-3xl font-bold">
              Dedicated Support &amp; Troubleshooting
            </h3>
            <p className="text-primary-light dark:text-primary-dark text-lg">
              Expert help available on demand for troubleshooting, upgrades, and user support,
              ensuring immediate assistance when you need it.
            </p>
          </div>
          {/* User Training & Empowerment */}
          <div className="border-default-light bg-card-light dark:border-default-dark dark:bg-card-dark flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg transition dark:shadow-[0_2px_20px_0_rgba(0,0,0,0.22)]">
            <span className="text-icon-brand-light dark:text-icon-brand-dark mb-4">
              <Headset className="h-10 w-10" />
            </span>
            <h3 className="text-primary-light dark:text-primary-dark mb-6 text-3xl font-bold">
              User Training &amp; Empowerment
            </h3>
            <p className="text-primary-light dark:text-primary-dark text-lg">
              Comprehensive training programs to empower your team with the knowledge and skills to
              maximise NetSuite's potential.
            </p>
          </div>
          {/* Scalable Support Plans */}
          <div className="border-default-light bg-card-light dark:border-default-dark dark:bg-card-dark flex flex-col items-start gap-4 rounded-xl border p-8 shadow-lg transition dark:shadow-[0_2px_20px_0_rgba(0,0,0,0.22)]">
            <span className="text-icon-brand-light dark:text-icon-brand-dark mb-4">
              <Rocket className="h-10 w-10" />
            </span>
            <h3 className="text-primary-light dark:text-primary-dark mb-6 text-3xl font-bold">
              Scalable Support Plans
            </h3>
            <p className="text-primary-light dark:text-primary-dark text-lg">
              Flexible support plans that grow with your business needs, adapting continuously as
              your team and NetSuite usage expands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

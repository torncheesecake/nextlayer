import { ClipboardCheck, Gauge, LifeBuoy, Rocket } from 'lucide-react';

export default function ManagedServices() {
  return (
    <section className="py-24 bg-seasalt dark:bg-techblack dark:bg-none">
      <div className="container px-6 mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center text-techblack mb-14 dark:text-seasalt">
          Your NetSuite - always optimised
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {/* Proactive System Reviews */}
          <div className="flex flex-col items-start p-8 bg-seasalt dark:bg-techblack rounded-xl">
            <span className="mb-4 text-nlc-blue dark:text-seasalt">
              <ClipboardCheck className="w-10 h-10" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-techblack dark:text-seasalt">Proactive System Reviews</h3>
            <p className="text-lg text-techblack dark:text-seasalt">
              Regular health checks, compliance reviews, and hands-on user training ensure you never outgrow your investment.
            </p>
          </div>

          {/* Business Process Tune-Ups */}
          <div className="flex flex-col items-start p-8 bg-seasalt dark:bg-techblack rounded-xl">
            <span className="mb-4 text-nlc-blue dark:text-seasalt">
              <Gauge className="w-10 h-10" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-techblack dark:text-seasalt">Business Process Tune-Ups</h3>
            <p className="text-lg text-techblack dark:text-seasalt">
              Workflow optimisation, custom dashboards, process automation, and advanced analytics for ongoing improvement.
            </p>
          </div>
        {/* Divider across both columns */}
        <div className="hidden md:block md:col-span-2">
          <div className=" dark:-white/10"></div>
        </div>
          {/* Support & Training On-Demand */}
          <div className="flex flex-col items-start p-8 bg-seasalt dark:bg-techblack rounded-xl">
            <span className="mb-4 text-nlc-blue">
              <LifeBuoy className="w-10 h-10" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-techblack dark:text-seasalt">Support &amp; Training On-Demand</h3>
            <p className="text-lg text-techblack dark:text-seasalt">
              Direct access to NetSuite experts for upgrades, troubleshooting and user empowerment, whenever it is needed.
            </p>
          </div>

          {/* OneSupport That Grows With You */}
          <div className="flex flex-col items-start p-8 bg-seasalt dark:bg-techblack rounded-xl">
            <span className="mb-4 text-nlc-blue dark:text-seasalt">
              <Rocket className="w-10 h-10" />
            </span>
            <h3 className="mb-2 text-2xl font-bold text-techblack dark:text-seasalt">OneSupport That Grows With You</h3>
            <p className="text-lg text-techblack dark:text-seasalt">
              As the business evolves, the plan evolves, no set and forget. It adapts and improves as the team scales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

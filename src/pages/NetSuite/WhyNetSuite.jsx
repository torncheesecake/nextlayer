import { Database, Repeat, ShieldCheck, Zap } from "lucide-react";
export default function WhyNetSuite() {
  return (
    <section className="dark:bg-techblack bg-seasalt py-28 transition-colors duration-300">
      <div className="container mx-auto w-[90%] max-w-7xl px-6 text-center">
        <h2 className="text-techblack dark:text-seasalt mb-12 text-5xl leading-[1.08] font-semibold">
          Why NetSuite? The ERP Built To Fit Your Business
        </h2>
        <p className="text-graphite dark:text-seasalt mx-auto mb-16 max-w-5xl text-lg leading-relaxed">
          NetSuite isn't just another ERP - it's a cloud-native platform that
          unifies your finance, CRM, inventory, and operations on one adaptable
          system. Unlike Salesforce or Microsoft Dynamics 365, NetSuite was
          designed specifically to scale with fast-growing mid-market and
          enterprise businesses. No shoehorning your processes into rigid
          software - NetSuite flexes to fit the way you work.
        </p>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Unified Data */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-icon-brand-light">
              <Database className="h-12 w-12" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-2 text-2xl leading-[1.1] font-bold">
              Unified Data, One Truth
            </h3>
            <p className="text-graphite dark:text-seasalt mt-1 max-w-xs text-lg leading-[1.5]">
              Say goodbye to disconnected silos. NetSuite combines your
              financials, sales, and inventory into a single source of truth -
              empowering smarter decisions.
            </p>
          </div>
          {/* True Automation */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-icon-brand-light">
              <Zap className="h-12 w-12" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-2 text-2xl leading-[1.1] font-bold">
              Automation That Works For You
            </h3>
            <p className="text-graphite dark:text-seasalt mt-1 max-w-xs text-lg leading-[1.5]">
              Automate your routine tasks, workflows, and approvals with
              NetSuite's flexible tools - freeing your team to focus on growth,
              not grunt work.
            </p>
          </div>
          {/* Scalable Platform */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-icon-brand-light">
              <Repeat className="h-12 w-12" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-2 text-2xl leading-[1.1] font-bold">
              Scales As You Grow
            </h3>
            <p className="text-graphite dark:text-seasalt mt-1 max-w-xs text-lg leading-[1.5]">
              Whether you're entering new markets or expanding product lines,
              NetSuite's modular design means no painful upgrades or expensive
              migrations.
            </p>
          </div>
          {/* Built-In Security */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-icon-brand-light">
              <ShieldCheck className="h-12 w-12" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-2 text-2xl leading-[1.1] font-bold">
              Enterprise-Grade Security
            </h3>
            <p className="text-graphite dark:text-seasalt mt-1 max-w-xs text-lg leading-[1.5]">
              With continuous updates and built-in compliance, your data stays
              protected and your systems stay up-to-date - without you lifting a
              finger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

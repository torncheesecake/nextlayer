import { BarChart2, Bug, Clock4, Layers3 } from "lucide-react";
export default function ErpPainPoints() {
  return (
    <section className="bg-seasalt dark:bg-graphite py-28 transition-colors duration-300 relative z-40">
      <div className="container mx-auto w-[90%] max-w-7xl px-6 text-center">
        <h2 className="text-techblack dark:text-seasalt mb-8 text-5xl leading-[1.08] font-semibold">
          Is This Your ERP Reality?
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Manual Work */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-icon-brand-light">
              <Clock4 className="h-12 w-12" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl leading-[1.1] font-bold">
              Everything Feels Manual
            </h3>
            <p className="text-graphite dark:text-seasalt mt-1 max-w-xs text-lg leading-[1.5]">
              Still stitching reports together in Excel? NetSuite automates
              operations across finance, sales, and fulfilment - so your team
              stops wasting time.
            </p>
          </div>
          {/* Broken Integrations */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-icon-brand-light">
              <Bug className="h-12 w-12" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl leading-[1.1] font-bold">
              Systems Don’t Talk
            </h3>
            <p className="text-graphite dark:text-seasalt mt-1 max-w-xs text-lg leading-[1.5]">
              Finance in one system, sales in another, ops in a spreadsheet.
              NetSuite unifies your data - one platform, one version of the
              truth.
            </p>
          </div>
          {/* Limited Visibility */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-icon-brand-light">
              <BarChart2 className="h-12 w-12" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl leading-[1.1] font-bold">
              No Real-Time Insights
            </h3>
            <p className="text-graphite dark:text-seasalt mt-1 max-w-xs text-lg leading-[1.5]">
              If you're waiting for someone to "pull the numbers", it's too
              late. NetSuite gives you live dashboards and reporting across the
              business.
            </p>
          </div>
          {/* Stuck Scaling */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-icon-brand-light">
              <Layers3 className="h-12 w-12" />
            </span>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl leading-[1.1] font-bold">
              Can’t Scale What's Breaking
            </h3>
            <p className="text-graphite dark:text-seasalt mt-1 max-w-xs text-lg leading-[1.5]">
              Growing fast but stuck with systems that can't keep up? NetSuite
              scales with you - and we make sure it's done right from the start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

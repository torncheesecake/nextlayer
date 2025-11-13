import { AlertTriangle, BarChart2, Layers, Zap } from "lucide-react";
export default function NetSuiteAdvantages() {
  return (
    <section className="bg-seasalt dark:bg-graphite  py-28 transition-colors duration-300">
      {/* Hero Section using CSS Grid */}
      <div className="container mx-auto grid w-[90%] max-w-7xl grid-cols-1 items-center gap-16 px-6 xl:grid-cols-2">
        {/* Text Content */}
        <div className="text-graphite dark:text-seasalt">
          <h2 className="mb-8 text-5xl leading-[1.1] font-semibold">
            Frustrated With Your Current ERP?
          </h2>
          <p className="mb-6 max-w-lg text-lg leading-relaxed">
            Salesforce too focused on CRM? Microsoft Dynamics 365 too complex or
            costly? Other ERPs often force you to change how you work - wasting
            time, money, and patience.
          </p>
          <p className="mb-6 max-w-lg text-lg leading-relaxed">
            NetSuite with Next Layer flips the script. We tailor your system to
            your exact needs, eliminating pain points that slow you down and
            empowering your team to focus on growth.
          </p>
          <p className="max-w-lg text-lg leading-relaxed">
            From clunky workflows to disconnected data, we tackle your unique
            challenges - delivering an ERP that just works.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-full w-full max-w-md overflow-hidden rounded-lg shadow-lg lg:max-w-full">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
              alt="Business team collaborating with technology"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Points Section (unchanged, still grid) */}
      <div className="text-graphite dark:text-seasalt container mx-auto mt-20 grid w-[90%] max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        {/* Pain Point 1 */}
        <div className="flex items-start gap-5">
          <AlertTriangle className="h-10 w-10 flex-shrink-0 text-icon-brand-light" />
          <div>
            <h3 className="mb-2 text-2xl font-bold">
              Complex Systems That Confuse
            </h3>
            <p className="max-w-md text-lg">
              Overwhelmed by complicated interfaces or too many add-ons?
              NetSuite's intuitive design and tailored setup means your team
              actually uses the system - not avoids it.
            </p>
          </div>
        </div>
        {/* Pain Point 2 */}
        <div className="flex items-start gap-5">
          <Zap className="h-10 w-10 flex-shrink-0 text-icon-brand-light" />
          <div>
            <h3 className="mb-2 text-2xl font-bold">
              Automation That Misses The Mark
            </h3>
            <p className="max-w-md text-lg">
              Automation should simplify, not complicate. We build workflows
              that actually save time - reducing manual tasks without creating
              bottlenecks.
            </p>
          </div>
        </div>
        {/* Pain Point 3 */}
        <div className="flex items-start gap-5">
          <Layers className="h-10 w-10 flex-shrink-0 text-icon-brand-light" />
          <div>
            <h3 className="mb-2 text-2xl font-bold">
              Systems That Don't Scale
            </h3>
            <p className="max-w-md text-lg">
              Struggling to grow because your software can't keep up? NetSuite
              is built for growth, and we make sure your implementation scales
              smoothly with your business.
            </p>
          </div>
        </div>
        {/* Pain Point 4 */}
        <div className="flex items-start gap-5">
          <BarChart2 className="h-10 w-10 flex-shrink-0 text-icon-brand-light" />
          <div>
            <h3 className="mb-2 text-2xl font-bold">
              Lack Of Real-Time Insights
            </h3>
            <p className="max-w-md text-lg">
              Waiting on reports slows decision-making. NetSuite delivers
              real-time dashboards and reporting, so you're always ahead of the
              curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

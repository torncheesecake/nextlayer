import { Code, Database, MonitorCheck, TrendingUp } from "lucide-react"; // pick icons that fit your services

export default function ServicesOverview() {
  return (
    <section className="bg-seasalt border-default-light dark:bg-techblack dark:border-default-dark w-full border-b py-20 transition-colors duration-300 relative z-40">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt font-que mb-8 text-left text-5xl font-bold">
          What We Do
        </h2>
        <div className="font-que grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Service 1 */}
          <div className="bg-seasalt border-default-light dark:bg-graphite  dark:border-default-dark bg-seasalt flex flex-col items-center rounded-xl border p-8 shadow shadow-lg transition">
            <Code className="mb-4 h-10 w-10 text-icon-brand-light" />
            <h3 className="text-graphite dark:text-seasalt mb-6 text-center text-3xl font-semibold">
              Bespoke Website Development
            </h3>
            <p className="text-seasalt /80 dark:text-seasalt/80 text-center text-base">
              Custom websites built from scratch—fast, secure, and tailored to
              your business needs.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-seasalt border-default-light dark:bg-graphite  dark:border-default-dark bg-seasalt flex flex-col items-center rounded-xl border p-8 shadow shadow-lg transition">
            <MonitorCheck className="mb-4 h-10 w-10 text-icon-brand-light" />
            <h3 className="text-graphite dark:text-seasalt mb-6 text-center text-3xl font-semibold">
              Performance & SEO Optimization
            </h3>
            <p className="text-seasalt /80 dark:text-seasalt/80 text-center text-base">
              Blazing load times and SEO best practices to help your site rank
              and convert.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-seasalt border-default-light dark:bg-graphite  dark:border-default-dark bg-seasalt flex flex-col items-center rounded-xl border p-8 shadow shadow-lg transition">
            <TrendingUp className="mb-4 h-10 w-10 text-icon-brand-light" />
            <h3 className="text-graphite dark:text-seasalt mb-6 text-center text-3xl font-semibold">
              Conversion-Focused Design
            </h3>
            <p className="text-seasalt /80 dark:text-seasalt/80 text-center text-base">
              UI/UX that turns visitors into customers—backed by data, not
              guesswork.
            </p>
          </div>
          {/* Service 4 */}
          <div className="bg-seasalt border-default-light dark:bg-graphite  dark:border-default-dark bg-seasalt flex flex-col items-center rounded-xl border p-8 shadow shadow-lg transition">
            <Database className="mb-4 h-10 w-10 text-icon-brand-light" />
            <h3 className="text-graphite dark:text-seasalt mb-6 text-center text-3xl font-semibold">
              Integrations & Automation
            </h3>
            <p className="text-seasalt /80 dark:text-seasalt/80 text-center text-base">
              Seamless integrations with your business tools, from CRMs to
              marketing platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

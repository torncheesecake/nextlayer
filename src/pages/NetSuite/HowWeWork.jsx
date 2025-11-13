import { ClipboardCheck, MessageCircle, Rocket } from "lucide-react";
export default function GetStartedProcess() {
  return (
    <section className="bg-seasalt dark:bg-graphite  py-28 transition-colors duration-300">
      <div className="container mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-10 text-center text-4xl leading-[1.08] font-semibold md:text-5xl">
          Getting Started: Our Simple Approach
        </h2>
        <p className="text-graphite dark:text-seasalt mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed">
          Working with Next Layer Consulting is straightforward and designed to
          minimise disruption, here is how a typical engagement looks:
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="bg-seasalt dark:bg-graphite flex flex-col items-center rounded-xl p-8 shadow-lg transition">
            <MessageCircle className="text-icon-brand-light dark:text-icon-brand-dark mb-5 h-12 w-12" />
            <h3 className="text-graphite dark:text-seasalt mb-2 text-center text-xl font-bold">
              1. Discovery Session
            </h3>
            <p className="text-graphite dark:text-seasalt text-center text-base">
              We start with a call to understand your current processes, ERP
              frustrations, and goals, no sales pitches, just learning what
              matters to you.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-seasalt dark:bg-graphite flex flex-col items-center rounded-xl p-8 shadow-lg transition">
            <ClipboardCheck className="text-icon-brand-light dark:text-icon-brand-dark mb-5 h-12 w-12" />
            <h3 className="text-graphite dark:text-seasalt mb-2 text-center text-xl font-bold">
              2. Solution Blueprint
            </h3>
            <p className="text-graphite dark:text-seasalt text-center text-base">
              Next, a tailored NetSuite solution is mapped out, identifying pain
              points and delivering a clear project plan, timelines, outcomes,
              and investment.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-seasalt dark:bg-graphite flex flex-col items-center rounded-xl p-8 shadow-lg transition">
            <Rocket className="text-icon-brand-light dark:text-icon-brand-dark mb-5 h-12 w-12" />
            <h3 className="text-graphite dark:text-seasalt mb-2 text-center text-xl font-bold">
              3. Implementation &amp; Growth
            </h3>
            <p className="text-graphite dark:text-seasalt text-center text-base">
              NetSuite is configured, data is migrated, and the system is
              launched with ongoing support and training, you focus on growth,
              the tech is handled.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="badge-accent hover:badge-accent dark:badge-accent dark:hover:badge-accent rounded-xl px-8 py-4 text-lg font-semibold shadow transition"
          >
            Start Your NetSuite Journey
          </a>
        </div>
      </div>
    </section>
  );
}

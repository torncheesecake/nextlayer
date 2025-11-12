import { BadgeCheck, Flame, Clock } from 'lucide-react';

export default function Prices() {
  return (
    <section
      className="py-20 bg-seasalt dark:bg-techblack scroll-mt-20"
      id="pricing"
    >
      <div className="px-6 mx-auto max-w-7xl">
        {/* Heading + intro copy constrained to 5xl */}
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-6 text-5xl font-bold text-center text-techblack dark:text-blue-50">
            OneSupport 12 &amp; 24 Month Contracts
          </h2>
          <p className="mb-16 text-lg text-center text-techblack dark:text-seasalt">
            Our senior consultants have delivered hundreds of implementations, many support projects,
            these are our rates, clear, transparent, exactly what it costs to put proven experience
            on your side.
          </p>
        </div>

        {/* Cards stay at max-w-7xl */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* OneSupport 80 */}
          <div
            className="relative flex flex-col p-10 text-center bg-white  shadow-lg rounded-xl  dark:bg-techblack"
            id="onesupport-80"
          >
            <h3 className="mb-8 text-2xl font-bold text-techblack dark:text-blue-50">OneSupport 80</h3>
            <p className="mb-0 text-lg font-semibold text-techblack dark:text-blue-50">80 hours per month</p>
            <p className="mb-6 text-3xl font-extrabold text-techblack dark:text-seasalt">£12,000 / month</p>
            <p className="mb-6 text-lg text-techblack dark:text-seasalt">Unused hours roll forward</p>
            <span className="px-4 py-1 mx-auto text-base rounded-full text-seasalt bg-nlc-blue dark:bg-nlc-blue/40 dark:text-seasalt">
              Best for rapid growth
            </span>
          </div>

          {/* OneSupport 50 (Most Popular) */}
          <div
            className="relative flex flex-col p-10 text-center scale-105 bg-white -4 shadow-lg rounded-xl dark:bg-techblack -nlc-blue"
            id="onesupport-50"
          >
            <div className="absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
              <span className="inline-flex items-center gap-2 px-6 py-2 font-bold text-white rounded-full shadow bg-nlc-blue">
                <Flame className="w-5 h-5" /> Most Popular
              </span>
            </div>
            <h3 className="mb-8 text-3xl font-bold text-techblack dark:text-seasalt">OneSupport 50</h3>
            <p className="mb-0 font-semibold text-techblack dark:text-blue-50">50 hours per month</p>
            <p className="mb-6 text-4xl font-extrabold text-techblack dark:text-seasalt">£8,000 / month</p>
            <p className="mb-6 text-lg text-techblack dark:text-seasalt">Unused hours roll forward</p>
            <span className="px-4 py-1 mx-auto text-base rounded-full text-seasalt bg-nlc-blue dark:bg-nlc-blue/40 dark:text-seasalt">
              For expanding teams
            </span>
          </div>

          {/* OneSupport 25 */}
          <div
            className="flex flex-col p-10 text-center bg-white  shadow-lg rounded-xl  dark:bg-techblack"
            id="onesupport-25"
          >
            <h3 className="mb-8 text-2xl font-bold text-techblack dark:text-seasalt">OneSupport 25</h3>
            <p className="mb-0 font-semibold text-techblack dark:text-blue-50">25 hours per month</p>
            <p className="mb-6 text-3xl font-extrabold text-techblack dark:text-seasalt">£4,250 / month</p>
            <p className="mb-6 text-lg text-techblack dark:text-seasalt">Unused hours roll forward</p>
            <span className="px-4 py-1 mx-auto text-base rounded-full text-seasalt bg-nlc-blue dark:bg-nlc-blue/40 dark:text-seasalt">
              For steady, essential support
            </span>
          </div>
        </div>

        {/* This concluding line remains at 7xl width */}
        <p className="mt-10 text-lg font-semibold text-center text-techblack dark:text-blue-50">
          OneSupport 80 gives you the most hours for your investment, it is our best value plan.
        </p>
      </div>
    </section>
  );
}

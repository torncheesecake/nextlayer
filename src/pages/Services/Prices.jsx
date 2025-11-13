import { Flame } from "lucide-react";
export default function Prices() {
  return (
    <section
      className="bg-biscay dark:bg-techblack scroll-mt-20 py-20"
      id="pricing"
    >
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-seasalt dark:text-seasalt mb-6 text-center text-5xl font-bold">
            OneSupport 12 and 24 Month Contracts
          </h2>
          <p className="text-seasalt dark:text-seasalt mb-16 text-center text-lg">
            Our senior consultants have delivered hundreds of implementations
            and support projects. These are our rates, clear and transparent,
            exactly what it costs to put proven experience on your side. Unused
            hours roll forward each month within your contract period.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* OneSupport 80 */}
          <div
            className=" dark:bg-graphite bg-seasalt relative flex flex-col rounded-xl border p-10 text-center shadow-lg"
            id="onesupport-80"
          >
            <h3 className="text-graphite dark:text-seasalt mb-8 text-2xl font-bold">
              OneSupport 80
            </h3>
            <p className="text-graphite dark:text-seasalt mb-0 text-lg font-semibold">
              80 hours per month
            </p>
            <p className="text-graphite dark:text-seasalt mb-6 text-3xl font-extrabold">
              &pound;12,000 / month
            </p>
            <span className="text-seasalt bg-biscay-light1 dark:bg-biscay-light2 dark:text-seasalt mx-auto rounded-full px-4 py-1 text-base">
              Best for rapid growth
            </span>
          </div>
          {/* OneSupport 50 (Most Popular) */}
          <div
            className=" border-bittersweet dark:bg-graphite dark:border-bittersweet-dark2  bg-seasalt relative flex scale-105 flex-col rounded-xl border-4 p-10 text-center shadow-lg"
            id="onesupport-50"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-bittersweet dark:bg-bittersweet-dark2 inline-flex items-center gap-2 rounded-full px-6 py-2 font-bold text-seasalt shadow-sm">
                <Flame className="h-5 w-5" /> Most Popular
              </span>
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-8 text-3xl font-bold">
              OneSupport 50
            </h3>
            <p className="text-graphite dark:text-seasalt mb-0 font-semibold">
              50 hours per month
            </p>
            <p className="text-graphite dark:text-seasalt mb-6 text-4xl font-extrabold">
              &pound;8,000 / month
            </p>
            <span className="text-seasalt bg-biscay-light1 dark:bg-biscay-light2 dark:text-seasalt mx-auto rounded-full px-4 py-1 text-base">
              For expanding teams
            </span>
          </div>
          {/* OneSupport 25 */}
          <div
            className=" dark:bg-graphite bg-seasalt flex flex-col rounded-xl border p-10 text-center shadow-lg"
            id="onesupport-25"
          >
            <h3 className="text-graphite dark:text-seasalt mb-8 text-2xl font-bold">
              OneSupport 25
            </h3>
            <p className="text-graphite dark:text-seasalt mb-0 font-semibold">
              25 hours per month
            </p>
            <p className="text-graphite dark:text-seasalt mb-6 text-3xl font-extrabold">
              &pound;4,250 / month
            </p>
            <span className="text-seasalt bg-biscay-light1 dark:bg-biscay-light2 dark:text-seasalt mx-auto rounded-full px-4 py-1 text-base">
              For steady, essential support
            </span>
          </div>
        </div>
        <p className="text-seasalt dark:text-seasalt mt-10 text-center text-lg font-semibold">
          OneSupport 80 gives you more hours for your investment making it your
          smartest choice.
        </p>
      </div>
    </section>
  );
}

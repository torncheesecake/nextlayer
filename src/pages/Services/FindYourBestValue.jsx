import { Flame } from "lucide-react";
export default function FindYourBestValue() {
  return (
    <section className="bg-seasalt dark:bg-graphite  py-20">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-graphite dark:text-seasalt mb-3 text-4xl font-bold">
            Find Your Best Value
          </h3>
          <p className="text-graphite dark:text-seasalt mb-12 text-lg">
            See how much you could save every month just by choosing a support
            package. Let us compare what you spend with PAYG and show how much
            you save when you pick a plan that fits your business needs.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          id="upsell-cards"
        >
          {/* 10 hrs/week, OneSupport 25 */}
          <div className="border-default-light bg-seasalt dark:border-default-dark dark:bg-graphite relative rounded-xl border p-10 shadow-lg">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-graphite dark:text-seasalt text-2xl font-bold">
                10 hrs / week
              </span>
            </div>
            <div className="text-graphite dark:text-seasalt text-3xl font-extrabold">
              Save £750 /mo
            </div>
            <div className="text-graphite dark:text-seasalt mt-2 text-lg font-medium">
              With OneSupport 25
            </div>
          </div>
          {/* 15 hrs/week, OneSupport 50 (highlight) */}
          <div className="border-default-light bg-seasalt dark:border-default-dark dark:bg-graphite relative rounded-xl border p-10 shadow-lg md:scale-105">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 rounded-full bg-nlc-blue px-4 py-1 text-sm font-bold text-seasalt shadow">
                <Flame className="h-4 w-4" /> Most Popular
              </span>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-graphite dark:text-seasalt text-2xl font-bold">
                15 hrs / week
              </span>
            </div>
            <div className="text-graphite dark:text-seasalt text-3xl font-extrabold">
              Save £2,000 /mo
            </div>
            <div className="text-graphite dark:text-seasalt mt-2 text-lg font-medium">
              With OneSupport 50
            </div>
          </div>
          {/* 20 hrs/week, OneSupport 80 */}
          <div className="border-default-light bg-seasalt dark:border-default-dark dark:bg-graphite relative rounded-xl border p-10 shadow-lg">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-graphite dark:text-seasalt text-2xl font-bold">
                20 hrs / week
              </span>
            </div>
            <div className="text-graphite dark:text-seasalt text-3xl font-extrabold">
              Save £4,000 /mo
            </div>
            <div className="text-graphite dark:text-seasalt mt-2 text-lg font-medium">
              With OneSupport 80
            </div>
          </div>
        </div>
        <p className="text-graphite dark:text-seasalt mt-12 text-center text-lg">
          Every package gives you great support and value. When you need more
          help, a bigger package is only a little more each month and your
          savings grow. You always get more hours and pay less overall. <br />{" "}
          <br /> It is simple, you get more hours, less worry, more savings for
          your business. <br /> <br /> Make the smart switch, pick the plan that
          fits your business, and see how much more you could save.
        </p>
      </div>
    </section>
  );
}

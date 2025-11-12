import { Clock, Flame, Star } from 'lucide-react';

export default function FindYourBestValue() {
  return (
    <section className="py-20 bg-seasalt dark:bg-techblack">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Heading + intro copy constrained to 5xl */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="mb-3 text-4xl font-bold text-techblack dark:text-blue-50">
            Find Your Best Value
          </h3>
          <p className="mb-12 text-lg text-techblack dark:text-seasalt">
            See how much you could save every month just by choosing a support package. Let's compare what you spend with PAYG and show how
            much you save when you pick a package that fits your needs.
          </p>
        </div>

        {/* Tiles stay within 7xl */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3" id="upsell-cards">
          {/* 10 hrs/week, OneSupport 25 */}
          <div className="relative p-10 bg-white  shadow-lg rounded-xl  dark:bg-techblack">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-techblack dark:text-seasalt">10 hrs / week</span>
            </div>
            <div className="text-3xl font-extrabold text-techblack dark:text-seasalt">Save £750 /mo</div>
            <div className="mt-2 text-lg font-medium text-techblack dark:text-seasalt">
              With OneSupport 25<br />
            </div>
          </div>

          {/* 15 hrs/week, OneSupport 50 (highlight) */}
          <div className="relative p-10 bg-white -4 shadow-lg rounded-xl -nlc-blue dark:bg-techblack md:scale-105">
            <div className="absolute -translate-x-1/2 -top-3 left-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold text-white rounded-full shadow bg-nlc-blue">
                <Flame className="w-4 h-4" /> Most Popular
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-techblack dark:text-seasalt">15 hrs / week</span>
            </div>
            <div className="text-3xl font-extrabold text-techblack dark:text-seasalt">Save £2,000 /mo</div>
            <div className="mt-2 text-lg font-medium text-techblack dark:text-seasalt">
              With OneSupport 50<br />
            </div>
          </div>

          {/* 20 hrs/week, OneSupport 80 */}
          <div className="relative p-10 bg-white  shadow-lg rounded-xl  dark:bg-techblack">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-techblack dark:text-seasalt">20 hrs / week</span>
            </div>
            <div className="text-3xl font-extrabold text-techblack dark:text-seasalt">Save £4,000 /mo</div>
            <div className="mt-2 text-lg font-medium text-techblack dark:text-seasalt">
              With OneSupport 80<br />
            </div>
          </div>
        </div>

        {/* Closing paragraph stays within 7xl */}
        <p className="mt-12 text-lg text-center text-techblack dark:text-blue-50">
          Every package gives you great support and value. When you need more help, a bigger package is only a little more each month and
          your savings grow. You always get more hours and pay less overall.
          <br /><br />
          It is simple, you get more hours, less worry, more savings for your business.
          <br /><br />
          Make the smart switch, pick the plan that fits your business, and see how much more you could save.
        </p>
      </div>
    </section>
  );
}

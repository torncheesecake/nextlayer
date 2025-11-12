import { LampDesk, CircleUserRound, Target, FileLock } from 'lucide-react';

export default function WhyUs() { 
  return (
    <section className="text-center transition-colors duration-300 bg-seasalt dark:bg-techblack py-28">
      {/* Why Choose Next Layer (grid) */}
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Section headline */}
        <h2 className="mb-12 text-5xl leading-[1.08] font-semibold text-center text-techblack dark:text-blue-100">
          Why choose Next Layer?
        </h2>
        <div className="grid gap-12 md:grid-cols-4">
          {/* Straight-talking */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-nlc-blue dark:text-seasalt"><LampDesk className="w-12 h-12" /></span>
            <h3 className="mb-2 text-2xl leading-[1.1] font-bold text-techblack dark:text-blue-100 tracking-tight">
              Straight-talking
            </h3>
            <p className="text-lg leading-[1.5] text-techblack dark:text-blue-100 mt-1 max-w-xs">
              We keep things Straightforward. No sales waffle, just honest advice.
            </p>
          </div>
          {/* Fit for Humans */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-nlc-blue dark:text-seasalt"><CircleUserRound className="w-12 h-12" /></span>
            <h3 className="mb-2 text-2xl leading-[1.1] font-bold text-techblack dark:text-blue-100 tracking-tight">
              Fit for Humans
            </h3>
            <p className="text-lg leading-[1.5] text-techblack dark:text-blue-100 mt-1 max-w-xs">
              Your business isn't a one-size-fits-all, so your solutions shouldn't be either.
            </p>
          </div>
          {/* Own the Result */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-nlc-blue dark:text-nlc-blue"><Target className="w-12 h-12" /></span>
            <h3 className="mb-2 text-2xl leading-[1.1] font-bold text-techblack dark:text-blue-100 tracking-tight">
              Own the Result
            </h3>
            <p className="text-lg leading-[1.5] text-techblack dark:text-blue-100 mt-1 max-w-xs">
              From first chat to long-term partnership, you're always in the loop.
            </p>
          </div>
          {/* Security by Default */}
          <div className="flex flex-col items-center text-left md:text-center">
            <span className="mb-6 text-nlc-blue dark:text-seasalt"><FileLock className="w-12 h-12" /></span>
            <h3 className="mb-2 text-2xl leading-[1.1] font-bold text-techblack dark:text-blue-100 tracking-tight">
              Security by Default
            </h3>
            <p className="text-lg leading-[1.5] text-techblack dark:text-blue-100 mt-1 max-w-xs">
              Your business and your brand stay protected, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

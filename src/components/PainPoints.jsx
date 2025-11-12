import { ChartBar, TriangleAlert, Hourglass, Rocket } from 'lucide-react';

export default function PainPoints() {
  return (
    <section className="py-24 transition-colors duration-300 bg-seasalt dark:bg-techblack">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Section headline */}
        <h2 className="mb-12 text-5xl font-semibold leading-[1.08] text-center text-techblack dark:text-blue-50">
          Do any of these sound familiar?
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Row 1 - left */}
          <div className="relative p-8 overflow-hidden bg-white dark:bg-techblack group rounded-2xl">
            <span className="absolute top-0 left-0 w-1 h-full bg-nlc-blue dark:bg-nlc-blue" />
            <div className="flex items-start gap-5">
              <span className="text-techblack dark:text-seasalt">
                <ChartBar className="w-10 h-10" />
              </span>
              <p className="text-lg leading-[1.5] font-light text-techblack dark:text-blue-50 mt-1 mb-0">
                Want to replace manual work with smart, connected systems and escape together?
              </p>
            </div>
          </div>

          {/* Row 1 - right */}
          <div className="relative p-8 overflow-hidden bg-white dark:bg-techblack group rounded-2xl">
            <span className="absolute top-0 left-0 w-1 h-full bg-nlc-blue dark:bg-nlc-blue" />
            <div className="flex items-start gap-5">
              <span className="text-techblack dark:text-seasalt">
                <TriangleAlert className="w-10 h-10" />
              </span>
              <p className="text-lg leading-[1.5] font-light text-techblack dark:text-seasalt mt-1 mb-0">
                Lost orders, double shipments, or mystery numbers making your team chase shadows?
              </p>
            </div>
          </div>

          {/* Row 2 - left */}
          <div className="relative p-8 overflow-hidden bg-white dark:bg-techblack group rounded-2xl">
            <span className="absolute top-0 left-0 w-1 h-full bg-nlc-blue dark:bg-nlc-blue" />
            <div className="flex items-start gap-5">
              <span className="text-techblack dark:text-seasalt">
                <Hourglass className="w-10 h-10" />
              </span>
              <p className="text-lg leading-[1.5] font-light text-techblack dark:text-blue-50 mt-1 mb-0">
                Slow decisions because your systems do not speak to each other?
              </p>
            </div>
          </div>

          {/* Row 2 - right */}
          <div className="relative p-8 overflow-hidden bg-white dark:bg-techblack group rounded-2xl">
            <span className="absolute top-0 left-0 w-1 h-full bg-nlc-blue dark:bg-nlc-blue" />
            <div className="flex items-start gap-5">
              <span className="text-techblack dark:text-seasalt">
                <Rocket className="w-10 h-10" />
              </span>
              <p className="text-lg leading-[1.5] font-light text-techblack dark:text-blue-50 mt-1 mb-0">
                Want to break free from legacy tech and actually move forward? You've found your answer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

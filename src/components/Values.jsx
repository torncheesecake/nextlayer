import { Lightbulb, Smile, Star, TrendingUp } from 'lucide-react';

export default function Values() {
  return (
    <section className="py-20 bg-seasalt dark:bg-techblack">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-10 text-4xl font-bold text-nlc-blue dark:text-blue-100">
          What makes us any different?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* All the Experience */}
          <div className="relative p-6 bg-white  shadow-lg rounded-lgbg-white rounded-xl  dark:bg-techblack">
            <span className="absolute top-0 left-0 w-1 h-full bg-nlc-blue dark:bg-seasalt" />
            <div className="mb-3 text-nlc-blue dark:text-seasalt">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-techblack dark:text-seasalt">
              All the Experience
            </h3>
            <p className="text-lg text-techblack dark:text-blue-100">
              Hundreds of NetSuite projects under our belt. If it can go wrong,
              chances are we've already solved it.
            </p>
          </div>

          {/* Real Experts */}
          <div className="relative p-6 bg-white  shadow-lg rounded-lgbg-white rounded-xl  dark:bg-techblack">
            <span className="absolute top-0 left-0 w-1 h-full bg-nlc-blue dark:bg-seasalt" />
            <div className="mb-3 text-techblack dark:text-seasalt">
              <Smile className="w-8 h-8" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-techblack dark:text-seasalt">
              Real Experts
            </h3>
            <p className="text-lg text-techblack dark:text-blue-100">
              You'll always speak to someone who knows their stuff, no scripts,
              no runarounds, no long waits.
            </p>
          </div>

          {/* Proven Support */}
          <div className="relative p-6 bg-white  shadow-lg rounded-lgbg-white rounded-xl  dark:bg-techblack">
            <span className="absolute top-0 left-0 w-1 h-full bg-nlc-blue dark:bg-seasalt" />
            <div className="mb-3 text-nlc-blue dark:text-seasalt">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-techblack dark:text-seasalt">
              Proven Support
            </h3>
            <p className="text-lg text-techblack dark:text-blue-100">
              We keep clients long-term because we never disappear or pass you
              around.
            </p>
          </div>

          {/* Simple, Not Stressful */}
          <div className="relative p-6 bg-white  shadow-lg rounded-lgbg-white rounded-xl  dark:bg-techblack">
            <span className="absolute top-0 left-0 w-1 h-full bg-nlc-blue dark:bg-seasalt" />
            <div className="mb-3 text-nlc-blue dark:text-seasalt">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-nlc-blue dark:text-seasalt">
              Simple, Not Stressful
            </h3>
            <p className="text-lg text-techblack dark:text-blue-100">
              Work should be enjoyable. We bring some humour and keep things
              simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

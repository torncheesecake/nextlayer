import { Lightbulb, Smile, Star, TrendingUp } from "lucide-react";
export default function Values() {
  return (
    <section className="dark:bg-graphite  bg-seasalt py-20 relative z-40">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="dark:text-seasalt mb-10 text-4xl font-bold text-techblack">
          What makes us any different?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* All the Experience */}
          <div className="bg-seasalt border-zinc-300 dark:bg-graphite dark:border-default-dark relative rounded-xl border p-6 shadow-lg">
            <span className="bg-biscay dark:bg-seasalt absolute top-0 left-0 h-full w-1" />
            <div className="mb-3 text-bittersweet dark:text-bittersweet-dark2">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-1 text-lg font-semibold">
              All the Experience
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              Hundreds of NetSuite projects under our belt. If it can go wrong,
              chances are we've already solved it.
            </p>
          </div>
          {/* Real Experts */}
          <div className="bg-seasalt border-zinc-300 dark:bg-graphite dark:border-default-dark relative rounded-xl border p-6 shadow-lg">
            <span className="bg-biscay dark:bg-seasalt absolute top-0 left-0 h-full w-1" />
            <div className="text-bittersweet dark:text-bittersweet-dark2 mb-3">
              <Smile className="h-8 w-8" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-1 text-lg font-semibold">
              Real Experts
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              You'll always speak to someone who knows their stuff, no scripts,
              no runarounds, no long waits.
            </p>
          </div>
          {/* Proven Support */}
          <div className="bg-seasalt border-zinc-300 dark:bg-graphite dark:border-default-dark relative rounded-xl border p-6 shadow-lg">
            <span className="bg-biscay dark:bg-seasalt absolute top-0 left-0 h-full w-1" />
            <div className="mb-3 text-bittersweet dark:text-bittersweet-dark2">
              <Star className="h-8 w-8" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-1 text-lg font-semibold">
              Proven Support
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              We keep clients long-term because we never disappear or pass you
              around.
            </p>
          </div>
          {/* Simple, Not Stressful */}
          <div className="bg-seasalt border-zinc-300 dark:bg-graphite dark:border-default-dark relative rounded-xl border p-6 shadow-lg">
            <span className="bg-biscay dark:bg-seasalt absolute top-0 left-0 h-full w-1" />
            <div className="mb-3 text-bittersweet dark:text-bittersweet-dark2">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-techblack dark:text-seasalt">
              Simple, Not Stressful
            </h3>
            <p className="text-graphite dark:text-seasalt text-lg">
              Work should be enjoyable. We bring some humour and keep things
              simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

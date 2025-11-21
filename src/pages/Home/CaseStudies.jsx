import { TrendingUp, Clock, Target } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      industry: "Manufacturing",
      challenge:
        "A UK-based manufacturing company was struggling with a 10-day month-end close process, unreliable inventory data, and disconnected systems between production and finance.",
      solution:
        "We re-implemented their NetSuite instance with proper inventory controls, automated inter-department workflows, and streamlined financial consolidation processes.",
      results: [
        { metric: "70% faster", description: "Month-end close time" },
        { metric: "95%", description: "Inventory accuracy" },
        { metric: "Zero", description: "Manual spreadsheets" },
      ],
      timeline: "14 weeks",
    },
    {
      industry: "Distribution",
      challenge:
        "An international warehouse and distribution company needed to migrate from legacy systems to NetSuite while maintaining operations across multiple countries and currencies.",
      solution:
        "We implemented NetSuite OneWorld with custom integrations for their warehouse management system, automated multi-currency consolidation, and real-time inventory visibility across all locations.",
      results: [
        { metric: "50%", description: "Reduction in order processing time" },
        { metric: "Real-time", description: "Multi-location inventory visibility" },
        { metric: "85%+", description: "User adoption within 2 months" },
      ],
      timeline: "16 weeks",
    },
    {
      industry: "Professional Services",
      challenge:
        "A growing professional services firm had outgrown QuickBooks and needed better project profitability tracking, resource planning, and client billing automation.",
      solution:
        "We implemented NetSuite with SuitePeople for resource management, project accounting modules, and automated time & billing workflows tailored to their fee structures.",
      results: [
        { metric: "100%", description: "Visibility into project profitability" },
        { metric: "3 days", description: "Faster client invoicing" },
        { metric: "40%", description: "Reduction in administrative overhead" },
      ],
      timeline: "12 weeks",
    },
  ];

  return (
    <section className="bg-seasalt dark:bg-graphite py-24 relative z-40">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-4 text-center text-5xl font-bold">
          Real results, real businesses
        </h2>
        <p className="text-graphite dark:text-seasalt mb-16 text-center text-lg max-w-3xl mx-auto">
          See how we've helped UK businesses transform their operations with
          NetSuite implementations and rescues.
        </p>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white dark:bg-techblack border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Industry Tag */}
              <div className="inline-block bg-bittersweet/10 dark:bg-bittersweet-dark2/10 text-bittersweet dark:text-bittersweet-dark2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                {study.industry}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Challenge & Solution */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-techblack dark:text-seasalt text-xl font-bold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-bittersweet dark:text-bittersweet-dark2" />
                      The Challenge
                    </h3>
                    <p className="text-graphite dark:text-seasalt/90 text-base leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-techblack dark:text-seasalt text-xl font-bold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-bittersweet dark:text-bittersweet-dark2" />
                      Our Solution
                    </h3>
                    <p className="text-graphite dark:text-seasalt/90 text-base leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-graphite dark:text-seasalt/80 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>Project Timeline: {study.timeline}</span>
                  </div>
                </div>

                {/* Right: Results */}
                <div className="bg-seasalt dark:bg-graphite border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-techblack dark:text-seasalt text-xl font-bold mb-6">
                    Measurable Results
                  </h3>
                  <div className="space-y-5">
                    {study.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="border-l-4 border-bittersweet dark:border-bittersweet-dark2 pl-4"
                      >
                        <div className="text-bittersweet dark:text-bittersweet-dark2 text-3xl font-bold mb-1">
                          {result.metric}
                        </div>
                        <div className="text-graphite dark:text-seasalt/80 text-base">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

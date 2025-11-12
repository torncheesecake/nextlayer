import { useState, Suspense, lazy } from "react";

const SuiteAppsAutomation = lazy(() => import("./SuiteAppsAutomation"));
const SuiteAppsQuality = lazy(() => import("./SuiteAppsQuality"));
const SuiteAppsFinance = lazy(() => import("./SuiteAppsFinance"));
const SuiteAppsAi = lazy(() => import("./SuiteAppsAi"));

const CATEGORIES = [
  { key: "automation", label: "Automation & Controls" },
  { key: "quality", label: "Quality & Compliance" },
  { key: "finance", label: "Finance & Operations" },
  { key: "ai", label: "AI & Advanced" }
];

export default function SuiteAppsGrid() {
  const [cat, setCat] = useState("automation");
  return (
    <section className="text-center transition-colors duration-300 bg-seasalt dark:bg-techblack py-28">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-10 text-4xl leading-[1.08] font-semibold text-center text-nlc-blue dark:text-blue-100">
          Explore All Our SuiteApps
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setCat(key)}
              className={`px-5 py-2 rounded-full font-semibold  ${
                cat === key
                  ? "bg-nlc-blue text-white -nlc-blue"
                  : "bg-white dark:bg-techblack text-nlc-blue -zinc-200 dark:text-blue-50"
              } transition`}
            >
              {label}
            </button>
          ))}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {cat === "automation" && <SuiteAppsAutomation />}
          {cat === "quality" && <SuiteAppsQuality />}
          {cat === "finance" && <SuiteAppsFinance />}
          {cat === "ai" && <SuiteAppsAi />}
        </Suspense>
      </div>
    </section>
  );
}

import { Suspense, lazy, useState } from "react";
const SuiteAppsAutomation = lazy(() => import("./SuiteAppsAutomation"));
const SuiteAppsQuality = lazy(() => import("./SuiteAppsQuality"));
const SuiteAppsFinance = lazy(() => import("./SuiteAppsFinance"));
const SuiteAppsAi = lazy(() => import("./SuiteAppsAi"));
const CATEGORIES = [
  { key: "automation", label: "Automation & Controls" },
  { key: "quality", label: "Quality & Compliance" },
  { key: "finance", label: "Finance & Operations" },
  { key: "ai", label: "AI & Advanced" },
];
export default function SuiteAppsGrid() {
  const [cat, setCat] = useState("automation");
  return (
    <section className="dark:bg-techblack bg-seasalt py-28 text-center transition-colors duration-300">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="dark:text-seasalt mb-10 text-center text-4xl leading-[1.08] font-semibold text-icon-brand-light">
          Explore All Our SuiteApps
        </h2>
        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setCat(key)}
              className={`rounded-full px-5 py-2 font-semibold ${cat === key ? "badge-accent -nlc-blue text-white" : "dark:bg-techblack -zinc-200 bg-seasalt text-icon-brand-light dark:text-blue-50"} transition`}
            >
              {label}
            </button>
          ))}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {cat === "automation" && <SuiteAppsAutomation />}
          {cat === "quality" && <SuiteAppsQuality />}{" "}
          {cat === "finance" && <SuiteAppsFinance />}
          {cat === "ai" && <SuiteAppsAi />}
        </Suspense>
      </div>
    </section>
  );
}

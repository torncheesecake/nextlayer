import { useEffect, useState } from "react";

const MODULES = [
  { name: "ERP", cost: 3000 },
  { name: "CRM", cost: 2000 },
  { name: "eCommerce", cost: 1500 },
  { name: "Supply Chain Management", cost: 2500 },
  { name: "Professional Services Automation", cost: 2200 },
  { name: "Warehouse Management System", cost: 2000 },
  { name: "Human Capital Management", cost: 2000 },
  { name: "Advanced Financials", cost: 1800 },
  { name: "Global Business Management", cost: 2200 },
  { name: "Advanced Manufacturing", cost: 2300 },
  { name: "Fixed Assets Management", cost: 1000 },
  { name: "Marketing Automation", cost: 1500 },
  { name: "Advanced Inventory", cost: 1500 },
  { name: "Analytics and Reporting", cost: 1300 },
];

const INTEGRATIONS = [
  { name: "eCommerce Platform", cost: 1000 },
  { name: "EPOS", cost: 1000 },
  { name: "Other", cost: 1000 },
];

const SUPPORT_MULTIPLIER = 1;
const IMPLEMENTATION_MULTIPLIER = 2;
const STORAGE_KEY = "nlc-netsuite-calculator-state";

const validateNumber = (val, min, max) => {
  if (val === "") return "";
  const num = Number(val);
  if (isNaN(num)) return "Value must be a number";
  if (num < min) return `Value cannot be less than ${min}`;
  if (max !== undefined && num > max)
    return `Value cannot be greater than ${max}`;
  return "";
};

export default function NetSuiteCostCalculator() {
  const initialState = {
    subsidiaries: "",
    users: "",
    countries: "",
    selectedModules: [],
    selectedIntegrations: [],
  };

  const [calculatorState, setCalculatorState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialState;
    } catch {
      return initialState;
    }
  });

  const {
    subsidiaries,
    users,
    countries,
    selectedModules,
    selectedIntegrations,
  } = calculatorState;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({
      subsidiaries: validateNumber(subsidiaries, 1, 200),
      users: validateNumber(users, 1, 5000),
      countries: validateNumber(countries, 1),
    });
  }, [subsidiaries, users, countries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(calculatorState));
  }, [calculatorState]);

  const updateField = (field, value) => {
    setCalculatorState((prev) => ({
      ...prev,
      [field]: value.replace(/[^\d]/g, ""), // Keep only numbers
    }));
  };

  const toggleModule = (name) => {
    setCalculatorState((prev) => {
      const modules = prev.selectedModules.includes(name)
        ? prev.selectedModules.filter((m) => m !== name)
        : [...prev.selectedModules, name];
      return { ...prev, selectedModules: modules };
    });
  };

  const toggleIntegration = (name) => {
    setCalculatorState((prev) => {
      const integrations = prev.selectedIntegrations.includes(name)
        ? prev.selectedIntegrations.filter((i) => i !== name)
        : [...prev.selectedIntegrations, name];
      return { ...prev, selectedIntegrations: integrations };
    });
  };

  const resetAll = () => {
    setCalculatorState(initialState);
    setErrors({});
  };

  // Calculate all costs using parsed numbers, fall back to 0 for empty input
  const nSubs = Number(subsidiaries) || 0;
  const nUsers = Number(users) || 0;
  const nCountries = Number(countries) || 0;
  const MODULE_COSTS = selectedModules.reduce(
    (sum, name) => sum + (MODULES.find((m) => m.name === name)?.cost ?? 0),
    0,
  );
  const INTEGRATION_COSTS = selectedIntegrations.reduce(
    (sum, name) => sum + (INTEGRATIONS.find((i) => i.name === name)?.cost ?? 0),
    0,
  );
  const annualLicenceCost =
    nUsers * 1000 +
    nSubs * 500 +
    nCountries * 300 +
    MODULE_COSTS +
    INTEGRATION_COSTS;
  const implementationCost = annualLicenceCost * IMPLEMENTATION_MULTIPLIER;
  const annualSupportCost = annualLicenceCost * SUPPORT_MULTIPLIER;
  const totalCost5Years =
    annualLicenceCost * 5 + implementationCost + annualSupportCost * 5;

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <section className="bg-seasalt dark:bg-techblack relative z-40 min-h-screen p-6 transition-colors duration-300 md:p-12">
      <div className="dark:bg-graphite border-default-light mx-auto w-[90%] max-w-7xl rounded-xl border bg-seasalt p-12 shadow-lg">
        <div className="mb-14 flex items-center justify-between">
          <h1 className="text-graphite dark:text-seasalt mb-12 text-7xl font-bold tracking-tight">
            NetSuite Cost Calculator
          </h1>
          <button
            onClick={resetAll}
            type="button"
            className="border-biscay text-biscay hover:text-seasalt hover:bg-biscay-light2 dark:text-seasalt dark:hover:badge-accent/90 rounded-full border px-6 py-3 font-semibold transition"
            aria-label="Clear all inputs"
          >
            Clear All
          </button>
        </div>
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-[1fr_400px]">
          {/* LEFT */}
          <section>
            <h2 className="text-techblack dark:text-seasalt border-default-dark mb-8 border-b-4 pb-2 text-5xl font-semibold">
              Company Profile
            </h2>
            <label
              htmlFor="subsidiaries"
              className="text-graphite dark:text-seasalt mb-2 flex items-center font-semibold"
            >
              Number of Subsidiaries (max 200)
            </label>
            <input
              id="subsidiaries"
              type="number"
              min={1}
              max={200}
              value={subsidiaries}
              onChange={(e) => updateField("subsidiaries", e.target.value)}
              className={`dark:bg-graphite text-graphite placeholder:text-spacegrey/40 dark:text-seasalt border-default-light/40 focus:border-snow w-full rounded-lg border bg-seasalt px-5 py-3 text-lg transition focus:outline-none ${errors.subsidiaries ? "border-red-500" : ""}`}
              placeholder="Enter number of subsidiaries"
              aria-describedby="subsidiaries-error"
            />
            {errors.subsidiaries && (
              <p id="subsidiaries-error" className="mb-4 text-sm text-red-500">
                {errors.subsidiaries}
              </p>
            )}
            <label
              htmlFor="users"
              className="text-graphite dark:text-seasalt mb-2 flex items-center font-semibold"
            >
              Number of Users (max 5000)
            </label>
            <input
              id="users"
              type="number"
              min={1}
              max={5000}
              value={users}
              onChange={(e) => updateField("users", e.target.value)}
              className={`dark:bg-graphite text-graphite placeholder:text-spacegrey/40 dark:text-seasalt border-default-light/40 focus:border-snow w-full rounded-lg border bg-seasalt px-5 py-3 text-lg transition focus:outline-none ${errors.users ? "border-red-500" : ""}`}
              placeholder="Enter number of users"
              aria-describedby="users-error"
            />
            {errors.users && (
              <p id="users-error" className="mb-4 text-sm text-red-500">
                {errors.users}
              </p>
            )}
            <label
              htmlFor="countries"
              className="text-graphite dark:text-seasalt mb-2 flex items-center font-semibold"
            >
              Number of Countries Subsidiaries Operate In
            </label>
            <input
              id="countries"
              type="number"
              min={1}
              value={countries}
              onChange={(e) => updateField("countries", e.target.value)}
              className={`dark:bg-graphite text-graphite placeholder:text-spacegrey/40 dark:text-seasalt border-default-light/40 focus:border-snow w-full rounded-lg border bg-seasalt px-5 py-3 text-lg transition focus:outline-none ${errors.countries ? "border-red-500" : ""}`}
              placeholder="Enter number of countries"
              aria-describedby="countries-error"
            />
            {errors.countries && (
              <p id="countries-error" className="mb-4 text-sm text-red-500">
                {errors.countries}
              </p>
            )}
          </section>
          <section className="dark:bg-graphite border-graphite mb-14 rounded-lg border bg-seasalt p-8 dark:shadow-none">
            <h2 className="text-techblack dark:text-seasalt border-default-dark mb-8 border-b-4 pb-2 text-5xl font-semibold">
              Required Modules
            </h2>
            <div className="scrollbar-thin scrollbar-thumb-nlc-blue scrollbar-track-silver dark:scrollbar-track-sideral max-h-56 overflow-y-auto pr-4">
              {MODULES.map(({ name, cost }) => (
                <label
                  key={name}
                  className="text-graphite dark:text-seasalt mb-2 flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    checked={selectedModules.includes(name)}
                    onChange={() => toggleModule(name)}
                    className="accent-nlc-blue mr-4 h-5 w-5 cursor-pointer"
                  />
                  {name} (£{cost.toLocaleString()}/year)
                </label>
              ))}
            </div>
          </section>
          <section className="dark:bg-graphite border-graphite mb-14 rounded-lg border bg-seasalt p-8 dark:shadow-none">
            <h2 className="text-techblack dark:text-seasalt border-default-dark mb-8 border-b-4 pb-2 text-5xl font-semibold">
              External Systems to Integrate
            </h2>
            <div className="scrollbar-thin scrollbar-thumb-nlc-blue scrollbar-track-silver dark:scrollbar-track-sideral max-h-56 overflow-y-auto pr-4">
              {INTEGRATIONS.map(({ name, cost }) => (
                <label
                  key={name}
                  className="text-graphite dark:text-seasalt mb-2 flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    checked={selectedIntegrations.includes(name)}
                    onChange={() => toggleIntegration(name)}
                    className="accent-nlc-blue mr-4 h-5 w-5 cursor-pointer"
                  />
                  {name} (£{cost.toLocaleString()}/year)
                </label>
              ))}
            </div>
          </section>
          {/* RIGHT: Summary */}
          <aside className=" dark:bg-techblack bg-biscay sticky top-6 flex max-w-[400px] flex-col justify-center self-start rounded-xl p-10 text-center shadow-lg">
            <h2 className="text-seasalt dark:text-seasalt mb-8 text-5xl font-semibold">
              Estimated Costs
            </h2>
            {hasErrors ? (
              <p className="mb-6 font-semibold text-red-600 dark:text-red-400">
                Please fix input errors above to see an estimate.
              </p>
            ) : (
              <>
                <p className="text-seasalt dark:text-seasalt mb-6 text-3xl font-semibold">
                  Annual Licence Cost:
                  <span className="text-seasalt font-bold">
                    {" "}
                    £{annualLicenceCost.toLocaleString()}
                  </span>
                </p>
                <hr className="border-bittersweet dark:border-seasalt mb-6" />
                <p className="text-seasalt mb-6 text-3xl font-bold">
                  Total Estimated Cost
                  <br />
                  over 5 Years
                </p>
                <p className="text-seasalt dark:text-seasalt/80 mb-6 text-base font-light">
                  (Including implementation &amp; support costs)
                </p>
                <p className="text-seasalt mb-8 text-5xl font-bold">
                  £{totalCost5Years.toLocaleString()}
                </p>
              </>
            )}
            <p className="text-seasalt dark:text-seasalt/60 mx-auto max-w-[320px] text-sm font-light">
              * This is an estimate. Actual pricing depends on your specific
              requirements and complexity. Please{" "}
              <a href="/contact" className="text-seasalt underline">
                get in touch
              </a>{" "}
              for a detailed consultation.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

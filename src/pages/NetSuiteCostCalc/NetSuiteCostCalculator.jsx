import { useEffect, useState } from "react";
import {
  Building2,
  Users2,
  Globe2,
  Package,
  Link as LinkIcon,
  RotateCcw,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const MODULES = [
  { name: "ERP", cost: 20000 },
  { name: "eCommerce", cost: 50000 },
  { name: "Supply Chain Management", cost: 5000 },
  { name: "Professional Services Automation", cost: 5000 },
  { name: "Warehouse Management System", cost: 5000 },
  { name: "Human Capital Management", cost: 5000 },
  { name: "Advanced Financials", cost: 5800 },
  { name: "Global Business Management", cost: 5000 },
  { name: "Advanced Manufacturing", cost: 5000 },
  { name: "Fixed Assets Management", cost: 5000 },
  { name: "Marketing Automation", cost: 5000 },
  { name: "Advanced Inventory", cost: 5000 },
  { name: "Analytics and Reporting", cost: 5000 },
];

const INTEGRATIONS = [
  { name: "eCommerce Platform", cost: 10000 },
  { name: "EPOS", cost: 10000 },
  { name: "Other", cost: 10000 },
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
      [field]: value.replace(/[^\d]/g, ""),
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

  // Calculate all costs
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
    <section className="bg-seasalt dark:bg-graphite py-20 transition-colors duration-300 relative z-40">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-techblack dark:text-seasalt mb-4 text-5xl font-bold">
            NetSuite Cost Calculator
          </h1>
          <p className="text-graphite dark:text-seasalt text-lg max-w-3xl mx-auto mb-8">
            Get an instant estimate of your NetSuite implementation and running
            costs. Fill in your requirements below to see a detailed breakdown.
          </p>
          <button
            onClick={resetAll}
            type="button"
            className="inline-flex items-center gap-2 bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 rounded-full px-6 py-3 font-semibold shadow-lg transition"
            aria-label="Clear all inputs"
          >
            <RotateCcw size={18} />
            Reset Calculator
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Inputs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Profile Card */}
            <div className="bg-white dark:bg-techblack rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
              <h2 className="text-techblack dark:text-seasalt mb-6 text-2xl font-bold flex items-center gap-3">
                <div className="p-2 rounded-full bg-bittersweet/10 dark:bg-bittersweet-dark2/20">
                  <Building2 className="h-6 w-6 text-bittersweet dark:text-bittersweet-dark2" />
                </div>
                Company Profile
              </h2>

              <div className="space-y-6">
                {/* Subsidiaries */}
                <div>
                  <label
                    htmlFor="subsidiaries"
                    className="text-techblack dark:text-seasalt mb-2 flex items-center gap-2 font-semibold text-base"
                  >
                    <Building2
                      size={18}
                      className="text-bittersweet dark:text-bittersweet-dark2"
                    />
                    Number of Subsidiaries
                  </label>
                  <input
                    id="subsidiaries"
                    type="number"
                    min={1}
                    max={200}
                    value={subsidiaries}
                    onChange={(e) =>
                      updateField("subsidiaries", e.target.value)
                    }
                    className={`w-full rounded-lg border ${errors.subsidiaries ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-white dark:bg-graphite text-techblack dark:text-seasalt px-4 py-3 text-lg transition focus:outline-none focus:ring-2 focus:ring-bittersweet dark:focus:ring-bittersweet-dark2`}
                    placeholder="e.g., 5"
                    aria-describedby="subsidiaries-error"
                  />
                  {errors.subsidiaries && (
                    <p
                      id="subsidiaries-error"
                      className="mt-1 text-sm text-red-500 flex items-center gap-1"
                    >
                      <Info size={14} /> {errors.subsidiaries}
                    </p>
                  )}
                  <p className="text-graphite dark:text-seasalt/70 text-base mt-1">
                    Max 200 subsidiaries
                  </p>
                </div>

                {/* Users */}
                <div>
                  <label
                    htmlFor="users"
                    className="text-techblack dark:text-seasalt mb-2 flex items-center gap-2 font-semibold text-base"
                  >
                    <Users2
                      size={18}
                      className="text-bittersweet dark:text-bittersweet-dark2"
                    />
                    Number of Users
                  </label>
                  <input
                    id="users"
                    type="number"
                    min={1}
                    max={5000}
                    value={users}
                    onChange={(e) => updateField("users", e.target.value)}
                    className={`w-full rounded-lg border ${errors.users ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-white dark:bg-graphite text-techblack dark:text-seasalt px-4 py-3 text-lg transition focus:outline-none focus:ring-2 focus:ring-bittersweet dark:focus:ring-bittersweet-dark2`}
                    placeholder="e.g., 50"
                    aria-describedby="users-error"
                  />
                  {errors.users && (
                    <p
                      id="users-error"
                      className="mt-1 text-sm text-red-500 flex items-center gap-1"
                    >
                      <Info size={14} /> {errors.users}
                    </p>
                  )}
                  <p className="text-graphite dark:text-seasalt/70 text-base mt-1">
                    Max 5,000 users
                  </p>
                </div>

                {/* Countries */}
                <div>
                  <label
                    htmlFor="countries"
                    className="text-techblack dark:text-seasalt mb-2 flex items-center gap-2 font-semibold text-base"
                  >
                    <Globe2
                      size={18}
                      className="text-bittersweet dark:text-bittersweet-dark2"
                    />
                    Countries of Operation
                  </label>
                  <input
                    id="countries"
                    type="number"
                    min={1}
                    value={countries}
                    onChange={(e) => updateField("countries", e.target.value)}
                    className={`w-full rounded-lg border ${errors.countries ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-white dark:bg-graphite text-techblack dark:text-seasalt px-4 py-3 text-lg transition focus:outline-none focus:ring-2 focus:ring-bittersweet dark:focus:ring-bittersweet-dark2`}
                    placeholder="e.g., 3"
                    aria-describedby="countries-error"
                  />
                  {errors.countries && (
                    <p
                      id="countries-error"
                      className="mt-1 text-sm text-red-500 flex items-center gap-1"
                    >
                      <Info size={14} /> {errors.countries}
                    </p>
                  )}
                  <p className="text-graphite dark:text-seasalt/70 text-base mt-1">
                    Number of countries your subsidiaries operate in
                  </p>
                </div>
              </div>
            </div>

            {/* Modules Card */}
            <div className="bg-white dark:bg-techblack rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
              <h2 className="text-techblack dark:text-seasalt mb-6 text-2xl font-bold flex items-center gap-3">
                <div className="p-2 rounded-full bg-bittersweet/10 dark:bg-bittersweet-dark2/20">
                  <Package className="h-6 w-6 text-bittersweet dark:text-bittersweet-dark2" />
                </div>
                Required Modules
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg">
                Select the NetSuite modules you need ({selectedModules.length}{" "}
                selected)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {MODULES.map(({ name, cost }) => (
                  <label
                    key={name}
                    className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedModules.includes(name)
                        ? "border-bittersweet dark:border-bittersweet-dark2 bg-bittersweet/5 dark:bg-bittersweet-dark2/10"
                        : "border-gray-200 dark:border-gray-700 hover:border-bittersweet/50 dark:hover:border-bittersweet-dark2/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedModules.includes(name)}
                      onChange={() => toggleModule(name)}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-bittersweet focus:ring-bittersweet dark:text-bittersweet-dark2 dark:focus:ring-bittersweet-dark2 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="text-techblack dark:text-seasalt font-semibold text-base">
                        {name}
                      </p>
                      <p className="text-graphite dark:text-seasalt/70 text-sm">
                        £{cost.toLocaleString()}/year
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Integrations Card */}
            <div className="bg-white dark:bg-techblack rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg">
              <h2 className="text-techblack dark:text-seasalt mb-6 text-2xl font-bold flex items-center gap-3">
                <div className="p-2 rounded-full bg-bittersweet/10 dark:bg-bittersweet-dark2/20">
                  <LinkIcon className="h-6 w-6 text-bittersweet dark:text-bittersweet-dark2" />
                </div>
                External System Integrations
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg">
                Select systems you need to integrate (
                {selectedIntegrations.length} selected)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {INTEGRATIONS.map(({ name, cost }) => (
                  <label
                    key={name}
                    className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedIntegrations.includes(name)
                        ? "border-bittersweet dark:border-bittersweet-dark2 bg-bittersweet/5 dark:bg-bittersweet-dark2/10"
                        : "border-gray-200 dark:border-gray-700 hover:border-bittersweet/50 dark:hover:border-bittersweet-dark2/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedIntegrations.includes(name)}
                      onChange={() => toggleIntegration(name)}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-bittersweet focus:ring-bittersweet dark:text-bittersweet-dark2 dark:focus:ring-bittersweet-dark2 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="text-techblack dark:text-seasalt font-semibold text-base">
                        {name}
                      </p>
                      <p className="text-graphite dark:text-seasalt/70 text-sm">
                        £{cost.toLocaleString()}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Cost Summary (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-biscay dark:bg-techblack rounded-2xl p-8 shadow-xl sticky top-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-seasalt dark:text-seasalt mb-6 text-2xl font-bold text-center">
                Cost Estimate
              </h2>

              {hasErrors ? (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                  <p className="text-red-700 dark:text-red-400 text-base font-semibold flex items-center gap-2">
                    <Info size={16} />
                    Please fix the errors above to see your estimate
                  </p>
                </div>
              ) : (
                <>
                  {/* Cost Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/10 dark:bg-seasalt/10 rounded-lg p-4">
                      <p className="text-seasalt/80 dark:text-seasalt/80 text-base mb-1">
                        Annual Licence Cost
                      </p>
                      <p className="text-seasalt dark:text-seasalt text-2xl font-bold">
                        £{annualLicenceCost.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-white/10 dark:bg-seasalt/10 rounded-lg p-4">
                      <p className="text-seasalt/80 dark:text-seasalt/80 text-base mb-1">
                        Implementation Cost (one-time)
                      </p>
                      <p className="text-seasalt dark:text-seasalt text-xl font-semibold">
                        £{implementationCost.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-white/10 dark:bg-seasalt/10 rounded-lg p-4">
                      <p className="text-seasalt/80 dark:text-seasalt/80 text-base mb-1">
                        Annual Support Cost
                      </p>
                      <p className="text-seasalt dark:text-seasalt text-xl font-semibold">
                        £{annualSupportCost.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="border-t-2 border-seasalt/30 dark:border-seasalt/30 pt-6 mb-6">
                    <p className="text-seasalt dark:text-seasalt text-base mb-2 text-center">
                      Total 5-Year Cost
                    </p>
                    <p className="text-seasalt dark:text-seasalt text-4xl font-bold text-center mb-2">
                      £{totalCost5Years.toLocaleString()}
                    </p>
                    <p className="text-seasalt/70 dark:text-seasalt/70 text-sm text-center">
                      Includes implementation, licences & support
                    </p>
                  </div>
                </>
              )}

              {/* Disclaimer */}
              <div className="bg-white/10 dark:bg-seasalt/10 rounded-lg p-4 mb-6">
                <p className="text-seasalt/90 dark:text-seasalt/90 text-sm leading-relaxed">
                  <strong>Note:</strong> This is an estimate only. Actual costs
                  depend on your specific requirements, customisations, and
                  business complexity.
                </p>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="block w-full bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 rounded-full px-6 py-4 text-center font-semibold shadow-lg transition"
              >
                Get Accurate Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

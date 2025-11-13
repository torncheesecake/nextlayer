import {
  AlertTriangle,
  Award,
  BadgeCheck,
  BarChart,
  BookOpen,
  ClipboardList,
  CloudCog,
  CloudLightning,
  Layers,
  ListChecks,
  MailCheck,
  PieChart,
  RefreshCw,
  ScanLine,
  Settings2,
  Truck,
  Users,
  Waypoints,
} from "lucide-react";
const APPS = [
  {
    icon: <Layers className="h-12 w-12 text-icon-brand-light" />,
    title: "Intercompany Netting Hub",
    desc: "Multi-sub netting, FX reval, auto bills/JEs/payments.",
  },
  {
    icon: <RefreshCw className="h-12 w-12 text-icon-brand-light" />,
    title: "Advanced RMA + Returns",
    desc: "Triage, refurbishment, warranty, disposition, credits.",
  },
  {
    icon: <CloudCog className="h-12 w-12 text-icon-brand-light" />,
    title: "Trade Compliance Suite",
    desc: "HS/ECCN, embargo checks, denied party screening, holds.",
  },
  {
    icon: <PieChart className="h-12 w-12 text-icon-brand-light" />,
    title: "EU VAT OSS/IOSS + Triangulation",
    desc: "VAT ID validation, rules, evidence logs, SAF-T.",
  },
  {
    icon: <ScanLine className="h-12 w-12 text-icon-brand-light" />,
    title: "AP Automation Hub",
    desc: "OCR invoices, 2/3-way match, exceptions, approval workflow.",
  },
  {
    icon: <MailCheck className="h-12 w-12 text-icon-brand-light" />,
    title: "Vendor Statement Reconciliation",
    desc: "Ingest PDF/CSV, auto match, create adjustments.",
  },
  {
    icon: <BadgeCheck className="h-12 w-12 text-icon-brand-light" />,
    title: "Quality Management Pro",
    desc: "QC plans, inspections, NCR/CAPA, COA, supplier PPAP.",
  },
  {
    icon: <Users className="h-12 w-12 text-icon-brand-light" />,
    title: "Supplier Portal 360",
    desc: "Onboarding, compliance, ASNs, scorecards, PO collaboration.",
  },
  {
    icon: <AlertTriangle className="h-12 w-12 text-icon-brand-light" />,
    title: "Collections and Credit Control",
    desc: "Risk scores, dunning, promise-to-pay, holds.",
  },
  {
    icon: <BookOpen className="h-12 w-12 text-icon-brand-light" />,
    title: "Project Profitability Control",
    desc: "WIP, change orders, EVA, forecast-at-completion.",
  },
  {
    icon: <Truck className="h-12 w-12 text-icon-brand-light" />,
    title: "Field Service + RMA Scheduling",
    desc: "Dispatch, parts usage, SLAs, asset histories.",
  },
  {
    icon: <CloudLightning className="h-12 w-12 text-icon-brand-light" />,
    title: "Subscription and Usage Billing",
    desc: "Plans, proration, usage import, rev-rec sync.",
  },
  {
    icon: <CloudCog className="h-12 w-12 text-icon-brand-light" />,
    title: "3PL/Carrier Orchestration",
    desc: "Rate shop, labels, tracking, EDI 940/945/856/856.",
  },
  {
    icon: <Settings2 className="h-12 w-12 text-icon-brand-light" />,
    title: "Data Governance Kit",
    desc: "Data quality rules, dedupe, steward workflows, audit trail.",
  },
  {
    icon: <BarChart className="h-12 w-12 text-icon-brand-light" />,
    title: "WMS Lite+",
    desc: "Mobile putaway/pick/pack, wave planning, cycle count, bin moves.",
  },
  {
    icon: <Award className="h-12 w-12 text-icon-brand-light" />,
    title: "Rebate and Chargeback Manager",
    desc: "Accruals, earnings, settlements, claims matching.",
  },
  {
    icon: <ListChecks className="h-12 w-12 text-icon-brand-light" />,
    title: "CPQ + BOM Configurator",
    desc: "Rules, pricing, guided selling, BOM/WO generation.",
  },
  {
    icon: <Waypoints className="h-12 w-12 text-icon-brand-light" />,
    title: "Demand Planning 2.0",
    desc: "Forecasting, promotions, safety stock, supply constraints.",
  },
  {
    icon: <ClipboardList className="h-12 w-12 text-icon-brand-light" />,
    title: "Supplier Portal 360",
    desc: "Onboarding, compliance, ASNs, scorecards, PO collaboration.",
  },
];
export default function SuiteAppsQuality() {
  return (
    <div className="dark:bg-techblack bg-seasalt">
      <div className="text-graphite dark:text-seasalt grid gap-12 md:grid-cols-4">
        {APPS.map((app, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-left md:text-center"
          >
            <span className="mb-6">{app.icon}</span>
            <h3 className="mb-6 text-3xl leading-[1.1] font-bold tracking-tight">
              {app.title}
            </h3>
            <p className="mx-auto mt-1 max-w-xs text-lg leading-[1.5]">
              {app.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

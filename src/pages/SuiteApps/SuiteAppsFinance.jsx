import {
  BadgeDollarSign,
  BarChart,
  BookOpen,
  CloudLightning,
  Coins,
  Columns,
  FileText,
  Filter,
  Folder,
  MailCheck,
  PieChart,
  Replace,
  Settings,
  ShieldCheck,
} from "lucide-react";

const APPS = [
  // Payment/cash app engine (calc, $)
  {
    icon: <Coins className="h-12 w-12 text-icon-brand-light" />,
    title: "Cash Application Engine",
    desc: "Bank files + remittances, auto allocation, fee handling.",
  },
  // Collections - folder (archive/portfolio), lock/shield for risk
  {
    icon: <ShieldCheck className="h-12 w-12 text-icon-brand-light" />,
    title: "Collections and Credit Control",
    desc: "Risk scores, dunning, promise-to-pay, holds.",
  },
  // Purchase price - trend/bar
  {
    icon: <BarChart className="h-12 w-12 text-icon-brand-light" />,
    title: "Purchase Price Drift Alert",
    desc: "Flags PO price variance vs last cost.",
  },
  // Filtering/duplicate
  {
    icon: <Filter className="h-12 w-12 text-icon-brand-light" />,
    title: "Duplicate Vendor Detector",
    desc: "Warns on similar name/email/IBAN at create.",
  },
  // Consolidation - swap/arrows ($ movement)
  {
    icon: <Replace className="h-12 w-12 text-icon-brand-light" />,
    title: "Consolidation + Tax Provision",
    desc: "Eliminations, FX translation, deferred tax, notes.",
  },
  // Demand planning/forecast - chart
  {
    icon: <PieChart className="h-12 w-12 text-icon-brand-light" />,
    title: "Demand Planning 2.0",
    desc: "Forecasting, promotions, safety stock, supply constraints.",
  },
  // Rebates/awards - badge/award
  {
    icon: <BadgeDollarSign className="h-12 w-12 text-icon-brand-light" />,
    title: "Rebate and Chargeback Manager",
    desc: "Accruals, earnings, settlements, claims matching.",
  },
  // CPQ/BOM - settings/cog ("configurator")
  {
    icon: <Settings className="h-12 w-12 text-icon-brand-light" />,
    title: "CPQ + BOM Configurator",
    desc: "Rules, pricing, guided selling, BOM/WO generation.",
  },
  // Projects/profitability - book
  {
    icon: <BookOpen className="h-12 w-12 text-icon-brand-light" />,
    title: "Project Profitability Control",
    desc: "WIP, change orders, EVA, forecast-at-completion.",
  },
  // Subscriptions - cloud/lightning
  {
    icon: <CloudLightning className="h-12 w-12 text-icon-brand-light" />,
    title: "Subscription and Usage Billing",
    desc: "Plans, proration, usage import, rev-rec sync.",
  },
  // Intercompany note - file/document symbol
  {
    icon: <FileText className="h-12 w-12 text-icon-brand-light" />,
    title: "Intercompany Note Copier",
    desc: "Mirrors memo/notes between paired IC docs.",
  },
  // Field freeze - shield/check
  {
    icon: <ShieldCheck className="h-12 w-12 text-icon-brand-light" />,
    title: "Field Freeze on Status",
    desc: "Locks configured fields once status threshold hit.",
  },
  // VAT/triangulation - piechart/global
  {
    icon: <PieChart className="h-12 w-12 text-icon-brand-light" />,
    title: "EU VAT OSS/IOSS + Triangulation",
    desc: "VAT ID validation, rules, evidence logs, SAF-T.",
  },
  // AP automation - mail/check (invoices/email/approval)
  {
    icon: <MailCheck className="h-12 w-12 text-icon-brand-light" />,
    title: "AP Automation Hub",
    desc: "OCR invoices, 2/3-way match, exceptions, approval workflow.",
  },
  // Collections repeated (shield)
  {
    icon: <ShieldCheck className="h-12 w-12 text-icon-brand-light" />,
    title: "Collections and Credit Control",
    desc: "Risk scores, dunning, promise-to-pay, holds.",
  },
  // Vendor statement - folder/document
  {
    icon: <Folder className="h-12 w-12 text-icon-brand-light" />,
    title: "Vendor Statement Reconciliation",
    desc: "Ingest PDF/CSV, auto match, create adjustments.",
  },
  // Role launcher - columns/grid/flow
  {
    icon: <Columns className="h-12 w-12 text-icon-brand-light" />,
    title: "Role Launcher Portlet",
    desc: "Configurable shortcuts to key pages per role.",
  },
  // Data governance - settings/cog
  {
    icon: <Settings className="h-12 w-12 text-icon-brand-light" />,
    title: "Data Governance Kit",
    desc: "Data quality rules, dedupe, steward workflows, audit trail.",
  },
  // 3PL - cloud distribution/warehouse (use cloudlightning for "integration")
  {
    icon: <CloudLightning className="h-12 w-12 text-icon-brand-light" />,
    title: "3PL/Carrier Orchestration",
    desc: "Rate shop, labels, tracking, EDI 940/945/856/856.",
  },
];

export default function SuiteAppsFinance() {
  return (
    <div className="grid gap-12 md:grid-cols-4">
      {APPS.map((app, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-left md:text-center"
        >
          <span className="mb-6">{app.icon}</span>
          <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl leading-[1.1] font-bold tracking-tight">
            {app.title}
          </h3>
          <p className="text-graphite dark:text-seasalt mx-auto mt-1 max-w-xs text-lg leading-[1.5]">
            {app.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

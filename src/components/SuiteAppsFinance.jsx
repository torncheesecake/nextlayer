import {
  Coins, Folder, CloudLightning, Filter, PieChart, Settings, Award, BookOpen, MailCheck,
  BarChart, Columns, ShieldCheck, BadgeDollarSign, Replace, FileText
} from "lucide-react";

const APPS = [
  // Payment/cash app engine (calc, $)
  { icon: <Coins className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Cash Application Engine", desc: "Bank files + remittances, auto allocation, fee handling." },
  // Collections - folder (archive/portfolio), lock/shield for risk
  { icon: <ShieldCheck className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Collections and Credit Control", desc: "Risk scores, dunning, promise-to-pay, holds." },
  // Purchase price - trend/bar
  { icon: <BarChart className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Purchase Price Drift Alert", desc: "Flags PO price variance vs last cost." },
  // Filtering/duplicate
  { icon: <Filter className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Duplicate Vendor Detector", desc: "Warns on similar name/email/IBAN at create." },
  // Consolidation - swap/arrows ($ movement)
  { icon: <Replace className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Consolidation + Tax Provision", desc: "Eliminations, FX translation, deferred tax, notes." },
  // Demand planning/forecast - chart
  { icon: <PieChart className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Demand Planning 2.0", desc: "Forecasting, promotions, safety stock, supply constraints." },
  // Rebates/awards - badge/award
  { icon: <BadgeDollarSign className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Rebate and Chargeback Manager", desc: "Accruals, earnings, settlements, claims matching." },
  // CPQ/BOM - settings/cog ("configurator")
  { icon: <Settings className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "CPQ + BOM Configurator", desc: "Rules, pricing, guided selling, BOM/WO generation." },
  // Projects/profitability - book
  { icon: <BookOpen className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Project Profitability Control", desc: "WIP, change orders, EVA, forecast-at-completion." },
  // Subscriptions - cloud/lightning
  { icon: <CloudLightning className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Subscription and Usage Billing", desc: "Plans, proration, usage import, rev-rec sync." },
  // Intercompany note - file/document symbol
  { icon: <FileText className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Intercompany Note Copier", desc: "Mirrors memo/notes between paired IC docs." },
  // Field freeze - shield/check
  { icon: <ShieldCheck className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Field Freeze on Status", desc: "Locks configured fields once status threshold hit." },
  // VAT/triangulation - piechart/global
  { icon: <PieChart className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "EU VAT OSS/IOSS + Triangulation", desc: "VAT ID validation, rules, evidence logs, SAF-T." },
  // AP automation - mail/check (invoices/email/approval)
  { icon: <MailCheck className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "AP Automation Hub", desc: "OCR invoices, 2/3-way match, exceptions, approval workflow." },
  // Collections repeated (shield)
  { icon: <ShieldCheck className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Collections and Credit Control", desc: "Risk scores, dunning, promise-to-pay, holds." },
  // Vendor statement - folder/document
  { icon: <Folder className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Vendor Statement Reconciliation", desc: "Ingest PDF/CSV, auto match, create adjustments." },
  // Role launcher - columns/grid/flow
  { icon: <Columns className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Role Launcher Portlet", desc: "Configurable shortcuts to key pages per role." },
  // Data governance - settings/cog
  { icon: <Settings className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Data Governance Kit", desc: "Data quality rules, dedupe, steward workflows, audit trail." },
  // 3PL - cloud distribution/warehouse (use cloudlightning for "integration")
  { icon: <CloudLightning className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "3PL/Carrier Orchestration", desc: "Rate shop, labels, tracking, EDI 940/945/856/856." },
];

export default function SuiteAppsFinance() {
  return (
    <div className="grid gap-12 md:grid-cols-4">
      {APPS.map((app, idx) => (
        <div key={idx} className="flex flex-col items-center text-left md:text-center">
          <span className="mb-6">{app.icon}</span>
          <h3 className="mb-2 text-2xl leading-[1.1] font-bold text-nlc-blue dark:text-blue-100 tracking-tight">
            {app.title}
          </h3>
          <p className="text-lg leading-[1.5] text-techblack dark:text-blue-100 mt-1 max-w-xs mx-auto">{app.desc}</p>
        </div>
      ))}
    </div>
  );
}
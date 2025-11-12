import {
  Layers, RefreshCw, CloudCog, PieChart, ScanLine, MailCheck, BadgeCheck, AlertTriangle,
  BookOpen, Truck, CloudLightning, Award, Settings2, BarChart, ClipboardList, Users, ListChecks, Waypoints 
} from "lucide-react";

const APPS = [
  // Intercompany/netting: "layers"/multi-doc
  { icon: <Layers className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Intercompany Netting Hub", desc: "Multi-sub netting, FX reval, auto bills/JEs/payments." },
  // Returns/RMA: refresh or swap
  { icon: <RefreshCw className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Advanced RMA + Returns", desc: "Triage, refurbishment, warranty, disposition, credits." },
  // Compliance: cog or shield
  { icon: <CloudCog className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Trade Compliance Suite", desc: "HS/ECCN, embargo checks, denied party screening, holds." },
  // VAT: PieChart (tax distribution)
  { icon: <PieChart className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "EU VAT OSS/IOSS + Triangulation", desc: "VAT ID validation, rules, evidence logs, SAF-T." },
  // AP automation: scan (OCR/invoices)
  { icon: <ScanLine className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "AP Automation Hub", desc: "OCR invoices, 2/3-way match, exceptions, approval workflow." },
  // Vendor reconciliation: MailCheck
  { icon: <MailCheck className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Vendor Statement Reconciliation", desc: "Ingest PDF/CSV, auto match, create adjustments." },
  // Quality mgmt: badge/check
  { icon: <BadgeCheck className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Quality Management Pro", desc: "QC plans, inspections, NCR/CAPA, COA, supplier PPAP." },
  // Supplier portal: Users
  { icon: <Users className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Supplier Portal 360", desc: "Onboarding, compliance, ASNs, scorecards, PO collaboration." },
  // Collections/credit: alert triangle
  { icon: <AlertTriangle className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Collections and Credit Control", desc: "Risk scores, dunning, promise-to-pay, holds." },
  // Project profit: book
  { icon: <BookOpen className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Project Profitability Control", desc: "WIP, change orders, EVA, forecast-at-completion." },
  // Field service: Rocket (dispatch/mobility)
  { icon: <Truck className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Field Service + RMA Scheduling", desc: "Dispatch, parts usage, SLAs, asset histories." },
  // Subscription/usage: CloudLightning (service)
  { icon: <CloudLightning className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Subscription and Usage Billing", desc: "Plans, proration, usage import, rev-rec sync." },
  // 3PL/carrier: CloudCog (integration/automation)
  { icon: <CloudCog className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "3PL/Carrier Orchestration", desc: "Rate shop, labels, tracking, EDI 940/945/856/856." },
  // Data governance: cog/settings
  { icon: <Settings2 className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Data Governance Kit", desc: "Data quality rules, dedupe, steward workflows, audit trail." },
  // WMS/warehouse: BarChart (bins/levels)
  { icon: <BarChart className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "WMS Lite+", desc: "Mobile putaway/pick/pack, wave planning, cycle count, bin moves." },
  // Rebates: award
  { icon: <Award className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Rebate and Chargeback Manager", desc: "Accruals, earnings, settlements, claims matching." },
  // CPQ: ListChecks (steps/config)
  { icon: <ListChecks className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "CPQ + BOM Configurator", desc: "Rules, pricing, guided selling, BOM/WO generation." },
  // Demand planning: BarChart (trends)
  { icon: <Waypoints className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Demand Planning 2.0", desc: "Forecasting, promotions, safety stock, supply constraints." },
  // Supplier portal alt (clipboard list for onboarding/tasks)
  { icon: <ClipboardList className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Supplier Portal 360", desc: "Onboarding, compliance, ASNs, scorecards, PO collaboration." }
];

export default function SuiteAppsQuality() {
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

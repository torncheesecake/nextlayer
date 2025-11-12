import {
  ListChecks, Search, MailCheck, Award, Copy, Columns, Folder, AlertTriangle, Type, Image, Swords, Calculator,
  Network, Home, Hourglass
} from "lucide-react";

const APPS = [
  { icon: <ListChecks className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Line Location Checker", desc: "Flags any line whose location ≠ header." },
  { icon: <Search className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Hidden Char Scrubber", desc: "Removes zero-width/non-printable chars from names/descriptions." },
  { icon: <MailCheck className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Auto CC Rules", desc: "Adds CC recipients by subsidiary/department on emails." },
  { icon: <Award className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Default Terms Enforcer", desc: "Sets payment terms by customer group on SO/INV." },
  { icon: <Copy className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Memo Standardiser", desc: "Prepends [Tran#] to memo across linked transactions." },
  { icon: <Search className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Item Alias Quick Search", desc: "Portlet to search custom aliases and open records." },
  { icon: <MailCheck className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Saved Search Emailer", desc: "Button/schedule to email CSV outputs to lists." },
  { icon: <Columns className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Role Launcher Portlet", desc: "Configurable shortcuts to key pages per role." },
  { icon: <Folder className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Attachment Collector", desc: "Subtab listing all files linked to a transaction." },
  { icon: <AlertTriangle className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Period Close Request", desc: "One-click case/approval flow for reopen exceptions." },
  { icon: <Type className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "FX Rate Lock", desc: "Freezes exchange rate after approval to stop drift." },
  { icon: <Image className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Picklist With Thumbnails", desc: "Adds item image to picking/IF PDFs." },
  { icon: <Swords className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Serial/Lot Guard", desc: "Blocks mixed lots/serials on a single line." },
  { icon: <Calculator className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Purchase Price Drift Alert", desc: "Flags PO price variance vs last cost." },
  { icon: <Network className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Duplicate Vendor Detector", desc: "Warns on similar name/email/IBAN at create." },
  { icon: <Folder className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Attachment Required", desc: "Prevents approval if no file attached." },
  { icon: <Home className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Sandbox/Prod Banner", desc: "Coloured header bar by account type/subsidiary." },
  { icon: <Type className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Field Freeze on Status", desc: "Locks configured fields once status threshold hit." },
  { icon: <Copy className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Intercompany Note Copier", desc: "Mirrors memo/notes between paired IC docs." },
  { icon: <Hourglass className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Simple SLA Timers", desc: "Adds response/resolution timers on support cases." },
];

export default function SuiteAppsAutomation() {
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

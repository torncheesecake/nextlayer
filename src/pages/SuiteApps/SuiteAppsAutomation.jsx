import {
  AlertTriangle,
  Award,
  Calculator,
  Columns,
  Copy,
  Folder,
  Home,
  Hourglass,
  Image,
  ListChecks,
  MailCheck,
  Network,
  Search,
  Swords,
  Type,
} from "lucide-react";
const APPS = [
  {
    icon: <ListChecks className="h-12 w-12 text-icon-brand-light" />,
    title: "Line Location Checker",
    desc: "Flags any line whose location ≠ header.",
  },
  {
    icon: <Search className="h-12 w-12 text-icon-brand-light" />,
    title: "Hidden Char Scrubber",
    desc: "Removes zero-width/non-printable chars from names/descriptions.",
  },
  {
    icon: <MailCheck className="h-12 w-12 text-icon-brand-light" />,
    title: "Auto CC Rules",
    desc: "Adds CC recipients by subsidiary/department on emails.",
  },
  {
    icon: <Award className="h-12 w-12 text-icon-brand-light" />,
    title: "Default Terms Enforcer",
    desc: "Sets payment terms by customer group on SO/INV.",
  },
  {
    icon: <Copy className="h-12 w-12 text-icon-brand-light" />,
    title: "Memo Standardiser",
    desc: "Prepends [Tran#] to memo across linked transactions.",
  },
  {
    icon: <Search className="h-12 w-12 text-icon-brand-light" />,
    title: "Item Alias Quick Search",
    desc: "Portlet to search custom aliases and open records.",
  },
  {
    icon: <MailCheck className="h-12 w-12 text-icon-brand-light" />,
    title: "Saved Search Emailer",
    desc: "Button/schedule to email CSV outputs to lists.",
  },
  {
    icon: <Columns className="h-12 w-12 text-icon-brand-light" />,
    title: "Role Launcher Portlet",
    desc: "Configurable shortcuts to key pages per role.",
  },
  {
    icon: <Folder className="h-12 w-12 text-icon-brand-light" />,
    title: "Attachment Collector",
    desc: "Subtab listing all files linked to a transaction.",
  },
  {
    icon: <AlertTriangle className="h-12 w-12 text-icon-brand-light" />,
    title: "Period Close Request",
    desc: "One-click case/approval flow for reopen exceptions.",
  },
  {
    icon: <Type className="h-12 w-12 text-icon-brand-light" />,
    title: "FX Rate Lock",
    desc: "Freezes exchange rate after approval to stop drift.",
  },
  {
    icon: <Image className="h-12 w-12 text-icon-brand-light" />,
    title: "Picklist With Thumbnails",
    desc: "Adds item image to picking/IF PDFs.",
  },
  {
    icon: <Swords className="h-12 w-12 text-icon-brand-light" />,
    title: "Serial/Lot Guard",
    desc: "Blocks mixed lots/serials on a single line.",
  },
  {
    icon: <Calculator className="h-12 w-12 text-icon-brand-light" />,
    title: "Purchase Price Drift Alert",
    desc: "Flags PO price variance vs last cost.",
  },
  {
    icon: <Network className="h-12 w-12 text-icon-brand-light" />,
    title: "Duplicate Vendor Detector",
    desc: "Warns on similar name/email/IBAN at create.",
  },
  {
    icon: <Folder className="h-12 w-12 text-icon-brand-light" />,
    title: "Attachment Required",
    desc: "Prevents approval if no file attached.",
  },
  {
    icon: <Home className="h-12 w-12 text-icon-brand-light" />,
    title: "Sandbox/Prod Banner",
    desc: "Coloured header bar by account type/subsidiary.",
  },
  {
    icon: <Type className="h-12 w-12 text-icon-brand-light" />,
    title: "Field Freeze on Status",
    desc: "Locks configured fields once status threshold hit.",
  },
  {
    icon: <Copy className="h-12 w-12 text-icon-brand-light" />,
    title: "Intercompany Note Copier",
    desc: "Mirrors memo/notes between paired IC docs.",
  },
  {
    icon: <Hourglass className="h-12 w-12 text-icon-brand-light" />,
    title: "Simple SLA Timers",
    desc: "Adds response/resolution timers on support cases.",
  },
];
export default function SuiteAppsAutomation() {
  return (
    <div className="grid gap-10 md:grid-cols-4">
      {APPS.map((app, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start text-left md:items-center md:text-center"
        >
          <span className="mb-5">{app.icon}</span>
          <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl leading-tight font-bold tracking-tight">
            {app.title}
          </h3>
          <p className="dark:text-seasalt/80 mt-1 max-w-xs text-lg leading-[1.5] text-zinc-700">
            {app.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

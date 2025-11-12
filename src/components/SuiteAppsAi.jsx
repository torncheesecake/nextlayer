import {
  Sigma, ServerCog, BarChartHorizontal, CodeXml, WalletCards, AlertTriangle, ScanLine, Database, PackageSearch, Network, ScrollText, Award, ChartPie, Globe2, PieChart, Calculator, ListOrdered, FileText
} from "lucide-react";

const APPS = [
  // 1. Forecasting & Orchestration (AI/ML)
  { icon: <Sigma className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "AI Demand–Supply Orchestrator", desc: "Deep-learning forecasts + supply constraints; offloads to GPU cluster and solver API." },
  // 2. Scheduling
  { icon: <BarChartHorizontal className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Global Finite-Capacity Scheduler", desc: "MILP/CP-SAT to sequence WOs, crews, and tooling; external optimisation server." },
  // 3. Logistics Optimisation
  { icon: <PackageSearch className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Route, Load, and Pack Optimiser", desc: "VRP with time windows + 3D bin-packing; external compute + maps." },
  // 4. Simulation/Digital Twin
  { icon: <ServerCog className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Warehouse Digital Twin & Slotting", desc: "Discrete-event simulation for slotting/waves; external simulation engine." },
  // 5. Pricing/CPQ Optimiser
  { icon: <WalletCards className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Dynamic Pricing & CPQ Optimiser", desc: "Elasticities/competitor feeds/RL; external ML + caching layer." },
  // 6. Remittance/Collections AI
  { icon: <ScanLine className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Collections AI & Cash App", desc: "OCR remittances, payer intent NLP, auto-allocation; external OCR/LLM pipeline." },
  // 7. Compliance/Graph
  { icon: <Network className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Trade Compliance Graph", desc: "HS/ECCN classifier, sanctions graph, landed cost; external graph DB + NLP." },
  // 8. Contracts/LLM
  { icon: <ScrollText className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Contracts Intelligence for RevRec", desc: "Parse MSAs/SOWs, extract terms, generate obligations; external LLM + vector store." },
  // 9. Supplier/ESG
  { icon: <Award className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Supplier Risk & ESG Scoring", desc: "Crawl news, filings, audits; external web crawler + risk models." },
  // 10. Fraud/Anomaly Detection
  { icon: <AlertTriangle className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Fraud & Anomaly Detection", desc: "Cross-entity patterns on orders, AP, payroll; external streaming + GNN models." },
  // 11. Master Data/Resolution
  { icon: <Database className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Master Data Resolution Hub", desc: "Fuzzy matching for items, vendors, customers; external Spark + blocking indexes." },
  // 12. Touchless AP
  { icon: <ScanLine className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "AP Touchless @ Scale", desc: "Invoice OCR, 2/3-way variance reasoning; external extraction + rules engine." },
  // 13. Consolidation Engine
  { icon: <ChartPie className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Multi-Entity Consolidation Service", desc: "FX translation, eliminations, disclosure notes; external consolidation engine." },
  // 14. 3PL/Carrier Control Tower
  { icon: <Globe2 className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "3PL/Carrier Control Tower", desc: "EDI/Kafka ingestion, ETA prediction, exception ML; external event hub." },
  // 15. Scope/Product Footprint
  { icon: <PieChart className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Scope 3 & Product Footprint", desc: "BOM roll-ups vs LCA databases, supplier surveys; external LCA calculators." },
  // 16. S&OP/Scenario Planner
  { icon: <Calculator className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "S&OP Scenario Planner", desc: "Monte-Carlo with constraints, budget vs capacity what-ifs; external simulation grid." },
  // 17. Mediation & Rating
  { icon: <BarChartHorizontal className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Subscription Mediation & Rating", desc: "Ingest usage/CDRs, tiered pricing, proration; external rating service." },
  // 18. Retail/Planogram AI
  { icon: <ListOrdered className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Retail Assortment & Planogram AI", desc: "Demand lift models, shelf constraints, image checks; external CV + optimiser." },
  // 19. E-Tax/E-Reporting
  { icon: <FileText className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "Global Tax Determination & e-Reporting", desc: "Real-time rules, e-invoicing, SAF-T/Peppol; external rules + filing gateway." },
  // 20. Copilot/RAG
  { icon: <CodeXml className="w-12 h-12 text-nlc-blue dark:text-nlc-blue-lighter" />, title: "NetSuite Copilot with RAG", desc: "Secure retrieval over account artefacts, code generation, guardrails; external vector DB + LLM." }
];


export default function SuiteAppsAi() {
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

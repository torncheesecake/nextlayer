import ComparisonTable from "./ComparisonTable";
import HowWeWork from "./HowWeWork";
import NetSuiteAdvantages from "./NetSuiteAdvantages";
import NetSuitePainPoints from "./NetSuitePainPoints";
import SEO from "../../components/SEO";
import WhyNetSuite from "./WhyNetSuite";

export default function NetSuite() {
  return (
    <>
      <SEO
        title="NetSuite"
        description="Unlock NetSuite success with UK-based NetSuite consultants offering expert ERP implementation, customisation, optimisation, and support. Solve integration, automation, and adoption challenges with tailored solutions for mid-market and enterprise businesses. Maximise ROI with trusted NetSuite partners delivering proven results."
        path="/"
      />
      <NetSuitePainPoints /> <WhyNetSuite /> <NetSuiteAdvantages />{" "}
      <ComparisonTable /> <HowWeWork />
    </>
  );
}

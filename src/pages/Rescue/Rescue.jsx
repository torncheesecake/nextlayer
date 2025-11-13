import RescueChecklist from "./RescueIsthisyou";
import RescuePain from "./RescuePain";
import SEO from "../../components/SEO";

export default function ImplementationRescue() {
  return (
    <>
      <SEO
        title="NetSuite"
        description="Unlock NetSuite success with UK-based NetSuite consultants offering expert ERP implementation, customisation, optimisation, and support. Solve integration, automation, and adoption challenges with tailored solutions for mid-market and enterprise businesses. Maximise ROI with trusted NetSuite partners delivering proven results."
        path="/"
      />
      <RescuePain /> <RescueChecklist />
    </>
  );
}

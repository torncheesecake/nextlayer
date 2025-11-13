import PainPoints from "./PainPoints";
import SEO from "../../components/SEO";
import ServicesTailored from "./ServicesTailored";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Unlock business growth with UK NetSuite specialists offering tailored ERP consulting, implementation, system optimisation, and ongoing support. Solve efficiency, data integration, and user adoption challenges with proven solutions for mid-market and enterprise. Get expert advice and seamless delivery to maximise ROI—trusted by British businesses for measurable results"
        path="/"
      />
      <main>
        <PainPoints /> <WhyUs /> <ServicesTailored /> <Testimonials /> <Stats />
      </main>
    </>
  );
}

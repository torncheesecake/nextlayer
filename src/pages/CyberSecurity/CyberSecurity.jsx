import { useEffect } from "react";
import ConsultantCredentials from "./ConsultantCredentials";
import CyberIntro from "./CyberIntro";
import CyberPricing from "./CyberPricing";
import DetailedServicesCS from "./DetailedServicesCS";
import FeaturesCyber from "./FeaturesCyber";
import Logos from "./Logos";
import SEO from "../../components/SEO";
import TestimonialsCyber from "./TestimonialsCyber";

export default function CyberSecurity() {
  useEffect(() => {
    // Store previous class state
    const root = document.documentElement;
    const oldClass = root.className;
    // Add or keep "dark"
    root.classList.add("dark");
    // Clean-up: remove dark (restore) when leaving page
    return () => {
      root.className = oldClass;
    };
  }, []);
  return (
    <div className="bg-techblack">
      <>
        <SEO
          title="Home"
          description="Unlock business growth with UK NetSuite specialists offering tailored ERP consulting, implementation, system optimisation, and ongoing support. Solve efficiency, data integration, and user adoption challenges with proven solutions for mid-market and enterprise. Get expert advice and seamless delivery to maximise ROI—trusted by British businesses for measurable results"
          path="/"
        />
        <CyberIntro />
        <Logos />
        <FeaturesCyber />
        <DetailedServicesCS />
        <TestimonialsCyber />
        <CyberPricing />
        <ConsultantCredentials />
      </>
    </div>
  );
}

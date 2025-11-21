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
          title="Cyber Security"
          description="Professional penetration testing and cyber security services from UK security experts. Protect your business with comprehensive vulnerability assessments, security audits, and penetration testing. Industry-certified consultants delivering actionable security insights to safeguard your digital assets."
          path="/cyber-security/penetration-testing"
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

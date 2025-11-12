import SEO from '../components/SEO'
import HeroCyber from '../components/HeroCyber'
import CyberIntro from '../components/CyberIntro'
import Logos from '../components/Logos'
import DetailedServicesCS from '../components/DetailedServicesCS'
import FeaturesCyber from '../components/FeaturesCyber'
import TestimonialsCyber from '../components/TestimonialsCyber'
import CyberPricing from '../components/CyberPricing'
import ConsultantCredentials from '../components/ConsultantCredentials'

export default function Home() {
  return (
    <div className="bg-techblack">
      <>
      <SEO
        title="Home"
        description="Unlock business growth with UK NetSuite specialists offering tailored ERP consulting, implementation, system optimisation, and ongoing support. Solve efficiency, data integration, and user adoption challenges with proven solutions for mid-market and enterprise. Get expert advice and seamless delivery to maximise ROI—trusted by British businesses for measurable results"
        path="/"
      />
      <HeroCyber />
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

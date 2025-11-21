import ManagedServices from "../Services/ManagedServices";
import Prices from "../Services/Prices";
import PricesPAYG from "../Services/PricesPAYG";
import PriceBanner from "../Services/PriceBanner";
import SEO from "../../components/SEO";

export default function OneSupport() {
  return (
    <>
      <SEO
        title="OneSupport"
        description="Comprehensive NetSuite support and managed services from UK experts. OneSupport packages starting at £4,250/month include system administration, customisation, troubleshooting, updates, and optimisation. Choose from Essential, Professional, or Enterprise tiers with transparent pricing and no long-term contracts."
        path="/netsuite/support"
      />
      <ManagedServices /> <Prices /> <PriceBanner /> <PricesPAYG />
    </>
  );
}

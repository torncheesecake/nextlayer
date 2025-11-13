import ManagedServices from "../Services/ManagedServices";
import Prices from "../Services/Prices";
import PricesPAYG from "../Services/PricesPAYG";
import PriceBanner from "../Services/PriceBanner";
import SEO from "../../components/SEO";

export default function OneSupport() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore a full range of NetSuite services from certified UK consultants—implementation, data migration, custom integration, process optimisation, and tailored support. Resolve ERP challenges including inefficient processes, disconnected systems, and limited visibility. Achieve faster deployment, better adoption, and sustained success with bespoke solutions trusted by leading UK organisations."
        path="/services"
      />
      <ManagedServices /> <Prices /> <PriceBanner /> <PricesPAYG />
    </>
  );
}

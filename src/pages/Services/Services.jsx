import AddOns from "./AddOns";
import FindYourBestValue from "./FindYourBestValue";
import ManagedServices from "./ManagedServices";
import OurServices from "./OurServices";
import PriceBanner from "./PriceBanner";
import Prices from "./Prices";
import PricesPAYG from "./PricesPAYG";
import SEO from "../../components/SEO";
import WhyUsServices from "./WhyUsServices";

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore a full range of NetSuite services from certified UK consultants—implementation, data migration, custom integration, process optimisation, and tailored support. Resolve ERP challenges including inefficient processes, disconnected systems, and limited visibility. Achieve faster deployment, better adoption, and sustained success with bespoke solutions trusted by leading UK organisations."
        path="/services"
      />
      <OurServices /> <WhyUsServices /> <ManagedServices /> <AddOns />{" "}
      <PricesPAYG />
      <PriceBanner /> <Prices /> <FindYourBestValue />
    </>
  );
}

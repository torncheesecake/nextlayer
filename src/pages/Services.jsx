import SEO from '../components/SEO'
import HeroServices from '../components/HeroServices'
import OurServices from '../components/OurServices'
import WhyUsServices from '../components/WhyUsServices'
import ManagedServices from '../components/ManagedServices'
import AddOns from '../components/AddOns'
import Prices from '../components/Prices'
import PricesPAYG from '../components/PricesPAYG'
import Disclaimer from '../components/Disclaimer' 
import FindYourBestValue from '../components/FindYourBestValue'

export default function Home() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore a full range of NetSuite services from certified UK consultants—implementation, data migration, custom integration, process optimisation, and tailored support. Resolve ERP challenges including inefficient processes, disconnected systems, and limited visibility. Achieve faster deployment, better adoption, and sustained success with bespoke solutions trusted by leading UK organisations."
        path="/services"
      />
      <HeroServices />
      <OurServices />
      <WhyUsServices />
      <ManagedServices />
      <AddOns />
      <PricesPAYG />
      <Disclaimer className="bg-seasalt" />
      <Prices />
      <Disclaimer className="bg-seasalt" />
      <FindYourBestValue />
    </>
  );
}

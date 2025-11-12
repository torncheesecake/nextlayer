import SEO from '../components/SEO'
import HeroSuiteApps from '../components/HeroSuiteApps'
import SuiteAppFeatures from '../components/SuiteAppFeatures'
import SuiteAppExtras from '../components/SuiteAppExtras'

export default function Home() {
  return (
    <div className="bg-seasalt">
      <>
      <SEO
        title="SuiteApps"
        description="Expert NetSuite SuiteApps implementation and integration services across the UK. Our certified consultants deploy third-party applications, custom SuiteApps development, and marketplace solutions to enhance your NetSuite ERP system. Full start-to-finish SuiteApps consulting with ongoing support."
        path="/"
      />
      <HeroSuiteApps />
        <SuiteAppFeatures />
        <SuiteAppExtras />
    </>
    </div>
  )
}

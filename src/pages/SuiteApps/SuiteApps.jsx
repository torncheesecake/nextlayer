import SEO from "../../components/SEO";
import SuiteAppFeatures from "./SuiteAppFeatures";

export default function SuiteApps() {
  return (
    <div className="bg-body-light">
      <>
        <SEO
          title="SuiteApps"
          description="Expert NetSuite SuiteApps implementation and integration services across the UK. Our certified consultants deploy third-party applications, custom SuiteApps development, and marketplace solutions to enhance your NetSuite ERP system. Full start-to-finish SuiteApps consulting with ongoing support."
          path="/"
        />
        <SuiteAppFeatures /> {/* <SuiteAppExtras /> */}
      </>
    </div>
  );
}

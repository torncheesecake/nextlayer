import Portfolio from "./Portfolio";
import SEO from "../../components/SEO";
import PricingWeb from "./WebPrices";
import WebServices from "./WebServices";
import WebTestimonials from "./WebTestimonials";

export default function Web() {
  return (
    <>
      <SEO
        title="Web Development"
        description="Looking for a UK web development company? Get expert website design, custom builds, and optimised solutions tailored for your business. Transform your online presence, boost speed, and drive results with a trusted web development team ready to create your ideal website."
        path="/"
      />
      <WebServices /> <Portfolio /> <WebTestimonials /> <PricingWeb />
    </>
  );
}

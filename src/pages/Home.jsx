import SEO from '../components/SEO'
import Hero from '../components/HeroHome'
import PainPoints from '../components/PainPoints'
import WhyUs from '../components/WhyUs'
import ServicesTailored from '../components/ServicesTailored'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Unlock business growth with UK NetSuite specialists offering tailored ERP consulting, implementation, system optimisation, and ongoing support. Solve efficiency, data integration, and user adoption challenges with proven solutions for mid-market and enterprise. Get expert advice and seamless delivery to maximise ROI—trusted by British businesses for measurable results"
        path="/"
      />
      <Hero />
      <PainPoints />
      <WhyUs />
      <ServicesTailored />
      <Testimonials />
      <Stats />
    </>
  )
}

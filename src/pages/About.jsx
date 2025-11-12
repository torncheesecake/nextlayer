import SEO from '../components/SEO'
import HeroAbout from '../components/HeroAbout'
import Values from '../components/Values'

export default function Home() {
  return (
    <>
      <SEO
        title="About"
        description="Next Layer Consulting provides expert NetSuite implementation and OneSupport packages, giving your business complete support from setup to daily success. With proven experience and clear, honest pricing, we help you make the most of NetSuite and achieve reliable results."
        path="/about"
      />
      <HeroAbout />
      <Values />
    </>
  );
}
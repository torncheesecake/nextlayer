import { LockKeyhole, ShieldUser } from 'lucide-react';

export default function HeroSection({
  title = "Find vulnerabilities before hackers do",
  subtitle = "Rigorous, real-world penetration testing to protect assets, data, and reputation",
  badges = [
    { label: "NCSC CHECK", tooltip: "Government-grade testing standards" },
    { label: "ISO 27001", tooltip: "Information security certified" },
    { label: "NPPV Level 3", tooltip: "Cleared for sensitive environments" }
  ],
  primaryCTA = { text: "Book Free Security Assessment", href: "#contact" },
  secondaryCTA = { text: "See Pricing", href: "#pricing" }
}) {
  const benefits = ["Proactive risk mitigation", "Compliance-ready", "Faster remediation"];

  return (
    <section className="pt-12 pb-24 bg-gradient-to-br from-techblack via-zinc-900 to-bg-black">
      {/* Proper container for 7xl alignment */}
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-12 gap-8">
          {/* Left */}
          <div className="col-span-12 md:col-span-8">
            {/* Headline: textured, tight, bold, proper tracking */}
          <h1 className="mb-10 text-7xl text-seasalt md:text-6xl lg:text-8xl dark:text-seasalt leading-[1] tracking-tight">
              {title}
            </h1>
            {/* Subtitle: 32px gap, crafted line height */}
            <p className="mb-8 text-lg md:text-2xl leading-[1.5] font-light text-seasalt">
              {subtitle}
            </p>
            {/* Benefits: same spacing and line height as subtitle for neat rhythm */}
            <ul className="mb-8 space-y-2">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-seasalt leading-[1.5] text-lg md:text-2xl">
                  <LockKeyhole className="w-5 h-5 text-nlc-blue" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            {/* Craft badges: just enough vertical gap */}
            <TrustBadgeRow badges={badges} />
            {/* CTA: clear, 32px above from badges */}
            <div className="flex flex-col gap-3 mt-8 sm:flex-row">
              <a
                href={primaryCTA.href}
                className="px-6 py-3 text-lg leading-[1.4] font-bold text-seasalt bgbg-techblack  -coal rounded-lg hover:-nlc-blue uppercase tracking-wide"
              >
                {primaryCTA.text}
              </a>
              <a
                href={secondaryCTA.href}
                className="px-6 py-3 text-lg leading-[1.4] font-bold text-seasalt bgbg-techblack  -coal rounded-lg hover:-nlc-blue uppercase tracking-wide"
              >
                {secondaryCTA.text}
              </a>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-12 md:col-span-4">
            <div className="relative w-full h-80 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldUser className="h-[18rem] w-[18rem] text-seasalt/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Subcomponent
function TrustBadgeRow({ badges }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6 mb-2">
      {badges.map((badge, index) => (
        <div 
          key={index}
          className="relative px-4 py-2 transition  rounded bg-zinc-900 -coal group hover:-nlc-blue"
          title={badge.tooltip}
        >
          <span className="text-sm font-semibold text-seasalt">{badge.label}</span>
          {/* Tooltip */}
          <div className="absolute px-3 py-1 mb-2 text-xs transition transform -translate-x-1/2 rounded opacity-0 pointer-events-none text-seasalt bg-techblack bottom-full left-1/2 group-hover:opacity-100 seasaltspace-nowrap">
            {badge.tooltip}
          </div>
        </div>
      ))}
    </div>
  );
}

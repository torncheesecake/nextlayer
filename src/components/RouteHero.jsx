import PropTypes from "prop-types";
import { ShieldUser } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import TrustBadgeRow from "./TrustBadgeRow";

const heroByPath = {
  "/": {
    heading: "Make NetSuite fit you, not the other way round",
    paragraphs: [
      "Technology should help you grow, not hold you back. With decades of hands-on NetSuite experience, our team designs and delivers systems around the way your people actually work. Simplifying processes, automating the manual grind, or solving challenges others could not, we make NetSuite adapt to you, not the other way round.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/about": {
    heading: "How we started",
    paragraphs: [
      "Next Layer Consulting was founded on a simple idea: NetSuite users deserve more than just software - they deserve guidance, expertise, and a partner who truly understands how to unlock its potential.",
      "With over three decades of hands-on experience across more than 250 implementations, we've worked at every layer - from development and analytics to training, consulting, and project leadership. Along the way, we've helped businesses streamline operations, solve complex problems, and build processes that last.",
      "NetSuite is a fantastic product, and the people who use it deserve the very best from it. That's why we do what we do - and why we love doing it every day.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/services": {
    heading: "NetSuite done right",
    paragraphs: [
      "From health checks to full-scale rollouts, get pragmatic NetSuite delivery that ships value fast, without noise.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/netsuite/implementation-rescue": {
    heading:
      "Fix NetSuite fast, recover momentum, and get the system you expected",
    paragraphs: [
      "Next Layer Consulting helps recover NetSuite projects by resetting foundations, simplifying design, and aligning the system to your real processes for finance, operations, inventory, and reporting.",
      "The team delivers end-to-end support, from assessment and redesign to clean data migration, testing, enablement, and aftercare, so you get the stable, scalable platform you expected the first time.",
      "If any of the pain points above feel familiar, start a conversation so the account can be reviewed, a practical plan can be proposed, and your team can move forward with confidence.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/tools/netsuite-cost-calculator": {
    heading: "Calculate Your NetSuite Cost Quickly and Easily",
    paragraphs: [
      "Find out how much your NetSuite system will cost, tailored to your company's size and needs — no surprises, just clear numbers.",
    ],
  },
  "/netsuite/suiteapps": {
    heading: "SuiteApps to simplify, automate, solve.",
    paragraphs: [
      "Technology should accelerate growth, not get in the way; tailored NetSuite SuiteApps mirror how teams work to simplify workflows, automate the busywork, and solve the hard problems.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/netsuite/support": {
    heading: "NetSuite support that works for you",
    paragraphs: [
      "Experience tailored NetSuite support designed around your business needs. Our UK-based experts provide ongoing assistance, ensuring your ERP system evolves with your requirements.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/web-services/web-development": {
    heading: "Websites built for growth, designed for you",
    paragraphs: [
      "Your website should power your business, not slow you down. As UK web development specialists, we craft custom websites and digital solutions that match how you work and what you need. Whether it’s launching a new site, boosting performance, or integrating your systems, we build online experiences that help your brand thrive.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/cyber-security/penetration-testing": {
    heading: "Cyber security that works for your business",
    paragraphs: [
      "In today's digital landscape, robust cyber security is not just an option - it's a necessity. Our team specializes in creating tailored cyber security solutions that protect your business from evolving threats. With a focus on proactive measures and continuous monitoring, we ensure your systems are secure, compliant, and resilient.",
    ],
    primaryButton: { text: "Book Free Security Assessment", href: "#contact" },
    secondaryButton: { text: "See Pricing", href: "#pricing" },

    subtitle:
      "Rigorous, real-world penetration testing to protect assets, data, and reputation",
    badges: [
      { label: "NCSC CHECK", tooltip: "Government-grade testing standards" },
      { label: "ISO 27001", tooltip: "Information security certified" },
      { label: "NPPV Level 3", tooltip: "Cleared for sensitive environments" },
    ],
    icon: "ShieldUser",
  },
};

export default function RouteHero({ className = "" }) {
  const { pathname } = useLocation();
  const content = heroByPath[pathname];

  if (import.meta.env.MODE === "development" && !content) {
    throw new Error(
      `No hero content defined for path: ${pathname}. Please add an entry to heroByPath in RouteHero.jsx.`,
    );
  }

  const finalContent = content ?? heroByPath["/"];
  const hasPrimaryButton = !!(
    finalContent.primaryButton?.text && finalContent.primaryButton?.href
  );
  const hasSecondaryButton = !!(
    finalContent.secondaryButton?.text && finalContent.secondaryButton?.href
  );

  const iconMap = {
    ShieldUser: ShieldUser,
  };

  const IconComponent = finalContent.icon ? iconMap[finalContent.icon] : null;
  const hasIcon = !!IconComponent;

  return (
    <section
      className={`dark:bg-techblack bg-biscay w-full border-b py-20 transition-colors duration-300 ${className}`}
    >
      {/* Decorative Circle Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="bg-biscay-light2/90 dark:bg-seasalt/5 h-[800px] w-[800px] rounded-full"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl px-6">
        <div
          className={`grid items-center gap-6 ${hasIcon ? "grid-cols-12" : ""}`}
        >
          <div
            className={`${hasIcon ? "col-span-12 lg:col-span-8" : "col-span-12"}`}
          >
            <div className="max-w-6xl">
              <h1 className="text-seasalt dark:text-seasalt z-20 mb-10 text-left text-6xl leading-none tracking-tight font-bold md:text-6xl lg:text-8xl">
                {finalContent.heading}
              </h1>
              {finalContent.subtitle && (
                <p className="text-seasalt dark:text-seasalt z-20 mb-2 max-w-4xl text-left text-xl leading-tight font-light md:text-2xl">
                  {finalContent.subtitle}
                </p>
              )}

              {finalContent.paragraphs &&
                finalContent.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-seasalt dark:text-seasalt mb-6 max-w-5xl text-left text-xl leading-snug font-light md:text-2xl"
                  >
                    {paragraph}
                  </p>
                ))}

              {finalContent.benefits && (
                <ul className="mb-10 space-y-3">
                  {finalContent.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="text-seasalt dark:text-seasalt leading-tightest flex items-center gap-3 text-lg md:text-2xl"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}

              {finalContent.badges && (
                <TrustBadgeRow badges={finalContent.badges} />
              )}

              {(hasPrimaryButton || hasSecondaryButton) && (
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  {hasPrimaryButton &&
                    (finalContent.primaryButton.href.startsWith("http") ? (
                      <a
                        href={finalContent.primaryButton.href}
                        className="dark:bg-bittersweet-dark2 dark:bg-bitterswet-dark1 bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 inline-block rounded-full px-8 py-4 text-lg font-semibold shadow-sm transition"
                      >
                        {finalContent.primaryButton.text}
                      </a>
                    ) : (
                      <Link
                        to={finalContent.primaryButton.href}
                        className="dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 hover:bg=nlc-blue-brighter inline-block rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition"
                      >
                        {finalContent.primaryButton.text}
                      </Link>
                    ))}

                  {hasSecondaryButton &&
                    (finalContent.secondaryButton.href.startsWith("http") ? (
                      <a
                        href={finalContent.secondaryButton.href}
                        className="text-nlc-blue border-nlc-blue hover:bg-nlc-blue hover:text-seasalt rounded-full border bg-white px-8 py-4 text-lg font-semibold shadow-sm transition"
                      >
                        {finalContent.secondaryButton.text}
                      </a>
                    ) : (
                      <Link
                        to={finalContent.secondaryButton.href}
                        className="text-nlc-blue border-nlc-blue hover:bg-nlc-blue hover:text-seasalt rounded-full border bg-white px-8 py-4 text-lg font-semibold shadow-sm transition"
                      >
                        {finalContent.secondaryButton.text}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </div>

          {hasIcon && (
            <div className="col-span-12 hidden items-center justify-center lg:col-span-4 lg:flex">
              <IconComponent className="dark:text-sideral h-auto w-full text-gray-200" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

RouteHero.propTypes = {
  className: PropTypes.string,
};

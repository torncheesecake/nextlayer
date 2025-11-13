import { Check, Clock } from "lucide-react";
const basePackages = [
  {
    name: "Launch",
    price: "From £2,400",
    summary: "For new sites or fast relaunches.",
    features: [
      "Planning workshop",
      "Up to 3 custom-designed pages",
      "SEO-ready & mobile responsive",
      "Simple contact/form setup",
      "Go-live support & follow-up",
    ],
    cta: "Start Your Project",
  },
  {
    name: "Growth",
    price: "From £4,800",
    summary: "Full business websites and deeper redesigns.",
    features: [
      "Discovery & content planning",
      "Up to 8 bespoke pages",
      "Conversion-focused UI/UX",
      "Blog or news module",
      "Image galleries/testimonials",
      "Basic animation and effects",
      "30 days improvements support",
    ],
    cta: "Book a Discovery Call",
  },
  {
    name: "Scale",
    price: "From £9,500",
    summary: "Advanced or technically complex builds.",
    features: [
      "Bespoke project scoping",
      "10+ pages, custom components",
      "Custom forms, advanced navigation",
      "Content migration or rebuilding",
      "Accessibility & best practice QA",
      "Training & documentation",
    ],
    cta: "Request Proposal",
  },
  {
    name: "Enterprise",
    price: "From £15,000",
    summary: "High-volume, multi-lingual, or highly custom sites.",
    features: [
      "Comprehensive design & build planning",
      "Multi-site or multi-language features",
      "High-performance hosting setup",
      "Bespoke integrations, advanced features",
      "Accessibility auditing & quarterly improvements",
      "Ongoing support retainers",
    ],
    cta: "Enquire",
  },
];
const supportPackages = [
  {
    name: "Launch",
    price: "£300/mo",
    notes:
      "Basic updates, backups, uptime monitoring, minor fixes, limited monthly support.",
  },
  {
    name: "Growth",
    price: "£500/mo",
    notes:
      "More frequent updates, SEO tweaks, priority fixes, moderate monthly support hours, and performance monitoring.",
  },
  {
    name: "Scale",
    price: "£700/mo",
    notes:
      "Advanced monitoring, performance improvements, content migration assistance, increased priority fixes and support hours.",
  },
  {
    name: "Enterprise",
    price: "£1,200/mo",
    notes:
      "Multi-site/multi-language hosting, bespoke integrations monitoring, quarterly audits, dedicated account management, ongoing improvements.",
  },
];
export default function PricingSimple() {
  return (
    <section className="dark:bg-graphite  bg-seasalt py-20">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-12 text-center text-4xl font-bold">
          Project Pricing
        </h2>
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {basePackages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-seasalt dark:bg-graphite border-default-light dark:border-default-dark rounded-2xl border p-8 shadow"
            >
              <h3 className="text-graphite dark:text-seasalt mb-2 text-2xl font-semibold">
                {pkg.name}
              </h3>
              <p className="text-seasalt /80 dark:text-seasalt/80 mb-4">
                {pkg.summary}
              </p>
              <div className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold">
                {pkg.price}
              </div>
              <ul className="text-graphite dark:text-seasalt mb-8 list-inside list-disc space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="text-icon-brand-light" size={16} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h2 className="text-techblack dark:text-seasalt mb-8 text-center text-4xl font-bold">
          Support Packages
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {supportPackages.map((support) => (
            <div
              key={support.name}
              className="bg-seasalt dark:bg-graphite border-default-light dark:border-default-dark rounded-2xl border p-8 shadow"
            >
              <div className="mb-4 flex items-center gap-3">
                <Clock className="text-icon-brand-light" size={20} />
                <h3 className="text-graphite dark:text-seasalt text-2xl font-semibold">
                  {support.name} Support
                </h3>
              </div>
              <div className="text-graphite dark:text-seasalt mb-4 text-3xl font-bold">
                {support.price}
              </div>
              <p className="text-seasalt /70 dark:text-seasalt/70">
                {support.notes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

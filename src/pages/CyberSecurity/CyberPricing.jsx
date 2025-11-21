"use client";
import { ArrowRight, ChevronDown, ChevronUp, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PricingMatrix from "./PriceMatrix";

export default function PricingSummary({
  heading = "Transparent pricing tailored to your needs",
  subheading = "Every environment is different. These are starting prices - final cost depends on scope, complexity, and timeline. Book a free scoping call for exact pricing.",
  tiles,
  isLoading = false,
  isError = false,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const pricingTiles = tiles ?? getDefaultTiles();

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.1 },
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  if (isLoading) {
    return (
      <section className="bg-techblack text-seasalt px-6 py-24">
        <div className="mx-auto w-[90%] max-w-7xl animate-pulse">
          <div className="bg-seasalt/10 mb-8 h-12 w-2/3 mx-auto rounded" />
          <div className="bg-seasalt/10 h-4 w-1/2 mx-auto rounded mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-seasalt/10 h-80 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bg-techblack text-seasalt px-6 py-24">
        <div className="mx-auto w-[90%] max-w-7xl text-center">
          <h3 className="mb-6 text-3xl font-semibold">
            Unable to load pricing
          </h3>
          <p className="text-seasalt/70">
            Refresh the page or try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-graphite via-techblack to-graphite px-6 py-32 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-seasalt mb-4 text-5xl lg:text-6xl font-bold tracking-tight">
            {heading}
          </h2>
          <p className="text-seasalt/70 text-lg lg:text-xl max-w-3xl mx-auto mb-8">
            {subheading}
          </p>

          {/* Primary CTA */}
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 bg-bittersweet hover:bg-bittersweet-dark1 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-bittersweet/20"
          >
            Book a Scoping Call
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingTiles.map((tile, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-1000 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <PricingCard {...tile} index={index} />
            </div>
          ))}
        </div>

        {/* Detailed Pricing Toggle */}
        <div className="text-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-2 bg-seasalt/10 hover:bg-seasalt/20 border border-seasalt/20 hover:border-seasalt/40 text-seasalt px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bittersweet"
          >
            {showDetails ? "Hide" : "Show"} Detailed Pricing
            {showDetails ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Detailed Matrix */}
        {showDetails && (
          <div className="mt-12 transition-all duration-500">
            <div className="bg-gradient-to-br from-graphite/80 to-techblack/80 backdrop-blur-sm border border-seasalt/10 rounded-2xl p-8">
              <PricingMatrix />
              <div className="mt-8 text-center border-t border-seasalt/10 pt-8">
                <p className="text-seasalt/70 text-base mb-4">
                  Need exact pricing? Book a free 15-minute scoping call.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-bittersweet hover:bg-bittersweet-dark1 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Book a Scoping Call
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PricingCard({
  title,
  startingPrice,
  typicalRange,
  description,
  factors,
  index,
}) {
  const colorSchemes = [
    {
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
      accent: "text-blue-400",
    },
    {
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
      accent: "text-purple-400",
    },
    {
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20",
      accent: "text-green-400",
    },
    {
      gradient: "from-orange-500/10 to-red-500/10",
      border: "border-orange-500/20",
      accent: "text-orange-400",
    },
    {
      gradient: "from-yellow-500/10 to-amber-500/10",
      border: "border-yellow-500/20",
      accent: "text-yellow-400",
    },
    {
      gradient: "from-pink-500/10 to-rose-500/10",
      border: "border-pink-500/20",
      accent: "text-pink-400",
    },
  ];

  const scheme = colorSchemes[index % colorSchemes.length];

  return (
    <article
      className={`group relative bg-gradient-to-br from-graphite/80 to-techblack/80 backdrop-blur-sm border ${scheme.border} hover:border-seasalt/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full`}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${scheme.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10`}
      ></div>

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-seasalt text-2xl lg:text-3xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-seasalt/70 text-base">{description}</p>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <div className="mb-4">
          <span className="text-seasalt/60 text-sm uppercase tracking-wider block mb-1">
            Starts from
          </span>
          <span className={`${scheme.accent} text-4xl font-extrabold block`}>
            {startingPrice}
          </span>
        </div>

        <div className="border-t border-seasalt/10 pt-4">
          <span className="text-seasalt/60 text-sm block mb-1">
            Typical range
          </span>
          <span className="text-seasalt text-xl font-bold">{typicalRange}</span>
        </div>
      </div>

      {/* Factors */}
      <div className="mt-auto">
        <div className="bg-techblack/50 border border-seasalt/10 rounded-lg p-4 flex items-start gap-3">
          <Info className="h-5 w-5 text-seasalt/60 shrink-0 mt-0.5" />
          <p className="text-seasalt/80 text-sm leading-relaxed">{factors}</p>
        </div>
      </div>
    </article>
  );
}

function getDefaultTiles() {
  return [
    {
      title: "Network Testing",
      startingPrice: "£550",
      typicalRange: "£1,500 - £7,500",
      description: "External and internal infrastructure penetration testing",
      factors:
        "Based on IP address count, network complexity, and segmentation",
    },
    {
      title: "Web Application",
      startingPrice: "£3,000",
      typicalRange: "£6,000 - £25,000",
      description: "Full manual testing beyond automated scans",
      factors:
        "Based on application size, features, authentication complexity, and business logic",
    },
    {
      title: "API Testing",
      startingPrice: "£1,200",
      typicalRange: "£2,600 - £10,000",
      description: "RESTful and GraphQL API security assessment",
      factors:
        "Based on endpoint count, authentication methods, and architecture complexity",
    },
    {
      title: "Mobile App",
      startingPrice: "£5,000",
      typicalRange: "£8,000 - £15,000",
      description: "iOS and Android application security testing",
      factors:
        "Based on platform diversity, API integration, and feature complexity",
    },
    {
      title: "Desktop App",
      startingPrice: "£3,000",
      typicalRange: "£5,000 - £20,000",
      description: "Windows, macOS, and Linux application testing",
      factors:
        "Based on functionality scope, integrations, and data sensitivity",
    },
    {
      title: "Cloud Security Review",
      startingPrice: "£3,000",
      typicalRange: "£6,000 - £30,000+",
      description: "Azure and AWS configuration security reviews",
      factors:
        "Based on account count, services deployed, and compliance requirements",
    },
  ];
}

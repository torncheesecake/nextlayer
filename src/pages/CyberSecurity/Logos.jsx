"use client";
import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

export default function Logos() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/NHS_England_logo.svg",
      alt: "NHS England",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/UK_government_logo_white.svg",
      alt: "UK Government",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      alt: "Amazon Web Services",
    },
    {
      src: "https://seeklogo.com/images/P/pci-security-standards-council-logo-7BDF7F96FF-seeklogo.com.svg",
      alt: "PCI Security Standards Council",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/ISO_Logo_%28Red_square%29.svg",
      alt: "ISO",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-techblack via-graphite to-techblack px-6 py-24 relative overflow-hidden"
      id="customers"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bittersweet/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-bittersweet/10 border border-bittersweet/20 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-bittersweet" />
            <span className="text-bittersweet text-sm font-semibold uppercase tracking-wide">
              Trusted Partners
            </span>
          </div>

          <h2 className="text-seasalt text-3xl lg:text-4xl font-bold mb-4">
            Trusted by leaders in healthcare, government, finance, and
            technology
          </h2>
        </div>

        {/* Logos Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative transition-all duration-300 hover:scale-110"
              style={{
                transitionDelay: `${(index + 3) * 100}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-4 bg-seasalt/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <img
                src={logo.src}
                alt={logo.alt}
                className="relative h-12 lg:h-14 w-auto invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* And many more */}
        <div
          className={`text-center mb-10 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-seasalt/60 text-lg font-semibold">
            and many more
          </span>
        </div>

        {/* Zero incidents badge */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-base lg:text-lg font-bold">
                Zero Incidents
              </span>
            </div>
            <span className="text-seasalt/80 text-base lg:text-lg">
              for our customers in 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

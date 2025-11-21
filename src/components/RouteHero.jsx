import PropTypes from "prop-types";
import { ShieldUser } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import TrustBadgeRow from "./TrustBadgeRow";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

const heroByPath = {
  "/": {
    heading: (
      <>
        Make NetSuite fit&nbsp;you,
        <br className="hidden md:block" /> not the other way round
      </>
    ),
    paragraphs: [
      "Technology should help you grow, not hold you back. With decades of hands-on NetSuite experience, our team designs and delivers systems around the way your people actually work. Simplifying processes, automating the manual grind, or solving challenges others could not, we make NetSuite adapt to you, not the other way round.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/about": {
    heading: "How we\u00A0started",
    paragraphs: [
      "Next Layer Consulting was founded on a simple idea: NetSuite users deserve more than just software - they deserve guidance, expertise, and a partner who truly understands how to unlock its potential.",
      "With over three decades of hands-on experience across more than 250 implementations, we've worked at every layer - from development and analytics to training, consulting, and project leadership. Along the way, we've helped businesses streamline operations, solve complex problems, and build processes that last.",
      "NetSuite is a fantastic product, and the people who use it deserve the very best from it. That's why we do what we do - and why we love doing it every day.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/services": {
    heading: "NetSuite done\u00A0right",
    paragraphs: [
      "From health checks to full-scale rollouts, get pragmatic NetSuite delivery that ships value fast, without noise.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/netsuite/implementation-rescue": {
    heading:
      "Fix NetSuite fast, recover momentum, and get the system you\u00A0expected",
    paragraphs: [
      "Next Layer Consulting helps recover NetSuite projects by resetting foundations, simplifying design, and aligning the system to your real processes for finance, operations, inventory, and reporting.",
      "The team delivers end-to-end support, from assessment and redesign to clean data migration, testing, enablement, and aftercare, so you get the stable, scalable platform you expected the first time.",
      "If any of the pain points above feel familiar, start a conversation so the account can be reviewed, a practical plan can be proposed, and your team can move forward with confidence.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/tools/netsuite-cost-calculator": {
    heading: "Calculate Your NetSuite Cost Quickly and\u00A0Easily",
    paragraphs: [
      "Find out how much your NetSuite system will cost, tailored to your company's size and needs - no surprises, just clear numbers.",
    ],
  },
  "/netsuite/suiteapps": {
    heading: "SuiteApps to simplify, automate,\u00A0solve.",
    paragraphs: [
      "Technology should accelerate growth, not get in the way; tailored NetSuite SuiteApps mirror how teams work to simplify workflows, automate the busywork, and solve the hard problems.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/netsuite/support": {
    heading: "NetSuite support that works for\u00A0you",
    paragraphs: [
      "Experience tailored NetSuite support designed around your business needs. Our UK-based experts provide ongoing assistance, ensuring your ERP system evolves with your requirements.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/web-services/web-development": {
    heading: (
      <>
        Websites built for growth,
        <br className="hidden md:block" /> designed for&nbsp;you
      </>
    ),
    paragraphs: [
      "Your website should power your business, not slow you down. As UK web development specialists, we craft custom websites and digital solutions that match how you work and what you need. Whether it’s launching a new site, boosting performance, or integrating your systems, we build online experiences that help your brand thrive.",
    ],
    primaryButton: { text: "Talk to our team", href: "/contact" },
  },
  "/cyber-security/penetration-testing": {
    heading: "Cyber security that works for your\u00A0business",
    paragraphs: [
      "In today's digital landscape, robust cyber security is not just an option - it's a necessity. Our team specialises in creating tailored cyber security solutions that protect your business from evolving threats. With a focus on proactive measures and continuous monitoring, we ensure your systems are secure, compliant, and resilient.",
    ],
    primaryButton: { text: "Book Free Security Assessment", href: "#contact" },
    secondaryButton: { text: "See Pricing", href: "#pricing" },

    subtitle:
      "Rigorous, real-world penetration testing to protect assets, data, and\u00A0reputation",
    badges: [
      { label: "NCSC CHECK", tooltip: "Government-grade testing standards" },
      { label: "ISO 27001", tooltip: "Information security certified" },
      { label: "NPPV Level 3", tooltip: "Cleared for sensitive environments" },
    ],
    icon: "ShieldUser",
  },
  "/privacy": {
    heading: "Privacy Policy",
    paragraphs: [
      "Your privacy matters to us. Learn how Next Layer Consulting collects, uses, and protects your personal information.",
    ],
  },
  "/terms": {
    heading: "Terms of\u00A0Service",
    paragraphs: [
      "Please read these terms carefully before using our services. These terms outline your rights and responsibilities when working with Next Layer Consulting.",
    ],
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

  const isCyberPage = pathname === "/cyber-security/penetration-testing";
  const isWebPage = pathname === "/web-services/web-development";

  // Unique hero for web development page - Swiss/Editorial with dark background
  if (isWebPage) {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [currentWord, setCurrentWord] = useState(0);

    const rotatingWords = ["growth", "impact", "success", "results"];

    useEffect(() => {
      // Trigger animation on mount
      setIsVisible(true);

      // Use RAF for smooth scroll tracking
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            setScrollY(window.scrollY);
            ticking = false;
          });
          ticking = true;
        }
      };

      // Use RAF for smooth mouse tracking
      let mouseTicking = false;
      const handleMouseMove = (e) => {
        if (!mouseTicking) {
          window.requestAnimationFrame(() => {
            // Normalize mouse position to -1 to 1 range
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePos({ x, y });
            mouseTicking = false;
          });
          mouseTicking = true;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      // Word rotation interval
      const wordInterval = setInterval(() => {
        setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
      }, 5000);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(wordInterval);
      };
    }, []);

    // Calculate parallax transforms
    const parallaxBg = scrollY * 0.5;
    const parallaxText = scrollY * 0.15;
    const mouseParallaxX = mousePos.x * 20;
    const mouseParallaxY = mousePos.y * 20;

    return (
      <section
        className={`relative w-full overflow-hidden bg-black border-b border-gray-800 ${className}`}
        style={{ perspective: "1000px" }}
      >
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
                radial-gradient(circle at ${50 + mousePos.x * 10}% ${50 + mousePos.y * 10}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at ${30 - mousePos.x * 8}% ${70 + mousePos.y * 8}%, rgba(232, 115, 78, 0.25) 0%, transparent 50%),
                radial-gradient(circle at ${70 + mousePos.x * 12}% ${30 - mousePos.y * 12}%, rgba(124, 58, 237, 0.2) 0%, transparent 50%)
              `,
              transition: "background 0.3s ease-out",
            }}
          ></div>
        </div>

        {/* Gradient glow accents - heavily blurred with parallax and mouse tracking */}
        <div
          className="absolute -top-40 -right-40 w-[1000px] h-[1000px] bg-violet-500/25 rounded-full blur-[250px] pointer-events-none z-1 transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mouseParallaxX}px, ${-parallaxBg + mouseParallaxY}px, 0) scale(${1 + scrollY * 0.0003})`,
            willChange: "transform",
          }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-[900px] h-[900px] bg-bittersweet/25 rounded-full blur-[250px] pointer-events-none z-1 transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${-mouseParallaxX}px, ${parallaxBg - mouseParallaxY}px, 0) scale(${1 + scrollY * 0.0002})`,
            willChange: "transform",
          }}
        ></div>

        <div className="relative z-10 mx-auto w-[90%] sm:w-full max-w-7xl px-0 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-20 sm:py-28 md:py-36 pb-36 sm:pb-40 md:pb-44 lg:pb-80">
          {/* Editorial label with rule - animated */}
          <div
            className={`flex items-center gap-8 mb-24 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            style={{
              transform: `translateX(${mousePos.x * 5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div
              className={`h-0.5 bg-bittersweet transition-all duration-700 ease-out delay-75 relative ${isVisible ? "w-20" : "w-0"}`}
            >
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-bittersweet animate-pulse"
                style={{
                  boxShadow: "0 0 10px rgba(232, 115, 78, 0.8)",
                }}
              ></div>
            </div>
            <span
              className="text-sm tracking-[0.5em] uppercase text-gray-300 font-bold hover:text-white transition-colors duration-300 cursor-default"
              style={{
                fontFamily: "monospace",
              }}
            >
              01 / Web Development
            </span>
          </div>

          {/* Massive headline - serif paired with Satoshi */}
          <h1
            className="text-white mb-12 md:mb-14 lg:mb-16 leading-[0.88] max-w-full"
            style={{
              transform: `translateY(${-parallaxText}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div
              className={`text-[7rem] sm:text-[8rem] md:text-[9rem] lg:text-[12rem] font-black mb-2 md:mb-3 lg:mb-6 tracking-tight transition-all duration-700 ease-out delay-150 relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                transform: "translateZ(50px)",
              }}
            >
              <span
                className="relative inline-block"
                style={{
                  background:
                    "linear-gradient(90deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%)",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: isVisible
                    ? "shimmer 3s ease-in-out infinite"
                    : "none",
                }}
              >
                Websites
              </span>
            </div>
            <div
              className={`text-[4rem] sm:text-[4.5rem] md:text-7xl lg:text-8xl font-medium tracking-tight transition-all duration-700 ease-out delay-300 overflow-visible ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                transform: "translateZ(30px)",
                lineHeight: "1.2",
              }}
            >
              built for{" "}
              <span
                className="relative inline-block font-black italic overflow-visible"
                style={{
                  minWidth: "180px",
                  transform: "translateZ(60px)",
                  lineHeight: "1.2",
                }}
              >
                <span className="invisible">{rotatingWords[0]}</span>
                <span
                  key={currentWord}
                  className="absolute left-0 top-0 text-violet-400 animate-[slideUp_3s_ease-in-out]"
                  style={{
                    background:
                      "linear-gradient(90deg, #a855f7, #c084fc, #a855f7)",
                    backgroundSize: "200% 100%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmer 4s ease-in-out infinite",
                  }}
                >
                  {rotatingWords[currentWord]}
                </span>
              </span>
            </div>
          </h1>

          {/* Content Section */}
          <div className="mt-8 lg:mt-10">
            {/* Two column layout on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left column - body copy + stats */}
              <div className="lg:col-span-7 space-y-8 lg:space-y-10">
                {/* Body copy */}
                <div
                  className={`transition-all duration-700 ease-out delay-[450ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{
                    transform: `translateY(${parallaxText * 0.5}px) perspective(1000px) rotateX(${scrollY * 0.02}deg)`,
                    willChange: "transform",
                  }}
                >
                  <p className="text-gray-200 text-xl md:text-2xl lg:text-[1.75rem] leading-relaxed font-light">
                    <span className="inline-block hover:text-white transition-colors duration-300">
                      Your website should power your business, not slow you
                      down. We craft custom digital solutions that match how you
                      work.
                    </span>
                  </p>
                </div>

                {/* Stats - shown on tablet and desktop */}
                <div
                  className={`hidden md:grid grid-cols-3 gap-8 max-w-2xl transition-all duration-500 delay-[600ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <div className="group cursor-default">
                    <div className="text-violet-400 text-4xl xl:text-5xl font-black mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300">
                      20+
                    </div>
                    <div className="text-gray-400 text-xs xl:text-sm uppercase tracking-wider transition-colors group-hover:text-gray-300 leading-tight">
                      Years Experience
                    </div>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-violet-400 text-4xl xl:text-5xl font-black mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300">
                      200+
                    </div>
                    <div className="text-gray-400 text-xs xl:text-sm uppercase tracking-wider transition-colors group-hover:text-gray-300 leading-tight">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-violet-400 text-4xl xl:text-5xl font-black mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300">
                      40+
                    </div>
                    <div className="text-gray-400 text-xs xl:text-sm uppercase tracking-wider transition-colors group-hover:text-gray-300 leading-tight">
                      Global Brands
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - CTAs + trust */}
              <div className="lg:col-span-5 lg:col-start-8">
                <div
                  className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <div className="flex flex-col gap-4 mb-8">
                    {/* Primary CTA */}
                    {hasPrimaryButton && (
                      <Link
                        to={finalContent.primaryButton.href}
                        className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white text-black px-8 py-4 text-xs uppercase tracking-widest font-bold whitespace-nowrap hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-600 hover:border-violet-500 hover:text-white transition-all duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-violet-400"
                      >
                        Start Your Project
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}

                    {/* Secondary CTA */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        const portfolioSection =
                          document.querySelector("#portfolio");
                        if (portfolioSection) {
                          const targetPosition =
                            portfolioSection.getBoundingClientRect().top +
                            window.pageYOffset;
                          const startPosition = window.pageYOffset;
                          const distance = targetPosition - startPosition;
                          const duration = 2000; // 2 seconds for smooth scroll
                          let start = null;

                          // Ease-in-out-cubic for smooth scroll
                          const easeInOutCubic = (t) => {
                            return t < 0.5
                              ? 4 * t * t * t
                              : 1 - Math.pow(-2 * t + 2, 3) / 2;
                          };

                          const animation = (currentTime) => {
                            if (start === null) start = currentTime;
                            const timeElapsed = currentTime - start;
                            const progress = Math.min(
                              timeElapsed / duration,
                              1,
                            );
                            const ease = easeInOutCubic(progress);

                            window.scrollTo(0, startPosition + distance * ease);

                            if (timeElapsed < duration) {
                              requestAnimationFrame(animation);
                            }
                          };

                          requestAnimationFrame(animation);
                        }
                      }}
                      className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-gray-600 bg-transparent text-gray-200 px-8 py-4 text-xs uppercase tracking-widest font-bold whitespace-nowrap hover:border-violet-400 hover:text-violet-400 transition-all duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-violet-400 cursor-pointer"
                    >
                      View Our Work
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Trust line with rating */}
                  <div className="flex items-center justify-center gap-3 text-gray-400">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-violet-400 fill-current transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-violet-300 cursor-default"
                          viewBox="0 0 20 20"
                          style={{
                            animationDelay: `${900 + i * 100}ms`,
                            willChange: "transform",
                          }}
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm transition-colors hover:text-gray-200">
                      Trusted by clients across the UK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator with enhanced animation */}
          <div
            className={`absolute bottom-12 md:bottom-16 lg:bottom-32 xl:bottom-36 left-1/2 flex flex-col items-center gap-4 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              opacity: Math.max(0, 1 - scrollY / 200),
              transform: `translate(-50%, ${scrollY * 0.5}px)`,
            }}
          >
            <span className="text-gray-500 text-xs uppercase tracking-widest transition-colors hover:text-purple-400">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2 animate-bounce hover:border-purple-400 transition-colors group cursor-pointer">
              <div className="w-1 h-2 bg-purple-400 rounded-full group-hover:h-3 transition-all"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`dark:bg-techblack bg-biscay w-full border-b py-20 transition-colors duration-300 relative overflow-hidden ${className}`}
    >
      {/* Decorative Circle Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {isCyberPage ? (
          <>
            {/* Multicolor gradient background for cyber security page */}
            <div
              className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(232, 115, 78, 0.2), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
              }}
            ></div>
            <div
              className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(30, 90, 125, 0.2), rgba(34, 197, 94, 0.2), rgba(6, 182, 212, 0.2))",
              }}
            ></div>
            <div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(236, 72, 153, 0.18), rgba(234, 179, 8, 0.18), rgba(249, 115, 22, 0.18))",
              }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15), rgba(192, 132, 252, 0.15))",
              }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.2), rgba(147, 197, 253, 0.2))",
              }}
            ></div>
          </>
        ) : (
          <div className="bg-biscay-light2/90 dark:bg-seasalt/5 h-[600px] w-[600px] md:h-[800px] md:w-[800px] rounded-full"></div>
        )}
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl px-6">
        <div
          className={`grid items-center gap-6 ${hasIcon ? "grid-cols-12" : ""}`}
        >
          <div
            className={`${hasIcon ? "col-span-12 lg:col-span-8" : "col-span-12"} animate-fade-in-up`}
          >
            <div className="max-w-6xl">
              <h1 className="text-seasalt dark:text-seasalt z-20 mb-12 text-left text-7xl leading-none tracking-tight font-black">
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
        </div>
      </div>
    </section>
  );
}

RouteHero.propTypes = {
  className: PropTypes.string,
};

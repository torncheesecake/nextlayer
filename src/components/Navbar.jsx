import LogoDark from "@/assets/logodark.png";
import LogoLight from "@/assets/logolight.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const MENU_SECTIONS = [
  {
    heading: "NetSuite",
    links: [
      { label: "Overview", to: "/netsuite", hidden: true },
      { label: "OneSupport® NetSuite Support", to: "/netsuite/support" },
      { label: "Implementation Rescue", to: "/netsuite/implementation-rescue" },
      { label: "SuiteApps", to: "/netsuite/suiteapps" },
    ],
  },
  {
    heading: "Web Services",
    links: [
      {
        label: "Web Development",
        to: "/web-services/web-development",
        disabled: false,
        comingSoon: false,
      },
    ],
  },
  {
    heading: "Cyber Security",
    links: [
      {
        label: "Penetration Testing",
        to: "/cyber-security/penetration-testing",
      },
    ],
  },
  {
    heading: "Tools & Resources",
    links: [
      {
        label: "NetSuite Cost Calculator",
        to: "/tools/netsuite-cost-calculator",
      },
    ],
  },
];

const MAX_MEGA_COLUMNS = 3;
const MEGA_MENU_WIDTH_CLASS = "sm:max-w-4xl md:max-w-5xl lg:max-w-7xl";

// Map for grid columns - Tailwind requires full class names
const GRID_COLS_MAP = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaMenuRef = useRef(null);
  const location = useLocation();
  const isWebDevPage = location.pathname === "/web-services/web-development";

  useEffect(() => {
    const onDocClick = (e) => {
      if (!megaMenuRef.current?.contains(e.target) && !mobileOpen) {
        setMegaOpen(false);
      }
    };

    if (megaOpen) {
      document.addEventListener("pointerdown", onDocClick, { passive: true });
    }

    return () => {
      document.removeEventListener("pointerdown", onDocClick);
    };
  }, [megaOpen, mobileOpen]);

  useEffect(() => {
    if (!megaOpen) return;
    const closeOnScroll = () => setMegaOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [megaOpen]);

  const toggleMobile = () => {
    setMobileOpen((v) => !v);
    setMegaOpen(false);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setMegaOpen(false);
  };

  const desktopSections = MENU_SECTIONS.slice(0, MAX_MEGA_COLUMNS);
  const bottomSections = MENU_SECTIONS.slice(MAX_MEGA_COLUMNS);

  return (
    <header
      className={`${isWebDevPage ? "bg-black dark:bg-black" : "bg-seasalt dark:bg-graphite"} sticky top-0 z-50 w-full relative`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-8 md:px-16 py-3">
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className="flex items-center gap-2 select-none"
            draggable="false"
          >
            <img
              src={LogoLight}
              alt="Next Layer Consulting"
              className={`h-14 pointer-events-none ${isWebDevPage ? "hidden" : "dark:hidden"}`}
              width="248"
              height="56"
              draggable="false"
            />
            <img
              src={LogoDark}
              alt="Next Layer Consulting"
              className={`h-14 pointer-events-none ${isWebDevPage ? "block" : "hidden dark:block"}`}
              width="248"
              height="56"
              draggable="false"
            />
          </NavLink>
          <nav className="hidden items-center gap-8 md:flex">
            <div ref={megaMenuRef}>
              <button
                onClick={() => setMegaOpen((v) => !v)}
                className={`${isWebDevPage ? "text-seasalt hover:text-purple-400" : "text-techblack dark:text-seasalt hover:text-bittersweet dark:hover:text-bittersweet-dark2"} flex items-center gap-1 font-medium transition`}
                aria-expanded={megaOpen}
                aria-controls="mega-offer"
              >
                What we offer
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    megaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {megaOpen && (
                <div id="mega-offer" className="absolute top-full left-0 mt-2">
                  <div
                    className={`${isWebDevPage ? "bg-black border-gray-800" : "bg-white dark:bg-techblack border-gray-200 dark:border-gray-700"} overflow-hidden rounded-xl border shadow-2xl w-[650px] relative`}
                  >
                    {/* Gradient glow accents for web dev page */}
                    {isWebDevPage && (
                      <>
                        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[150px] pointer-events-none z-1"></div>
                        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-bittersweet/18 rounded-full blur-[150px] pointer-events-none z-1"></div>
                      </>
                    )}
                    <div className="p-8 relative z-10">
                      <div
                        className={`mb-8 pb-6 border-b ${isWebDevPage ? "border-gray-800" : "border-gray-200 dark:border-gray-700"}`}
                      >
                        <h3
                          className={`${isWebDevPage ? "text-seasalt" : "text-techblack dark:text-seasalt"} text-2xl font-bold mb-2`}
                        >
                          What we offer
                        </h3>
                        <p
                          className={`${isWebDevPage ? "text-seasalt/70" : "text-graphite dark:text-seasalt/70"} text-base`}
                        >
                          Explore our solutions and services
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        {desktopSections.map((section) => (
                          <div key={section.heading}>
                            <div className="flex items-center gap-2 mb-3">
                              <div
                                className={`w-1 h-5 rounded-full ${isWebDevPage ? "bg-purple-500" : "bg-bittersweet dark:bg-bittersweet"}`}
                              ></div>
                              <h4
                                className={`${isWebDevPage ? "text-seasalt" : "text-techblack dark:text-seasalt"} text-sm font-bold uppercase tracking-wide`}
                              >
                                {section.heading}
                              </h4>
                            </div>
                            <ul className="space-y-0.5 pl-3">
                              {section.links.map((link) =>
                                link.hidden ? null : (
                                  <li key={link.label}>
                                    {link.disabled ? (
                                      <span className="flex cursor-not-allowed items-center gap-2 py-2 text-sm text-neutral-400">
                                        {link.label}
                                        {link.comingSoon && (
                                          <span className="bg-bittersweet text-seasalt ml-2 rounded px-2 py-0.5 text-xs font-semibold">
                                            Soon
                                          </span>
                                        )}
                                      </span>
                                    ) : (
                                      <NavLink
                                        to={link.to}
                                        onClick={closeAll}
                                        className={`${isWebDevPage ? "text-seasalt/80 hover:text-purple-400" : "text-graphite dark:text-seasalt/80 hover:text-bittersweet dark:hover:text-bittersweet-dark2"} flex items-center py-2 text-base font-medium transition-colors group`}
                                      >
                                        <span className="group-hover:translate-x-1 transition-transform">
                                          {link.label}
                                        </span>
                                      </NavLink>
                                    )}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        ))}
                        {bottomSections.length > 0 && (
                          <>
                            {bottomSections.map((section) => (
                              <div key={section.heading}>
                                <div className="flex items-center gap-2 mb-3">
                                  <div
                                    className={`w-1 h-5 rounded-full ${isWebDevPage ? "bg-purple-500" : "bg-bittersweet dark:bg-bittersweet"}`}
                                  ></div>
                                  <h4
                                    className={`${isWebDevPage ? "text-seasalt" : "text-techblack dark:text-seasalt"} text-sm font-bold uppercase tracking-wide`}
                                  >
                                    {section.heading}
                                  </h4>
                                </div>
                                <ul className="space-y-0.5 pl-3">
                                  {section.links.map((link) =>
                                    link.hidden ? null : (
                                      <li key={link.label}>
                                        <NavLink
                                          to={link.to}
                                          onClick={closeAll}
                                          className={`${isWebDevPage ? "text-seasalt/80 hover:text-purple-400" : "text-graphite dark:text-seasalt/80 hover:text-bittersweet dark:hover:text-bittersweet-dark2"} flex items-center py-2 text-base font-medium transition-colors group`}
                                        >
                                          <span className="group-hover:translate-x-1 transition-transform">
                                            {link.label}
                                          </span>
                                        </NavLink>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <NavLink
              to="/about"
              className={`${isWebDevPage ? "text-seasalt hover:text-purple-400" : "text-graphite dark:text-seasalt hover:text-bittersweet dark:hover:text-bittersweet-dark2"} font-medium transition`}
            >
              About Us
            </NavLink>
          </nav>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/contact"
            className="text-seasalt dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 bg-bittersweet hover:bg-bittersweet-dark1 rounded-full px-4 py-2 font-semibold transition"
          >
            Contact Us
          </NavLink>
          {!isWebDevPage && (
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
            </div>
          )}
        </div>
        <button
          onClick={toggleMobile}
          className={`${isWebDevPage ? "text-seasalt" : "text-techblack dark:text-seasalt"} focus:outline-none md:hidden`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {mobileOpen && (
        <div
          className={`${isWebDevPage ? "bg-black border-gray-800" : "border-silver bg-seasalt dark:border-sideral dark:bg-techblack"} border-t md:hidden`}
        >
          <div
            className={`${isWebDevPage ? "bg-purple-500" : "bg-nlc-blue"} text-seasalt px-5 py-6`}
          >
            <div className="text-xl font-semibold">What we offer</div>
            <div className="mt-1 text-lg opacity-90">
              Explore our solutions and services.
            </div>
          </div>
          <nav className="space-y-6 px-5 py-5">
            {MENU_SECTIONS.map((section) => (
              <div key={section.heading}>
                <p
                  className={`${isWebDevPage ? "text-seasalt" : "dark:text-seasalt text-neutral-600"} mb-3 text-lg font-semibold tracking-wide uppercase underline underline-offset-4`}
                >
                  {section.heading}
                </p>
                <ul className="space-y-3">
                  {section.links.map((link) =>
                    link.hidden ? null : link.disabled ? (
                      <li key={link.label} className="text-neutral-400">
                        <span className="block px-3 py-2 text-lg whitespace-nowrap">
                          {link.label}
                          {link.comingSoon && (
                            <span className="bg-bittersweet text-seasalt ml-2 rounded px-2 py-1 text-xs font-semibold">
                              Coming Soon
                            </span>
                          )}
                        </span>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <NavLink
                          to={link.to}
                          onClick={closeAll}
                          className={`${isWebDevPage ? "text-seasalt hover:bg-purple-500/20 hover:text-purple-400" : "hover:bg-biscay hover:text-seasalt dark:text-seasalt text-neutral-700 dark:hover:bg-neutral-700"} flex items-center gap-2 rounded-md px-2 py-1 text-lg transition`}
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
            <div
              className={`${isWebDevPage ? "border-gray-800" : "border-silver dark:border-sideral"} space-y-6 border-t pt-6`}
            >
              <NavLink
                to="/about"
                onClick={closeAll}
                className={`${isWebDevPage ? "text-seasalt hover:text-purple-400" : "text-graphite dark:text-seasalt hover:text-biscay-light2 dark:hover:text-biscay-light2"} -mx-3 block rounded-lg px-3 py-2 text-lg font-medium transition`}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                onClick={closeAll}
                className="text-seasalt dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 bg-bittersweet hover:bg-bittersweet-dark1 rounded-full px-4 py-2 font-semibold transition"
              >
                Contact Us
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

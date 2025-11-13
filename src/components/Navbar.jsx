import LogoDark from "@/assets/logodark.png";
import LogoLight from "@/assets/logolight.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
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
        disabled: true,
        comingSoon: true,
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
    <header className="bg-seasalt dark:bg-graphite sticky top-0 z-50 w-full">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={LogoLight}
            alt="Next Layer Consulting"
            className="h-14 dark:hidden"
          />
          <img
            src={LogoDark}
            alt="Next Layer Consulting"
            className="hidden h-14 dark:block"
          />
        </NavLink>
        <nav className="hidden items-center gap-8 md:flex">
          <div ref={megaMenuRef}>
            <button
              onClick={() => setMegaOpen((v) => !v)}
              className="text-techblack dark:text-seasalt hover:text-biscay-light2 dark:hover:text-biscay-light1 flex items-center gap-1 font-medium transition"
              aria-expanded={megaOpen}
              aria-controls="mega-offer"
            >
              What we offer
              <ChevronDown
                size={16}
                className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>
            {megaOpen && (
              <div
                id="mega-offer"
                className={`absolute ${MEGA_MENU_WIDTH_CLASS} top-full left-0 mt-2 w-7xl`}
              >
                <div className="bg-seasalt border-biscay dark:bg-techblack dark:border-sideral overflow-hidden rounded-xl border shadow-2xl">
                  <div className="flex">
                    <div className="bg-biscay text-seasalt flex min-h-[300px] w-[265px] flex-col justify-center p-8">
                      <h3 className="mb-2 text-3xl font-semibold">
                        What we offer
                      </h3>
                      <p className="text-lg opacity-90">
                        Explore our solutions and services.
                      </p>
                    </div>
                    <div className="flex-1 p-6 md:p-8">
                      <div
                        className={`grid grid-cols-1 gap-12 ${GRID_COLS_MAP[desktopSections.length] || "md:grid-cols-3"}`}
                      >
                        {desktopSections.map((section) => (
                          <div key={section.heading}>
                            <h4 className="text-techblack dark:text-seasalt mb-3 pb-1 text-lg font-semibold tracking-wide">
                              {section.heading}
                            </h4>
                            <ul className="space-y-1">
                              {section.links.map((link) =>
                                link.hidden ? null : (
                                  <li key={link.label}>
                                    {link.disabled ? (
                                      <span className="flex cursor-not-allowed items-center gap-2 rounded-md px-2 py-1 text-lg whitespace-nowrap text-neutral-400">
                                        {link.label}
                                        {link.comingSoon && (
                                          <span className="bg-bittersweet text-seasalt ml-2 rounded px-2 py-1 text-xs font-semibold">
                                            Coming Soon
                                          </span>
                                        )}
                                      </span>
                                    ) : (
                                      <NavLink
                                        to={link.to}
                                        onClick={closeAll}
                                        className="hover:bg-biscay hover:text-seasalt dark:text-seasalt flex items-center gap-2 rounded-md px-2 py-1 text-lg text-neutral-700 transition dark:hover:bg-neutral-700"
                                      >
                                        {link.label}
                                      </NavLink>
                                    )}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {bottomSections.length > 0 && (
                        <div className="border-bittersweet dark:border-sideral mt-8 border-t pt-4">
                          <div
                            className={`grid grid-cols-1 gap-12 ${GRID_COLS_MAP[desktopSections.length] || "md:grid-cols-3"}`}
                          >
                            {bottomSections.map((section) => (
                              <div key={section.heading}>
                                <h4 className="text-techblack dark:text-seasalt mb-2 pb-1 text-lg font-semibold tracking-wide">
                                  {section.heading}
                                </h4>
                                <ul className="space-y-1">
                                  {section.links.map((link) =>
                                    link.hidden ? null : (
                                      <li key={link.label}>
                                        <NavLink
                                          to={link.to}
                                          onClick={closeAll}
                                          className="hover:bg-biscay dark:text-seasalt text-techblack hover:text-seasalt flex items-center gap-2 rounded-md px-2 py-1 text-lg transition"
                                        >
                                          {link.label}
                                        </NavLink>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <NavLink
            to="/about"
            className="text-graphite dark:text-seasalt hover:text-biscay-light2 dark:hover:text-biscay-light2 font-medium transition"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="text-seasalt dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 bg-bittersweet hover:bg-bittersweet-dark1 rounded-full px-4 py-2 font-semibold transition"
          >
            Contact Us
          </NavLink>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
          </div>
        </nav>
        <button
          onClick={toggleMobile}
          className="text-techblack dark:text-seasalt focus:outline-none md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-silver bg-seasalt dark:border-sideral dark:bg-techblack border-t md:hidden">
          <div className="bg-nlc-blue text-seasalt px-5 py-6">
            <div className="text-xl font-semibold">What we offer</div>
            <div className="mt-1 text-lg opacity-90">
              Explore our solutions and services.
            </div>
          </div>
          <nav className="space-y-6 px-5 py-5">
            {MENU_SECTIONS.map((section) => (
              <div key={section.heading}>
                <p className="dark:text-seasalt mb-3 text-lg font-semibold tracking-wide text-neutral-600 uppercase underline underline-offset-4">
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
                          className="hover:bg-biscay hover:text-seasalt dark:text-seasalt flex items-center gap-2 rounded-md px-2 py-1 text-lg text-neutral-700 transition dark:hover:bg-neutral-700"
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
            <div className="border-silver dark:border-sideral space-y-6 border-t pt-6">
              <NavLink
                to="/about"
                onClick={closeAll}
                className="text-graphite dark:text-seasalt hover:text-biscay-light2 dark:hover:text-biscay-light2 -mx-3 block rounded-lg px-3 py-2 text-lg font-medium transition"
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

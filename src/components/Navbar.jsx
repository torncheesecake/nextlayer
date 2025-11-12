'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import LogoLight from '@/assets/logolight.png';
import LogoDark from '@/assets/logodark.png';

/* Design-system notes:
   - Spacing: 4/8/12/16 multiples used (px-8, py-4, gap-8, gap-16)
   - Typography: 14/16/18/24/32; navbar uses 16/18/24 for clarity
   - Colour tokens on black page: bg-techblack, text-seasalt; panels/s: bg-seasalt/5, -seasalt/10; accent: nlc-blue
   - Focus: visible ring using nlc-blue with black offset
*/

/* Config: global enable and default note for disabled items */
const servicesMenuEnabled = true;
const disabledNoteDefault = 'Coming Soon';

/* Config: menu content */
const servicesMenu = {
  disabledNoteDefault,
  columns: {
    left: {
      title: 'Our Services',
      items: [
        { label: 'NetSuite', to: '/netsuite', enabled: false },
        { label: 'Cyber Security', to: '/cybersecurity', enabled: true },
        { label: 'Web Dev', to: '/web-development', enabled: false }, 
      ],
    },
    right: [
      {
        title: 'Tools & Resources',
        items: [
          { label: 'NetSuite Cost Calc', to: '/price-calculator', enabled: false },
        ],
      },
      {
        title: 'SuiteApps',
        items: [
          { label: 'SuiteApps', to: '/suiteapps', enabled: true }, 
        ],
      },
    ],
  },
};

/* Helper: active class factory respects black vs light navbar */
function navActiveClassFactory(isBlackNav) {
  return function navActiveClass(isActive) {
    return isActive
      ? (isBlackNav ? ' text-nlc-blue underline font-bold' : ' text-nlc-blue underline font-bold')
      : (isBlackNav ? ' text-seasalt hover:text-nlc-blue' : 'text-techblack dark:text-blue-50 hover:text-nlc-blue');
  };
}

/* Presentational: Disabled badge */
function DisabledBadge({ text }) {
  return (
    <span className="ml-2 rounded bg-seasalt/15 px-2 py-0.5 text-[11px] italic opacity-80">
      {text}
    </span>
  );
}

/* Presentational: Menu item, link when enabled, inert span when disabled */
function MenuItem({ to, label, enabled, onClick, className = '', isBlackNav, isActiveClass, noteOverride, defaultNote }) {
  const base = 'block py-2 font-normal break-words';
  if (enabled) {
    return (
      <NavLink to={to} className={({ isActive }) => `${base} ${className} ${isActiveClass(isActive)}`} onClick={onClick}>
        {label}
      </NavLink>
    );
  }
  const note = noteOverride ?? defaultNote;
  return (
    <span
      role="link"
      aria-disabled="true"
      tabIndex={-1}
      className={`block cursor-not-allowed py-2 font-normal ${isBlackNav ? 'text-seasalt/60' : 'text-seasalt dark:text-seasalt/60'} ${className}`}
      onClick={(e) => e.preventDefault()}
      title={note}
    >
      {label}
      <DisabledBadge text={note} />
    </span>
  );
}

export default function Navbar({
  isLoading = false,
  isError = false,
  variant = 'default',
}) {
  // Routing and route-based styling flags
  const location = useLocation();
  const blackNavRoutes = ['/cybersecurity', '/web-development'];
  const isBlackNav = blackNavRoutes.includes(location.pathname);
  const navActiveClass = useMemo(() => navActiveClassFactory(isBlackNav), [isBlackNav]);
  useEffect(() => {
  if (typeof document === 'undefined') return;
  const blackNavRoutes = ['/cybersecurity', '/web-development'];
  const isBlackNav = blackNavRoutes.includes(location.pathname);

  // Remove/add .black class as appropriate
  document.documentElement.classList.toggle('black', isBlackNav);
}, [location.pathname]);


  // Theme detection for dark mode switcher and reactive DOM class changes
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  );
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Navbar base classes
  const navClasses = isBlackNav
    ? 'sticky top-0 z-10 w-full bg-techblack text-seasalt text-base md:text-lg'
    : 'sticky top-0 z-10 w-full bg-seasalt text-zinc-900 dark:bg-techblack dark:text-seasalt text-base md:text-lg';

  // Brand logo variant selection
  const showseasaltLogo = isBlackNav || isDarkMode;
  const logoSrc = showseasaltLogo ? LogoDark : LogoLight;

  // Menu state and helpers
  const menuLinkClass = 'font-normal transition-colors';
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleCloseMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  // Loading state (simple skeleton)
  if (isLoading) {
    return (
      <nav className={navClasses} aria-label="Primary">
        <div className="mx-auto flex min-h-[4rem] max-w-7xl items-center justify-between px-8 py-4">
          <div className="w-48 h-8 rounded bg-seasalt/10" />
          <div className="hidden h-6 rounded w-96 bg-seasalt/10 md:block" />
          <div className="w-8 h-8 rounded bg-seasalt/10 md:hidden" />
        </div>
      </nav>
    );
  }

  // Error state
  if (isError) {
    return (
      <nav className={navClasses} aria-label="Primary">
        <div className="px-8 py-4 mx-auto max-w-7xl">
          <div className="p-4 rounded-xl -seasalt/10 bg-seasalt/5 text-seasalt/90">
            Navigation unavailable, refresh the page.
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={navClasses} aria-label="Primary">
      {/* Desktop header row: logo, primary links, theme switcher */}
      <div className="mx-auto flex min-h-[4rem] max-w-7xl items-center justify-between px-8 py-4">
        {/* Brand logo */}
        <NavLink
          to="/"
          className={({ isActive }) => 'flex items-center ' + menuLinkClass + navActiveClass(isActive)}
          aria-label="Home"
          onClick={handleCloseMenus}
        >
          <img src={logoSrc} alt="Next Layer Consulting logo" className="h-14 w-[240px] object-contain" />
        </NavLink>

        {/* Mobile: hamburger toggle (hidden on md+) */}
        <button
          className="text-2xl rounded md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-nlc-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Menu />
        </button>

        {/* Desktop navigation (md+): primary links and Services dropdown */}
        <div className="items-center hidden gap-16 md:flex">
          {/* Primary link: Home */}
          <NavLink to="/" className={({ isActive }) => menuLinkClass + ' text-lg ' + navActiveClass(isActive)} onClick={handleCloseMenus}>
            Home
          </NavLink>

          {/* Desktop Services: trigger + dropdown panel */}
          <div className="relative flex items-center">
            {/* Services main link */}
            <NavLink to="/services" className={({ isActive }) => menuLinkClass + ' text-lg ' + navActiveClass(isActive)} onClick={handleCloseMenus}>
              Services
            </NavLink>

            {/* Services toggle (+ / -) with inert state support */}
            <button
              type="button"
              className={`ml-1 bg-transparent text-2xl font-normal
                ${servicesMenuEnabled ? '' : 'cursor-not-allowed text-seasalt/40 dark:text-seasalt/40'}`}
              aria-haspopup="true"
              aria-expanded={servicesOpen && servicesMenuEnabled}
              aria-label="Toggle services submenu"
              aria-disabled={!servicesMenuEnabled}
              onClick={() => servicesMenuEnabled && setServicesOpen((v) => !v)}
              style={{ lineHeight: 1 }}
            >
              {servicesOpen && servicesMenuEnabled
                ? <span className="text-mint">&minus;</span>
                : <span className="text-nlc-blue">+</span>}
            </button>


            {/* Desktop submenu panel, two columns as requested */}
            <div
              className={`absolute left-0 z-30 mt-2 w-fit max-w-[95vw] rounded-xl py-6 shadow-2xl transition-all duration-300 ${
                isBlackNav
                  ? 'bg-techblack text-seasalt  -zinc-800'
                  : 'bg-seasalt text-techblack  -zinc-300 dark:-zinc-600 dark:bg-blue-dark dark:text-seasalt'
              } ${servicesOpen && servicesMenuEnabled ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'}`}
              style={{ top: '120%' }}
              aria-hidden={!(servicesOpen && servicesMenuEnabled)}
            >
              {/* Two fixed columns, left and right, with wrapping inside each column if needed */}
              <div className="flex gap-8 px-4 text-base">
                {/* Left column: Our Services */}
                <div className="flex shrink-0 basis-[230px] flex-col px-2">
                  <div className="mb-2 text-xs font-semibold tracking-wider uppercase text-nlc-blue">
                    {servicesMenu.columns.left.title}
                  </div>
                  <div className="flex flex-col gap-1">
                    {servicesMenu.columns.left.items.map((item, i) => (
                      <MenuItem
                        key={`left-${i}`}
                        to={item.to}
                        label={item.label}
                        enabled={item.enabled && servicesMenuEnabled}
                        noteOverride={item.note}
                        defaultNote={servicesMenu.disabledNoteDefault}
                        onClick={handleCloseMenus}
                        isBlackNav={isBlackNav}
                        isActiveClass={navActiveClass}
                      />
                    ))}
                  </div>
                </div>

                {/* Right column: Tools & Resources and SuiteApps stacked */}
                <div className="flex min-w-[245px] grow flex-col gap-6 px-2">
                  {servicesMenu.columns.right.map((group, gi) => (
                    <div key={`right-${gi}`} className="flex flex-col">
                      <div className="mb-2 text-xs font-semibold tracking-wider uppercase text-mint">
                        {group.title}
                      </div>
                      <div className="flex flex-col gap-1">
                        {group.items.map((item, ii) => (
                          <MenuItem
                            key={`right-${gi}-${ii}`}
                            to={item.to}
                            label={item.label}
                            enabled={item.enabled && servicesMenuEnabled}
                            noteOverride={item.note}
                            defaultNote={servicesMenu.disabledNoteDefault}
                            onClick={handleCloseMenus}
                            isBlackNav={isBlackNav}
                            isActiveClass={navActiveClass}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Primary link: About */}
          <NavLink to="/about" className={({ isActive }) => menuLinkClass + ' text-lg ' + navActiveClass(isActive)} onClick={handleCloseMenus}>
            About
          </NavLink>

          {/* Primary link: Contact */}
          <NavLink to="/contact" className={({ isActive }) => menuLinkClass + ' text-lg ' + navActiveClass(isActive)} onClick={handleCloseMenus}>
            Contact
          </NavLink>

          {/* Desktop theme switcher (hidden on black routes) */}
          {!isBlackNav && <ThemeSwitcher />}
        </div>
      </div>

      {/* Mobile menu wrapper (smaller than md) */}
      <div
        id="mobile-menu"
        className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`mx-auto max-w-7xl px-8 pb-8 ${
            isBlackNav ? 'bg-techblack text-seasalt' : 'bg-seasalt text-zinc-900 dark:bg-blue-dark dark:text-seasalt'
          }`}
        >
          {/* Mobile links stack */}
          <div className="flex flex-col gap-4">
            {/* Home */}
            <NavLink to="/" className={({ isActive }) => 'text-left ' + menuLinkClass + navActiveClass(isActive)} onClick={handleCloseMenus}>
              Home
            </NavLink>

            {/* Mobile Services section */}
            <div className="relative">
              {/* Row: Services label + +/- toggle */}
              <div className="flex items-center justify-between w-full">
                <span
                  className={`cursor-pointer text-left text-lg font-bold ${menuLinkClass} ${
                    isBlackNav ? 'text-seasalt' : 'text-blue-dark dark:text-blue-50'
                  } ${!servicesMenuEnabled ? 'cursor-not-allowed opacity-60' : ''}`}
                  onClick={() => servicesMenuEnabled && setServicesOpen((v) => !v)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services-submenu"
                  aria-disabled={!servicesMenuEnabled}
                  onKeyDown={(e) => {
                    if (!servicesMenuEnabled) return;
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setServicesOpen((v) => !v);
                    }
                  }}
                >
                  Services
                </span>
                <button
                  type="button"
                  className={`flex h-8 w-8 items-center justify-center rounded bg-transparent text-2xl font-bold text-nlc-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-nlc-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    servicesMenuEnabled ? 'hover:text-nlc-blue' : 'cursor-not-allowed opacity-50'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  aria-disabled={!servicesMenuEnabled}
                  onClick={() => servicesMenuEnabled && setServicesOpen((v) => !v)}
                  tabIndex={-1}
                >
                  {servicesOpen && servicesMenuEnabled ? <span>&minus;</span> : <span>+</span>}
                </button>
              </div>

              {/* Mobile submenu panel (shown when open) */}
              {servicesOpen && (
                <div
                  id="mobile-services-submenu"
                  className={`mt-2 flex flex-col gap-3 pl-4 pt-3 ${
                    isBlackNav ? 'bg-techblack text-seasalt' : 'bg-seasalt text-zinc-900 dark:bg-blue-dark dark:text-seasalt'
                  }`}
                  role="region"
                  aria-label="Services submenu"
                >
                  {/* Mobile: Our Services */}
                  <div>
                    <div className="mb-2 text-xs font-semibold tracking-wider uppercase text-nlc-blue">
                      {servicesMenu.columns.left.title}
                    </div>
                    <div className="flex flex-col gap-1 pl-2">
                      {servicesMenu.columns.left.items.map((item, i) => (
                        <MenuItem
                          key={`m-left-${i}`}
                          to={item.to}
                          label={item.label}
                          enabled={item.enabled && servicesMenuEnabled}
                          noteOverride={item.note}
                          defaultNote={servicesMenu.disabledNoteDefault}
                          onClick={handleCloseMenus}
                          isBlackNav={isBlackNav}
                          isActiveClass={navActiveClass}
                          className="py-1"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Mobile: Tools & Resources and SuiteApps */}
                  {servicesMenu.columns.right.map((group, gi) => (
                    <div key={`m-right-${gi}`}>
                      <div className="mb-2 text-xs font-semibold tracking-wider uppercase text-nlc-blue">
                        {group.title}
                      </div>
                      <div className="flex flex-col gap-1 pl-2">
                        {group.items.map((item, ii) => (
                          <MenuItem
                            key={`m-right-${gi}-${ii}`}
                            to={item.to}
                            label={item.label}
                            enabled={item.enabled && servicesMenuEnabled}
                            noteOverride={item.note}
                            defaultNote={servicesMenu.disabledNoteDefault}
                            onClick={handleCloseMenus}
                            isBlackNav={isBlackNav}
                            isActiveClass={navActiveClass}
                            className="py-1"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <NavLink to="/about" className={({ isActive }) => 'text-left ' + menuLinkClass + navActiveClass(isActive)} onClick={handleCloseMenus}>
              About
            </NavLink>

            {/* Contact */}
            <NavLink to="/contact" className={({ isActive }) => 'text-left ' + menuLinkClass + navActiveClass(isActive)} onClick={handleCloseMenus}>
              Contact
            </NavLink>

            {/* Mobile: Theme switcher (only on non-black routes) */}
            {!isBlackNav && (
              <div className="pt-4 mt-4 dark:-zinc-600">
                <ThemeSwitcher />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

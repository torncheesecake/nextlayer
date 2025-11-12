'use client';

import { useEffect, useId, useMemo, useState } from 'react';
import {
  ServerCog, Smartphone, GlobeLock, Laptop2, CloudCog,
  CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';

/**
 * Design tokens mapping for Tailwind:
 * - Surface: bg-techblack dark:bg-techblack
 * - Card surface: bg-seasalt/5 dark:bg-seasalt/5
 * -  subtle: -seasalt/10 /10
 * - FG default: text-seasalt dark:text-seasalt
 * - FG muted: text-seasalt dark:text-seasalt
 * - Accent: text-nlc-blue bg-nlc-blue ring-nlc-blue
 *
 * Spacing scale: 4/8/12/16 only
 * Typography scale: 14/16/18/24/32
 * This file uses: p-4, p-8, gap-4, gap-8, mb-8, mb-16, text-base(16), text-lg(18), text-2xl(24), text-4xl(36 fallback), text-3xl(30 fallback).
 * Where exact 24/32 needed, we pick the closest Tailwind utility and maintain hierarchy consistency.
 */

/* Utility: consistent focus ring meeting WCAG contrast */
const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-nlc-blue focus-visible:ring-offset-2 focus-visible:ring-offset-techblack';

/* Variants for section density or card style if needed */
const SECTION_VARIANTS = {
  default: '',
  compact: 'md:py-12',
  spacious: 'md:py-24',
};

export default function ServicesOverviewSection({
  heading = 'Security testing for web, cloud, and apps',
  services: servicesProp,
  cornerTile,
  infoPanel,
  variant = 'default',
  isLoading = false,
  error = null,
}) {
  // Loading, error, and empty states
  if (isLoading) {
    return (
      <section className={`bg-techblack text-seasalt p-8 ${SECTION_VARIANTS[variant]}`} aria-label="Security testing services loading">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4 animate-pulse" aria-live="polite">
            <div className="w-1/2 h-8 rounded bg-seasalt" />
            <div className="w-full h-40 rounded bg-seasalt" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-32 rounded bg-seasalt/5" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`bg-techblack text-seasalt p-8 ${SECTION_VARIANTS[variant]}`} aria-label="Security testing services error">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold">Unable to load services</h2>
          <p className="text-seasalt">There was a problem loading this section, try again later.</p>
        </div>
      </section>
    );
  }

  const services = servicesProp ?? getDefaultServices();
  const hasCornerTile = !!cornerTile;
  const isEmpty = !Array.isArray(services) || services.length === 0;

  return (
    <section
      className={`bg-techblack text-seasalt p-8 ${SECTION_VARIANTS[variant]}`}
      aria-label="Security testing services"
    >
      <div className="mx-auto max-w-7xl">
        {/* Correct heading structure: one h2 for section title */}
        <h2 className="mb-16 text-4xl font-bold leading-tight">{heading}</h2>

        {/* Grid: mobile-first, then enhance */}
        <div className="grid grid-cols-12 gap-8">
          {/* Overview panel spans larger width on desktop for visual hierarchy */}
          <div className="col-span-12 lg:col-span-8">
            <OverviewPanel
              imageUrl={infoPanel?.imageUrl ?? ''}
              summaryTitle="Summary"
              summary="One team, five focus areas, clear findings, prioritised fixes, pick a stream or combine in one engagement."
              outcomes={[
                'Reduce breach risk',
                'Be audit ready',
                'Fix faster with clear steps',
              ]}
            />
          </div>

          {/* Services list with semantic ul > li > article */}
          <div className="col-span-12">
            {isEmpty ? (
              <EmptyState />
            ) : (
              <ServiceGrid
                services={services}
                cornerTile={hasCornerTile ? cornerTile : null}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Presentational subcomponents */

function OverviewPanel({ imageUrl, summaryTitle, summary, outcomes }) {
  const imgId = useId();

  return (
    <article className="relative overflow-hidden  rounded-xl">
      {/* Decorative media, hidden from SR */}
      <div className="absolute inset-0" aria-hidden="true">
        {imageUrl ? (
          <img
            id={imgId}
            src={imageUrl}
            alt=""
            role="presentation"
            className="object-cover w-full h-full opacity-30 mix-blend-screen zincscale"
            loading="lazy"
          />
        ) : null}
        <div className="absolute inset-0  bg-gradient-to-br from-techblack via-zinc-900 to-techblack -coal" />
      </div>

      <div className="relative p-8">
        <h3 className="text-3xl font-semibold leading-snug">Security testing overview</h3>

        {/* Clear label, no jargon */}
        <div className="p-4 mt-4 rounded-lg bg-techblack">
          <div className="font-semibold">{summaryTitle}</div>
          <p className="mt-2 text-base text-seasalt">
            {summary}
          </p>
        </div>

        {/* Outcomes presented as a real list for SR */}
        <ul className="grid gap-2 mt-6 sm:grid-cols-3">
          {outcomes.map((o, i) => (
            <li key={i} className="flex items-center gap-2 text-base">
              <span className="h-1.5 w-1.5 rounded-full bg-nlc-blue" aria-hidden="true" />
              <span className="text-seasalt">{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ServiceGrid({ services, cornerTile }) {
  // Grid renders all services, then optional corner tile as the last item
  const items = useMemo(
    () => (cornerTile ? [...services, cornerTile] : services),
    [services, cornerTile]
  );

  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
      {items.map((svc, i) => (
        <ServiceCard key={`svc-${i}`} {...svc} />
      ))}
    </ul>
  );
}

function ServiceCard({ icon, title, summary, benefits, highlights }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const IconEl = icon; // icon is already a JSX element in the original; normalise below

  // Normalise icon as presentational only
  const iconNode = (
    <span aria-hidden="true" className="text-seasalt">
      {IconEl}
    </span>
  );

  return (
    <li className="list-none">
      <article className="h-full p-6  rounded-xl bg-techblack -coal">
        <header className="flex items-center gap-3 mb-4">
          {iconNode}
          <h3 className="text-2xl font-semibold leading-snug">{title}</h3>
        </header>

        <p className="mb-4 text-base text-seasalt">{summary}</p>

        {/* Benefits are a labelled list for SR */}
        <h4 className="sr-only">Benefits</h4>
        <ul className="space-y-2">
          {benefits?.map((b, i) => (
            <li key={i} className="flex items-center gap-2 text-base text-seasalt">
              <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-nlc-blue shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Optional highlights as a controlled disclosure */}
        {Array.isArray(highlights) && highlights.length > 0 ? (
          <div className="pt-4 mt-4 -t -seasalt/10">
            <button
              type="button"
              className={`flex items-center gap-2 text-sm text-seasalt hover:text-seasalt transition-colors ${focusRing}`}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <ChevronUp aria-hidden="true" className="w-4 h-4" />
              ) : (
                <ChevronDown aria-hidden="true" className="w-4 h-4" />
              )}
              <span>Key focus areas</span>
            </button>

            {/* motion-safe prevents motion for reduced-motion users */}
            <div
              id={panelId}
              className={`mt-3 overflow-hidden`}
            >
              {open ? (
                <ul className="space-y-2 motion-safe:transition-opacity motion-safe:duration-200">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-seasalt">
                      <span className="h-1.5 w-1.5 rounded-full bg-nlc-blue" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ) : null}
      </article>
    </li>
  );
}

/* Empty state with clear next actions for usability */
function EmptyState() {
  return (
    <div
      className="p-8 text-center  rounded-xl -seasalt/10 bg-seasalt"
      role="status"
      aria-live="polite"
    >
      <p className="text-lg">No services to show right now.</p>
      <p className="mt-2 text-seasalt">Check back soon or request a tailored scope.</p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <PrimaryButton label="Book a scoping call" />
        <SecondaryButton label="Contact support" />
      </div>
    </div>
  );
}

/* Accessible buttons with visible focus ring and clear roles */
function PrimaryButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-nlc-blue text-techblack hover:opacity-90 ${focusRing}`}
    >
      {label}
    </button>
  );
}

function SecondaryButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-md  -seasalt/20 bg-seasalt/5 text-seasalt hover:bg-seasalt/10 ${focusRing}`}
    >
      {label}
    </button>
  );
}

/* Default content provider, keeping copy simple and British English */
function getDefaultServices() {
  return [
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'Mobile Application Testing',
      summary:
        'Security testing for iOS and Android, data storage, APIs, authentication.',
      benefits: ['Build user trust', 'OWASP MASVS compliance', 'Prevent data leakage'],
      highlights: ['Insecure data storage', 'API vulnerabilities', 'Authentication flaws', 'Platform-specific risks'],
    },
    {
      icon: <GlobeLock className="w-7 h-7" />,
      title: 'Web Applications and APIs',
      summary:
        'Manual testing beyond scans, logic flaws, injection, broken authentication.',
      benefits: ['Secure customer data', 'OWASP Top 10 coverage', 'Prevent financial loss'],
      highlights: ['Logic flaws', 'Injection vulnerabilities', 'Broken authentication', 'API security'],
    },
    {
      icon: <Laptop2 className="w-7 h-7" />,
      title: 'Desktop Application Testing',
      summary:
        'Security testing for standalone and client server applications.',
      benefits: ['Prevent lateral movement', 'Secure local data', 'Meet internal policies'],
      highlights: ['Local data storage', 'Privilege escalation', 'Insecure communications', 'Third party libraries'],
    },
    {
      icon: <CloudCog className="w-7 h-7" />,
      title: 'Cloud Security Reviews',
      summary:
        'Deep review of Azure and AWS configurations, misconfigurations and compliance gaps.',
      benefits: ['Identify cloud risks', 'AWS and Azure best practice', 'GDPR and ISO compliance'],
      highlights: ['IAM configurations', 'Network security groups', 'Storage security', 'Logging and monitoring'],
    },
    {
      icon: <ServerCog className="w-7 h-7" />,
      title: 'Internal and External Infrastructure Testing',
      summary:
        'Simulated attacks across perimeter, segmentation, servers, and network devices.',
      benefits: ['Prevent breaches', 'Meet ISO and GDPR', 'Prioritise critical fixes'],
      highlights: ['Perimeter defences', 'Internal segmentation', 'Server configurations', 'Network device security'],
    },
  ];
}
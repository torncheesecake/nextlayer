'use client';

import { useId, useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Info, ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';
import PricingMatrix from './PriceMatrix';

/*
  Semantic tokens for a black page with white text:
  - Surface: bg-white/5 dark:bg-white/5, -white/10
  - Text default: text-white
  - Text muted: text-white/80, secondary: text-white/70
  - Accent: text-nlc-coral, bg-nlc-coral, ring-nlc-coral
  Rhythm: spacing 4/8/12/16 only; fonts 14/16/18/24/32
*/

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nlc-coral focus-visible:ring-offset-2 focus-visible:ring-offset-black';

// Reusable, accessible button
function Button({ as = 'button', href, variant = 'primary', children, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-md motion-safe:transition';
  const variants = {
    primary: `bg-nlc-coral text-techblack hover:opacity-90 ${focusRing}`,
    secondary: ` -white/20 bg-white/5 text-white hover:bg-white/10 ${focusRing}`,
    ghost: `text-white/90 hover:text-white ${focusRing}`,
  };
  const Comp = href ? 'a' : as;
  return (
    <Comp href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  );
}
Button.propTypes = {
  as: PropTypes.oneOf(['button', 'a']),
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Reusable card shell
function Card({ as = 'article', className = '', children, ...props }) {
  const Comp = as;
  return (
    <Comp className={`rounded-xl  -white/10 bg-white/5 p-6 md:p-8 contain-paint ${className}`} {...props}>
      {children}
    </Comp>
  );
}
Card.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Section with proper landmark wiring
function Section({ id, title, description, children, className = '' }) {
  const headingId = `${id}-heading`;
  const descId = description ? `${id}-desc` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} aria-describedby={descId} className={className}>
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h2 id={headingId} className="mb-8 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p id={descId} className="max-w-2xl mx-auto text-white/80">
              {description}
            </p>
          ) : null}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Accessible toggle for the matrix with ARIA wiring and motion-safe transitions
function MatrixToggle({ open, onToggle }) {
  const regionId = useId();
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md  -white/20 bg-white/5 text-white hover:bg-white/10 ${focusRing} motion-safe:transition`}
      aria-expanded={open}
      aria-controls={regionId}
      onClick={onToggle}
    >
      {open ? 'Hide' : 'View'} detailed pricing breakdown
      {open ? <ChevronUp className="w-4 h-4" aria-hidden="true" /> : <ChevronDown className="w-4 h-4" aria-hidden="true" />}
    </button>
  );
}
MatrixToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

// Individual pricing tile as article with labelled prices
function PricingTile({ index, title, startingPrice, typicalRange, description, factors }) {
  const baseId = useMemo(() => `price-${index}`, [index]);
  const startId = `${baseId}-start`;
  const rangeId = `${baseId}-range`;

  return (
    <Card as="article" aria-labelledby={`${baseId}-title`}>
      {/* Header */}
      <header className="mb-4">
        <h3 id={`${baseId}-title`} className="text-2xl font-semibold leading-snug text-white">
          {title}
        </h3>
        <p className="text-base text-white/80">{description}</p>
      </header>

      {/* Pricing, with explicit labels and associations */}
      <div className="mb-4">
        <div className="mb-2">
          <span id={`${startId}-label`} className="text-xs tracking-wider uppercase text-white/80">
            Starts from
          </span>
          <div aria-labelledby={`${startId}-label ${startId}-value`}>
            <span id={`${startId}-value`} className="block text-3xl font-bold text-nlc-coral">
              {startingPrice}
            </span>
          </div>
        </div>

        <div className="pt-4 mt-4 -t -white/10">
          <span id={`${rangeId}-label`} className="text-base text-white/70">
            Typical range,
          </span>{' '}
          <span
            id={`${rangeId}-value`}
            aria-labelledby={`${rangeId}-label ${rangeId}-value`}
            className="text-base font-medium text-white"
          >
            {typicalRange}
          </span>
        </div>
      </div>

      {/* Factors block with clear label */}
      <div className="mt-auto">
        <div className="flex items-start gap-2 p-4  rounded -white/10 bg-white/5">
          <Info className="w-4 h-4 text-white/70 mt-0.5" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-white/80">What affects price, {factors}</p>
        </div>
      </div>
    </Card>
  );
}
PricingTile.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  startingPrice: PropTypes.string.isRequired,
  typicalRange: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  factors: PropTypes.string.isRequired,
};

function TileList({ tiles }) {
  if (!tiles) {
    return (
      <Card as="div" role="status" aria-live="polite">
        <p className="text-white/90">Loading pricing tiles, please wait.</p>
      </Card>
    );
  }
  if (Array.isArray(tiles) && tiles.length === 0) {
    return (
      <Card as="div" role="status" aria-live="polite">
        <p className="text-white/90">No pricing tiles available right now.</p>
        <p className="mt-2 text-white/80">Request a tailored quote for an accurate estimate.</p>
        <div className="mt-4">
          <Button href="#contact" as="a" variant="secondary">
            Request a tailored quote
          </Button>
        </div>
      </Card>
    );
  }
  return (
    <ul role="list" className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {tiles.map((tile, index) => (
        <li key={`tile-${index}`} className="list-none">
          <PricingTile {...tile} index={index} />
        </li>
      ))}
    </ul>
  );
}
TileList.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object),
};

// Pricing list with proper semantics and states
export default function PricingSummary({
  heading = 'Penetration testing pricing, ranges, and factors',
  subheading = 'Every environment is different. These are starting prices, final cost depends on scope, complexity, and timeline. Book a free scoping call for exact pricing.',
  tiles,
  isLoading = false,
  isError = false,
  variant = 'default',
}) {
  const [showDetails, setShowDetails] = useState(false);
  const sectionPad = variant === 'compact' ? 'py-12' : 'py-20';
  const pricingTiles = tiles ?? getDefaultTiles();
  const empty = !Array.isArray(pricingTiles) || pricingTiles.length === 0;

  if (isLoading) {
    return (
      <section className={`bg-black text-white px-4 sm:px-6 md:px-8 ${sectionPad}`} aria-label="Pricing loading">
        <div className="mx-auto max-w-7xl animate-pulse">
          <div className="w-2/3 h-8 mb-8 rounded bg-white/10" />
          <div className="w-1/2 h-4 rounded bg-white/10" />
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48  rounded-xl -white/10 bg-white/5" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className={`bg-black text-white px-4 sm:px-6 md:px-8 ${sectionPad}`} aria-label="Pricing error">
        <div className="mx-auto max-w-7xl">
          <Card as="div">
            <h3 className="mb-2 text-2xl font-semibold">Unable to load pricing</h3>
            <p className="text-white/80">Refresh the page or try again later.</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <Section
      id="pricing"
      title={heading}
      description={subheading}
      className={`bg-black text-white px-4 sm:px-6 md:px-8 ${sectionPad}`}
    >
      <div className="text-center">
        <Button href="#contact" as="a" variant="primary" aria-label="Book a scoping call">
          Book a scoping call
          <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
        </Button>
      </div>

      <div className="mt-12">
        <TileList tiles={empty ? [] : pricingTiles} />
      </div>

      <div className="mt-16 text-center">
        <MatrixToggle open={showDetails} onToggle={() => setShowDetails((v) => !v)} />
      </div>

      <div className="mt-8">
        {showDetails ? (
          <Card as="section" aria-label="Detailed pricing breakdown">
            <PricingMatrix />
            <div className="mt-8 text-center">
              <p className="text-sm text-white/80">Need exact pricing? Book a free 15 minute scoping call.</p>
              <div className="mt-4">
                <Button href="#contact" as="a" variant="primary" aria-label="Book a scoping call">
                  Book a scoping call
                </Button>
              </div>
            </div>
          </Card>
        ) : null}
      </div>
    </Section>
  );
}

PricingSummary.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  tiles: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'compact']),
};

/* Defaults aligned to earlier copy, not hard-coded to maintain reusability */
function getDefaultTiles() {
  return [
    {
      title: 'Network Testing',
      startingPrice: '£550',
      typicalRange: '£1,500 - £5,000',
      description: 'External and internal infrastructure',
      factors: 'Based on IP count and complexity',
    },
    {
      title: 'Web Application',
      startingPrice: '£3,000',
      typicalRange: '£6,000 - £12,000',
      description: 'Full manual testing beyond scans',
      factors: 'Based on app size and features',
    },
    {
      title: 'API Testing',
      startingPrice: '£1,200',
      typicalRange: '£2,600 - £10,000',
      description: 'Endpoint security assessment',
      factors: 'Based on endpoint count',
    },
    {
      title: 'Mobile App',
      startingPrice: '£5,000',
      typicalRange: '£8,000 - £15,000',
      description: 'iOS and Android security',
      factors: 'Based on platform and API complexity',
    },
    {
      title: 'Desktop App',
      startingPrice: '£3,000',
      typicalRange: '£5,000 - £20,000',
      description: 'Client server applications',
      factors: 'Based on functionality scope',
    },
    {
      title: 'Cloud Review',
      startingPrice: '£3,000',
      typicalRange: '£6,000 - £30,000+',
      description: 'Azure and AWS configurations',
      factors: 'Based on account count and services',
    },
  ];
}

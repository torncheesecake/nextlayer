// components/TrustBadgeRow.jsx
export default function TrustBadgeRow({ badges }) {
  if (!badges || badges.length === 0) {
    return null; // Don't render anything if there are no badges
  }

  return (
    <div className="mt-8 mb-2 flex flex-wrap gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="group dark:border-default-dark/30 dark:bg-graphite /60 dark:hover:bg-sideral/20 bg-seasalt/50 relative cursor-pointer rounded-lg border border-gray-300 px-5 py-2 transition hover:bg-gray-100/60"
          title={badge.tooltip}
        >
          <span className="text-graphite dark:text-seasalt text-sm font-bold tracking-wide">
            {badge.label}
          </span>
          {/* Simple Tooltip (relies on title attribute for now) */}
        </div>
      ))}
    </div>
  );
}

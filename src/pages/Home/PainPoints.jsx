export default function PainPoints() {
  return (
    <section className="bg-seasalt dark:bg-graphite py-24 transition-colors duration-300 z-40 relative">
      <div className="mx-auto w-[90%] max-w-7xl px-4">
        <h2 className="text-techblack dark:text-seasalt mb-14 text-center text-4xl font-semibold md:text-5xl">
          Do any of these sound familiar?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <PainPointCard>
            Want to replace manual work with smart, connected systems and escape
            together?
          </PainPointCard>
          <PainPointCard>
            Lost orders, double shipments, or mystery numbers making your team
            chase shadows?
          </PainPointCard>
          <PainPointCard>
            Slow decisions because your systems do not speak to each other?
          </PainPointCard>
          <PainPointCard>
            Want to break free from legacy tech and actually move forward?
            You've found your answer.
          </PainPointCard>
        </div>
        <div className="text-techblack dark:text-seasalt mx-auto mt-16 max-w-xl text-center text-lg font-normal">
          Everything we build is simple to use, secure by design, ready to
          scale.
        </div>
      </div>
    </section>
  );
}
function PainPointCard({ children }) {
  return (
    <div className="dark:bg-techblack bg-seasalt flex min-h-[140px] items-center justify-center rounded-xl border px-8 py-8 text-center shadow-lg transition-all duration-200 md:rounded-2xl">
      <span className="text-techblack dark:text-seasalt text-lg leading-relaxed font-normal md:text-xl">
        {children}
      </span>
    </div>
  );
}

export default function NextLayerTestimonials() {
  const reviews = [
    {
      text: "Next Layer Consulting delivered a professional, fast website that matched our brand and business needs. The team combined strong technical skill with a creative approach and kept communication clear from start to finish.",
      name: "Oliver Cannell",
      role: "Managing Director, IC360",
    },
    {
      text: "We chose Next Layer Consulting to rebuild the Blunsdon Blinds site and couldn’t be happier. They understood our business quickly, guided us through decisions, and launched a site our customers love.",
      name: "Zoe & Lee Meagor",
      role: "Founders, Blunsdon Blinds",
    },
    {
      text: "The team at Next Layer are efficient, reliable, and genuinely easy to work with. They explained complex ideas simply and delivered our new site on time with zero drama.",
      name: "Richard Williams",
      role: "ERP Company",
    },
    {
      text: "Professional, capable, and forward-thinking. Next Layer Consulting transformed our online presence and handled everything from planning to launch with care and attention to detail.",
      name: "Peter Lewis",
      role: "Company Director",
    },
  ];
  return (
    <section className="bg-seasalt border-default-light dark:bg-graphite  dark:border-default-dark w-full border-b py-20 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-techblack dark:text-seasalt font-que mb-10 text-left text-4xl font-bold md:text-center">
          What Our Clients Say
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="dark:bg-graphite hover:bg-lightgray dark:hover:bg-sideral bg-seasalt flex flex-col items-center rounded-xl p-8 text-center shadow transition"
            >
              <p className="text-seasalt /90 dark:text-seasalt/90 mb-3 text-lg italic">
                "{r.text}"
              </p>
              <div className="font-semibold text-icon-brand-light">
                {r.name}
              </div>
              <div className="text-seasalt /70 dark:text-seasalt/70 text-sm">
                {r.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

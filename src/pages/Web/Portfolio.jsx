export default function PortfolioShowcase() {
  // Example static data; replace with real cases/live URLs/screenshots
  const projects = [
    {
      name: "VEX Gaming Community",
      image: "/images/portfolio-vex.jpg",
      desc: "Custom React web app for Borderlands 4 community - authentication, builds library, blog & performance dashboard.",
      url: "/work/vex-gaming",
    },
    {
      name: "Blunsdon Blinds UK",
      image: "/images/portfolio-blinds.jpg",
      desc: "Lead-generating website with CMS, advanced product filters, and fully responsive layouts for a window furnishings retailer.",
      url: "/work/blunsdon-blinds",
    },
    {
      name: "Next Layer Consulting",
      image: "/images/portfolio-nextlayer.jpg",
      desc: "Full brand site for NetSuite ERP specialists—SEO-optimized landing, pricing calculator, and case studies.",
      url: "/work/next-layer",
    },
  ];

  return (
    <section className="bg-seasalt dark:bg-graphite  w-full py-20 transition-colors duration-300">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt font-que mb-8 text-left text-5xl font-bold">
          Recent Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <a
              key={proj.name}
              href={proj.url}
              className="group bg-seasalt dark:bg-graphite block overflow-hidden rounded-xl shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="bg-lightgray dark:bg-graphite aspect-video overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-semibold">
                  {proj.name}
                </h3>
                <p className="text-seasalt /80 dark:text-seasalt/80 text-base">
                  {proj.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

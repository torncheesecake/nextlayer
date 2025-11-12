import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Partnering with Next Layer Consulting was a game changer for our NetSuite migration. Their team understood the unique demands of our tech-driven business, cut migration headaches in half, and delivered a custom solution that connected our sales, finance, and analytics overnight. We saw operational improvements from week one and our support questions now get answered in minutes, not days.",
      name: "Head of Operations, International Warehouse/Distribution Company",
    },
    {
      quote: "Next Layer Consulting took our vision and made it real. Their team was efficient, creative, and always available with advice when we needed it. Matt was great at coordinating the process and making sure our questions were answered quickly. The result is a website that truly works for our business and has made a noticeable difference in how clients find and contact us.",
      name: "Head of Technology, Oakridge Digital",
    },
    {
      quote: "Next Layer Consulting made our NetSuite implementation straightforward and effective. The team worked closely with us at every stage, provided clear guidance, and delivered exactly what we needed. Our processes run smoother, our data is all in one place, and we have ongoing support whenever we need it. This partnership has made a real difference to our business.",
      name: "MD, BSDTech",
    },
    {
      quote: "Next Layer Consulting made our NetSuite implementation straightforward and highly effective for Destiny and ElectroMarket. Their team understood our processes and helped us configure NetSuite so that inventory, orders, and customer service all work together seamlessly. We have stronger data visibility, faster order processing, and the ongoing support keeps everything running smoothly. This partnership has really improved the way we operate.",
      name: "Operations Director, Destiny",
    },
  ];

  return (
    // Section background adapts to site theme
    <section className="py-16 bg-seasalt dark:bg-techblack">
      <div className="max-w-3xl px-6 mx-auto text-center">
        <h2 className="mb-12 text-5xl leading-[1.08] font-semibold text-center text-techblack dark:text-seasalt">
          Real results from real businesses
        </h2>

        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators
          autoPlay
          interval={5000}
          infiniteLoop
          stopOnHover
          swipeable
          emulateTouch
          renderIndicator={(onClick, isSelected, idx, label) => (
            <button
              type="button"
              key={idx}
              onClick={onClick}
              title={label}
              aria-label={`Go to testimonial ${idx + 1}`}
              aria-current={isSelected}
              className={`mx-1 h-2.5 w-2.5 rounded-full transition
                ${isSelected ? 'bg-nlc-blue' : 'bg-techblack dark:bg-seasalt/40 hover:bg-seasalt0 dark:hover:bg-seasalt/60'}`}
            />
          )}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="px-2">
              <figure className="max-w-3xl p-8 mx-auto  bg-seasalt rounded-xl  dark:bg-techblack md:p-10">
                <blockquote className="text-left md:text-center">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mx-auto mb-4 text-nlc-blue"
                    fill="currentColor"
                  >
                    <path d="M7.17 6C4.86 6 3 7.86 3 10.17c0 2.19 1.7 3.83 3.83 3.83.78 0 1.5-.2 2.1-.57-.42 2.11-2.1 3.87-4.76 4.94l.72 1.8c4.33-1.73 6.11-4.84 6.11-8.74C11 8.27 9.07 6 7.17 6zm9.83 0C14.69 6 13 7.86 13 10.17c0 2.19 1.7 3.83 3.83 3.83.78 0 1.5-.2 2.1-.57-.42 2.11-2.1 3.87-4.76 4.94l.72 1.8c4.33-1.73 6.11-4.84 6.11-8.74C21 8.27 19.07 6 17 6z" />
                  </svg>
                  <p className="text-lg italic leading-relaxed text-zinc-800 md:text-xl dark:text-blue-50">
                    “{t.quote}”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base font-semibold text-zinc-900 md:text-lg dark:text-white">
                  {t.name}
                </figcaption>
              </figure>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

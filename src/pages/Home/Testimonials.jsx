import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Partnering with Next Layer Consulting was a game changer for our NetSuite migration. Their team understood the unique demands of our tech-driven business, cut migration headaches in half, and delivered a custom solution that connected our sales, finance, and analytics overnight. We saw operational improvements from week one and our support questions now get answered in minutes, not days.",
      name: "Head of Operations, International Warehouse/Distribution Company",
    },
    {
      quote:
        "Next Layer Consulting took our vision and made it real. Their team was efficient, creative, and always available with advice when we needed it. Matt was great at coordinating the process and making sure our questions were answered quickly. The result is a website that truly works for our business and has made a noticeable difference in how clients find and contact us.",
      name: "Head of Technology, Oakridge Digital",
    },
    {
      quote:
        "Next Layer Consulting made our NetSuite implementation straightforward and effective. The team worked closely with us at every stage, provided clear guidance, and delivered exactly what we needed. Our processes run smoother, our data is all in one place, and we have ongoing support whenever we need it. This partnership has made a real difference to our business.",
      name: "MD, BSDTech",
    },
    {
      quote:
        "Next Layer Consulting made our NetSuite implementation straightforward and highly effective for Destiny and ElectroMarket. Their team understood our processes and helped us configure NetSuite so that inventory, orders, and customer service all work together seamlessly. We have stronger data visibility, faster order processing, and the ongoing support keeps everything running smoothly. This partnership has really improved the way we operate.",
      name: "Operations Director, Destiny",
    },
  ];
  return (
    <section className="bg-seasalt dark:bg-graphite border-silver dark:border-sideral relative overflow-hidden border-t py-16">
      {/* Decorative Circle Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="bg-nlc-blue/10 dark:bg-seasalt/5 h-[800px] w-[800px] rounded-full"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-techblack dark:text-seasalt mb-8 text-center text-5xl leading-tight font-semibold">
          Real results from real businesses
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet mx-2 h-3 w-3 rounded-full transition bg-silver dark:bg-graphite",
            bulletActiveClass:
              "swiper-pagination-bullet-active bg-biscay dark:bg-seasalt",
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="px-2 pb-12">
                <figure className="dark:bg-techblack border-nlc-blue dark:border-nlc-blue-darker bg-biscay relative z-10 mx-auto max-w-2xl rounded-xl border p-8 shadow-lg md:p-10">
                  <blockquote className="text-left md:text-center">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="text-bittersweet mx-auto mb-4 h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M7.17 6C4.86 6 3 7.86 3 10.17c0 2.19 1.7 3.83 3.83 3.83.78 0 1.5-.2 2.1-.57-.42 2.11-2.1 3.87-4.76 4.94l.72 1.8c4.33-1.73 6.11-4.84 6.11-8.74C11 8.27 9.07 6 7.17 6zm9.83 0C14.69 6 13 7.86 13 10.17c0 2.19 1.7 3.83 3.83 3.83.78 0 1.5-.2 2.1-.57-.42 2.11-2.1 3.87-4.76 4.94l.72 1.8c4.33-1.73 6.11-4.84 6.11-8.74C21 8.27 19.07 6 17 6z" />
                    </svg>
                    <p className="text-seasalt dark:text-seasalt text-lg leading-relaxed italic md:text-xl">
                      “{t.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="text-seasalt dark:text-seasalt mt-6 text-sm md:text-lg">
                    {t.name}
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

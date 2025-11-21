import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Partnering with Next Layer Consulting was a game changer for our NetSuite migration. Their team understood the unique demands of our tech-driven business, cut migration headaches in half, and delivered a custom solution that connected our sales, finance, and analytics overnight. We saw operational improvements from week one and our support questions now get answered in minutes, not days.",
      name: "Head of Operations",
      company: "International Warehouse/Distribution Company",
      avatar: "HO",
    },
    {
      quote:
        "Next Layer Consulting took our vision and made it real. Their team was efficient, creative, and always available with advice when we needed it. Matt was great at coordinating the process and making sure our questions were answered quickly. The result is a website that truly works for our business and has made a noticeable difference in how clients find and contact us.",
      name: "Head of Technology",
      company: "Oakridge Digital",
      avatar: "HT",
    },
    {
      quote:
        "Next Layer Consulting made our NetSuite implementation straightforward and effective. The team worked closely with us at every stage, provided clear guidance, and delivered exactly what we needed. Our processes run smoother, our data is all in one place, and we have ongoing support whenever we need it. This partnership has made a real difference to our business.",
      name: "MD",
      company: "BSDTech",
      avatar: "MD",
    },
    {
      quote:
        "Next Layer Consulting made our NetSuite implementation straightforward and highly effective for Destiny and ElectroMarket. Their team understood our processes and helped us configure NetSuite so that inventory, orders, and customer service all work together seamlessly. We have stronger data visibility, faster order processing, and the ongoing support keeps everything running smoothly. This partnership has really improved the way we operate.",
      name: "Operations Director",
      company: "Destiny",
      avatar: "OD",
    },
  ];

  return (
    <section className="bg-biscay dark:bg-techblack py-32 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-bittersweet/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-biscay/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-seasalt dark:text-seasalt mb-4 text-center text-5xl font-bold">
          Real results from real businesses
        </h2>
        <p className="text-seasalt dark:text-seasalt mb-16 text-center text-lg max-w-3xl mx-auto">
          Don't just take our word for it - hear from the businesses we've
          helped transform their NetSuite experience.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet mx-2 !h-3.5 !w-3.5 rounded-full transition cursor-pointer !bg-seasalt !opacity-70",
            bulletActiveClass:
              "!bg-bittersweet dark:!bg-bittersweet-dark2 !w-12 !h-3.5 !opacity-100",
          }}
          className="pb-20"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center px-4 mb-12">
                <div className="group relative bg-white/90 dark:bg-graphite/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-bittersweet/40 rounded-2xl p-8 md:p-12 max-w-4xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Quote className="text-bittersweet dark:text-bittersweet-dark2 h-12 w-12 mb-6" />
                  <blockquote className="mb-8">
                    <p className="text-graphite dark:text-seasalt text-lg md:text-xl leading-relaxed">
                      {t.quote}
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-bittersweet to-bittersweet-dark1 dark:from-bittersweet-dark2 dark:to-bittersweet flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {t.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="text-techblack dark:text-seasalt font-semibold text-base">
                        {t.name}
                      </p>
                      <p className="text-graphite dark:text-gray-400 text-sm">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

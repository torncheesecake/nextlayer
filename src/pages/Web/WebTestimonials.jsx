import { Star } from "lucide-react";
import {
  useScrollAnimation,
  useScrollAnimationList,
} from "../../hooks/useScrollAnimation";

export default function NextLayerTestimonials() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [setCardRef, visibleCards] = useScrollAnimationList(3, 0.2, 150);

  const reviews = [
    {
      text: "Next Layer Consulting delivered a professional, fast website that matched our brand and business needs. The team combined strong technical skill with a creative approach and kept communication clear from start to finish.",
      name: "Oliver Cannell",
      role: "Managing Director",
      company: "IC360",
      rating: 5,
      image: null, // Add client photo path when available
    },
    {
      text: "We chose Next Layer Consulting to rebuild the Blunsdon Blinds site and couldn't be happier. They understood our business quickly, guided us through decisions, and launched a site our customers love.",
      name: "Zoe & Lee Meagor",
      role: "Founders",
      company: "Blunsdon Blinds",
      rating: 5,
      image: null,
    },
    {
      text: "The team at Next Layer are efficient, reliable, and genuinely easy to work with. They explained complex ideas simply and delivered our new site on time with zero drama.",
      name: "Richard Williams",
      role: "Director",
      company: "ERP Company",
      rating: 5,
      image: null,
    },
  ];

  return (
    <section className="bg-black w-full py-40 md:py-56 transition-colors duration-300 relative overflow-hidden border-b border-gray-800 z-10">
      {/* Gradient glow accents - diagonal flow */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-bittersweet/18 rounded-full blur-[250px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-[900px] h-[900px] bg-purple-500/18 rounded-full blur-[250px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      ></div>

      {/* Schema.org markup for Reviews */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Next Layer Consulting",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: reviews.length,
            bestRating: "5",
            worstRating: "5",
          },
          review: reviews.map((review) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: review.name,
              jobTitle: review.role,
              worksFor: {
                "@type": "Organization",
                name: review.company,
              },
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.rating,
              bestRating: "5",
            },
            reviewBody: review.text,
            itemReviewed: {
              "@type": "Service",
              name: "Web Development Services",
              provider: {
                "@type": "Organization",
                name: "Next Layer Consulting",
              },
            },
          })),
        })}
      </script>

      <div className="mx-auto max-w-7xl px-8 md:px-16 relative z-10">
        {/* Editorial header */}
        <div ref={headerRef} className="mb-32">
          <div
            className={`flex items-center gap-8 mb-12 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div
              className={`h-0.5 bg-bittersweet transition-all duration-1000 delay-100 ${headerVisible ? "w-20" : "w-0"}`}
            ></div>
            <span
              aria-hidden="true"
              className="text-sm tracking-[0.5em] uppercase text-gray-300 font-bold"
              style={{ fontFamily: "monospace" }}
            >
              06 / Testimonials
            </span>
          </div>
          <h2
            className={`text-white mb-16 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight max-w-4xl transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            What our clients&nbsp;
            <span className="text-purple-400 font-black italic">say</span>
          </h2>
        </div>

        {/* Testimonials grid with subgrid for aligned author sections */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-24"
          style={{ gridAutoRows: "auto" }}
        >
          {reviews.map((review, index) => {
            const isVisible = visibleCards.has(index);

            return (
              <article
                key={index}
                ref={setCardRef(index)}
                className={`group border-t-2 border-bittersweet pt-10 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  display: "grid",
                  gridTemplateRows: "auto auto 1fr auto",
                  alignContent: "start",
                }}
              >
                {/* Stars */}
                <div
                  className="flex gap-1 mb-8"
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                  style={{ gridRow: "1" }}
                >
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-purple-500 fill-current transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-12" style={{ gridRow: "2" }}>
                  <p className="text-gray-200 text-lg md:text-xl leading-[1.65]">
                    "{review.text}"
                  </p>
                </blockquote>

                {/* Spacer to push author to bottom */}
                <div style={{ gridRow: "3" }}></div>

                {/* Author with optional image - aligned at bottom */}
                <div
                  className="border-t border-gray-800 pt-6"
                  style={{ gridRow: "4" }}
                >
                  <div className="flex items-center gap-4">
                    {review.image && (
                      <img
                        src={review.image}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width="48"
                        height="48"
                      />
                    )}
                    <div>
                      <p className="text-white font-bold text-lg mb-1">
                        {review.name}
                      </p>
                      <p className="text-gray-300 text-base">
                        {review.role}, {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust indicator */}
        <div className="mt-32 text-center p-8 border border-purple-400/30 bg-purple-400/5 rounded-lg">
          <p className="text-gray-200 text-lg mb-4">
            <strong className="text-white">
              100% Client Satisfaction Rating
            </strong>
          </p>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Every project delivered on time, on budget, and exceeding
            expectations. We don't just build websites - we build lasting
            partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}

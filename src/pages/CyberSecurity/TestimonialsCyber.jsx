"use client";
import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      text: "You found security holes no one else did, including ones two previous audits missed.",
      role: "Head of IT",
      company: "Financial Services",
      avatar: "HI",
      color: "from-blue-500 to-cyan-500",
    },
    {
      text: "Zero jargon, immediate actions. We fixed every issue thanks to your guidance.",
      role: "Operations Director",
      company: "SaaS Scale-Up",
      avatar: "OD",
      color: "from-purple-500 to-pink-500",
    },
    {
      text: "True partners in cyber resilience. Our compliance status is now way up.",
      role: "CISO",
      company: "E-commerce Brand",
      avatar: "CI",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentSlide, isPaused]);

  return (
    <section className="bg-gradient-to-b from-techblack via-graphite to-techblack px-6 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-bittersweet/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-biscay/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-seasalt mb-4 text-5xl lg:text-6xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-seasalt/70 text-lg">
            Trusted by organizations across finance, SaaS, and e-commerce
          </p>
        </div>

        {/* Testimonials Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main testimonial card */}
          <div className="relative bg-gradient-to-br from-graphite/80 to-techblack/80 backdrop-blur-sm border border-seasalt/10 rounded-3xl p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-br from-bittersweet to-bittersweet-dark2 p-4 rounded-full shadow-xl">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content with fade transition */}
            <div
              className={`transition-all duration-500 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonials[currentSlide].color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                >
                  {testimonials[currentSlide].avatar}
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-center mb-8">
                <p className="text-seasalt text-xl lg:text-2xl leading-relaxed italic">
                  "{testimonials[currentSlide].text}"
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <p className="text-seasalt font-semibold text-lg mb-1">
                  {testimonials[currentSlide].role}
                </p>
                <p className="text-seasalt/60 text-base">
                  {testimonials[currentSlide].company}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-seasalt/10 hover:bg-seasalt/20 border border-seasalt/20 hover:border-seasalt/40 p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-bittersweet"
            >
              <ChevronLeft className="h-6 w-6 text-seasalt" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-seasalt/10 hover:bg-seasalt/20 border border-seasalt/20 hover:border-seasalt/40 p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-bittersweat"
            >
              <ChevronRight className="h-6 w-6 text-seasalt" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bittersweet focus:ring-offset-2 focus:ring-offset-graphite ${
                  index === currentSlide
                    ? "w-12 bg-bittersweet"
                    : "w-3 bg-seasalt/30 hover:bg-seasalt/50"
                }`}
              />
            ))}
          </div>

          {/* Progress indicator (optional) */}
          {!isPaused && (
            <div className="mt-6 mx-auto w-32 h-1 bg-seasalt/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-bittersweet rounded-full transition-all duration-5000 ease-linear"
                style={{
                  width: "100%",
                  animation: "progress 5000ms linear infinite",
                }}
              />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

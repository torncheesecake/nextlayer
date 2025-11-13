"use client";
import { useEffect, useState } from "react";
export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      text: "You found security holes no one else did, including ones two previous audits missed.",
      role: "Head of IT",
      company: "Financial Services",
    },
    {
      text: "Zero jargon, immediate actions. We fixed every issue thanks to your guidance.",
      role: "Operations Director",
      company: "SaaS Scale-Up",
    },
    {
      text: "True partners in cyber resilience. Our compliance status is now way up.",
      role: "CISO",
      company: "E-commerce Brand",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  return (
    <section className="bg-graphite px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-seasalt mb-10 text-center text-3xl font-bold tracking-tight">
          What Our Clients Say
        </h2>
        <div className="border-sideral bg-techblack relative rounded-2xl border p-10 shadow-md">
          <div className="text-center">
            <p className="text-seasalt/95 mb-6 text-xl italic">
              "{testimonials[currentSlide].text}"
            </p>
            <div className="text-base">
              <span className="text-seasalt font-semibold">
                {testimonials[currentSlide].role}
              </span>
              <span className="text-seasalt/80">
                &nbsp;•&nbsp; {testimonials[currentSlide].company}
              </span>
            </div>
          </div>
          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`border-seasalt/20 focus:ring-seasalt h-3 w-3 rounded-full border transition outline-none focus:ring-2 focus:ring-offset-2 ${index === currentSlide ? "bg-body-light" : "bg-zinc-700"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

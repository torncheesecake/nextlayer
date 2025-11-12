'use client';
import { useState, useEffect } from 'react';

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "You found security holes no one else did, including ones two previous audits missed.",
      role: "Head of IT",
      company: "Financial Services"
    },
    {
      text: "Zero jargon, immediate actions. We fixed every issue thanks to your guidance.",
      role: "Operations Director", 
      company: "SaaS Scale-Up"
    },
    {
      text: "True partners in cyber resilience. Our compliance status is now way up.",
      role: "CISO",
      company: "E-commerce Brand"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="px-6 py-16 bg-techblack">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-8 text-2xl font-bold text-center text-seasalt">
          What Our Clients Say
        </h2>
        
        <div className="relative p-8  rounded-lg bg-techblack -seasalt">
          <div className="text-center">
            <p className="mb-4 text-lg italic text-seasalt">
              "{testimonials[currentSlide].text}"
            </p>
            <div className="text-sm">
              <span className="font-semibold text-seasalt">{testimonials[currentSlide].role}</span>
              <span className="text-seasalt"> • {testimonials[currentSlide].company}</span>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentSlide ? 'bg-[#FF6B6B]' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

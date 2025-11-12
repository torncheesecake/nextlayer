'use client';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed z-50 bottom-6 right-6">
      <a
        href="#contact"
        className="bg-[#FF6B6B] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#FF5252] transition flex items-center gap-2"
      >
        <i className="bi-shield-check"></i>
        <span className="hidden sm:inline">Book Assessment</span>
      </a>
    </div>
  );
}

import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import BugLight from "@/assets/bug-fav.png";

export default function Footer() {
  return (
    <footer className="w-full px-4 -t py-14 bg-nlc-blue dark:bg-techblack -nlc-blue/30 /10">
      <div className="flex flex-col items-center max-w-screen-md gap-8 mx-auto">
        {/* Logo + Brand */}
        <span className="inline-flex items-center justify-center p-3 rounded-full shadow-lg bg-seasalt">
          <img src={BugLight} alt="Next Layer Logo" className="w-14 h-14" />
        </span>
        <h2 className="text-2xl font-black tracking-tight text-center md:text-4xl text-seasalt">
          Next Layer Consulting
        </h2>
        <p className="max-w-xl text-lg font-light text-center text-seasalt md:text-lg">
          Under the surface, above the rest. Ready for what's next?
        </p>

        {/* Contact Row */}
        <div className="flex flex-col items-center gap-3 mt-2 md:flex-row md:gap-8">
          <a href="mailto:hello@nextlayer.consulting" className="flex items-center gap-2 text-lg font-medium transition text-seasalt hover:text-nlc-blue">
            <Mail size={18} /> hello@nextlayer.consulting
          </a>
          <a href="tel:+441234567890" className="flex items-center gap-2 text-lg transition text-seasalt hover:text-nlc-blue">
            <Phone size={18} /> +44 1234 567890
          </a>
          <a href="https://www.linkedin.com/company/nextlayer" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg transition text-seasalt hover:text-nlc-blue">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        {/* Bottom tag */}
        <div className="flex flex-col items-center w-full gap-1 pt-4 mt-12 -t -seasalt/30">
          <span className="text-sm font-medium tracking-widest uppercase text-seasalt/60">Solutions beneath the surface, results above.

</span>
          <span className="mb-1 text-xs text-seasalt/60">© {new Date().getFullYear()} Next Layer Consulting</span>
        </div>
      </div>
    </footer>
  );
}

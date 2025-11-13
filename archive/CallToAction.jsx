import { Mail, MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";
export default function CallToAction() {
  return (
    <section className="bg-nlc-blue dark:bg-techblack py-20 text-center">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-icon-brand-light dark:text-icon-brand-dark mb-8 text-center text-5xl font-semibold">
          Ready to talk to a real expert?
        </h2>
        <p className="text-graphite dark:text-seasalt mb-10 text-2xl">
          Reach out and hear from a consultant, not a call centre. No jargon,
          just honest advice on your next steps.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary: Contact form */}
          <Link
            to="/contact"
            className="badge-accent hover:badge-accent dark:badge-accent dark:hover:badge-accent inline-flex items-center gap-3 rounded-full px-7 py-4 text-lg font-bold shadow-md transition focus:ring-4 focus:ring-[color-mix(in_srgb,var(--btn-graphite-bg)_40%,transparent)] focus:outline-none"
          >
            <MessageSquare className="h-5 w-5" /> Contact form
          </Link>
          {/* Secondary: Email */}
          <a
            href="mailto:Hello@nextlayerconsulting.com"
            className="bg-seasalt inline-flex items-center gap-3 rounded-full border border-snow px-7 py-4 text-lg font-bold text-btn-secondary-light-text shadow-md transition hover:bg-btn-secondary-light-bg-hover hover:text-btn-secondary-light-text-hover focus:ring-4 focus:outline-none dark:border-btn-secondary-dark-border dark:bg-btn-secondary-dark-bg dark:text-btn-secondary-dark-text dark:hover:bg-btn-secondary-dark-bg-hover dark:hover:text-btn-secondary-dark-text-hover"
          >
            <Mail className="h-5 w-5" /> Email us
          </a>
          {/* Secondary: Call */}
          <a
            href="tel:+4401784902047"
            className="bg-seasalt inline-flex items-center gap-3 rounded-full border border-snow px-7 py-4 text-lg font-bold text-btn-secondary-light-text shadow-md transition hover:bg-btn-secondary-light-bg-hover hover:text-btn-secondary-light-text-hover focus:ring-4 focus:outline-none dark:border-btn-secondary-dark-border dark:bg-btn-secondary-dark-bg dark:text-btn-secondary-dark-text dark:hover:bg-btn-secondary-dark-bg-hover dark:hover:text-btn-secondary-dark-text-hover"
          >
            <Phone className="h-5 w-5" /> Call: +44 (0) 1784 902 047
          </a>
        </div>
      </div>
    </section>
  );
}

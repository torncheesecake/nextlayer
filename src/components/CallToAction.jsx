import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function CallToAction() {
  return (
    <section
      className="py-20 text-center bg-seasalt dark:bg-techblack"
    >
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-12 text-5xl font-semibold text-nlc-blue dark:text-blue-100">
          Ready to talk to a real expert?
        </h2>
        <p className="mb-10 text-2xl text-techblack dark:text-blue-100">
          Reach out and hear from a consultant, not a call centre. No jargon, just honest advice on your next steps.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary: Contact form */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 py-4 text-lg font-bold transition -2 rounded-full shadow-md text-techblack px-7 -nlc-blue dark:text-seasalt hover:bg-nlc-blue hover:text-seasalt focus:outline-none focus:ring-4 focus:ring-nlc-mint/40"
          >
            <MessageSquare className="w-5 h-5" />
            Contact form
          </Link>

          {/* Secondary: Email */}
          <a
            href="mailto:Hello@nextlayerconsulting.com"
            className="inline-flex items-center gap-3 py-4 text-lg font-bold transition -2 rounded-full shadow-md text-techblack px-7 -nlc-blue dark:text-seasalt hover:bg-nlc-blue hover:text-seasalt focus:outline-none focus:ring-4 focus:ring-nlc-mint/40"
          >
            <Mail className="w-5 h-5" />
            Email us
          </a>

          {/* Secondary: Call */}
          <a
            href="tel:+4407854517555"
            className="inline-flex items-center gap-3 py-4 text-lg font-bold transition -2 rounded-full shadow-md text-techblack px-7 -nlc-blue dark:text-seasalt hover:bg-nlc-blue hover:text-seasalt focus:outline-none focus:ring-4 focus:ring-nlc-mint/40"
          >
            <Phone className="w-5 h-5" />
            Call: +44 (0) 7854 517 555
          </a>
        </div>
      </div>
    </section>
  );
}

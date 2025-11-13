import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
function ObfuscatedEmail({ className }) {
  const user = "hello";
  const domain = "nextlayerconsulting.com";
  const email = `${user}@${domain}`;
  return (
    <a
      href={`mailto:${email}`}
      className={`${className} text-graphite dark:text-seasalt hover:text-nlc-blue focus:text-nlc-blue underline underline-offset-2 transition`}
    >
      {email}
    </a>
  );
}
export default function HeroContact() {
  const [showThankYou, setShowThankYou] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "1") {
      setShowThankYou(true);
      setTimeout(() => {
        const el = document.getElementById("thankyou-message");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, []);
  return (
    <section className="border-default-light bg-seasalt dark:border-default-dark dark:bg-graphite  w-full border-b py-20 transition-colors duration-300 relative z-40">
      <div className="mx-auto w-[90%] max-w-7xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-12">
          {/* LEFT: Headline and Paragraph */}
          <div className="md:col-span-12 lg:col-span-6">
            <h1 className="text-graphite dark:text-seasalt mb-10 text-7xl leading-[1] tracking-tight md:text-6xl lg:text-8xl">
              Let's talk
            </h1>
            <p className="text-graphite dark:text-seasalt mb-8 text-lg leading-[1.5] font-light md:text-2xl">
              Get direct advice from trusted NetSuite consultants, no
              bounce-arounds, no scripts, reach out today for help, discovery
              sessions, or ongoing support tailored to the business.
            </p>
            <div className="space-y-3 text-lg md:text-xl">
              <p className="text-graphite dark:text-seasalt flex items-center gap-3">
                <Phone className="text-nlc-blue dark:text-seasalt h-5 w-5" />
                Prefer to call,
                <a
                  href="tel:+441784902047"
                  className="text-graphite dark:text-seasalt hover:text-nlc-blue focus:text-nlc-blue ml-1 font-medium underline underline-offset-2 transition"
                >
                  +44 (0) 1784 902 047
                </a>
              </p>
              <p className="text-graphite dark:text-seasalt flex items-center gap-3">
                <Mail className="text-nlc-blue dark:text-seasalt h-5 w-5" /> If
                email is preferred,
                <ObfuscatedEmail className="ml-1 font-medium" />
              </p>
            </div>
            {showThankYou && (
              <div
                id="thankyou-message"
                role="status"
                aria-live="polite"
                className="mt-8 w-full rounded-lg border border-green-300 bg-green-100 p-4 font-semibold text-green-900"
              >
                Thank you for the message, we will be in touch soon.
              </div>
            )}
          </div>
          {/* RIGHT: Contact form */}
          <div className="md:col-span-12 lg:col-span-6">
            <div className="mx-auto max-w-xl md:ml-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

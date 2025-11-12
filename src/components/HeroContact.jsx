import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import { Phone, Mail } from "lucide-react";

export default function HeroContact() {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "1") {
      setShowThankYou(true);
      // Scroll to banner after paint
      setTimeout(() => {
        const el = document.getElementById("thankyou-message");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, []);

  return (
 <section className="pt-12 pb-24 -b -gray-300 dark:bg-techblack bg-gradient-to-br from-seasalt to-zinc-100 dark:bg-none">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid items-start gap-12 md:grid-cols-12">
          {/* LEFT: Headline and Paragraph */}
          <div className="md:col-span-6">
          <h1 className="mb-10 text-7xl text-techblack md:text-6xl lg:text-8xl dark:text-seasalt leading-[1] tracking-tight">
              NetSuite made simple, let's talk
            </h1>

          <p className="mb-8 text-lg leading-[1.5] font-light text-techblack md:text-2xl dark:text-blue-50">
              Get direct advice from trusted NetSuite consultants, no bounce-arounds, no scripts, reach out today for help, discovery
              sessions, or ongoing support tailored to the business.
            </p>

            <div className="space-y-3 text-lg md:text-xl">
              <p className="flex items-center gap-3 text-techblack dark:text-blue-50">
                <Phone className="w-5 h-5 text-nlc-nlc-blue" />
                Prefer to call,
                <a
                  href="tel:+447854517555"
                  className="ml-1 font-bold underline text-nlc-nlc-blue hover:text-nlc-mint dark:text-nlc-nlc-blue dark:hover:text-nlc-mint"
                >
                  +44 (0) 7854 517 555
                </a>
              </p>
              <p className="flex items-center gap-3 text-techblack dark:text-blue-50">
                <Mail className="w-5 h-5 text-nlc-nlc-blue" />
                If email is preferred,
                <a
                  href="mailto:Hello@nextlayerconsulting.com"
                  className="ml-1 font-bold underline text-nlc-nlc-blue hover:text-nlc-mint dark:text-nlc-nlc-blue dark:hover:text-nlc-mint"
                >
                  Hello@nextlayerconsulting.com
                </a>
              </p>
            </div>

            {showThankYou && (
              <div
                id="thankyou-message"
                role="status"
                aria-live="polite"
                className="w-full p-4 mt-8 font-semibold text-green-900 bg-green-100  -green-300 rounded-lg"
              >
                Thank you for the message, we will be in touch soon.
              </div>
            )}
          </div>

          {/* RIGHT: Contact form */}
          <div className="md:col-span-6">
            <div className="max-w-xl mx-auto md:ml-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

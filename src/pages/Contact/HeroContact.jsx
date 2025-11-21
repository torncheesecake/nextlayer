import { Mail, Phone } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import ContactForm from "./ContactForm";

function ObfuscatedEmail({ className }) {
  const user = "hello";
  const domain = "nextlayerconsulting.com";
  const email = `${user}@${domain}`;
  return (
    <a
      href={`mailto:${email}`}
      className={`${className} text-seasalt dark:text-seasalt hover:text-bittersweet-light1 dark:hover:text-bittersweet-dark1 underline underline-offset-2 transition-colors duration-300`}
    >
      {email}
    </a>
  );
}

export default function HeroContact() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-biscay dark:bg-techblack w-full py-32 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-bittersweet/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-biscay-light2/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-biscay-light2/15 dark:bg-seasalt/5 rounded-full"></div>
      </div>

      <div className="mx-auto w-[90%] max-w-7xl px-6 relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* LEFT: Headline and contact info */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-seasalt dark:text-seasalt mb-8 text-6xl md:text-7xl leading-none tracking-tight font-black">
              Let's talk
            </h1>
            <p className="text-seasalt/90 dark:text-seasalt/90 mb-12 text-xl md:text-2xl leading-relaxed font-light">
              Get direct advice from trusted NetSuite consultants - no
              bounce-arounds, no scripts. Reach out today for help, discovery
              sessions, or ongoing support tailored to your business.
            </p>

            {/* Contact methods */}
            <div className="space-y-6">
              <div className="group bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-seasalt/20 dark:border-bittersweet/20 hover:border-bittersweet dark:hover:border-bittersweet-dark2 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-bittersweet dark:bg-bittersweet-dark2 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-seasalt h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-seasalt dark:text-seasalt text-lg font-semibold mb-2">
                      Prefer to call?
                    </p>
                    <a
                      href="tel:+441784902047"
                      className="text-seasalt dark:text-seasalt hover:text-bittersweet-light1 dark:hover:text-bittersweet-dark1 text-xl font-bold underline underline-offset-2 transition-colors duration-300"
                    >
                      +44 (0) 1784 902 047
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-seasalt/20 dark:border-bittersweet/20 hover:border-bittersweet dark:hover:border-bittersweet-dark2 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-bittersweet dark:bg-bittersweet-dark2 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-seasalt h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-seasalt dark:text-seasalt text-lg font-semibold mb-2">
                      Email preferred?
                    </p>
                    <ObfuscatedEmail className="text-xl font-bold" />
                  </div>
                </div>
              </div>
            </div>

            {showThankYou && (
              <div
                id="thankyou-message"
                role="status"
                aria-live="polite"
                className="mt-8 w-full rounded-2xl border-2 border-green-400 bg-green-100 dark:bg-green-900/30 dark:border-green-500 p-6 font-semibold text-green-900 dark:text-green-100 shadow-lg animate-fade-in-up"
              >
                ✓ Thank you for your message! We'll be in touch soon.
              </div>
            )}
          </div>

          {/* RIGHT: Contact form */}
          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

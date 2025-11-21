import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function WebCTA() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);

  return (
    <section className="relative w-full py-40 md:py-56 transition-colors duration-300 overflow-hidden border-b border-gray-800 z-10">
      {/* Dark base */}
      <div className="absolute inset-0 bg-black" aria-hidden="true"></div>

      {/* Linear gradient from bittersweet to purple behind circles */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-bittersweet/10 via-violet-600/8 to-violet-500/10"
        aria-hidden="true"
      ></div>

      {/* Top vignette */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-950/50 to-transparent"
        aria-hidden="true"
      ></div>

      {/* Large, heavily blurred circles - more subtle */}
      <div
        className="absolute -top-96 -left-96 w-[900px] h-[900px] bg-bittersweet opacity-20 rounded-full blur-[180px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute -top-60 -right-80 w-[800px] h-[800px] bg-violet-500 opacity-18 rounded-full blur-[160px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-80 left-0 w-[750px] h-[750px] bg-violet-600 opacity-22 rounded-full blur-[200px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bittersweet opacity-20 rounded-full blur-[170px] pointer-events-none z-1"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      ></div>

      <div className="mx-auto max-w-7xl px-8 md:px-16 relative z-10">
        {/* Editorial header */}
        <div ref={headerRef} className="mb-20">
          <div
            className={`flex items-center gap-8 mb-12 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div
              className={`h-0.5 bg-bittersweet transition-all duration-1000 delay-100 ${headerVisible ? "w-20" : "w-0"}`}
            ></div>
            <span
              aria-hidden="true"
              className="text-sm tracking-[0.5em] uppercase text-gray-300 font-bold"
              style={{ fontFamily: "monospace" }}
            >
              09 / Get Started
            </span>
          </div>
          <h2
            className={`text-white mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight max-w-5xl transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Ready to start
            <br />
            <span className="text-violet-400 font-black italic">
              your project?
            </span>
          </h2>
          <p
            className={`text-seasalt text-lg md:text-xl lg:text-2xl max-w-4xl leading-[1.7] font-light mb-12 transition-all duration-1000 delay-400 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Let's build something exceptional together. Get in touch to discuss
            your website project and discover how we can help transform your
            digital presence.
          </p>

          {/* Contact methods - pill-shaped buttons */}
          <div
            className={`flex flex-wrap gap-6 mb-16 transition-all duration-1000 delay-600 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Email */}
            <a
              href="mailto:hello@nextlayerconsulting.com"
              className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-600 hover:border-violet-500 hover:text-white transition-all duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-violet-400"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email Us
            </a>

            {/* Phone */}
            <a
              href="tel:+441784902047"
              className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-600 hover:border-violet-500 hover:text-white transition-all duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-violet-400"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Us
            </a>

            {/* Quick Chat */}
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-600 hover:border-violet-500 hover:text-white transition-all duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-violet-400"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Quick Chat
            </Link>
          </div>

          {/* Trust signals */}
          <div
            className={`transition-all duration-1000 delay-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-seasalt text-base md:text-lg">
              <div className="flex items-center gap-3">
                <span className="text-violet-400 text-2xl font-bold">✓</span>
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-violet-400 text-2xl font-bold">✓</span>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-violet-400 text-2xl font-bold">✓</span>
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-violet-400 text-2xl font-bold">✓</span>
                <span>100% UK-based team</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Snippet */}
        <div
          className={`max-w-7xl mt-32 md:mt-40 transition-all duration-1000 delay-900 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-white text-3xl md:text-4xl font-bold mb-12">
            Quick Questions?
          </h3>
          <div className="grid md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12">
            <div className="border-l-4 border-violet-400 pl-8">
              <p className="text-white font-bold mb-4 text-xl md:text-2xl">
                How long does a typical project take?
              </p>
              <p className="text-seasalt text-lg leading-relaxed">
                Most projects take 6–12 weeks from discovery to launch,
                depending on complexity. We'll provide a detailed timeline after
                our initial consultation.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-8">
              <p className="text-white font-bold mb-4 text-xl md:text-2xl">
                Do you offer payment plans?
              </p>
              <p className="text-seasalt text-lg leading-relaxed">
                Yes, we offer flexible payment plans split across project
                milestones. Typically 30% deposit, 40% at design approval, and
                30% on launch.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-8">
              <p className="text-white font-bold mb-4 text-xl md:text-2xl">
                What's included in a website project?
              </p>
              <p className="text-seasalt text-lg leading-relaxed">
                Every project includes responsive design, SEO optimisation,
                performance tuning, security best practices, and comprehensive
                training on managing your content.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-8">
              <p className="text-white font-bold mb-4 text-xl md:text-2xl">
                Do you provide ongoing support?
              </p>
              <p className="text-seasalt text-lg leading-relaxed">
                Absolutely. We offer monthly support packages covering hosting,
                updates, security monitoring, and content changes to keep your
                site running smoothly.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-8">
              <p className="text-white font-bold mb-4 text-xl md:text-2xl">
                Can you work with our existing brand?
              </p>
              <p className="text-seasalt text-lg leading-relaxed">
                Yes, we'll work within your brand guidelines to create a website
                that perfectly represents your business whilst maintaining
                consistency across all touchpoints.
              </p>
            </div>
            <div className="border-l-4 border-violet-400 pl-8">
              <p className="text-white font-bold mb-4 text-xl md:text-2xl">
                What if I need changes after launch?
              </p>
              <p className="text-seasalt text-lg leading-relaxed">
                All websites include a 30-day warranty period for bug fixes and
                adjustments. After that, we offer flexible hourly rates or
                support packages for ongoing changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

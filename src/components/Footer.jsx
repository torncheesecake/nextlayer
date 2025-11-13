import BugLight from "@/assets/bug-fav.png";
import { Linkedin, Mail, Phone } from "lucide-react";

// This component is great, no changes needed here.
function ObfuscatedEmail({ className, children }) {
  const chars = [
    104, 101, 108, 108, 111, 64, 110, 101, 120, 116, 108, 97, 121, 101, 114, 99,
    111, 110, 115, 117, 108, 116, 105, 110, 103, 46, 99, 111, 109,
  ];
  const email = String.fromCharCode(...chars);
  return (
    <a href={`mailto:${email}`} className={className}>
      {children}
      <span className="underline underline-offset-2">{email}</span>
    </a>
  );
}

export default function Footer() {
  const contactLinkClasses =
    "flex items-center gap-2 text-lg text-seasalt/90 hover:text-bittersweet-light1 transition-colors duration-200";

  return (
    <footer className="bg-biscay dark:bg-techblack w-full transition-colors duration-300">
      <div className="mx-auto w-[90%] max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-12">
          {/* Left: Brand and Tagline */}
          <div className="flex flex-col items-start gap-4">
            {/* This circle now adapts to the background of the section above it */}
            <span className="bg-seasalt dark:bg-graphite mb-1 inline-flex items-center justify-center rounded-full p-2 shadow-lg">
              <img src={BugLight} alt="Next Layer Logo" className="h-10 w-10" />
            </span>
            <h2 className="text-seasalt text-3xl font-black tracking-tight">
              Next Layer Consulting
            </h2>
            <h3 className="text-seasalt/70 dark:text-silver max-w-sm text-xl">
              Ready for what's next?
            </h3>
          </div>

          {/* Right: Contact Links */}
          <nav className="flex flex-col items-start gap-4 md:items-end">
            <ObfuscatedEmail className={contactLinkClasses}>
              <Mail size={18} />
            </ObfuscatedEmail>
            <a href="tel:+441784902047" className={contactLinkClasses}>
              <Phone size={18} />
              <span className="underline underline-offset-2">
                +44 (0)1784 902 047
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/next-layer-consulting-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className={contactLinkClasses}
            >
              <Linkedin size={18} />
              <span className="underline underline-offset-2">LinkedIn</span>
            </a>
          </nav>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-seasalt/20 mt-16 border-t pt-8 text-center">
          <p className="text-seasalt/70 dark:text-silver/90 text-sm">
            &copy; {new Date().getFullYear()} Next Layer Consulting. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

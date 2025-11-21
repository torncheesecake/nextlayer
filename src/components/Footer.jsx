import BugLight from "@/assets/bug-fav.png";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const isWebDevPage = location.pathname === "/web-services/web-development";

  const contactLinkClasses =
    "flex items-center gap-2 text-lg text-seasalt/90 hover:text-bittersweet-light1 dark:hover:text-bittersweet-dark2 transition-colors duration-200";

  return (
    <footer
      className={`${isWebDevPage ? "bg-black dark:bg-black border-t border-gray-900 dark:border-gray-900" : "bg-biscay dark:bg-techblack border-t border-biscay-light2 dark:border-gray-800"} w-full transition-colors duration-300 relative overflow-hidden`}
    >
      {/* Gradient glow accents for web dev page - blend with CTA above */}
      {isWebDevPage && (
        <>
          <div className="absolute -top-40 left-1/4 w-[900px] h-[900px] bg-purple-500/20 rounded-full blur-[250px] pointer-events-none z-1"></div>
          <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-bittersweet/18 rounded-full blur-[250px] pointer-events-none z-1"></div>
        </>
      )}
      <div className="mx-auto w-[90%] max-w-7xl px-6 py-20 relative z-10">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left: Brand and Tagline */}
          <div className="flex flex-col items-start gap-4 flex-1">
            <span className="bg-seasalt dark:bg-graphite mb-2 inline-flex items-center justify-center rounded-full p-3 shadow-xl">
              <img src={BugLight} alt="Next Layer Logo" className="h-12 w-12" />
            </span>
            <h2 className="text-seasalt mb-4 text-4xl md:text-5xl font-bold tracking-tight">
              Next Layer Consulting
            </h2>
            <p className="text-seasalt/80 dark:text-seasalt/80 max-w-md text-lg leading-relaxed">
              Expert NetSuite consulting, implementation, and support designed
              to help your business thrive.
            </p>
          </div>

          {/* Right: Contact Links */}
          <nav className="flex flex-col items-start lg:items-end">
            <h3 className="text-seasalt text-2xl font-bold mb-6">
              Get in touch
            </h3>
            <div className="flex flex-col gap-4">
              <ObfuscatedEmail className={`${contactLinkClasses} group`}>
                <div className="bg-bittersweet/20 dark:bg-bittersweet-dark2/20 backdrop-blur-sm border border-bittersweet/30 dark:border-bittersweet-dark2/30 p-3 rounded-full group-hover:bg-bittersweet/30 dark:group-hover:bg-bittersweet-dark2/30 group-hover:border-bittersweet/50 dark:group-hover:border-bittersweet-dark2/50 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                  <Mail
                    size={20}
                    className="text-bittersweet dark:text-bittersweet-dark2"
                  />
                </div>
              </ObfuscatedEmail>
              <a
                href="tel:+441784902047"
                className={`${contactLinkClasses} group`}
              >
                <div className="bg-bittersweet/20 dark:bg-bittersweet-dark2/20 backdrop-blur-sm border border-bittersweet/30 dark:border-bittersweet-dark2/30 p-3 rounded-full group-hover:bg-bittersweet/30 dark:group-hover:bg-bittersweet-dark2/30 group-hover:border-bittersweet/50 dark:group-hover:border-bittersweet-dark2/50 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                  <Phone
                    size={20}
                    className="text-bittersweet dark:text-bittersweet-dark2"
                  />
                </div>
                <span className="underline underline-offset-2">
                  +44 (0)1784 902 047
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/next-layer-consulting-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactLinkClasses} group`}
              >
                <div className="bg-bittersweet/20 dark:bg-bittersweet-dark2/20 backdrop-blur-sm border border-bittersweet/30 dark:border-bittersweet-dark2/30 p-3 rounded-full group-hover:bg-bittersweet/30 dark:group-hover:bg-bittersweet-dark2/30 group-hover:border-bittersweet/50 dark:group-hover:border-bittersweet-dark2/50 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
                  <Linkedin
                    size={20}
                    className="text-bittersweet dark:text-bittersweet-dark2"
                  />
                </div>
                <span className="underline underline-offset-2">LinkedIn</span>
              </a>
            </div>
          </nav>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-seasalt/20 mt-16 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-seasalt/70 dark:text-seasalt/70 text-sm">
              &copy; {new Date().getFullYear()} Next Layer Consulting. All
              rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-seasalt/70 hover:text-seasalt transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-seasalt/70 hover:text-seasalt transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

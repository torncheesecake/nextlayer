import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="Oops! The page you're looking for seems to have gone missing."
        path="/404"
      />
      <section className="bg-gradient-to-br from-seasalt via-biscay-light2/10 to-seasalt dark:from-graphite dark:via-techblack dark:to-graphite min-h-screen flex items-center justify-center py-20 transition-all duration-700 relative overflow-hidden">
        {/* Large overlapping gradient circles - RouteHero style */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-biscay-light2/70 dark:bg-biscay/40 w-[1200px] h-[1200px] rounded-full blur-3xl animate-pulse-slow"></div>

          {/* Overlapping circles positioned around */}
          <div className="absolute -top-40 -left-60 bg-bittersweet/60 dark:bg-bittersweet/35 w-[1000px] h-[1000px] rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-60 -right-40 bg-biscay/65 dark:bg-biscay/40 w-[1100px] h-[1100px] rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute -top-20 -right-60 bg-gradient-to-br from-bittersweet/55 to-biscay-light2/60 dark:from-bittersweet/30 dark:to-biscay-light2/35 w-[850px] h-[850px] rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        {/* White glass overlay for better text readability */}
        <div className="absolute inset-0 pointer-events-none bg-white/30 dark:bg-black/20 backdrop-blur-sm"></div>

        {/* Subtle dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative z-10 mx-auto w-[90%] max-w-4xl px-6 text-center">
          {/* Large 404 with solid gradient text */}
          <div className="mb-8 relative">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-biscay via-bittersweet to-biscay-dark1 dark:from-biscay-light2 dark:via-bittersweet dark:to-biscay-light2 text-9xl md:text-[12rem] font-black leading-none animate-float">
              404
            </h1>
          </div>

          {/* Main message */}
          <h2 className="text-techblack dark:text-seasalt mb-6 text-4xl md:text-5xl font-bold">
            Well, this is awkward...
          </h2>

          <p className="text-graphite dark:text-seasalt mb-4 text-xl md:text-2xl max-w-2xl mx-auto">
            We've looked everywhere for this page. Under the desk, behind the
            server, even in the NetSuite modules. It's definitely not here.
          </p>

          <p className="text-graphite dark:text-seasalt mb-12 text-lg max-w-xl mx-auto">
            Either you've found a broken link (our bad), or you're testing our
            404 page (nice work).
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Home size={20} />
              Take Me Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 bg-white dark:bg-techblack text-techblack dark:text-seasalt hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* Helpful links */}
          <div className="bg-white/80 dark:bg-techblack/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Search
                className="text-bittersweet dark:text-bittersweet-dark2"
                size={24}
              />
              <h3 className="text-techblack dark:text-seasalt text-2xl font-bold">
                Looking for something specific?
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-center">
              <Link
                to="/netsuite"
                className="text-graphite dark:text-seasalt hover:text-bittersweet dark:hover:text-bittersweet-dark2 transition-colors text-lg p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                → NetSuite Services
              </Link>
              <Link
                to="/netsuite/support"
                className="text-graphite dark:text-seasalt hover:text-bittersweet dark:hover:text-bittersweet-dark2 transition-colors text-lg p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                → Support Packages
              </Link>
              <Link
                to="/web-services/web-development"
                className="text-graphite dark:text-seasalt hover:text-bittersweet dark:hover:text-bittersweet-dark2 transition-colors text-lg p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                → Web Development
              </Link>
              <Link
                to="/contact"
                className="text-graphite dark:text-seasalt hover:text-bittersweet dark:hover:text-bittersweet-dark2 transition-colors text-lg p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                → Contact Us
              </Link>
            </div>
          </div>

          {/* Fun footer note */}
          <p className="text-graphite dark:text-seasalt mt-8 text-base italic bg-white/60 dark:bg-techblack/60 backdrop-blur-sm rounded-lg px-4 py-3 inline-block">
            P.S. If you got here by clicking a link on our site, please{" "}
            <Link
              to="/contact"
              className="text-bittersweet dark:text-bittersweet-dark1 underline hover:no-underline"
            >
              let us know
            </Link>{" "}
            so we can fix it. We'll send you a virtual high-five.
          </p>
        </div>
      </section>
    </>
  );
}

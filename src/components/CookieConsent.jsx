import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      const saved = JSON.parse(consent);
      setPreferences(saved);
      applyConsent(saved);
    }
  }, []);

  const applyConsent = (prefs) => {
    // Enable/disable Google Analytics based on consent
    if (window.gtag) {
      if (prefs.analytics) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      } else {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
    }

    // Add other tracking consent here (e.g., marketing pixels)
    if (prefs.marketing) {
      // Enable marketing cookies
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(necessaryOnly);
    saveConsent(necessaryOnly);
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    applyConsent(prefs);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreference = (key) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      {showPreferences && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm"
          onClick={() => setShowPreferences(false)}
        />
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white dark:bg-techblack border-2 border-bittersweet dark:border-bittersweet-dark2 rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="bg-bittersweet/10 dark:bg-bittersweet-dark2/10 p-3 rounded-full">
                  <Cookie className="h-6 w-6 text-bittersweet dark:text-bittersweet-dark2" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-techblack dark:text-seasalt text-xl md:text-2xl font-bold mb-3">
                  We value your privacy
                </h3>
                <p className="text-graphite dark:text-seasalt text-base md:text-lg mb-4">
                  We use cookies to enhance your browsing experience, analyse
                  site traffic, and personalise content. By clicking "Accept
                  all", you consent to our use of cookies.{" "}
                  <Link
                    to="/privacy"
                    className="text-bittersweet dark:text-bittersweet-dark2 underline hover:text-bittersweet-dark1 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 px-6 py-3 rounded-full font-semibold text-base transition-all shadow-md hover:shadow-lg"
                  >
                    Accept all
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="bg-seasalt dark:bg-graphite text-techblack dark:text-seasalt border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-3 rounded-full font-semibold text-base transition-all"
                  >
                    Necessary only
                  </button>
                  <button
                    onClick={() => setShowPreferences(!showPreferences)}
                    className="text-techblack dark:text-seasalt hover:text-bittersweet dark:hover:text-bittersweet-dark2 px-6 py-3 rounded-full font-semibold text-base transition-colors underline"
                  >
                    Manage preferences
                  </button>
                </div>
              </div>

              <button
                onClick={acceptNecessary}
                className="shrink-0 text-graphite dark:text-seasalt hover:text-bittersweet dark:hover:text-bittersweet-dark2 transition-colors"
                aria-label="Close and accept necessary cookies only"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Preferences Panel */}
            {showPreferences && (
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-techblack dark:text-seasalt text-lg font-bold mb-4">
                  Cookie preferences
                </h4>

                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h5 className="text-techblack dark:text-seasalt font-semibold mb-1">
                        Necessary cookies
                      </h5>
                      <p className="text-graphite dark:text-seasalt/80 text-sm">
                        Essential for the website to function properly. Cannot
                        be disabled.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="bg-gray-300 dark:bg-gray-600 w-12 h-6 rounded-full relative cursor-not-allowed opacity-50">
                        <div className="bg-bittersweet dark:bg-bittersweet-dark2 w-5 h-5 rounded-full absolute top-0.5 right-0.5 transition-all" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h5 className="text-techblack dark:text-seasalt font-semibold mb-1">
                        Analytics cookies
                      </h5>
                      <p className="text-graphite dark:text-seasalt/80 text-sm">
                        Help us understand how visitors interact with our
                        website (Google Analytics).
                      </p>
                    </div>
                    <div className="shrink-0">
                      <button
                        onClick={() => togglePreference("analytics")}
                        className={`w-12 h-6 rounded-full relative transition-colors ${
                          preferences.analytics
                            ? "bg-bittersweet dark:bg-bittersweet-dark2"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                        aria-label="Toggle analytics cookies"
                      >
                        <div
                          className={`bg-white w-5 h-5 rounded-full absolute top-0.5 transition-all ${
                            preferences.analytics ? "right-0.5" : "left-0.5"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h5 className="text-techblack dark:text-seasalt font-semibold mb-1">
                        Marketing cookies
                      </h5>
                      <p className="text-graphite dark:text-seasalt/80 text-sm">
                        Used to deliver personalised advertisements and track
                        campaign performance.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <button
                        onClick={() => togglePreference("marketing")}
                        className={`w-12 h-6 rounded-full relative transition-colors ${
                          preferences.marketing
                            ? "bg-bittersweet dark:bg-bittersweet-dark2"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                        aria-label="Toggle marketing cookies"
                      >
                        <div
                          className={`bg-white w-5 h-5 rounded-full absolute top-0.5 transition-all ${
                            preferences.marketing ? "right-0.5" : "left-0.5"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={savePreferences}
                    className="bg-bittersweet text-seasalt hover:bg-bittersweet-dark1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 px-6 py-2.5 rounded-full font-semibold transition-all"
                  >
                    Save preferences
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-graphite dark:text-seasalt hover:text-techblack dark:hover:text-white px-6 py-2.5 rounded-full font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

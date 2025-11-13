import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
// This component ensures that when navigating to a new route, the page scrolls to the top unless there's a hash in the URL, which indicates a specific section to scroll to.

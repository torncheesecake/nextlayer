import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 2000; // 2 seconds for smooth scroll
    let start = null;

    // Ease-in-out-cubic for buttery smooth scroll
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-bittersweet dark:bg-bittersweet-dark2 text-seasalt p-4 rounded-full shadow-lg hover:bg-bittersweet-dark1 dark:hover:bg-bittersweet-dark1 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-bittersweet focus:ring-offset-2 dark:focus:ring-bittersweet-dark2 group"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
}

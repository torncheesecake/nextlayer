import { useEffect, useRef, useState } from "react";

/**
 * Shared hook for scroll-based animations using IntersectionObserver
 * Reduces memory overhead by properly cleaning up observers after animation
 *
 * @param {number} threshold - Percentage of element visibility to trigger (0-1)
 * @param {number} delay - Optional delay before setting visible state (ms)
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, visibility state]
 */
export function useScrollAnimation(threshold = 0.2, delay = 0) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // If user prefers reduced motion, show immediately without animation
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              // Disconnect after animation completes
              observer.disconnect();
            }, delay);
          } else {
            setIsVisible(true);
            // Disconnect after setting visible
            observer.disconnect();
          }
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  return [ref, isVisible];
}

/**
 * Hook for animating multiple items in a list with staggered delays
 *
 * @param {number} itemCount - Number of items to track
 * @param {number} threshold - Percentage of element visibility to trigger (0-1)
 * @param {number} staggerDelay - Delay between each item animation (ms)
 * @returns {[Function, Set]} - [callback ref function, Set of visible indices]
 */
export function useScrollAnimationList(
  itemCount,
  threshold = 0.2,
  staggerDelay = 100,
) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // If user prefers reduced motion, show all items immediately
    if (prefersReducedMotion) {
      setVisibleItems(new Set([...Array(itemCount).keys()]));
      return;
    }

    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]));
              // Disconnect after animation completes
              observer.disconnect();
            }, index * staggerDelay);
          }
        },
        { threshold },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [itemCount, threshold, staggerDelay]);

  // Callback ref function to populate the refs array
  const setItemRef = (index) => (el) => {
    itemRefs.current[index] = el;
  };

  return [setItemRef, visibleItems];
}

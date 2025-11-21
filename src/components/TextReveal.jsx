import { useEffect, useRef, useState } from "react";
import React from "react";
import PropTypes from "prop-types";

export default function TextReveal({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  // Handle different types of children (string, JSX, etc.)
  const getText = () => {
    if (typeof children === "string") {
      return children;
    }
    if (React.isValidElement(children)) {
      // If it's JSX, just return it wrapped without splitting
      return children;
    }
    return "";
  };

  const content = getText();

  // If content is JSX, don't split it
  if (React.isValidElement(content)) {
    return (
      <span
        ref={ref}
        className={className}
        style={{
          display: "inline-block",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.6s ease, transform 0.6s ease`,
        }}
      >
        {content}
      </span>
    );
  }

  // Split text into words for string content
  const words = content.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`,
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

TextReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};

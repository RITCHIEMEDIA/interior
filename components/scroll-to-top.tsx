"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScroll) return null;

  return (
    <button
      className="scroll-to-top"
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}

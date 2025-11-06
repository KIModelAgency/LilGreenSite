// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // immer beim Routenwechsel nach oben scrollen
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // oder "smooth", wenn du ein weiches Scrollen magst
    });
  }, [location]);

  return null;
}

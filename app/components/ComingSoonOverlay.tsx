"use client";

import { useEffect, useState } from "react";

const ENABLE_COMING_SOON = true

export default function ComingSoonOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (!ENABLE_COMING_SOON) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    }, 2000);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!ENABLE_COMING_SOON) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col">
      <div
        className={`bg-white w-full transition-all duration-[1000ms] ease-in-out ${
          isVisible ? "h-1/2" : "h-0"
        }`}
      />

      <div className="absolute inset-0 flex items-center justify-center z-[101] px-4">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black tracking-tighter transition-all duration-700 transform text-center ${
            showText
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          Coming Soon
        </h1>
      </div>

      <div
        className={`bg-white w-full transition-all duration-[1000ms] ease-in-out mt-auto ${
          isVisible ? "h-1/2" : "h-0"
        }`}
      />
    </div>
  );
}


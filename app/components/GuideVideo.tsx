"use client";

import { useEffect, useRef, useState } from "react";

export default function GuideVideo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pb-24 md:pb-32">
      {/* Hand-drawn style line separator */}
      <div className={`w-full flex justify-center mb-16 md:mb-24 px-4 overflow-hidden ${isVisible ? 'animate-draw' : ''}`}>
         <svg viewBox="0 0 1200 60" className="w-full max-w-6xl h-12 md:h-16" preserveAspectRatio="none">
            <path 
              d="M0,30 Q300,55 600,30 T1200,30" 
              fill="none" 
              stroke="#3E2723" 
              strokeWidth="3"
              strokeLinecap="round"
              className="path-draw"
            />
         </svg>
      </div>

      <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}>
        <div className="relative aspect-video w-full bg-[#4A4A4A] rounded-2xl md:rounded-[32px] shadow-2xl overflow-hidden group cursor-pointer hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="white" 
                className="w-8 h-8 md:w-12 md:h-12 ml-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


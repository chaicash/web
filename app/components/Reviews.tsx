"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Shreya Mahajan",
    rating: 5,
    text: "Finally a way to take UPI payments without doxxing myself. That alone sold me",
    bgColor: "bg-[#FFF9C4]", // Light yellow
    delay: 0,
    image: "/file.svg" // Placeholder
  },
  {
    name: "Priyanka Gupta",
    rating: 5,
    text: "Set it up in five minutes. Payments just work. Didn't expect it to be this clean.",
    bgColor: "bg-[#DCFCE7]", // Light green
    delay: 200,
    image: "/file.svg" // Placeholder
  },
  {
    name: "Dhruv Thakur",
    rating: 5,
    text: "Way better than pasting my UPI everywhere. The widgets are actually useful.",
    bgColor: "bg-[#FCE7F3]", // Light pink
    delay: 400,
    image: "/file.svg" // Placeholder
  }
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

export default function Reviews() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className={`transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
            style={{ transitionDelay: `${testimonial.delay}ms` }}
          >
            <div className={`${testimonial.bgColor} p-8 rounded-[32px] border-2 border-black hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-black/10 relative">
                  {/* Placeholder for user image */}
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-xs text-gray-600 font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg leading-tight">{testimonial.name}</h4>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-black/80 font-medium text-lg leading-relaxed mt-auto">
                "{testimonial.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


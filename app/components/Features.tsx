"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const bentoItems = [
  {
    title: "Dedicated creator page",
    image: "/bento1.svg",
    className: "md:col-span-4",
    delay: 0,
  },
  {
    title: "Free API",
    image: "/bento2.svg",
    className: "md:col-span-2",
    delay: 100,
  },
  {
    title: "Alerts & widgets",
    image: "/bento3.svg",
    className: "md:col-span-4",
    delay: 200,
  },
  {
    title: "Fully anonymous",
    image: "/bento4.svg",
    className: "md:col-span-3",
    delay: 300,
  },
  {
    title: "Subscriptions & perks",
    image: "/bento5.svg",
    className: "md:col-span-5",
    delay: 400,
  },
  {
    title: "0% forex charges",
    image: "/bento6.svg",
    className: "md:col-span-2",
    delay: 500,
  },
];

export default function Features() {
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
    <section ref={sectionRef} className="w-full max-w-[1200px] mx-auto px-12 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Mobile: Single SVG */}
      <div className={`md:hidden w-full transform ${
        isVisible ? "animate-pop-in-delayed" : "opacity-0"
      }`}>
        <Image
          src="/temp-features-m.svg"
          alt="Features"
          width={600}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Desktop: Bento Grid */}
      <div className="hidden md:grid md:grid-cols-10 gap-6">
        {bentoItems.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-[32px] overflow-hidden hover:scale-105 transition-transform duration-300 ${
              item.className
            } h-[280px] ${
              isVisible ? "animate-pop-in-delayed" : "opacity-0"
            }`}
            style={{ 
              animationDelay: `${item.delay}ms`,
              animationFillMode: "both"
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


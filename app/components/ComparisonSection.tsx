"use client";

import { useState } from "react";

type ComparisonData = {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
};

const comparisons: Record<string, ComparisonData> = {
  native: {
    leftTitle: "Native UPI",
    leftItems: [
      "Your name and payment details are visible to everyone",
      "Alerts and widgets require third-party tools",
      "No public creator page",
      "No memberships, perks, or exclusive content",
      "No public API for custom integrations",
    ],
    rightTitle: "Chai Cash",
    rightItems: [
      "Fully anonymous payments",
      "Built-in alerts and live widgets",
      "Public creator page with goals, memberships, and perks",
      "Support for monthly memberships & exclusive content",
      "Public API for custom integrations",
    ],
  },
  bluh: {
    leftTitle: "Bluh",
    leftItems: ["bluh", "bluh", "bluh", "bluh", "bluh"],
    rightTitle: "Bluh",
    rightItems: ["bluh", "bluh", "bluh", "bluh", "bluh"],
  },
};

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L13 13M1 13L13 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6L5.5 10.5L15 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ListItem = ({
  children,
  icon,
  className,
  delay,
  animationDirection,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  delay: number;
  animationDirection: "left" | "right";
}) => (
  <li
    className={`flex items-center gap-3 text-lg animate-in fade-in slide-in-from-${animationDirection}-2 duration-300 ${className}`}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
  >
    <span className={`shrink-0 flex items-center justify-center ${className?.includes("black/80") ? "text-black" : "text-black/60"}`}>
      {icon}
    </span>
    <span>{children}</span>
  </li>
);

export default function ComparisonSection() {
  const [selectedKey, setSelectedKey] = useState("native");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentData = comparisons[selectedKey];

  const handleSelection = (key: string) => {
    setSelectedKey(key);
    setIsDropdownOpen(false);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 pb-24 md:pb-32">
      <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">
        How we are different:
      </h2>

      <div className="flex flex-col md:flex-row border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="flex-1 bg-white p-8 md:p-12 transition-all duration-300">
          <div className="relative mb-8">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-2xl font-bold text-black flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              {currentData.leftTitle}
              <ChevronIcon
                className={`text-gray-400 w-5 h-5 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {Object.keys(comparisons).map((key) => (
                  <button
                    key={key}
                    onClick={() => handleSelection(key)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                      selectedKey === key ? "font-bold text-black" : "text-gray-600"
                    }`}
                  >
                    {comparisons[key].leftTitle === "Native UPI" ? "Native UPI" : comparisons[key].leftTitle}
                  </button>
                ))}
              </div>
            )}
          </div>

          <ul className="space-y-6" key={selectedKey + "-left"}>
            {currentData.leftItems.map((item, i) => (
              <ListItem
                key={i}
                icon={<CrossIcon />}
                className="text-black/70"
                delay={i * 50}
                animationDirection="left"
              >
                {item}
              </ListItem>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-[#DCE9FF] p-8 md:p-12 transition-all duration-300">
          <h3
            className="text-2xl font-bold text-black mb-8 animate-in fade-in duration-300"
            key={currentData.rightTitle}
          >
            {currentData.rightTitle}
          </h3>
          <ul className="space-y-6" key={selectedKey + "-right"}>
            {currentData.rightItems.map((item, i) => (
              <ListItem
                key={i}
                icon={<CheckIcon />}
                className="text-black/80 font-medium"
                delay={i * 50}
                animationDirection="right"
              >
                {item}
              </ListItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

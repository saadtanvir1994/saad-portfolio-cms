"use client";

import { TabItem } from "@/lib/definitions";
import { useState } from "react";
import Image from "next/image";
import { getMediaUrl } from "@/utils/all";

const Tabs = ({
  items,
  className,
}: {
  items: TabItem[];
  className?: string;
}) => {
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab change
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div
      className={`flex flex-col gap-8 rounded-lg bg-[var(--gray-25)] px-4 py-6 md:flex-row ${className}`}
    >
      {/* Left Side - Tabs */}
      <div className="w-full md:w-1/4">
        <div className="flex flex-col space-y-3">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`rounded-lg px-4 py-3 text-left text-md transition-all ${
                activeTab === index
                  ? "bg-[var(--gray-100)] font-semibold text-[var(--gray-900)]"
                  : "text-[var(--gray-500)] font-semibold hover:bg-[var(--gray-50)]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Center - Image */}
      <div className="flex w-full items-center justify-center rounded-xl bg-[var(--gray-50)] p-6 md:w-1/3">
        <div className="relative aspect-square w-full max-w-xs">
          <Image
            src={getMediaUrl(items[activeTab].image)}
            alt={items[activeTab].name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right - Content */}
      <div className="w-full py-12 md:w-5/12">
        <h3 className="mb-2 max-w-full text-4xl font-bold capitalize tracking-tighter text-[var(--gray-900)] md:max-w-[60%]">
          {items[activeTab].heading}
        </h3>
        <p className="mb-4 w-full text-[var(--gray-600)] md:max-w-[80%]">
          {items[activeTab].paragraph}
        </p>
        {items[activeTab].list.length > 0 && (
          <ul className="space-y-2">
            {items[activeTab].list.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full font-medium text-zinc-900">
                  ✓
                </span>
                <span className="text-[var(--gray-800)]">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tabs;

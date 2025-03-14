"use client";

import { SubserviceApproachTab } from "@/lib/definitions";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";

const MobileTabs = ({ tabs }: { tabs: SubserviceApproachTab[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Mobile Tabs */}
      <div className="mb-8 overflow-x-auto rounded-2xl bg-[var(--gray-25)] px-2 py-4 md:hidden md:rounded-full md:px-1 md:py-1">
        <div className="grid grid-cols-1 flex-wrap gap-x-1 md:grid-cols-4" role="tablist" >
          {tabs.map((tab, index) => (
            <button
              role="tab"
              aria-controls={`panel${index}`}
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center justify-center rounded-full px-4 py-2 transition ${
                activeTab === index
                  ? "bg-[var(--gray-100)] font-medium"
                  : "bg-transparent hover:bg-[var(--gray-50)]"
              }`}
            >
              <div
                className="mr-1 flex h-6 w-6 items-center justify-center rounded-full p-1 text-white"
                style={{ backgroundColor: tab.color }}
              >
                <DynamicIcon name={tab.icon} size={20} />
              </div>
              <span className="min-w-24">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Tab Content */}
      <div className="mt-6 overflow-hidden rounded-lg bg-[var(--gray-25)] px-4 py-6 md:hidden">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${activeTab === index ? "block" : "hidden"}`}
            role="tabpanel"
            id={`panel${index}`}
            aria-labelledby={`tab${index}`}
          >
            <p className="mb-4 text-base text-[var(--gray-600)]">
              {tab.description}
            </p>

            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase text-[var(--gray-500)]">
                {tab["deliverables-label"]}
              </h3>
              <ul className="space-y-2">
                {tab.deliverables.map((item, index) => (
                  <li
                    key={index}
                    className="rounded-lg border-xs border-[var(--gray-50)] bg-[var(--gray-50)] p-3 text-[var(--gray-700)] transition-all duration-300 hover:border-[var(--gray-100)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileTabs;

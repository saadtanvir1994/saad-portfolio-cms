"use client";

import React, { useEffect, useState } from "react";

interface CTAButtonProps {
  className?: string;
}

const TopRightCTA: React.FC<CTAButtonProps> = ({ className = "" }) => {
  // Initialize with empty strings to avoid hydration mismatch
  const [dateDisplay, setDateDisplay] = useState<{
    month: string;
    year: string;
  } | null>(null);

  useEffect(() => {
    // Update date only on client side
    const date = new Date();
    const monthName = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear().toString();

    setDateDisplay({
      month: monthName,
      year: year,
    });
  }, []);

  return (
    <div className={`relative ${className} mb-4`}>
      <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-gray-300 bg-[--gray-900] px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          className="animate-pulse"
        >
          <circle cx="4" cy="4" r="4" fill="#56D556" />
        </svg>
        <span className="text-sm font-normal text-[--gray-50]">
          Hire for{" "}
          {dateDisplay ? (
            <span className="font-nortica font-semibold uppercase">
              {dateDisplay.month} {dateDisplay.year}
            </span>
          ) : (
            <span className="font-nortica font-semibold uppercase opacity-0">
              Loading...
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default TopRightCTA;

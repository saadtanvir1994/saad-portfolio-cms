"use client";

import Typography from "@/components/typography";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-start justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Typography
          variant="h3"
          className="pr-4 !text-xl text-[var(--gray-950)] md:!w-full md:md:!w-full md:pr-8"
        >
          {question}
        </Typography>
        <ChevronDown
          className={`text[var(--gray-500)] mt-1 h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Typography
            variant="p"
            className="pt-4 !text-base text-[var(--gray-900)]"
          >
            {answer}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;

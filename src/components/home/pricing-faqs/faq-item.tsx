"use client";

import Typography from "@/components/ui/typography";
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
    <div className="py-2 px-2 hover:bg-[var(--gray-50)]">
      <button
        className="flex w-full items-start justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Typography
          variant="h3"
          className="!w-[90%] pr-4 !text-xl text-[var(--gray-950)] md:!w-full md:md:!w-full md:pr-8 py-2"
        >
          <span dangerouslySetInnerHTML={{ __html: question }} />
        </Typography>
        <ChevronDown
          className={`text-[var(--gray-500)] mt-3 h-5 w-5 flex-shrink-0 transition-transform duration-300  ${
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
            className="pt-4 !text-[17px] text-[var(--gray-700)]"
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;

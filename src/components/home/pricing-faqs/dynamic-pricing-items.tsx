"use client";

import { PricingItemContent } from "@/lib/definitions";
import PricingItem from "./pricing-item";
import { useState } from "react";
import { CurrencyType } from "@/lib/definitions";

const currencies: { label: string; value: CurrencyType }[] = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
  { label: "GBP", value: "gbp" },
];

const DynamicPricingItems = ({
  products,
}: {
  products: PricingItemContent[];
}) => {
  const [currency, setCurrency] = useState<CurrencyType>("usd");

  return (
    <div className="-m-3 mt-6 md:mt-12 space-y-4">
      {/* Currency Selector */}
      <div className="flex items-end justify-end w-full px-4">
        <div className="inline-flex flex-row justify-end overflow-hidden rounded-lg border border-gray-300 bg-white text-sm font-medium text-black">
          {currencies.map((curr, index) => (
            <button
              key={curr.value}
              onClick={() => setCurrency(curr.value)}
              className={`px-4 py-2 flex items-center justify-center transition-colors duration-200 ${
                currency === curr.value
                  ? "bg-[#FF4102] text-white"
                  : "bg-white text-black hover:bg-gray-100"
              } ${
                index !== currencies.length - 1
                  ? "border-r border-gray-300"
                  : ""
              }`}
            >
              {curr.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Items */}
      <div className="flex flex-wrap">
        {products.map((product, index) => (
          <PricingItem item={product} key={index} currency={currency} />
        ))}
      </div>
    </div>
  );
};

export default DynamicPricingItems;

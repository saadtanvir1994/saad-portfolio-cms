"use client";

import CheckoutButton from "@/components/ui/checkout-button";
import Typography from "@/components/ui/typography";
import { PricingItemContent, CurrencyType } from "@/lib/definitions";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const fallbackUrl =
  "https://latest.currency-api.pages.dev/v1/currencies/usd.json";
const primaryUrl =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const getConvertedPrices = async (
  usdPrice: number
): Promise<Record<CurrencyType, number>> => {
  try {
    const res = await fetch(primaryUrl);
    if (!res.ok) throw new Error("Primary failed");
    const data = await res.json();
    return {
      usd: usdPrice,
      eur: Math.ceil(usdPrice * data.usd.eur),
      gbp: Math.ceil(usdPrice * data.usd.gbp),
    };
  } catch {
    const res = await fetch(fallbackUrl);
    const data = await res.json();
    return {
      usd: usdPrice,
      eur: Math.ceil(usdPrice * data.usd.eur),
      gbp: Math.ceil(usdPrice * data.usd.gbp),
    };
  }
};

const currencySymbolMap = {
  usd: "$",
  gbp: "£",
  eur: "€",
};

const PricingItem = ({
  item,
  currency,
}: {
  item: PricingItemContent;
  currency: CurrencyType;
}) => {
  const [convertedPrices, setConvertedPrices] = useState<
    Record<CurrencyType, number>
  >({
    usd: item.product.unit_amount,
    eur: item.product.unit_amount,
    gbp: item.product.unit_amount,
  });

  useEffect(() => {
    getConvertedPrices(item.product.unit_amount).then(setConvertedPrices);
  }, [item.product.unit_amount]);

  return (
    <div className="w-full p-3 md:w-1/2 lg:w-1/3">
      <div className="h-full transform rounded-3xl bg-white p-8 py-12 transition duration-500 hover:-translate-y-2">
        <div className="text-left">
          <div className="h-auto md:h-36">
            <h3 className="mb-2 text-3xl font-medium tracking-tight">
              {item.name}
            </h3>
            <Typography variant="p" className="!text-base text-gray-500">
              {item.description}
            </Typography>
          </div>
          <div className="flex items-baseline gap-2">
            <h4 className="mb-2 mt-4 text-center text-6xl tracking-tighter md:mt-8 md:text-left md:text-7xl">
              {currencySymbolMap[currency]} {convertedPrices[currency]}
            </h4>
            {item.frequency && (
              <span className="linear-gro !text-md">{item.frequency}</span>
            )}
          </div>
          <Typography variant="p" className="text-gray-500 min-h-14">
            {item["short-description"]}
          </Typography>

          <CheckoutButton
            priceItem={{
              name: item.product.name || item.name,
              description: item.product.description || item.description,
              unit_amount: convertedPrices[currency],
              currency,
              recurring: item.product.recurring,
              interval: item.product.interval,
            }}
            ariaLabel={item["link-text"]}
            text={item["link-text"]}
            variant={item.primary ? "simple" : "simpleoutlined"}
            className="my-6 w-full"
          />

          <h5 className="mt-8 text-xl font-semibold text-gray-950">
            {item["features-heading"] || "What's included"}
          </h5>
          <ul className="text-md pt-6 text-base text-gray-600">
            {item.features.map((feat, index) => (
              <li
                className="mb-2.5 flex flex-nowrap items-start md:items-center"
                key={index}
              >
                <Check className="mr-2 h-4 w-5 mt-1 md:mt-0 text-[var(--gray-100)]" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;

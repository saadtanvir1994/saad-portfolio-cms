import "server-only";

import Stripe from "stripe";
import { PricingItemContent } from "@/lib/definitions";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const getProductDetails = async (productId: string) =>
  await stripe.products.retrieve(productId, { expand: ["default_price"] });

export const getPriceDetails = async (priceId: string) =>
  await stripe.prices.retrieve(priceId);

export const getPricingItem = async (productId: string) => {
  const product = await getProductDetails(productId);

  const item = {
    name: product.name!,
    description: product.description!,
    "short-description": product.metadata.short_description!,
    "features-heading": product.metadata.features_heading!,
    frequency: product.metadata.frequency!,
    "link-text": product.metadata.button_text!,
    primary: product.metadata.primary! === "1",
    "price-id":
      typeof product.default_price === "string"
        ? "0"
        : product.default_price!.id!,
    price:
      typeof product.default_price === "string"
        ? "0"
        : `$ ${product.default_price!.unit_amount! / 100}`,
    recurring: typeof product.default_price === "string" ? false : product.default_price!.type === "recurring",
    features: product.marketing_features.map((feature) => feature.name),
  };

  return item as PricingItemContent;
};

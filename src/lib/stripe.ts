import "server-only";

import Stripe from "stripe";
import { transformPricingItem } from "@/utils/all";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const getProductDetails = async (productId: string) =>
  await stripe.products.retrieve(productId, { expand: ["default_price"] });

export const getPriceDetails = async (priceId: string) =>
  await stripe.prices.retrieve(priceId);

export const getPricingItem = async (productId: string) => {
  const product = await getProductDetails(productId);

  return transformPricingItem(product);
};

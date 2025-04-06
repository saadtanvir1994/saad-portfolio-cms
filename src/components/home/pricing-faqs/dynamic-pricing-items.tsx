// import { getPricingItem } from "@/lib/stripe";
import PricingItem from "./pricing-item";
import Stripe from "stripe";

const DynamicPricingItems = async ({ products }: { itemIds: string[], products: Stripe.Product[] }) => {
  // const items = await Promise.all(
  //   itemIds.map(async (item) => await getPricingItem(item))
  // );
  // console.log('Product details:', items);

  return (
    <div className="-m-3 mt-6 flex flex-wrap md:mt-12">
      {products.map((product, index) => (
        <PricingItem product={product} key={index} />
      ))}
    </div>
  )
}

export default DynamicPricingItems;
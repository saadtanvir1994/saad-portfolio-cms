import { getPricingItem } from "@/lib/stripe";
import PricingItem from "./pricing-item";

const DynamicPricingItems = async ({ itemIds }: { itemIds: string[] }) => {
  const items = await Promise.all(
    itemIds.map(async (item) => await getPricingItem(item))
  );
  // console.log('Product details:', items);

  return (
    <div className="-m-3 mt-6 flex flex-wrap md:mt-12">
      {items.map((item, index) => (
        <PricingItem item={item} key={index} />
      ))}
    </div>
  )
}

export default DynamicPricingItems;
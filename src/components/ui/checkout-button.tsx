import { AnimatedCTAButtonProps, CheckoutPriceItem } from "@/lib/definitions"
import AnimatedCTAButton from "./animated-cta-button"
import { checkoutToStripe } from "@/lib/actions";

type CheckoutButtonProps = AnimatedCTAButtonProps & {
  priceItem: CheckoutPriceItem
};

const CheckoutButton = ({ priceItem, ariaLabel, text, variant, className }: CheckoutButtonProps) => {
  return (
    <form
      action={checkoutToStripe}
    >
      <input type="hidden" name="name" value={priceItem.name} />
      <input type="hidden" name="description" value={priceItem.description ?? ""} />
      <input type="hidden" name="unit_amount" value={(priceItem.unit_amount * 100).toString()} />
      <input type="hidden" name="currency" value={priceItem.currency} />
      <input type="hidden" name="recurring" value={priceItem.recurring ? "true" : "false"} />
      <input type="hidden" name="interval" value={priceItem.interval} />

      <AnimatedCTAButton
        ariaLabel={ariaLabel}
        text={text}
        variant={variant}
        className={className}
        type="submit"
      />
    </form>
  );
};

export default CheckoutButton;

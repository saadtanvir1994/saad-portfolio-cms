import { AnimatedCTAButtonProps } from "@/lib/definitions"
import AnimatedCTAButton from "./animated-cta-button"
import { redirect } from "next/navigation";
import Stripe from "stripe";

type CheckoutButtonProps = AnimatedCTAButtonProps & {
  priceItem: Stripe.Price;
}

const CheckoutButton = ({ priceItem, ariaLabel, text, variant, className }: CheckoutButtonProps) => {
  return (
    <form
      action={async () => {
        "use server";
        // console.log("button clicked ", priceItem.id);
        const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL+"/api/checkout-sessions", {
          body: JSON.stringify({ priceId: priceItem.id, recurring: priceItem.type === "recurring", }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const { url } = await response.json();
        if (url) {
          redirect(url);
        }
      }}
    >
      <AnimatedCTAButton
        ariaLabel={ariaLabel}
        text={text}
        variant={variant}
        className={className}
        type="submit"
      />
    </form>
  )
}

export default CheckoutButton;
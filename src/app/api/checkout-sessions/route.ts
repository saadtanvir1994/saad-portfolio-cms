/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { name, description, unit_amount, currency, recurring, interval, } = await req.json();

  if (!name || !unit_amount || !currency) {
    return NextResponse.json(
      { error: "Missing required product fields." },
      { status: 400 }
    );
  }

  console.log("here arrived");

  try {
    const headersList = await headers();
    const origin = headersList.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount,
            product_data: {
              name,
              ...(description !== "" && {
                description,
              })
            },
            ...(recurring && {
              recurring: {
                interval: interval || "month",
                interval_count: 1,
              },
            }),
          },
        },
      ],
      mode: recurring ? "subscription" : "payment",
      success_url: `${origin}/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url! });
  } catch (err: any) {
    console.log("error occured is ", err.message);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}

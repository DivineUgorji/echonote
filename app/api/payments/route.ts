import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const payload = await request.text();

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe signature" },
      { status: 400 },
    );
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );

    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log("Payment successful:", paymentIntent);
        break;

      case "payment_method.attached":
        const paymentMethod = event.data.object;
        console.log("Payment method attached");
        break;

      case "checkout.session.completed":
        const session = await stripe.checkout.sessions.retrieve(
          event.data.object.id,
          {
            expand: ["line_items"],
          },
        );
        console.log({ session });
        break;

      case "customer.subscription.deleted": {
        const subscriptionId = event.data.object.id;
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        break;
      }

      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err) {
    return NextResponse.json(
      { status: "Failed", error: (err as Error).message },
      { status: 400 },
    );
  }

  return NextResponse.json({ status: "success" });
}

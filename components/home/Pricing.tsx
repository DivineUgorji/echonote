import React from "react";
import { pricingPlanMap } from "@/lib/content";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="relative px-6 py-9 md:py-18" id="pricing">
      <div className="relative max-w-5xl mx-auto">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-teal bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full tracking-[0.06em] uppercase">
            Pricing
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Simple, transparent pricing
          </h2>

          <p className="mt-3 text-muted-foreground">
            Start free. Scale when you need to. No surprises.
          </p>
        </div>

        {/* CARDS */}
        <ul className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {pricingPlanMap.map((plan) => {
            const isPopular = plan.tag === "Most popular";
            const isEnterprise = plan.tag === "Enterprise";

            //Styles for the tags on the price cards
            const tagStyles = isPopular
              ? "bg-teal text-white"
              : isEnterprise
                ? "bg-abyss text-white"
                : "bg-gray-100 text-gray-700";

            return (
              <li
                key={plan.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between min-h-130 transition
                ${
                  isPopular
                    ? "border-teal shadow-md"
                    : "border-gray-200 hover:border-teal/50"
                }`}
              >
                <div>
                  {/* TAG INSIDE */}
                  {plan.tag && (
                    <span
                      className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-5 ${tagStyles}`}
                    >
                      {plan.tag}
                    </span>
                  )}

                  <h3 className="text-lg font-semibold">{plan.name}</h3>

                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-sm text-muted-foreground">
                      /month
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  {/* FEATURES */}
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="bg-teal-surface rounded-full flex items-center justify-center p-1.5 shrink-0">
                          <Check className="size-4 text-teal" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link href={plan.paymentLink}>
                  <button
                    className={`mt-8 w-full rounded-lg py-2.5 text-sm font-medium transition
                  ${
                    isPopular
                      ? "bg-teal text-white hover:bg-teal/90"
                      : "border border-gray-300 hover:border-teal"
                  }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

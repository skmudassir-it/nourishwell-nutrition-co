import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { PRICING_PLANS, FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing | NourishWell",
  description:
    "Explore our nutrition coaching plans — from single sessions to comprehensive monthly programs.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose the plan that fits your goals. All plans include access to our
            team of registered dietitians and evidence-based protocols.
          </p>
          <div className="gradient-divider mx-auto mt-8 w-24" />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.highlighted
                    ? "glass-card relative flex flex-col p-8 ring-2 ring-primary"
                    : "glass-card flex flex-col p-8"
                }
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={
                    plan.highlighted
                      ? "mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      : "mt-8 inline-flex items-center justify-center rounded-lg border border-primary bg-transparent px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                  }
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/20 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Everything you need to know about working with NourishWell.
          </p>

          <div className="mt-12 space-y-3">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border bg-card p-1"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-foreground">
                  {faq.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-foreground">
            Not sure which plan is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Schedule a free 15-minute discovery call and we&apos;ll help you find
            the perfect fit.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}

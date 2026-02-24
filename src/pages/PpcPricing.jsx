import { useState } from "react";
import ContactModal from "../components/ContactModal";
import { useCurrency } from "../context/CurrencyContext";

/**
 * Base prices are in INR
 */
const plans = [
  {
    name: "Starter PPC",
    price: 20000,
    subtitle: "For local & small businesses",
    features: [
      "Google Ads account setup",
      "Keyword research & structure",
      "Ad copy creation",
      "Conversion tracking",
      "Monthly performance report",
    ],
  },
  {
    name: "Growth PPC",
    price: 35000,
    subtitle: "Most Popular",
    highlight: true,
    features: [
      "Google + Meta Ads",
      "Advanced audience targeting",
      "A/B ad testing",
      "Landing page suggestions",
      "Bi-weekly optimization reports",
    ],
  },
  {
    name: "Enterprise PPC",
    price: 70000,
    subtitle: "For aggressive scaling",
    features: [
      "Unlimited campaigns",
      "Advanced conversion optimization",
      "Remarketing funnels",
      "Dedicated PPC manager",
      "Weekly performance reports",
    ],
  },
];

/**
 * Conversion rates (can be moved to config later)
 */
const currencyRates = {
  INR: { rate: 1, symbol: "₹" },
  USD: { rate: 0.012, symbol: "$" },
  GBP: { rate: 0.0095, symbol: "£" },
  EUR: { rate: 0.011, symbol: "€" },
  AUD: { rate: 0.018, symbol: "$" },
  AED: { rate: 0.044, symbol: "د.إ" },
};

export default function PpcPricing() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const { currency } = useCurrency();

  const formatPrice = (priceInINR) => {
    const converted = priceInINR * currencyRates[currency].rate;
    return `${currencyRates[currency].symbol}${Math.round(converted).toLocaleString()}`;
  };

  return (
    <>
      {/* HERO + PPC PLANS */}
      <section className="bg-black py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
            PPC Pricing Plans
          </h1>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Performance-driven PPC management designed to maximize ROI, reduce
            CPA, and scale profitable campaigns.
          </p>

          {/* PLAN CARDS */}
          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 border transition ${
                  plan.highlight
                    ? "border-blue-500 bg-gradient-to-b from-gray-900 to-black scale-105"
                    : "border-gray-800 bg-gradient-to-b from-gray-900 to-black"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mt-2">{plan.subtitle}</p>

                {/* PRICE */}
                <div className="mt-6 text-4xl font-bold text-blue-400">
                  {formatPrice(plan.price)}
                  <span className="text-base text-gray-400 font-medium">
                    {" "}
                    /month
                  </span>
                </div>

                <ul className="mt-8 space-y-3 text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    setOpen(true);
                  }}
                  className={`w-full mt-10 py-4 rounded-xl font-semibold transition ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  Get Started →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT’S INCLUDED */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            What’s Included in Our PPC Management
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Campaign Strategy",
                text: "ROI-focused account structure designed to reduce wasted spend and improve Quality Score.",
              },
              {
                title: "Execution & Optimization",
                text: "Continuous bid optimization, ad testing, negative keywords & budget scaling.",
              },
              {
                title: "Tracking & Reporting",
                text: "Clear reports focused on conversions, CPA, ROAS & profitability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8"
              >
                <h3 className="text-xl font-semibold text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Want more leads without wasting ad spend?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Get a free PPC audit & performance forecast.
        </p>

        <button
          onClick={() => {
            setSelectedPlan("Free PPC Audit");
            setOpen(true);
          }}
          className="inline-flex items-center justify-center mt-10 bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Get Free PPC Audit →
        </button>
      </section>

      {/* CONTACT MODAL */}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}


import { useState } from "react";
import ContactModal from "../components/ContactModal";
import { useCurrency } from "../context/CurrencyContext";

/**
 * Base prices are in INR
 */
const plans = [
  {
    name: "Basic",
    price: 25000,
    setup: 16666,
    subtitle: "For local & small businesses",
    color: "text-green-400",
    border: "border-green-500",
    button: "bg-green-600 hover:bg-green-700",
    features: [
  "Setup Fee – $200",
  "Advertising Budget – upto $1000/month",
  "Full Optimizations – 1/month",
  "Ad Groups – Up to 5",
  ],
  },
  {
    name: "Silver",
    price: 33332,
    setup: 29165.5,
    subtitle: "Growing businesses",
    color: "text-gray-300",
    border: "border-gray-400",
    button: "bg-gray-600 hover:bg-gray-700",
    features: [
    "Setup Fee – $350",
    "Advertising Budget – upto $2000/month",
    "Full Optimizations – 2/month",
    "Ad Groups – Up to 10",
  ],
  },
  {
    name: "Gold",
    price: 50000,
    setup: 41666.67,
    subtitle: "Most Popular",
    color: "text-yellow-400",
    border: "border-yellow-500",
    button: "bg-yellow-500 hover:bg-yellow-600",
    highlight: true,
    features: [
      "Setup Fee – $500",
      "Advertising Budget – upto $3000/month",
      "Full Optimizations – 3/month",
      "Ad Groups – Up to 20",
    ],
  },
  {
    name: "Premium",
    price: 66666,
    setup: 62499.5,
    subtitle: "For aggressive scaling",
    color: "text-indigo-400",
    border: "border-indigo-500",
    button: "bg-indigo-600 hover:bg-indigo-700",
    features: [
      "Setup Fee – $750",
      "Advertising Budget – abv. $3000/month",
      "Full Optimizations – 5/month",
      "Ad Groups – Up to 40",
    ],
  },
];

/**
 * PPC DETAIL DATA
 */

const basicDetails = [
  {
    title: "Campaign Setup",
    items: [
      ["A/B Test", "✓"],
      ["Keywords", "Up to 50"],
      ["Negative Keywords", "✓"],
      ["Conversion Tracking", "✓"],
      ["Monthly Reporting", "✓"],
      ["No Contracts", "✓"],
    ],
  },
  {
    title: "Ad Networks",
    items: [
      ["Google", "✓"],
      ["Yahoo", "×"],
      ["Bing", "×"],
      ["FB", "×"],
      ["Mobile Ads", "×"],
    ],
  },
  {
    title: "Extensions",
    items: [
      ["Call Extensions", "✓"],
      ["Sitelink Extensions", "✓"],
      ["Remarketing", "×"],
      ["Monthly Conference Calls", "×"],
      ["Display/Image Ads", "×"],
    ],
  },
];

const silverDetails = [
  {
    title: "Campaign Setup",
    items: [
      ["A/B Test", "✓"],
      ["Keywords", "Up to 100"],
      ["Negative Keywords", "✓"],
      ["Conversion Tracking", "✓"],
      ["Monthly Reporting", "✓"],
      ["No Contracts", "✓"],
    ],
  },
  {
    title: "Ad Networks",
    items: [
      ["Google", "✓"],
      ["Yahoo", "×"],
      ["Bing", "×"],
      ["FB", "×"],
      ["Mobile Ads", "×"],
    ],
  },
  {
    title: "Extensions",
    items: [
      ["Call Extensions", "✓"],
      ["Sitelink Extensions", "✓"],
      ["Remarketing", "✓"],
      ["Monthly Conference Calls", "✓"],
      ["Display/Image Ads", "×"],
    ],
  },
];

const goldDetails = [
  {
    title: "Campaign Setup",
    items: [
      ["A/B Test", "✓"],
      ["Keywords", "Up to 200"],
      ["Negative Keywords", "✓"],
      ["Conversion Tracking", "✓"],
      ["Monthly Reporting", "✓"],
      ["No Contracts", "✓"],
    ],
  },
  {
    title: "Ad Networks",
    items: [
      ["Google", "✓"],
      ["Yahoo", "✓"],
      ["Bing", "✓"],
      ["FB", "×"],
      ["Mobile Ads", "×"],
    ],
  },
  {
    title: "Extensions",
    items: [
      ["Call Extensions", "✓"],
      ["Sitelink Extensions", "✓"],
      ["Remarketing", "✓"],
      ["Monthly Conference Calls", "✓"],
      ["Display/Image Ads", "×"],
    ],
  },
];

const premiumDetails = [
  {
    title: "Campaign Setup",
    items: [
      ["A/B Test", "✓"],
      ["Keywords", "Up to 500"],
      ["Negative Keywords", "✓"],
      ["Conversion Tracking", "✓"],
      ["Monthly Reporting", "✓"],
      ["No Contracts", "✓"],
    ],
  },
  {
    title: "Ad Networks",
    items: [
      ["Google", "✓"],
      ["Yahoo", "✓"],
      ["Bing", "✓"],
      ["FB", "✓"],
      ["Mobile Ads", "✓"],
    ],
  },
  {
    title: "Extensions",
    items: [
      ["Call Extensions", "✓"],
      ["Sitelink Extensions", "✓"],
      ["Remarketing", "✓"],
      ["Monthly Conference Calls", "✓"],
      ["Display/Image Ads", "×"],
    ],
  },
];

/**
 * Conversion rates
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
  const [showDetails, setShowDetails] = useState(false);

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
            Our PPC Plans
          </h1>

          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Choose the plan that’s right for you and let’s get started.
          </p>

          {/* PLAN CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

            {plans.map((plan) => (

              <div
                key={plan.name}
                onClick={() => {
                  setSelectedPlan(plan.name.toUpperCase());
                  setShowDetails(true);
                }}
                className={`cursor-pointer relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2
                ${plan.border}
                bg-gradient-to-b from-gray-900 to-black`}
              >

                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-sm px-4 py-1 rounded-full font-semibold">
                    Most Popular
                  </span>
                )}

                <h3 className={`text-2xl font-semibold ${plan.color}`}>
                  {plan.name}
                </h3>

                <p className="text-gray-400 mt-2">{plan.subtitle}</p>

                <div className={`mt-6 text-4xl font-bold ${plan.color}`}>
                  {formatPrice(plan.price)}
                  <span className="text-base text-gray-400 font-medium">
                    {" "} /month
                  </span>
                </div>

                <p className="text-gray-400 mt-2 text-sm">
                  Setup Fee – {formatPrice(plan.setup)}
                </p>

                <ul className="mt-8 space-y-3 text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {["Basic", "Silver", "Gold", "Premium"].includes(plan.name) ? (
                  <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPlan(plan.name.toUpperCase());
                            setShowDetails(true);
                          }}
                          className="w-full mt-8 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                        >
                          View Details →
                        </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlan(plan.name);
                      setOpen(true);
                    }}
                    className={`w-full mt-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg ${plan.button}`}
                  >
                    Start Today →
                  </button>
                )}

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* PPC DETAILS MODAL */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-10 relative shadow-2xl">

            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-5 right-6 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">
              {selectedPlan} PLAN – Complete PPC Breakdown
            </h2>

            <div className="space-y-12">
              {(selectedPlan === "BASIC"
                ? basicDetails
                : selectedPlan === "SILVER"
                ? silverDetails
                : selectedPlan === "GOLD"
                ? goldDetails
                : premiumDetails
              ).map((section, idx) => (

                <div key={idx}>
                  <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-800 pb-2">
                    {section.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-x-12">

                    {section.items.map((item, i) => (

                      <div key={i} className="flex justify-between py-2 text-gray-300">
                        <span>{item[0]}</span>
                        <span className="font-semibold">{item[1]}</span>
                      </div>

                    ))}

                  </div>
                </div>

              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  setShowDetails(false);
                  setOpen(true);
                }}
                className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
              >
                Start Now
              </button>
            </div>

          </div>

        </div>
      )}

      {/* CTA */}
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

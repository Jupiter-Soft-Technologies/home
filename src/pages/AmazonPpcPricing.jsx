import { useState } from "react";
import ContactModal from "../components/ContactModal";
import { useCurrency } from "../context/CurrencyContext";

/* ================= PLANS ================= */

const plans = [
  {
    name: "Starter",
    price: 24999.99,
    subtitle: "For new sellers",
    color: "text-green-400",
    border: "border-green-500",
    features: [
      "Sponsored Products",
      "Keyword Research",
      "Basic Optimization",
      "ACOS Tracking",
      "Monthly Report",
    ],
  },
  {
    name: "Growth",
    price: 41666.66,
    subtitle: "Most Popular",
    color: "text-yellow-400",
    border: "border-yellow-500",
    highlight: true,
    features: [
      "Everything in Starter",
      "Sponsored Brands",
      "AI Optimization 🤖",
      "Bid Automation",
      "Weekly Reports",
    ],
  },
  {
    name: "Enterprise",
    price: 66666.66,
    subtitle: "Scaling brands",
    color: "text-indigo-400",
    border: "border-indigo-500",
    features: [
      "Everything in Growth",
      "Sponsored Display",
      "Full Automation 🤖",
      "Advanced Scaling",
      "Dedicated Manager",
    ],
  },
];

/* ================= FULL FEATURE MATRIX ================= */

const ppcDetails = [
  {
    title: "AMAZON ADS SETUP",
    items: [
      ["Sponsored Products", "✓", "✓", "✓"],
      ["Sponsored Brands", "×", "✓", "✓"],
      ["Sponsored Display", "×", "×", "✓"],
      ["Keyword Mining", "✓", "✓", "✓"],
      ["Competitor Targeting", "×", "✓", "✓"],
    ],
  },
  {
    title: "OPTIMIZATION",
    items: [
      ["Search Term Mining", "✓", "✓", "✓"],
      ["Bid Optimization", "×", "✓", "✓"],
      ["Negative Keywords", "✓", "✓", "✓"],
      ["Dayparting Strategy", "×", "×", "✓"],
      ["Advanced Campaign Scaling", "×", "×", "✓"],
    ],
  },
  {
    title: "AI & AUTOMATION 🤖",
    items: [
      ["AI Keyword Expansion", "×", "✓", "✓"],
      ["AI Bid Optimization", "×", "✓", "✓"],
      ["Predictive Budget Allocation", "×", "×", "✓"],
      ["Automation Rules Engine", "×", "×", "✓"],
    ],
  },
  {
    title: "REPORTING & SUPPORT",
    items: [
      ["ACOS Optimization", "✓", "✓", "✓"],
      ["Weekly Reports", "×", "✓", "✓"],
      ["Custom Dashboard", "×", "✓", "✓"],
      ["Dedicated Manager", "×", "×", "✓"],
      ["Priority Support", "×", "×", "✓"],
    ],
  },
];

/* ================= CURRENCY ================= */

const currencyRates = {
  INR: { rate: 1, symbol: "₹" },
  USD: { rate: 0.012, symbol: "$" },
};

/* ================= COMPONENT ================= */

export default function AmazonPpcPricing() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const { currency } = useCurrency();

  const formatPrice = (price) => {
    const converted = price * currencyRates[currency].rate;
    return `${currencyRates[currency].symbol}${Math.round(converted)}`;
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-black py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Amazon PPC Pricing Plans
        </h1>

        <p className="text-gray-400 mt-4">
          Scale your Amazon sales with AI-powered advertising
        </p>

        <p className="text-green-400 text-sm mt-4">
          ✔ 30-Day Performance Improvement Guarantee
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto px-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => {
                setSelectedPlan(plan.name.toUpperCase());
                setShowDetails(true);
              }}
              className={`cursor-pointer relative rounded-3xl p-8 border ${plan.border}
              bg-gradient-to-b from-gray-900 to-black hover:-translate-y-2 transition`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  🔥 Most Popular
                </span>
              )}

              <h3 className={`text-2xl font-semibold ${plan.color}`}>
                {plan.name}
                {plan.name !== "Starter" && (
                  <span className="ml-2 text-xs bg-blue-600 px-2 py-1 rounded">
                    AI Powered
                  </span>
                )}
              </h3>

              <p className="text-gray-400 mt-2">{plan.subtitle}</p>

              <div className={`mt-6 text-4xl font-bold ${plan.color}`}>
                {formatPrice(plan.price)}
                <span className="text-sm text-gray-400"> /month</span>
              </div>

              <p className="text-red-400 text-xs mt-2">
                ⚡ Limited onboarding slots
              </p>

              <ul className="mt-6 space-y-3 text-gray-300">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>

              <button className="w-full mt-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-gray-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-10 relative">

            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-5 right-6 text-gray-400 text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">
              {selectedPlan} PLAN BREAKDOWN
            </h2>

            {ppcDetails.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-white mb-4 border-b border-gray-800 pb-2">
                  {section.title}
                </h3>

                {section.items.map((item, i) => {
                  const planIndex =
                    selectedPlan === "STARTER"
                      ? 1
                      : selectedPlan === "GROWTH"
                      ? 2
                      : 3;

                  const value = item[planIndex];

                  return (
                    <div
                      key={i}
                      className="flex justify-between py-2 text-gray-300 hover:bg-gray-800 px-3 rounded-lg transition"
                    >
                      <span>{item[0]}</span>

                      <span
                        className={`font-semibold ${
                          value === "✓"
                            ? "text-green-400"
                            : value === "×"
                            ? "text-gray-500"
                            : "text-blue-400"
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* STICKY CTA */}
            <div className="sticky bottom-0 bg-gray-900 pt-6 pb-2 mt-10 text-center border-t border-gray-800">
              <button
                onClick={() => {
                  setShowDetails(false);
                  setOpen(true);
                }}
                className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold hover:bg-yellow-500"
              >
                Start {selectedPlan} Plan →
              </button>

              <p className="text-xs text-gray-400 mt-2">
                No long-term contracts • Cancel anytime
              </p>
            </div>

          </div>
        </div>
      )}

      {/* CONTACT */}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}
import { useState } from "react";
import ContactModal from "../components/ContactModal";
import { useCurrency } from "../context/CurrencyContext";

/* ================= PLANS ================= */

const plans = [
  {
    name: "MVP",
    price: 49999.99,
    subtitle: "For startups & validation",
    color: "text-green-400",
    border: "border-green-500",
    features: [
      "UI/UX Design",
      "Basic App Build",
      "Authentication",
      "Deployment",
      "Basic Support",
    ],
  },
  {
    name: "Business",
    price: 99999.99,
    subtitle: "Most Popular",
    highlight: true,
    color: "text-yellow-400",
    border: "border-yellow-500",
    ai: true,
    features: [
      "Everything in MVP",
      "Android + iOS",
      "Backend APIs",
      "Payments Integration",
      "Admin Panel",
    ],
  },
  {
    name: "Enterprise",
    price: 149999.99,
    subtitle: "For scaling products",
    color: "text-indigo-400",
    border: "border-indigo-500",
    ai: true,
    features: [
      "Everything in Business",
      "Advanced Architecture",
      "Automation Systems",
      "Dedicated Team",
      "Priority Support",
    ],
  },
];

/* ================= FULL FEATURE MATRIX ================= */

const appDetails = [
  {
    title: "APP BUILD",
    items: [
      ["UI/UX Design", "✓", "✓", "✓"],
      ["Android / iOS", "×", "✓", "✓"],
      ["Backend APIs", "×", "✓", "✓"],
    ],
  },
  {
    title: "ADVANCED FEATURES",
    items: [
      ["Authentication", "✓", "✓", "✓"],
      ["Payments Integration", "×", "✓", "✓"],
      ["Admin Panel", "×", "✓", "✓"],
    ],
  },
  {
    title: "AI & AUTOMATION 🤖",
    items: [
      ["AI Recommendation Engine", "×", "✓", "✓"],
      ["AI User Behavior Tracking", "×", "✓", "✓"],
      ["Automation Workflows", "×", "×", "✓"],
      ["Predictive Scaling System", "×", "×", "✓"],
    ],
  },
  {
    title: "SUPPORT & DEPLOYMENT",
    items: [
      ["App Store Deployment", "✓", "✓", "✓"],
      ["Maintenance", "×", "✓", "✓"],
      ["Dedicated Team", "×", "×", "✓"],
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

export default function AppDevPricing() {
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
          Application Development Pricing
        </h1>

        <p className="text-gray-400 mt-4">
          Build scalable apps with modern architecture + AI
        </p>

        <p className="text-green-400 text-sm mt-4">
          ✔ End-to-End Development • Scalable Infrastructure
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
              {/* MOST POPULAR */}
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  🔥 Most Popular
                </span>
              )}

              {/* AI BADGE */}
              {plan.ai && (
                <div className="mb-3 text-center">
                  <span className="text-xs bg-blue-600 px-3 py-1 rounded-full text-white font-medium shadow-md shadow-blue-500/20">
                    🤖 AI Powered
                  </span>
                </div>
              )}

              <h3 className={`text-2xl font-semibold ${plan.color}`}>
                {plan.name}
              </h3>

              <p className="text-gray-400 mt-2">{plan.subtitle}</p>

              <div className={`mt-6 text-4xl font-bold ${plan.color}`}>
                {formatPrice(plan.price)}
                <span className="text-sm text-gray-400"> one-time</span>
              </div>

              <p className="text-red-400 text-xs mt-2">
                ⚡ Limited development slots available
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

            {appDetails.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-white mb-4 border-b border-gray-800 pb-2">
                  {section.title}
                </h3>

                {section.items.map((item, i) => {
                  const planIndex =
                    selectedPlan === "MVP"
                      ? 1
                      : selectedPlan === "BUSINESS"
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
                            : "text-gray-500"
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
                Start {selectedPlan} →
              </button>

              <p className="text-xs text-gray-400 mt-2">
                Fixed pricing • No hidden charges
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
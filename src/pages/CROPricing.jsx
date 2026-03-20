import { useState } from "react";
import ContactModal from "../components/ContactModal";
import { useCurrency } from "../context/CurrencyContext";

/* ================= PLANS ================= */

const plans = [
  {
    name: "Basic",
    price: 166666.66,
    setup: 41666.66,
    subtitle: "For startups",
    color: "text-green-400",
    border: "border-green-500",
    features: [
      "Landing Page Analysis",
      "CTA Optimization",
      "Form Optimization",
      "Basic UX Fixes",
      "Monthly Report",
    ],
  },
  {
    name: "Silver",
    price: 208333.33,
    setup: 66666.66,
    subtitle: "Growing businesses",
    color: "text-gray-300",
    border: "border-gray-400",
    features: [
      "Everything in Basic",
      "Heatmap Tracking",
      "AI Behavior Insights 🤖",
      "Funnel Optimization",
      "A/B Testing",
    ],
  },
  {
    name: "Gold",
    price: 249999.99,
    setup: 83333.33,
    subtitle: "Most Popular",
    color: "text-yellow-400",
    border: "border-yellow-500",
    highlight: true,
    features: [
      "Everything in Silver",
      "Advanced A/B Testing",
      "AI Conversion Prediction 🤖",
      "Revenue Optimization",
      "UX Personalization",
    ],
  },
  {
    name: "Premium",
    price: 291666.66,
    setup: 124999.99,
    subtitle: "Scaling brands",
    color: "text-indigo-400",
    border: "border-indigo-500",
    features: [
      "Everything in Gold",
      "AI Automation 🤖",
      "Predictive CRO Engine",
      "Full UX Revamp",
      "Dedicated Manager",
    ],
  },
];

/* ================= FULL FEATURE MATRIX ================= */

const croDetails = [
  {
    title: "INITIAL REVIEW & ANALYSIS",
    items: [
      ["In-Depth Site Analysis", "✓", "✓", "✓", "✓"],
      ["Duplicate Content Check", "✓", "✓", "✓", "✓"],
      ["Website Structure Analysis", "✓", "✓", "✓", "✓"],
      ["Page Load Speed Check", "✓", "✓", "✓", "✓"],
      ["Broken Link Check", "✓", "✓", "✓", "✓"],
      ["Google Penalty Check", "✓", "✓", "✓", "✓"],
      ["Cross Browser Compatibility", "✓", "✓", "✓", "✓"],
      ["Initial Rank Report", "✓", "✓", "✓", "✓"],
      ["Competition Analysis", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    title: "CRO & UX OPTIMIZATION",
    items: [
      ["Landing Page Analysis", "✓", "✓", "✓", "✓"],
      ["CTA Optimization", "✓", "✓", "✓", "✓"],
      ["Enquiry Form Optimization", "✓", "✓", "✓", "✓"],
      ["Thank You Page Optimization", "×", "✓", "✓", "✓"],
      ["Heatmap Analysis", "×", "✓", "✓", "✓"],
      ["A/B Testing", "×", "✓", "✓", "✓"],
      ["Advanced UX Improvements", "×", "×", "✓", "✓"],
      ["Personalized Strategy", "×", "×", "×", "✓"],
    ],
  },
  {
    title: "PAID ADVERTISEMENT",
    items: [
      ["Campaign Setup", "✓", "✓", "✓", "✓"],
      ["Targeting & Segmentation", "✓", "✓", "✓", "✓"],
      ["Tracking & Analytics", "✓", "✓", "✓", "✓"],
      ["Campaign Optimization", "×", "✓", "✓", "✓"],
    ],
  },
  {
    title: "ON-PAGE OPTIMIZATION",
    items: [
      ["Content Optimization", "✓", "✓", "✓", "✓"],
      ["Header Tags Optimization", "✓", "✓", "✓", "✓"],
      ["Schema Markup", "×", "✓", "✓", "✓"],
      ["Analytics Integration", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    title: "CONTENT & LINKS",
    items: [
      ["Onsite Blogs", "10", "10", "10", "10"],
      ["Blog Promotion", "15", "30", "30", "30"],
      ["Guest Posting", "×", "2", "2", "2"],
      ["Web 2.0", "×", "2", "2", "2"],
      ["Social Backlinks", "10", "10", "10", "10"],
      ["Infographics", "×", "×", "✓", "✓"],
    ],
  },
  {
    title: "SOCIAL MEDIA",
    items: [
      ["Facebook Optimization", "✓", "✓", "✓", "✓"],
      ["Facebook Posts", "15", "15", "15", "15"],
      ["LinkedIn Optimization", "×", "✓", "✓", "✓"],
      ["YouTube Setup", "×", "×", "✓", "✓"],
    ],
  },
  {
    title: "REPORTING & SUPPORT",
    items: [
      ["Monthly KPI Report", "✓", "✓", "✓", "✓"],
      ["Keyword Ranking Report", "✓", "✓", "✓", "✓"],
      ["Backlink Report", "✓", "✓", "✓", "✓"],
      ["Support", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    title: "AI FEATURES 🤖",
    items: [
      ["AI Behavior Insights", "×", "✓", "✓", "✓"],
      ["AI Heatmap Analysis", "×", "✓", "✓", "✓"],
      ["AI Conversion Prediction", "×", "×", "✓", "✓"],
      ["AI Funnel Optimization", "×", "×", "✓", "✓"],
      ["Predictive CRO Engine", "×", "×", "×", "✓"],
      ["AI Automation Workflows", "×", "×", "×", "✓"],
    ],
  },
];

/* ================= CURRENCY ================= */

const currencyRates = {
  INR: { rate: 1, symbol: "₹" },
  USD: { rate: 0.012, symbol: "$" },
};

/* ================= COMPONENT ================= */

export default function CROPricing() {
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
          CRO Pricing Plans
        </h1>
        <p className="text-gray-400 mt-4">
          Data-driven + AI-powered conversion optimization
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 max-w-7xl mx-auto px-6">
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
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  🔥 Most Popular
                </span>
              )}

              <h3 className={`text-2xl font-semibold ${plan.color}`}>
                {plan.name}
                {plan.name !== "Basic" && (
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
                ⚡ Limited onboarding slots this month
              </p>

              <p className="text-gray-400 text-sm mt-2">
                Setup Fee – {formatPrice(plan.setup)}
              </p>

              <ul className="mt-6 space-y-3 text-gray-300">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>

              {/* MICRO COPY */}
              <p className="text-xs text-gray-500 mt-4">
                {plan.name === "Basic" && "Good for testing CRO basics"}
                {plan.name === "Silver" && "Best for improving conversions fast"}
                {plan.name === "Gold" && "Maximum ROI with AI optimization"}
                {plan.name === "Premium" && "Full-scale growth & automation"}
              </p>

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

            <p className="text-center text-green-400 text-sm mb-6">
              ✔ 30-Day Optimization Guarantee
            </p>

            <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">
              {selectedPlan} PLAN BREAKDOWN
            </h2>

            {croDetails.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-white mb-4 border-b border-gray-800 pb-2">
                  {section.title}
                </h3>

                {section.items.map((item, i) => {
                  const planIndex =
                    selectedPlan === "BASIC"
                      ? 1
                      : selectedPlan === "SILVER"
                      ? 2
                      : selectedPlan === "GOLD"
                      ? 3
                      : 4;

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
                className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold hover:bg-yellow-500 shadow-lg"
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
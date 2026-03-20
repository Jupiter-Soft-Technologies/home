import { useState, useRef } from "react";
import ContactModal from "../components/ContactModal";
import { useCurrency } from "../context/CurrencyContext";

/* ================= PLANS ================= */

const plans = [
  {
    name: "Basic",
    price: 41667,
    subtitle: "For small businesses",
    border: "border-green-500",
    color: "text-green-400",
    features: [
      "UI/UX Design",
      "Responsive Website",
      "CMS Integration",
      "Deployment",
      "Basic Support",
    ],
  },
  {
    name: "Business",
    price: 58333,
    subtitle: "Most Popular",
    highlight: true,
    border: "border-yellow-500",
    color: "text-yellow-400",
    ai: true,
    features: [
      "Everything in Basic",
      "Custom Branding",
      "React / Next.js",
      "Maintenance",
      "Advanced UI",
    ],
  },
  {
    name: "Advanced",
    price: 100000,
    subtitle: "For scaling brands",
    border: "border-indigo-500",
    color: "text-indigo-400",
    ai: true,
    features: [
      "Everything in Business",
      "API Integration",
      "Priority Support",
      "Performance Optimization",
      "Custom Features",
    ],
  },
];

/* ================= FEATURE MATRIX ================= */

const webDetails = [
  {
    title: "DESIGN",
    items: [
      ["UI/UX Design", "✓", "✓", "✓"],
      ["Mobile Responsive", "✓", "✓", "✓"],
      ["Custom Branding", "×", "✓", "✓"],
    ],
  },
  {
    title: "DEVELOPMENT",
    items: [
      ["React / Next.js", "×", "✓", "✓"],
      ["CMS Integration", "✓", "✓", "✓"],
      ["API Integration", "×", "×", "✓"],
    ],
  },
  {
    title: "SUPPORT",
    items: [
      ["Deployment", "✓", "✓", "✓"],
      ["Maintenance", "×", "✓", "✓"],
      ["Priority Support", "×", "×", "✓"],
    ],
  },
];

/* ================= COMPONENT ================= */

export default function WebDevPricing() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const { convertPrice } = useCurrency();
  const cardRefs = useRef([]);

  /* ================= TILT ================= */

  const handleMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -5;
    const rotateY = ((x - rect.width / 2) / rect.width) * 5;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-black py-28 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Website Development Pricing
        </h1>

        <p className="text-gray-400 mt-4">
          High-performance websites built for conversions
        </p>

        <p className="text-green-400 text-sm mt-4">
          ✔ 100% Custom Design • Scalable Architecture
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20 max-w-7xl mx-auto perspective-1000">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMove(e, index)}
              onMouseLeave={() => handleLeave(index)}
              onClick={() => {
                setSelectedPlan(plan.name.toUpperCase());
                setShowDetails(true);
              }}
              className={`cursor-pointer relative group rounded-[32px] border overflow-visible
              transition-transform duration-300
              ${plan.border}
              bg-gradient-to-b from-gray-900 to-black p-8`}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-60 transition"
                style={{
                  background:
                    "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.12), transparent 45%)",
                }}
              />

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

              {/* HEADER */}
              <h3 className={`text-2xl font-semibold ${plan.color}`}>
                {plan.name}
              </h3>

              <p className="text-gray-400 mt-2">{plan.subtitle}</p>

              <div className={`mt-6 text-4xl font-bold ${plan.color}`}>
                {convertPrice(plan.price)}
              </div>

              <p className="text-red-400 text-xs mt-2">
                ⚡ Limited project slots available
              </p>

              {/* FEATURES */}
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
          <div className="bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-10 relative">

            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-5 right-6 text-gray-400 text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">
              {selectedPlan} PLAN DETAILS
            </h2>

            {webDetails.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-white mb-4 border-b border-gray-800 pb-2">
                  {section.title}
                </h3>

                {section.items.map((item, i) => {
                  const planIndex =
                    selectedPlan === "BASIC"
                      ? 1
                      : selectedPlan === "BUSINESS"
                      ? 2
                      : 3;

                  const value = item[planIndex];

                  return (
                    <div
                      key={i}
                      className="flex justify-between py-2 text-gray-300 hover:bg-gray-800 px-3 rounded-lg"
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
                className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold"
              >
                Start {selectedPlan} →
              </button>

              <p className="text-xs text-gray-400 mt-2">
                No hidden charges • One-time payment
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
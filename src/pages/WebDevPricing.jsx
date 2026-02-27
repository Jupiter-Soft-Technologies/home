import { useState, useRef } from "react";
import { Check, X } from "lucide-react";
import ContactModal from "../components/ContactModal";
import { useCurrency } from "../context/CurrencyContext";

const features = [
  {
    section: "DESIGN",
    items: [
      ["UI/UX Design", "✓", "✓", "✓"],
      ["Mobile Responsive", "✓", "✓", "✓"],
      ["Custom Branding", "x", "✓", "✓"],
    ],
  },
  {
    section: "DEVELOPMENT",
    items: [
      ["React / Next.js", "x", "✓", "✓"],
      ["CMS Integration", "✓", "✓", "✓"],
      ["API Integration", "x", "x", "✓"],
    ],
  },
  {
    section: "SUPPORT",
    items: [
      ["Deployment", "✓", "✓", "✓"],
      ["Maintenance", "x", "✓", "✓"],
      ["Priority Support", "x", "x", "✓"],
    ],
  },
];

const plans = [
  { name: "Basic Website", price: 41667 },
  { name: "Business Website", price: 58333, highlight: true },
  { name: "Advanced Website", price: 99999.996 },
];

const Icon = ({ value }) => {
  if (value === "✓")
    return <Check className="text-blue-400 w-4 h-4 mx-auto opacity-80" />;
  if (value === "x")
    return <X className="text-gray-500 w-4 h-4 mx-auto opacity-60" />;
  return <span className="text-blue-400 font-semibold">{value}</span>;
};

export default function WebDevPricing() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const { convertPrice } = useCurrency();

  const cardRefs = useRef([]);

  const handleMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // ⭐ Reduced tilt strength (premium subtle)
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
      <section className="bg-black py-24 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Website Development Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto perspective-1000">
          {plans.map((plan, planIndex) => (
            <div
              key={plan.name}
              ref={(el) => (cardRefs.current[planIndex] = el)}
              onMouseMove={(e) => handleMove(e, planIndex)}
              onMouseLeave={() => handleLeave(planIndex)}
              className={`relative group rounded-[32px] border overflow-hidden
              transition-transform duration-300 will-change-transform
              ${
                plan.highlight
                  ? "border-blue-500/60"
                  : "border-gray-800 hover:border-blue-500/40"
              }
              bg-gradient-to-b from-gray-900 to-black p-8`}
            >
              {/* ⭐ Soft mouse spotlight (reduced) */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-60 transition duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.12), transparent 45%)",
                }}
              />

              {/* HEADER */}
              <div className="relative text-center mb-10">
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="text-3xl font-bold text-blue-400 mt-2 transition">
                  {convertPrice(plan.price)}
                </p>

                <p className="text-gray-400 text-sm">
                  one-time project cost
                </p>
              </div>

              {/* FEATURES */}
              <div className="relative space-y-8">
                {features.map((section) => (
                  <div key={section.section}>
                    <h4 className="text-sm font-semibold text-blue-400/80 mb-3">
                      {section.section}
                    </h4>

                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex justify-between text-sm text-gray-300"
                        >
                          <span className="pr-3">{item[0]}</span>
                          <Icon value={item[planIndex + 1]} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  setSelectedPlan(plan.name);
                  setOpen(true);
                }}
                className={`relative w-full mt-12 py-4 rounded-xl font-semibold transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-102"
                    : "bg-gray-800 text-white hover:bg-gray-700 hover:scale-102"
                }`}
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </section>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}
import { useState } from "react";
import { Check, X } from "lucide-react";
import ContactModal from "../components/ContactModal";
import { useCurrency } from "../context/CurrencyContext";

const Icon = ({ value }) => {
  if (value === "✓") return <Check className="text-blue-500 w-4 h-4" />;
  if (value === "x") return <X className="text-gray-600 w-4 h-4" />;
  return <span className="text-blue-400 font-semibold">{value}</span>;
};

export default function PricingComparison({ title, plans, features }) {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const { convertPrice } = useCurrency();

  // Format numeric values with currency conversion; leave symbols/text as-is
  const formatValue = (value) => {
    if (typeof value === "number") return convertPrice(value);
    return value;
  };

  return (
    <>
      <section className="bg-black py-24 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, planIndex) => (
            <div
              key={plan.name}
              className={`rounded-[40px] border ${
                plan.highlight
                  ? "border-blue-500 scale-105"
                  : "border-gray-800"
              } bg-gradient-to-b from-gray-900 to-black p-8`}
            >
              {/* HEADER */}
              <div className="text-center mb-10">
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-blue-500 mt-2">
                  {formatValue(plan.price)}
                </p>
                <p className="text-gray-400 text-sm">per month</p>
              </div>

              {/* FEATURES */}
              <div className="space-y-8">
                {features.map((section) => (
                  <div key={section.section}>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">
                      {section.section}
                    </h4>

                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex justify-between text-sm text-gray-300"
                        >
                          <span className="pr-3">{item[0]}</span>
                          <Icon value={formatValue(item[planIndex + 1])} />
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
                className={`w-full mt-12 py-4 rounded-xl font-semibold transition ${
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
      </section>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}

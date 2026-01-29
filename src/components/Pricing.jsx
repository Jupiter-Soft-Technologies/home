import React from "react";
import AnimatedSection from "./AnimatedSection";
import { useCurrency } from "../context/CurrencyContext";

const plans = [
  { title: "Starter", price: 299 },
  { title: "Pro", price: 499 },
  { title: "Enterprise", price: 799 },
];

const features = [
  ["Basic website", "Web/App development", "Full-scale solution"],
  ["1 month support", "3 months support", "Priority support"],
  ["Deployment", "Custom UI/UX", "Cloud & Deployment"],
];

function Pricing() {
  const { convertPrice } = useCurrency();

  return (
    <AnimatedSection>
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl shadow-lg transition hover:shadow-xl ${
                idx === 1 ? "border-4 border-blue-600" : "border border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="text-4xl font-bold my-4">
                {convertPrice(plan.price)}
              </p>

              <ul className="space-y-2 mb-6 text-gray-600">
                {features.map((featureGroup, i) => (
                  <li key={i}>
                    ✔ {featureGroup[idx]}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Pricing;

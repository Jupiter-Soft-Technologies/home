import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Scale,
  Wrench,
  Building2,
  Landmark,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";

import DentistDemo from "./demos/DentistDemo/DentistDemo";
import LawyerDemo from "./demos/LawyerDemo";
import PlumberDemo from "./demos/PlumberDemo";
import RealEstateDemo from "./demos/RealEstateDemo";
import FinancialDemo from "./demos/FinancialDemo";
import InsuranceDemo from "./demos/InsuranceDemo";
import RestaurantDemo from "./demos/RestaurantDemo";

const demoWebsites = [
  {
    slug: "dental-clinic",
    title: "Dental Clinic",
    desc: "Modern dental website with appointment booking",
    category: "Healthcare",
    icon: Stethoscope,
    component: DentistDemo,
  },
  {
    slug: "law-firm",
    title: "Law Firm",
    desc: "Professional legal services website",
    category: "Legal",
    icon: Scale,
    component: LawyerDemo,
  },
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    desc: "Emergency plumbing business website",
    category: "Local Business",
    icon: Wrench,
    component: PlumberDemo,
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    desc: "Property listing platform",
    category: "Real Estate",
    icon: Building2,
    component: RealEstateDemo,
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    desc: "Investment advisory platform",
    category: "Finance",
    icon: Landmark,
    component: FinancialDemo,
  },
  {
    slug: "insurance-agency",
    title: "Insurance Agency",
    desc: "Insurance lead generation platform",
    category: "Finance",
    icon: ShieldCheck,
    component: InsuranceDemo,
  },
  {
    slug: "restaurant-cafe",
    title: "Restaurant & Cafe",
    desc: "Restaurant website with reservations",
    category: "Hospitality",
    icon: UtensilsCrossed,
    component: RestaurantDemo,
  },
];

export default function DemoWebsites() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDemo, setActiveDemo] = useState(null);

  const categories = [
    "All",
    ...new Set(demoWebsites.map((d) => d.category)),
  ];

  const filtered =
    activeCategory === "All"
      ? demoWebsites
      : demoWebsites.filter(
          (d) => d.category === activeCategory
        );

  const SelectedDemo =
    activeDemo !== null ? demoWebsites[activeDemo].component : null;

  return (
    <>
      <section className="relative py-32 bg-[#0b0f1a] text-white">

        {/* HEADER */}
        <div className="text-center mb-20 px-6">
          <h1 className="text-5xl font-bold mb-6">
            Our Portfolio
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Interactive website projects designed for different
            industries with high-conversion UI systems.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-4 flex-wrap mb-16 px-6">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-blue-600 border-blue-600"
                  : "border-gray-700 hover:border-blue-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">

          {filtered.map((demo, idx) => {
            const Icon = demo.icon;

            return (
              <div
                key={idx}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-blue-500 transition"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-white/10">
                    <Icon size={36} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {demo.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {demo.desc}
                </p>

                <span className="text-xs text-blue-400 block mb-6">
                  {demo.category}
                </span>

                <div className="flex gap-3">

                  {/* Case Study */}
                  <Link
                    to={`/portfolio/${demo.slug}`}
                    className="text-sm px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500"
                  >
                    Case Study
                  </Link>

                  {/* Live Demo */}
                  <button
                    onClick={() =>
                      setActiveDemo(
                        demoWebsites.findIndex((d) => d.slug === demo.slug)
                      )
                    }
                    className="text-sm px-4 py-2 rounded-lg border border-gray-500 hover:border-blue-500"
                  >
                    Live Demo
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DEMO MODAL */}
      {activeDemo !== null && (
        <div className="fixed inset-0 bg-black z-[9999] overflow-auto">
          <button
            onClick={() => setActiveDemo(null)}
            className="fixed top-6 right-6 bg-white text-black px-4 py-2 rounded-lg z-[10000] shadow-lg"
          >
            Close Demo
          </button>

          <div className="pt-16">
            {SelectedDemo && <SelectedDemo />}
          </div>
        </div>
      )}
    </>
  );
}
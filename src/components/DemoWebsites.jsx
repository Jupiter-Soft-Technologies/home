import React, { useState } from "react";
import {
  X,
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
    title: "Dental Clinic",
    desc: "Modern dental practice website with appointment booking",
    icon: Stethoscope,
    component: DentistDemo,
  },
  {
    title: "Law Firm",
    desc: "Professional legal services with practice area showcase",
    icon: Scale,
    component: LawyerDemo,
  },
  {
    title: "Plumbing Services",
    desc: "Emergency plumbing with 24/7 service availability",
    icon: Wrench,
    component: PlumberDemo,
  },
  {
    title: "Real Estate Agency",
    desc: "Property listings with advanced search features",
    icon: Building2,
    component: RealEstateDemo,
  },
  {
    title: "Financial Services",
    desc: "Wealth management and investment advisory platform",
    icon: Landmark,
    component: FinancialDemo,
  },
  {
    title: "Insurance Agency",
    desc: "Comprehensive insurance coverage solutions",
    icon: ShieldCheck,
    component: InsuranceDemo,
  },
  {
    title: "Restaurant & Cafe",
    desc: "Fine dining experience with online reservations",
    icon: UtensilsCrossed,
    component: RestaurantDemo,
  },
];

export default function DemoWebsites() {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openDemo = (index) => {
    setSelectedDemo(index);
    document.body.style.overflow = "hidden";
  };

  const closeDemo = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedDemo(null);
      setIsClosing(false);
      document.body.style.overflow = "auto";
    }, 300);
  };

  const SelectedComponent =
    selectedDemo !== null ? demoWebsites[selectedDemo].component : null;

  return (
    <>
      {/* ================= SECTION ================= */}
      <section
        id="demo-websites"
        className="relative py-28 bg-[#0b0f1a] text-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)]"></div>

        {/* Tech Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Glow Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 opacity-20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 opacity-20 blur-[140px] rounded-full animate-pulse"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Futuristic Demo Portfolio
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-20 px-6">
            Explore interactive demo websites designed with immersive layouts,
            modern UI systems and industry-specific functionality.
          </p>

          {/* Hanging Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 max-w-7xl mx-auto px-6">
            {demoWebsites.map((demo, idx) => {
              const Icon = demo.icon;

              return (
                <div
  key={idx}
  className="relative flex justify-center"
>


                  {/* Rope */}
                  <div className="absolute -top-20 w-[2px] h-20 bg-gradient-to-b from-gray-400 to-transparent"></div>
                  <div className="absolute -top-20 w-4 h-4 bg-gray-400 rounded-full"></div>

                  {/* Card */}
                  <div
                    onClick={() => openDemo(idx)}
                    className={`group relative w-full max-w-xs p-8 rounded-2xl
  bg-white/5 backdrop-blur-xl
  border border-white/10
  shadow-[0_0_40px_rgba(124,58,237,0.15)]
  hover:shadow-[0_0_60px_rgba(124,58,237,0.5)]
  transition-all duration-500
  cursor-pointer
  hover:-translate-y-6
  hover:rotate-1
  swing-animation float-animation
`}
style={{
  animationDelay: `${idx * 0.4}s`
}}

                  >
                    {/* Neon Glow Layer */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 blur-xl -z-10"></div>

                    {/* Professional Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-xl bg-white/10 border border-white/10 group-hover:border-purple-500 transition">
                        <Icon
                          size={40}
                          className="text-purple-400 group-hover:text-white transition"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
                      {demo.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {demo.desc}
                    </p>

                    <div className="mt-6 text-sm text-purple-400 group-hover:translate-x-2 transition-transform">
                      View Demo →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedDemo !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeDemo}
        >
          <div
            className={`relative w-full h-full bg-white transition-transform duration-300 ${
              isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDemo}
              className="fixed top-6 right-6 z-[60] bg-black/80 hover:bg-black text-white p-3 rounded-full shadow-2xl backdrop-blur-sm transition-all hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full h-full overflow-auto">
              {SelectedComponent && <SelectedComponent />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

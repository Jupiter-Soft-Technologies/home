import React, { useState } from "react";
import { X } from "lucide-react";
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
    icon: "🦷",
    gradient: "from-blue-500 to-cyan-500",
    component: DentistDemo,
  },
  {
    title: "Law Firm",
    desc: "Professional legal services with practice area showcase",
    icon: "⚖️",
    gradient: "from-slate-700 to-slate-900",
    component: LawyerDemo,
  },
  {
    title: "Plumbing Services",
    desc: "Emergency plumbing with 24/7 service availability",
    icon: "🔧",
    gradient: "from-blue-600 to-blue-800",
    component: PlumberDemo,
  },
  {
    title: "Real Estate Agency",
    desc: "Property listings with advanced search features",
    icon: "🏠",
    gradient: "from-emerald-500 to-teal-600",
    component: RealEstateDemo,
  },
  {
    title: "Financial Services",
    desc: "Wealth management and investment advisory platform",
    icon: "💰",
    gradient: "from-indigo-600 to-purple-700",
    component: FinancialDemo,
  },
  {
    title: "Insurance Agency",
    desc: "Comprehensive insurance coverage solutions",
    icon: "🛡️",
    gradient: "from-cyan-600 to-blue-700",
    component: InsuranceDemo,
  },
  {
    title: "Restaurant & Cafe",
    desc: "Fine dining experience with online reservations",
    icon: "🍽️",
    gradient: "from-amber-600 to-orange-700",
    component: RestaurantDemo,
  },
];

export default function DemoWebsites() {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openDemo = (index) => {
    setSelectedDemo(index);
    document.body.style.overflow = 'hidden';
  };

  const closeDemo = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedDemo(null);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const SelectedComponent = selectedDemo !== null ? demoWebsites[selectedDemo].component : null;

  return (
    <>
      <section id="demo-websites" className="py-20 bg-gradient-to-b from-gray-50 to-white text-center">
        <h2 className="mb-4">Demo Websites Portfolio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 px-6">
          Explore our collection of professionally designed demo websites for various industries
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {demoWebsites.map((demo, idx) => (
            <div
              key={idx}
              onClick={() => openDemo(idx)}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(20px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {demo.icon}
                </div>
                <h3 className="mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                  {demo.title}
                </h3>
                <p className="text-gray-600 text-sm">{demo.desc}</p>
                
                {/* Click indicator */}
                <div className="mt-6 inline-flex items-center gap-2 text-sm group-hover:text-purple-600 transition-colors">
                  <span>View Demo</span>
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>

              {/* 3D Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-all"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Demo Website */}
      {selectedDemo !== null && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeDemo}
        >
          <div 
            className={`relative w-full h-full bg-white transition-transform duration-300 ${
              isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDemo}
              className="fixed top-6 right-6 z-[60] bg-black/80 hover:bg-black text-white p-3 rounded-full shadow-2xl backdrop-blur-sm transition-all hover:scale-110"
              aria-label="Close demo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Demo Website Content */}
            <div className="w-full h-full overflow-auto">
              {SelectedComponent && <SelectedComponent />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

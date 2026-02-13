import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BarChart3,
  Globe,
  Smartphone,
  TrendingUp,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

export default function ServiceDropdown({ isMobile = false, closeMenu }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    {
      name: "SEO",
      desc: "Rank higher & grow organic traffic",
      to: "/seo-pricing",
      icon: <Search className="w-5 h-5" />,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "PPC",
      desc: "High-converting paid ad campaigns",
      to: "/ppc-pricing",
      icon: <BarChart3 className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "CRO",
      desc: "Optimize conversions & boost ROI",
      to: "/cro-pricing",
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: "from-emerald-500 to-lime-500",
    },
    {
      name: "Amazon PPC",
      desc: "Scale Amazon sales with profitable ads",
      to: "/amazon-ppc-pricing",
      icon: <ShoppingCart className="w-5 h-5" />,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      name: "Website Development",
      desc: "Fast, SEO-ready modern websites",
      to: "/web-pricing",
      icon: <Globe className="w-5 h-5" />,
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      name: "Application Development",
      desc: "Scalable mobile & web apps",
      to: "/app-pricing",
      icon: <Smartphone className="w-5 h-5" />,
      gradient: "from-red-500 to-rose-500",
    },
  ];

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="text-black-200 hover:text-blue-400 font-medium flex items-center gap-1 transition"
      >
        Services
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[820px] max-w-[95vw] rounded-3xl bg-[#111827]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-gray-800 z-50 overflow-hidden">
          
          {/* HEADER */}
          <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <h4 className="text-xl font-semibold">Our Services</h4>
            <p className="text-sm opacity-90 mt-1">
              Performance-driven digital growth solutions
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="max-h-[45vh] overflow-y-auto no-scrollbar">
            <div className="grid md:grid-cols-3 gap-6 p-8">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.to}
                  onClick={() => {
                    setOpen(false);
                    closeMenu && closeMenu();
                  }}
                  className="group relative rounded-2xl border border-gray-800 bg-[#1f2937] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-500"
                >
                  {/* ICON */}
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center mb-4`}
                  >
                    {service.icon}
                  </div>

                  {/* CONTENT */}
                  <h5 className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 transition">
                    {service.name}
                  </h5>
                  <p className="text-sm text-gray-400 mt-1">
                    {service.desc}
                  </p>

                  {/* ARROW */}
                  <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition">
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* FOOTER CTA */}
          <div className="px-8 py-6 bg-[#0f172a] border-t border-gray-800 flex items-center justify-between">
            <span className="text-sm text-gray-400">
              Not sure which service fits your business?
            </span>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

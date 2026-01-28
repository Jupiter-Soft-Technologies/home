import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceDropdown from "./ServicesDropdown";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* BRAND */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold cursor-pointer select-none relative"
        >
          <span className="text-blue-600 relative z-10">Jupiter</span>
          <span className="text-yellow-400 relative z-10">Soft</span>
          <span className="text-gray-800 relative z-10">Technologies</span>
          {/* 3D shadow effect */}
          <span className="absolute top-1 left-1 text-black opacity-20 z-0">
            JupiterSoftTechnologies
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-8 items-center font-medium text-gray-800">
          <button
            onClick={() => handleNav("hero")}
            className="relative group nav-link"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>

          <ServiceDropdown />

          <button
            onClick={() => handleNav("process")}
            className="relative group nav-link"
          >
            Process
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => handleNav("pricing")}
            className="relative group nav-link"
          >
            Pricing
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => handleNav("faq")}
            className="relative group nav-link"
          >
            FAQ
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => handleNav("contact")}
            className="relative group nav-link"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl font-bold text-gray-800"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 font-medium text-gray-800">
          <button
            onClick={() => handleNav("hero")}
            className="w-full text-left border-b border-gray-200 pb-2"
          >
            Home
          </button>

          <ServiceDropdown isMobile closeMenu={() => setIsOpen(false)} />

          <button
            onClick={() => handleNav("process")}
            className="w-full text-left border-b border-gray-200 pb-2"
          >
            Process
          </button>
          <button
            onClick={() => handleNav("pricing")}
            className="w-full text-left border-b border-gray-200 pb-2"
          >
            Pricing
          </button>
          <button
            onClick={() => handleNav("faq")}
            className="w-full text-left border-b border-gray-200 pb-2"
          >
            FAQ
          </button>
          <button
            onClick={() => handleNav("contact")}
            className="w-full text-left border-b border-gray-200 pb-2"
          >
            Contact
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;

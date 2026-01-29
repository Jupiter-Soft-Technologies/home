import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceDropdown from "./ServicesDropdown";
import { useCurrency } from "../context/CurrencyContext";
import ReactCountryFlag from "react-country-flag";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { currency, setCurrency } = useCurrency();

  const handleNav = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const countryMap = {
    INR: "IN",
    USD: "US",
    GBP: "GB",
    EUR: "EU",
    AUD: "AU",
    AED: "AE",
  };

  return (
    <header className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* BRAND (UNCHANGED) */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold cursor-pointer select-none relative"
        >
          <span className="text-blue-600 relative z-10">Jupiter</span>
          <span className="text-yellow-400 relative z-10">Soft</span>
          <span className="text-gray-800 relative z-10">Technologies</span>
          <span className="absolute top-1 left-1 text-black opacity-20 z-0">
            JupiterSoftTechnologies
          </span>
        </div>

        {/* DESKTOP NAV (UNCHANGED STYLES) */}
        <nav className="hidden md:flex space-x-8 items-center font-medium text-gray-800">
          <button
            onClick={() => handleNav("hero")}
            className="relative group nav-link"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>

          {/* SERVICES AFTER HOME */}
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

          {/* 🌍 CURRENCY SELECT (ONLY ADDITION) */}
          <div className="flex items-center gap-2 ml-4">
            <ReactCountryFlag
              svg
              countryCode={countryMap[currency]}
              style={{ width: "1.25em", height: "1.25em" }}
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white focus:outline-none"
            >
              <option value="INR">IN · ₹</option>
              <option value="USD">US · $</option>
              <option value="GBP">UK · £</option>
              <option value="EUR">EU · €</option>
              <option value="AUD">AU · $</option>
              <option value="AED">AE · د.إ</option>
            </select>
          </div>
        </nav>

        {/* MOBILE TOGGLE (UNCHANGED) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl font-bold text-gray-800"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE NAV (STYLES UNCHANGED) */}
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

          {/* 🌍 MOBILE CURRENCY */}
          <div className="flex items-center gap-2 pt-2">
            <ReactCountryFlag
              svg
              countryCode={countryMap[currency]}
              style={{ width: "1.25em", height: "1.25em" }}
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
            >
              <option value="INR">IN · ₹</option>
              <option value="USD">US · $</option>
              <option value="GBP">UK · £</option>
              <option value="EUR">EU · €</option>
              <option value="AUD">AU · $</option>
              <option value="AED">AE · د.إ</option>
            </select>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;

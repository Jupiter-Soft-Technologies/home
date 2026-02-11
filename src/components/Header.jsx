import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceDropdown from "./ServicesDropdown";
import { useCurrency } from "../context/CurrencyContext";
import ReactCountryFlag from "react-country-flag";
import logo from "../assets/logo.png";

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
    <header className="fixed w-full bg-gray-100 shadow-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center"
        >
          <img
            src={logo}
            alt="Jupiter Soft Technologies"
            className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-8 items-center font-medium text-gray-800">

          <button
            onClick={() => handleNav("hero")}
            className="relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>

          <ServiceDropdown />

          <button
            onClick={() => handleNav("process")}
            className="relative group"
          >
            Process
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>

          <button
            onClick={() => handleNav("pricing")}
            className="relative group"
          >
            Pricing
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>

          <button
            onClick={() => handleNav("faq")}
            className="relative group"
          >
            FAQ
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>

          <button
            onClick={() => handleNav("contact")}
            className="relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </button>

          {/* Currency Selector */}
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

          {/* GET IN TOUCH BUTTON */}
          <button
            onClick={() => handleNav("contact")}
            className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Get In Touch
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl font-bold text-gray-800"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 shadow-lg px-6 py-4 space-y-4 font-medium text-gray-800">

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

          {/* Mobile Currency */}
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

          {/* Mobile CTA */}
          <button
            onClick={() => handleNav("contact")}
            className="w-full bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Get In Touch
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;

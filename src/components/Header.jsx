import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceDropdown from "./ServicesDropdown";
import { useCurrency } from "../context/CurrencyContext";
import ReactCountryFlag from "react-country-flag";
import logo from "../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  const navigate = useNavigate();
  const location = useLocation();
  const { currency, setCurrency } = useCurrency();
  const mobileRef = useRef();

  const sections = ["hero", "process", "pricing", "faq", "contact"];

  /* ================= Scroll Glass Effect ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= Prevent Scroll when Mobile Open ================= */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  /* ================= Close on Outside Click ================= */
  useEffect(() => {
    const handleClick = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

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
    <>
      {/* Background overlay when mobile open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300" />
      )}

      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center"
          >
            <img
              src={logo}
              alt="Jupiter Soft Technologies"
              className="h-14 md:h-16 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-800 relative">

            {sections.map((item, i) => (
              <button
                key={i}
                onClick={() => handleNav(item)}
                className={`relative capitalize transition ${
                  active === item ? "text-blue-600" : ""
                }`}
              >
                {item === "hero" ? "Home" : item}

                {/* Animated Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}

            <ServiceDropdown />

            {/* Currency */}
            <div className="flex items-center gap-2 ml-4 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
              <ReactCountryFlag
                svg
                countryCode={countryMap[currency]}
                style={{ width: "1.2em", height: "1.2em" }}
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-sm focus:outline-none cursor-pointer"
              >
                <option value="INR">₹</option>
                <option value="USD">$</option>
                <option value="GBP">£</option>
                <option value="EUR">€</option>
                <option value="AUD">$</option>
                <option value="AED">د.إ</option>
              </select>
            </div>

            {/* Magnetic CTA */}
            <button
              onClick={() => handleNav("contact")}
              className="ml-4 px-6 py-2.5 rounded-full font-medium text-white
              bg-gradient-to-r from-blue-600 to-indigo-600
              transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              Get In Touch
            </button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl font-bold text-gray-800 z-50"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* MOBILE NAV PANEL */}
        <div
          ref={mobileRef}
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 space-y-6 mt-16">

            {sections.map((item, i) => (
              <button
                key={i}
                onClick={() => handleNav(item)}
                className="w-full text-left pb-2 border-b border-gray-200 capitalize"
              >
                {item === "hero" ? "Home" : item}
              </button>
            ))}

            <ServiceDropdown isMobile closeMenu={() => setIsOpen(false)} />

            <div className="flex items-center gap-2 pt-2">
              <ReactCountryFlag
                svg
                countryCode={countryMap[currency]}
                style={{ width: "1.2em", height: "1.2em" }}
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

            <button
              onClick={() => handleNav("contact")}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </button>

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

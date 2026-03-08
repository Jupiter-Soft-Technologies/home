import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceDropdown from "./ServicesDropdown";
import { useCurrency } from "../context/CurrencyContext";
import ReactCountryFlag from "react-country-flag";
import logo from "../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const { currency, setCurrency } = useCurrency();

  const mobileRef = useRef(null);
  const navRef = useRef(null);
  const buttonRefs = useRef([]);

  const navItems = [
    { name: "Home", type: "scroll", target: "hero", path: "/" },
    { name: "Portfolio", type: "route", path: "/portfolio" },
    { name: "Process", type: "route", path: "/process" },
    { name: "Pricing", type: "scroll", target: "pricing", path: "/" },
    { name: "FAQ", type: "scroll", target: "faq", path: "/" },
    { name: "Contact", type: "scroll", target: "contact", path: "/" },
  ];

  /* ================= HEADER SHRINK ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= MOBILE MENU CONTROL ================= */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleClick = (e) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  /* ================= NAVIGATION ================= */

  const handleNavigation = (item) => {
    if (item.type === "route") {
      navigate(item.path);
    } else if (item.type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: item.target } });
      } else {
        document
          .getElementById(item.target)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsOpen(false);
  };

  const isActive = (item) => {
    if (item.type === "route") {
      return location.pathname === item.path;
    }

    if (item.type === "scroll") {
      return location.pathname === "/" && item.target === "hero";
    }

    return false;
  };

  /* ================= STRIPE STYLE INDICATOR ================= */

  const moveIndicator = (element) => {
    if (!element || !navRef.current) return;

    const rect = element.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    setIndicatorStyle({
      width: rect.width,
      transform: `translateX(${rect.left - parentRect.left}px)`
    });
  };

  /* ================= POSITION INDICATOR ON ACTIVE PAGE ================= */

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => isActive(item));

    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      moveIndicator(buttonRefs.current[activeIndex]);
    }
  }, [location.pathname]);

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
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
      )}

      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-gray-200 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center"
          >
            <img
              src={logo}
              alt="Jupiter Soft Technologies"
              className={`transition-all duration-300 ${
                scrolled ? "h-12" : "h-16"
              }`}
            />
          </div>

          {/* DESKTOP NAV */}
          <nav
            ref={navRef}
            className="relative hidden md:flex items-center gap-8 font-medium text-gray-800"
          >

            {/* Animated indicator */}
            <span
              className="absolute -bottom-1 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300"
              style={indicatorStyle}
            />

            {navItems.map((item, index) => (
              <button
                key={index}
                ref={(el) => (buttonRefs.current[index] = el)}
                onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                onClick={() => handleNavigation(item)}
                className={`relative text-sm transition duration-300 hover:text-blue-500 ${
                  isActive(item) ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {item.name}
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

            {/* CTA */}
            <button
              onClick={() =>
                handleNavigation({ type: "scroll", target: "contact" })
              }
              className="ml-4 px-6 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
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

        {/* MOBILE NAV */}
        <div
          ref={mobileRef}
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 space-y-6 mt-16">

            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className="w-full text-left pb-2 border-b border-gray-200"
              >
                {item.name}
              </button>
            ))}

            <ServiceDropdown isMobile closeMenu={() => setIsOpen(false)} />

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
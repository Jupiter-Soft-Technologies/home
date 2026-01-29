import React, { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();
export const useCurrency = () => useContext(CurrencyContext);

// currency symbols map
const symbols = {
  INR: "₹",
  USD: "$",
  GBP: "£",
  EUR: "€",
  AUD: "$",
  CAD: "C$",
  JPY: "¥",
  CNY: "¥",
  SGD: "S$",
  NZD: "NZ$",
  ZAR: "R",
  AED: "د.إ",
  SAR: "﷼",
  PKR: "₨",
  LKR: "Rs",
  KRW: "₩",
  IDR: "Rp",
  MYR: "RM",
  PHP: "₱",
  BDT: "৳",
  NOK: "kr",
  SEK: "kr",
  DKK: "kr",
  CHF: "CHF",
  BRL: "R$",
  MXN: "MX$",
  ARS: "AR$",
  NGN: "₦",
  KES: "KSh",
  EGP: "E£",
  TRY: "₺",
  PLN: "zł",
  HUF: "Ft",
  CZK: "Kč",
  ILS: "₪",
  THB: "฿",
  // add more as needed
};

// static rates (INR base)
const rates = {
  INR: 1,
  USD: 0.012,
  GBP: 0.0095,
  EUR: 0.011,
  AUD: 0.018,
  CAD: 0.016,
  JPY: 1.6,
  CNY: 0.085,
  SGD: 0.016,
  NZD: 0.018,
  ZAR: 0.23,
  AED: 0.044,
  SAR: 0.044,
  PKR: 2.10,
  LKR: 2.20,
  KRW: 17.00,
  IDR: 180.0,
  MYR: 0.056,
  PHP: 0.66,
  NOK: 0.10,
  SEK: 0.11,
  DKK: 0.08,
  CHF: 0.011,
  BRL: 0.062,
  MXN: 0.22,
  ARS: 1.90,
  NGN: 6.20,
  KES: 1.47,
  EGP: 0.39,
  TRY: 0.14,
  PLN: 0.045,
  HUF: 4.10,
  CZK: 0.28,
  ILS: 0.039,
  // add more rates here
};

export const CurrencyProvider = ({ children }) => {
  // Load initial currency from localStorage, default to INR
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem("selectedCurrency") || "INR";
  });

  // Store selected currency in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedCurrency", currency);
  }, [currency]);

  const convertPrice = (priceInINR) => {
    const converted = priceInINR * (rates[currency] ?? 1);
    const symbol = symbols[currency] ?? currency;
    return `${symbol} ${converted.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

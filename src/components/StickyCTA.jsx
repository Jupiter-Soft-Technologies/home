import React from "react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white py-3 px-6 flex justify-between items-center z-40 shadow-lg">
      <p className="text-sm md:text-base">
        🚀 Get a FREE Digital Growth Strategy for your business
      </p>

      <a
        href="#services"
        className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:scale-105 transition"
      >
        Book Free Call
      </a>
    </div>
  );
}
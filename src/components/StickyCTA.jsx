import React, { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

export default function StickyCTA() {

  const [openCalendly, setOpenCalendly] = useState(false);
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.getElementById("root"));
  }, []);

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-black text-white py-3 px-6 flex justify-between items-center z-40 shadow-lg">
        <p className="text-sm md:text-base">
          🚀 Get a FREE Digital Growth Strategy for your business
        </p>

        <button
          onClick={() => setOpenCalendly(true)}
          className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:scale-105 transition"
        >
          Book Free Call
        </button>
      </div>

      {/* CALENDLY POPUP */}
      <PopupModal
        url="https://calendly.com/jupitersofttechnologies/30min"
        onModalClose={() => setOpenCalendly(false)}
        open={openCalendly}
        rootElement={rootElement}
      />
    </>
  );
}
import React, { useState, useEffect } from "react";

/* -----------------------------
   SERVICES WITH IMAGES
----------------------------- */

const services = [
  {
    name: "SEO Optimization",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    name: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
  },
  {
    name: "Conversion Rate Optimization",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    name: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    name: "App Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  },
  {
    name: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
  },
];

function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const currentService = services[serviceIndex];

  /* -----------------------------
     AI TYPEWRITER EFFECT
  ----------------------------- */

  useEffect(() => {
    let timeout;

    if (charIndex < currentService.name.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          prev + currentService.name[charIndex]
        );
        setCharIndex((prev) => prev + 1);
      }, 60);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setServiceIndex(
          (prev) => (prev + 1) % services.length
        );
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentService.name]);

  return (
    <section
      className="relative overflow-hidden text-white py-32 text-center transition-all duration-700"
      style={{
        backgroundImage: `url(${currentService.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* MAIN HEADING */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          We Drive Business Growth Through
          <br />

          {/* 3D TEXT */}
          <span className="relative inline-block mt-4">
            {/* Shadow Layer */}
            <span className="absolute inset-0 text-yellow-400 translate-x-1 translate-y-1 blur-sm opacity-60">
              {displayedText}
            </span>

            {/* Main Text */}
            <span className="relative text-yellow-400 drop-shadow-[0_8px_25px_rgba(255,215,0,0.7)]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Jupiter Soft Technologies helps brands dominate online with
          performance-driven digital strategies and cutting-edge
          technology solutions tailored for scale.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <a
            href="#services"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
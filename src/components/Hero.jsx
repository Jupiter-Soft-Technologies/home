import React, { useState, useEffect } from "react";

const services = [
  "SEO Optimization",
  "Social Media Marketing",
  "Conversion Rate Optimization",
  "Web Development",
  "App Development",
  "UI/UX Design",
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-28 text-center">

      {/* Background Glow Effect */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white,_transparent_50%)]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          We Drive Business Growth Through
          <br />
          <span className="text-yellow-400 transition-all duration-500">
            {services[index]}
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Jupiter Soft Technologies helps brands dominate online with
          performance-driven digital strategies and cutting-edge technology
          solutions tailored for scale.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <a
            href="#services"
            className="bg-white text-blue-700 px-7 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="bg-yellow-400 text-gray-900 px-7 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

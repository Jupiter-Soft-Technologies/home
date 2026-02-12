import React from "react";

const logos = [
  { src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", alt: "React" },
  { src: "https://cdn.worldvectorlogo.com/logos/flutter.svg", alt: "Flutter" },
  { src: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg", alt: "Firebase" },
  { src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", alt: "Node.js" },
];

function TrustedBy() {
  return (
    <section className="relative py-24 bg-[#0b0f1a] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-sm tracking-[0.3em] uppercase text-gray-400 mb-16">
          Trusted Technologies We Work With
        </h2>

        {/* Glass Container */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl py-14 overflow-hidden">

          {/* Gradient Glow Border */}
          <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-blue-500/30 opacity-30 blur-sm"></div>

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0b0f1a] to-transparent z-10 pointer-events-none"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0b0f1a] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Strip */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="mx-20 flex items-center justify-center group"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 opacity-80 group-hover:opacity-100 transition duration-500 floating"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }

          @keyframes float {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }

          .floating {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

    </section>
  );
}

export default TrustedBy;
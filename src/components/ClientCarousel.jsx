import React from "react";
import Client1 from "../assets/Client_logo1.png";
import Client2 from "../assets/Client_logo2.png";
import Client3 from "../assets/Client_logo3.png";
import Client4 from "../assets/Client_logo4.png";
import Client5 from "../assets/Client_logo5.png";
import Client6 from "../assets/Client_logo6.png";
import Client7 from "../assets/Client_logo7.png";

const logos = [
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
  Client7,
];

export default function ClientCarousel() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-500 mt-3">
          Businesses worldwide trust our expertise to grow online
        </p>
      </div>

      {/* Gradient Left */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white to-transparent z-10"></div>

      {/* Gradient Right */}
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Carousel */}
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-20">

        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <img
              src={logo}
              alt="Client logo"
              className="h-12 md:h-16 lg:h-20 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}

      </div>
    </section>
  );
}
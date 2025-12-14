import React from "react";
import { Button } from "../../../ui/button";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "General Dentistry",
    desc: "Routine checkups, cleanings, and preventive care.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Smile designing, veneers, and aesthetic treatments.",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  },
  {
    title: "Dental Implants",
    desc: "Permanent solutions for missing teeth.",
    img: "https://images.unsplash.com/photo-1606811842642-7d55d45f2c1d",
  },
  {
    title: "Orthodontics",
    desc: "Braces and aligners for perfect alignment.",
    img: "https://images.unsplash.com/photo-1606811841780-2f03c06b7a87",
  },
  {
    title: "Teeth Whitening",
    desc: "Brighten your smile safely and effectively.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    title: "Root Canal",
    desc: "Pain-free root canal treatment.",
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  },
];

export default function Services() {
  return (
    <div className="pt-24 bg-white dark:bg-gray-950 text-white">

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5)",
          }}
        />
        <div className="absolute inset-0 bg-blue-900/80" />
        <h1 className="relative text-5xl font-bold z-10">
          Our Dental Services
        </h1>
      </section>

      {/* Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative h-[420px] rounded-3xl overflow-hidden group shadow-xl"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.img})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <h3 className="text-2xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="opacity-90 mb-6">{service.desc}</p>
                <Button className="bg-white text-blue-700 hover:bg-blue-50 w-fit">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Ankit Sharma",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "They delivered our app faster than expected with amazing quality. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Our new website looks stunning and has boosted our client engagement significantly.",
  },
  {
    name: "Rahul Verma",
    role: "SaaS Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    text: "Their SEO strategy helped us grow 3X in organic traffic within 5 months.",
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "Professional team, transparent reporting, and excellent communication throughout.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <AnimatedSection>
      <section className="relative py-32 bg-black overflow-hidden text-white">

        {/* Moving Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.15),transparent_40%)] animate-pulse"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-20">
            Client Stories
          </h2>

          {/* Slider Container */}
          <div className="relative overflow-hidden">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="min-w-full px-8 flex flex-col items-center"
                >
                  {/* Avatar */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-full object-cover mb-6 border-2 border-purple-500"
                  />

                  {/* Stars */}
                  <div className="flex mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455 1.287 3.965c.3.922-.755 1.688-1.539 1.118L10 13.347l-3.368 2.894c-.784.57-1.838-.196-1.539-1.118l1.287-3.965-3.38-2.455c-.783-.57-.38-1.81.588-1.81h4.175l1.286-3.966z" />
                      </svg>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-2xl md:text-3xl font-light max-w-3xl leading-relaxed text-gray-200">
                    “{t.text}”
                  </p>

                  {/* Name */}
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold">{t.name}</h4>
                    <span className="text-gray-400 text-sm">
                      {t.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full"
            >
              ›
            </button>

          </div>

          {/* Dots */}
          <div className="flex justify-center mt-12 gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-purple-500 scale-125"
                    : "bg-gray-700"
                }`}
              />
            ))}
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Testimonials;
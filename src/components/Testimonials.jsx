import React, { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "They delivered our product faster than expected and the quality exceeded our expectations.",
  },
  {
    name: "Emily Carter",
    role: "Ecommerce Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Our new website increased our conversion rate dramatically. The design and speed are incredible.",
  },
  {
    name: "Daniel Thompson",
    role: "SaaS Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    text: "Their SEO strategy helped us grow 3X in organic traffic within 5 months.",
  },
  {
    name: "Sophia Williams",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "Professional team, transparent reporting, and excellent communication throughout the project.",
  },
  {
    name: "James Anderson",
    role: "Tech Startup CEO",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    text: "Their development team built our SaaS platform exactly the way we envisioned it.",
  },
  {
    name: "Olivia Martinez",
    role: "Brand Manager",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    text: "Their social media marketing campaigns helped us reach thousands of new customers.",
  },
  {
    name: "David Wilson",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
    text: "The UI/UX improvements they implemented made our platform much easier for customers to use.",
  },
  {
    name: "Isabella Moore",
    role: "Digital Marketing Head",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    text: "Our paid advertising campaigns started generating high-quality leads within weeks.",
  },
  {
    name: "Matthew Taylor",
    role: "Founder, FinTech Startup",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "Amazing attention to detail and incredible execution speed.",
  },
  {
    name: "Charlotte Davis",
    role: "Growth Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Their CRO strategies significantly improved our sales funnel performance.",
  },

  // NEW 20 TESTIMONIALS

  {
    name: "Ryan Walker",
    role: "Startup Co-Founder",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    rating: 5,
    text: "From idea to execution, their team handled everything flawlessly.",
  },
  {
    name: "Ava Harris",
    role: "Ecommerce Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    text: "Our sales doubled within 3 months after implementing their strategies.",
  },
  {
    name: "Noah Clark",
    role: "Tech Lead",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
    text: "Clean code, fast delivery, and excellent communication throughout.",
  },
  {
    name: "Mia Lewis",
    role: "Brand Strategist",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    rating: 5,
    text: "They truly understand branding and customer psychology.",
  },
  {
    name: "Ethan Hall",
    role: "SaaS Founder",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 5,
    text: "Our product launch was a huge success thanks to their team.",
  },
  {
    name: "Amelia Young",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5,
    text: "Highly professional and results-driven approach.",
  },
  {
    name: "Lucas King",
    role: "Startup Owner",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    text: "They helped us scale from zero to thousands of users.",
  },
  {
    name: "Harper Scott",
    role: "Content Strategist",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    rating: 5,
    text: "Their content and SEO strategy delivered outstanding results.",
  },
  {
    name: "Benjamin Green",
    role: "Product Owner",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    rating: 5,
    text: "Very reliable team with strong technical expertise.",
  },
  {
    name: "Evelyn Adams",
    role: "Social Media Manager",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    rating: 5,
    text: "Our engagement rates skyrocketed after working with them.",
  },
  {
    name: "Alexander Baker",
    role: "Tech Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    text: "They transformed our vision into a fully functional product.",
  },
  {
    name: "Abigail Nelson",
    role: "Brand Consultant",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5,
    text: "Creative, strategic, and highly effective execution.",
  },
  {
    name: "Henry Carter",
    role: "Startup Advisor",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    rating: 5,
    text: "They exceeded expectations in every aspect of the project.",
  },
  {
    name: "Ella Mitchell",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
    text: "The ROI we achieved was beyond what we imagined.",
  },
  {
    name: "Jack Perez",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    rating: 5,
    text: "A dependable partner for long-term growth.",
  },
  {
    name: "Scarlett Roberts",
    role: "Digital Strategist",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    rating: 5,
    text: "They brought clarity and execution to our marketing vision.",
  },
  {
    name: "Sebastian Turner",
    role: "Founder",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    rating: 5,
    text: "Top-notch service with real business impact.",
  },
  {
    name: "Chloe Phillips",
    role: "Ecommerce Manager",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    rating: 5,
    text: "We saw immediate improvements in conversions and sales.",
  },
  {
    name: "Logan Campbell",
    role: "Tech Consultant",
    image: "https://randomuser.me/api/portraits/men/95.jpg",
    rating: 5,
    text: "Their expertise helped us avoid costly mistakes.",
  },
  {
    name: "Lily Parker",
    role: "Growth Lead",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    rating: 5,
    text: "Absolutely one of the best teams we've worked with.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const visibleCards = 3;

  const extended = [...testimonials, ...testimonials];

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [index]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleDrag = (direction) => {
    stopAutoSlide();
    if (direction === "left") setIndex((prev) => prev + 1);
    else setIndex((prev) => prev - 1);
  };

  return (
    <AnimatedSection>
      <section className="relative py-32 bg-black text-white overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.2),transparent_40%)] blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-20">
            What Our Clients Say
          </h2>

          {/* Slider */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(index % testimonials.length) * (100 / visibleCards)}%)`,
              }}
            >
              {extended.map((t, i) => {
                const isCenter =
                  i % testimonials.length === index % testimonials.length;

                return (
                  <div
                    key={i}
                    className="w-full md:w-1/3 px-4 flex-shrink-0"
                  >
                    <div
                      className={`relative p-8 rounded-2xl transition-all duration-500 backdrop-blur-xl border ${
                        isCenter
                          ? "bg-white/10 border-purple-500 scale-105 shadow-2xl"
                          : "bg-white/5 border-white/10"
                      }`}
                    >
                      {/* Glow */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-purple-500/10 blur-2xl rounded-2xl"></div>
                      )}

                      <div className="relative z-10 text-center">

                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-20 h-20 mx-auto rounded-full mb-6 border-2 border-purple-500"
                        />

                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                          “{t.text}”
                        </p>

                        <h4 className="text-lg font-semibold">{t.name}</h4>
                        <span className="text-sm text-gray-400">
                          {t.role}
                        </span>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => handleDrag("right")}
              className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full"
            >
              ←
            </button>
            <button
              onClick={() => handleDrag("left")}
              className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full"
            >
              →
            </button>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Testimonials;
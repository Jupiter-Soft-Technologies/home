import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../components/AnimatedSection";
import {
  MapPin,
  Search,
  Star,
  TrendingUp,
  Users,
  ArrowRight
} from "lucide-react";

export default function LocalSEO() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <MapPin size={22} />,
      title: "Google Business Profile Optimization",
      desc: "Complete setup and optimization of your Google Business Profile to rank higher in local searches.",
    },
    {
      icon: <Search size={22} />,
      title: "Local Keyword Targeting",
      desc: "Target high-converting local keywords to attract nearby customers actively searching for your services.",
    },
    {
      icon: <Star size={22} />,
      title: "Review & Reputation Management",
      desc: "Improve ratings, build trust, and manage customer reviews to boost conversions.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Local Ranking Optimization",
      desc: "Rank your business in Google Maps and local search results for maximum visibility.",
    },
    {
      icon: <Users size={22} />,
      title: "Local Citations & Listings",
      desc: "Create and optimize business listings across directories to improve authority.",
    },
  ];

  const benefits = [
    "Rank higher in Google Maps",
    "Get more local leads & calls",
    "Increase foot traffic to your business",
    "Build trust with reviews",
    "Dominate your local market",
  ];

  const process = [
    "Business audit & competitor analysis",
    "Google Business Profile optimization",
    "Local keyword targeting",
    "Citation building & consistency",
    "Review management & growth tracking",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Local SEO
            <span className="text-blue-500"> Services</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Get discovered by nearby customers, rank higher on Google Maps,
            and generate consistent local leads for your business.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
          >
            Get Free Local SEO Audit →
          </button>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Our Local SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {services.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500 transition"
              >
                <div className="text-blue-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white/5 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Why Local SEO Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-black/40 p-6 rounded-xl border border-white/10"
                >
                  <span className="text-blue-500 text-xl">✓</span>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Local SEO Process
            </h2>

            <div className="mt-16 space-y-6">
              {process.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  <span className="text-blue-500 text-xl font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">3X</h3>
              <p className="text-gray-400 mt-2">Increase in local visibility</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">2X</h3>
              <p className="text-gray-400 mt-2">More calls & inquiries</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">5X</h3>
              <p className="text-gray-400 mt-2">Higher Google Maps reach</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Dominate Your Local Market?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s help your business rank locally, attract customers, and grow faster.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
          >
            Start Now <ArrowRight className="inline ml-2" />
          </button>
        </section>

      </div>
    </AnimatedSection>
  );
}
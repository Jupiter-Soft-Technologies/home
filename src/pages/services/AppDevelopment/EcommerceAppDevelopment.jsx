import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../components/AnimatedSection";
import {
  Smartphone,
  ShoppingCart,
  CreditCard,
  Zap,
  BarChart3,
  ArrowRight
} from "lucide-react";

export default function EcommerceAppDevelopment() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Smartphone size={22} />,
      title: "Custom Mobile App Design",
      desc: "Modern, intuitive UI/UX designed for seamless shopping experiences.",
    },
    {
      icon: <ShoppingCart size={22} />,
      title: "Advanced E-commerce Features",
      desc: "Product catalogs, filters, carts, wishlists, and user accounts.",
    },
    {
      icon: <CreditCard size={22} />,
      title: "Secure Payment Integration",
      desc: "Multiple payment gateways with fast and secure checkout.",
    },
    {
      icon: <Zap size={22} />,
      title: "High Performance Apps",
      desc: "Lightning-fast mobile apps optimized for speed and scalability.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Analytics & Growth Tools",
      desc: "Track user behavior, sales, and optimize performance.",
    },
  ];

  const benefits = [
    "Increase mobile sales",
    "Better customer experience",
    "Higher engagement & retention",
    "Push notifications for marketing",
    "Scalable business growth",
  ];

  const process = [
    "Business & app strategy",
    "UI/UX design & prototyping",
    "App development (iOS & Android)",
    "Testing & optimization",
    "Launch & scaling support",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            E-commerce App
            <span className="text-blue-500"> Development</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Build powerful mobile shopping apps that increase sales,
            enhance customer experience, and scale your online business.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
          >
            Get Free Consultation →
          </button>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Our E-commerce App Services
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
              Why Invest in E-commerce Apps?
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
              Our Development Process
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
              <p className="text-gray-400 mt-2">Increase in mobile sales</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">2X</h3>
              <p className="text-gray-400 mt-2">Higher engagement</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">Fast</h3>
              <p className="text-gray-400 mt-2">Performance & scalability</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Launch Your App?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s build a high-converting e-commerce app that drives sales and growth.
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
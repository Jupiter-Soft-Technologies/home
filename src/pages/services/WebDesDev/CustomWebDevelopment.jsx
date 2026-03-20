import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../components/AnimatedSection";
import {
  Code,
  Layout,
  Zap,
  ShieldCheck,
  Layers,
  ArrowRight
} from "lucide-react";

export default function CustomWebDevelopment() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Layout size={22} />,
      title: "Custom UI/UX Design",
      desc: "Pixel-perfect, conversion-focused designs tailored to your brand and audience.",
    },
    {
      icon: <Code size={22} />,
      title: "Custom Development",
      desc: "Fully custom-built websites using modern frameworks for performance and scalability.",
    },
    {
      icon: <Layers size={22} />,
      title: "Scalable Architecture",
      desc: "Flexible and future-ready architecture designed to grow with your business.",
    },
    {
      icon: <Zap size={22} />,
      title: "Performance Optimization",
      desc: "Lightning-fast websites optimized for speed, SEO, and user experience.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Security & Reliability",
      desc: "Enterprise-level security, data protection, and stable deployment systems.",
    },
  ];

  const benefits = [
    "Unique brand identity",
    "Highly scalable solutions",
    "Better performance & speed",
    "Custom features & integrations",
    "Higher conversions & engagement",
  ];

  const process = [
    "Discovery & strategy planning",
    "Wireframing & UI/UX design",
    "Custom development",
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
            Custom Website
            <span className="text-blue-500"> Design & Development</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Build high-performance, scalable, and fully customized websites
            designed to match your business goals and drive growth.
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
            Our Custom Development Services
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
              Why Choose Custom Development?
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
              <h3 className="text-4xl font-bold text-blue-500">Fast</h3>
              <p className="text-gray-400 mt-2">High performance websites</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">Scalable</h3>
              <p className="text-gray-400 mt-2">Future-ready architecture</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">Custom</h3>
              <p className="text-gray-400 mt-2">Tailored solutions</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Build Something Unique?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s create a custom website tailored to your business and growth goals.
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
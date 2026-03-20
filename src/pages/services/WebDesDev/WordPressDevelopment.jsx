import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../components/AnimatedSection";
import {
  Globe,
  Layout,
  Zap,
  ShieldCheck,
  ShoppingCart,
  ArrowRight
} from "lucide-react";

export default function WordPressDevelopment() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Layout size={22} />,
      title: "Custom WordPress Design",
      desc: "Unique, conversion-focused website designs tailored to your brand identity.",
    },
    {
      icon: <Zap size={22} />,
      title: "Performance Optimization",
      desc: "Fast-loading websites optimized for Core Web Vitals and user experience.",
    },
    {
      icon: <Globe size={22} />,
      title: "SEO-Friendly Development",
      desc: "Built with clean code and SEO best practices to rank higher on Google.",
    },
    {
      icon: <ShoppingCart size={22} />,
      title: "E-commerce (WooCommerce)",
      desc: "Fully functional online stores designed to maximize sales and conversions.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Security & Maintenance",
      desc: "Secure websites with regular updates, backups, and protection from threats.",
    },
  ];

  const benefits = [
    "Professional online presence",
    "Mobile-responsive design",
    "Faster loading speeds",
    "Higher conversions & leads",
    "Easy content management",
  ];

  const process = [
    "Requirement analysis & planning",
    "Wireframing & UI design",
    "Development & customization",
    "Testing & optimization",
    "Launch & support",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            WordPress Website
            <span className="text-blue-500"> Design & Development</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Build high-performance WordPress websites that are fast,
            scalable, SEO-friendly, and designed to convert visitors into customers.
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
            Our WordPress Services
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
              Why Choose WordPress?
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
              <h3 className="text-4xl font-bold text-blue-500">2X</h3>
              <p className="text-gray-400 mt-2">Faster load speed</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">3X</h3>
              <p className="text-gray-400 mt-2">More conversions</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">100%</h3>
              <p className="text-gray-400 mt-2">Responsive design</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Build Your Website?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s create a high-performing WordPress website that grows your business.
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
import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../components/AnimatedSection";
import {
  Search,
  Settings,
  Zap,
  ShieldCheck,
  BarChart3,
  ArrowRight
} from "lucide-react";

export default function TechnicalSEO() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Search size={22} />,
      title: "Website Audit",
      desc: "Comprehensive technical audits to identify errors affecting rankings and performance.",
    },
    {
      icon: <Settings size={22} />,
      title: "Site Architecture Optimization",
      desc: "Improve crawlability and indexing with a clean and scalable site structure.",
    },
    {
      icon: <Zap size={22} />,
      title: "Speed Optimization",
      desc: "Enhance loading speed and Core Web Vitals for better rankings and user experience.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Indexing & Crawl Fixes",
      desc: "Fix crawl errors, indexing issues, and ensure search engines access your site properly.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Structured Data",
      desc: "Implement schema markup to improve search visibility and rich results.",
    },
  ];

  const benefits = [
    "Improve search engine rankings",
    "Faster website performance",
    "Better user experience",
    "Higher crawlability & indexing",
    "Long-term SEO growth",
  ];

  const process = [
    "Technical audit & issue identification",
    "Prioritization of fixes",
    "Implementation & optimization",
    "Testing & validation",
    "Monitoring & reporting",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Technical SEO
            <span className="text-blue-500"> Services</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Fix hidden technical issues, improve site performance, and build a
            strong SEO foundation for long-term organic growth.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
          >
            Get Free Audit →
          </button>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Our Technical SEO Services
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
              Why Technical SEO Matters
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
              Our Technical SEO Process
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

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Fix Your SEO Foundation?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s optimize your website’s technical health and unlock higher rankings and performance.
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
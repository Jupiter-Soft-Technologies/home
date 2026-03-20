import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../components/AnimatedSection";
import {
  Server,
  Zap,
  ShieldCheck,
  Globe,
  Cloud,
  ArrowRight
} from "lucide-react";

export default function WebsiteHosting() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Server size={22} />,
      title: "Managed Hosting",
      desc: "Fully managed hosting solutions with zero technical hassle for your business.",
    },
    {
      icon: <Zap size={22} />,
      title: "High-Speed Performance",
      desc: "Optimized servers ensuring lightning-fast website loading speeds.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Advanced Security",
      desc: "Protection against malware, DDoS attacks, and security vulnerabilities.",
    },
    {
      icon: <Cloud size={22} />,
      title: "Cloud Infrastructure",
      desc: "Scalable cloud hosting that grows with your business needs.",
    },
    {
      icon: <Globe size={22} />,
      title: "99.9% Uptime Guarantee",
      desc: "Reliable hosting with maximum uptime to keep your business online.",
    },
  ];

  const benefits = [
    "Fast website performance",
    "Secure & reliable hosting",
    "Minimal downtime",
    "Scalable infrastructure",
    "Peace of mind with managed support",
  ];

  const process = [
    "Hosting audit & requirement analysis",
    "Server setup & configuration",
    "Website migration (if needed)",
    "Performance optimization",
    "Monitoring & ongoing support",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Website Hosting
            <span className="text-blue-500"> Services</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Fast, secure, and reliable hosting solutions designed to keep your
            website running smoothly and efficiently 24/7.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
          >
            Get Hosting Plan →
          </button>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Our Hosting Services
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
              Why Choose Our Hosting?
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
              Our Hosting Process
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
              <h3 className="text-4xl font-bold text-blue-500">99.9%</h3>
              <p className="text-gray-400 mt-2">Uptime guarantee</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">Fast</h3>
              <p className="text-gray-400 mt-2">Optimized performance</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">Secure</h3>
              <p className="text-gray-400 mt-2">Advanced protection</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready for Reliable Hosting?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s power your website with fast, secure, and scalable hosting solutions.
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
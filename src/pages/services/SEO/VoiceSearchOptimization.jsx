import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../components/AnimatedSection";
import {
  Mic,
  Search,
  MessageCircle,
  TrendingUp,
  Smartphone,
  ArrowRight
} from "lucide-react";

export default function VoiceSearchOptimization() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Mic size={22} />,
      title: "Voice Keyword Research",
      desc: "Target conversational and long-tail keywords used in voice search queries.",
    },
    {
      icon: <MessageCircle size={22} />,
      title: "Conversational Content Optimization",
      desc: "Optimize content for natural language and question-based searches.",
    },
    {
      icon: <Search size={22} />,
      title: "Featured Snippet Optimization",
      desc: "Rank for position zero to become the primary answer for voice assistants.",
    },
    {
      icon: <Smartphone size={22} />,
      title: "Mobile Optimization",
      desc: "Ensure your website performs flawlessly on mobile devices where voice searches dominate.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Local Voice SEO",
      desc: "Optimize for local voice queries like ‘near me’ searches to capture nearby customers.",
    },
  ];

  const benefits = [
    "Capture voice-based search traffic",
    "Rank for conversational queries",
    "Improve mobile search experience",
    "Get featured in voice assistants",
    "Stay ahead of SEO trends",
  ];

  const process = [
    "Voice search audit & analysis",
    "Keyword & intent research",
    "Content optimization",
    "Technical improvements",
    "Monitoring & scaling",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Voice Search
            <span className="text-blue-500"> Optimization</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Optimize your website for voice assistants like Google Assistant,
            Alexa, and Siri to capture the future of search traffic.
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
            Our Voice Search Optimization Services
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
              Why Voice Search Matters
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
              Our Optimization Process
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
              <h3 className="text-4xl font-bold text-blue-500">40%+</h3>
              <p className="text-gray-400 mt-2">Voice search growth annually</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">3X</h3>
              <p className="text-gray-400 mt-2">More conversational queries</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">Top</h3>
              <p className="text-gray-400 mt-2">Featured snippet opportunities</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready for the Future of Search?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s optimize your website for voice search and stay ahead of your competitors.
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

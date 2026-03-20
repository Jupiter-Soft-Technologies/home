import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../components/AnimatedSection";
import {
  Sparkles,
  Bot,
  Search,
  Brain,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function GenerativeSEO() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Bot size={22} />,
      title: "AI Search Optimization",
      desc: "Optimize your content for AI-powered search engines like Google SGE and ChatGPT.",
    },
    {
      icon: <Search size={22} />,
      title: "Semantic Content Structuring",
      desc: "Structure content for better understanding by AI models and search algorithms.",
    },
    {
      icon: <Brain size={22} />,
      title: "Entity & Context Optimization",
      desc: "Enhance your brand visibility by aligning with entities, topics, and search intent.",
    },
    {
      icon: <Sparkles size={22} />,
      title: "AI Snippet Optimization",
      desc: "Increase chances of appearing in AI-generated answers and summaries.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Future SEO Strategy",
      desc: "Build a long-term SEO strategy aligned with evolving AI search ecosystems.",
    },
  ];

  const benefits = [
    "Appear in AI-generated answers (SGE, ChatGPT)",
    "Stay ahead of traditional SEO competition",
    "Improve brand visibility in AI results",
    "Capture zero-click searches",
    "Future-proof your SEO strategy",
  ];

  const process = [
    "AI search audit & analysis",
    "Content restructuring & optimization",
    "Entity and semantic alignment",
    "AI snippet targeting",
    "Monitoring AI visibility & scaling",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Generative Engine
            <span className="text-blue-500"> Optimization (GEO)</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Optimize your brand for AI-driven search engines like Google SGE,
            ChatGPT, and future generative platforms.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
          >
            Get AI SEO Strategy →
          </button>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Our Generative SEO Services
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
              Why Generative SEO Matters
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
              Our GEO Process
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
              <h3 className="text-4xl font-bold text-blue-500">AI</h3>
              <p className="text-gray-400 mt-2">Search-first future</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">0-Click</h3>
              <p className="text-gray-400 mt-2">Search dominance</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">Top</h3>
              <p className="text-gray-400 mt-2">AI answer visibility</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready for AI-Powered SEO?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s position your business at the forefront of generative search engines.
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
import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../../components/AnimatedSection";
import {
  Youtube,
  Search,
  BarChart3,
  Eye,
  PlayCircle,
  ArrowRight
} from "lucide-react";

export default function YouTubeSEO() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Search size={22} />,
      title: "YouTube Keyword Research",
      desc: "Find high-volume, low-competition keywords that help your videos rank faster.",
    },
    {
      icon: <Youtube size={22} />,
      title: "Channel Optimization",
      desc: "Complete setup of your channel structure, branding, and playlists.",
    },
    {
      icon: <PlayCircle size={22} />,
      title: "Video Optimization",
      desc: "Optimized titles, tags, descriptions, and metadata for maximum visibility.",
    },
    {
      icon: <Eye size={22} />,
      title: "CTR Optimization",
      desc: "High-converting thumbnails and titles that increase clicks.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Growth Analytics",
      desc: "Data-driven insights to continuously scale your channel performance.",
    },
  ];

  const benefits = [
    "Rank videos on YouTube & Google",
    "Increase organic traffic",
    "Boost watch time & engagement",
    "Generate consistent leads",
    "Build authority in your niche",
  ];

  const process = [
    "Channel & competitor audit",
    "Keyword + content strategy",
    "Video optimization execution",
    "CTR & retention improvement",
    "Monthly scaling & reporting",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[700px] h-[350px] bg-blue-600 opacity-20 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            YouTube SEO &
            <span className="text-blue-500"> Video Optimization</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Grow your channel, rank your videos, and turn views into leads with
            our proven YouTube SEO strategies.
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
            Our YouTube SEO Services
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
              Why YouTube SEO Matters
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

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Grow Your YouTube Channel?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s transform your content into a powerful traffic and revenue engine.
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
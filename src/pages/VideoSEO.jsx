import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import {
  Play,
  TrendingUp,
  Search,
  BarChart3,
  Youtube,
  ArrowRight
} from "lucide-react";

export default function VideoSEO() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Search size={22} />,
      title: "YouTube Keyword Research",
      desc: "We identify high-ranking keywords to position your videos at the top of search results.",
    },
    {
      icon: <Youtube size={22} />,
      title: "Channel Optimization",
      desc: "Optimize your channel structure, playlists, and branding for maximum discoverability.",
    },
    {
      icon: <Play size={22} />,
      title: "CTR Optimization",
      desc: "High-converting thumbnails, titles, and hooks that drive more clicks.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Watch-Time Growth",
      desc: "Strategies designed to boost retention and increase YouTube ranking signals.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Analytics & Scaling",
      desc: "Data-driven optimization to continuously scale views and engagement.",
    },
  ];

  const process = [
    "Audit & competitor analysis",
    "Keyword & content strategy",
    "Video optimization implementation",
    "CTR & retention improvement",
    "Scaling & monthly reporting",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="relative py-32 text-center px-6 overflow-hidden">
          <div className="absolute w-[800px] h-[400px] bg-blue-600 opacity-20 blur-[150px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Dominate YouTube with
            <span className="text-blue-500"> Video SEO</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Rank your videos on YouTube and Google, generate organic views, and turn attention into consistent leads and revenue.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-medium transition"
          >
            Get Free Strategy →
          </button>
        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            What We Do in Video SEO
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {features.map((item, i) => (
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

        {/* PROCESS */}
        <section className="bg-white/5 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Proven Process
            </h2>

            <div className="mt-16 space-y-6">
              {process.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 bg-black/40 p-6 rounded-xl border border-white/10"
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
              <p className="text-gray-400 mt-2">Average view growth</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">70%</h3>
              <p className="text-gray-400 mt-2">Increase in watch time</p>
            </div>

            <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h3 className="text-4xl font-bold text-blue-500">5X</h3>
              <p className="text-gray-400 mt-2">Higher engagement</p>
            </div>
          </div>
        </section>

        {/* 🔥 ULTRA PREMIUM SUB SERVICES */}
        <section className="py-28 px-6 relative overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-600/20 blur-[160px] rounded-full"></div>

          <div className="relative max-w-7xl mx-auto">

            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold">
                Explore Our <span className="text-blue-500">Video Growth Solutions</span>
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
                Specialized video services designed to maximize visibility, engagement, and conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-20">

              <div onClick={() => navigate("/services/video-seo/youtube-seo")}
                className="group cursor-pointer bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-blue-500 hover:-translate-y-3 transition">
                <h3 className="text-2xl font-semibold group-hover:text-blue-400">
                  YouTube SEO Optimization
                </h3>
                <p className="text-gray-400 mt-4">
                  Rank your videos on YouTube and Google with advanced strategies.
                </p>
              </div>

              <div onClick={() => navigate("/services/video-seo/customer-testimonial-videos")}
                className="group cursor-pointer bg-blue-600/20 border border-blue-500 p-10 rounded-3xl hover:-translate-y-3 transition scale-105">
                <h3 className="text-2xl font-semibold text-blue-300">
                  Testimonial Video Services
                </h3>
                <p className="text-gray-300 mt-4">
                  Build trust and increase conversions with real customer stories.
                </p>
              </div>

              <div onClick={() => navigate("/services/video-seo/vlog-video-production")}
                className="group cursor-pointer bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-blue-500 hover:-translate-y-3 transition">
                <h3 className="text-2xl font-semibold group-hover:text-blue-400">
                  Vlog Video Production
                </h3>
                <p className="text-gray-400 mt-4">
                  Grow your brand with engaging vlog content.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-28 px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Rank Your Videos?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s turn your content into a traffic and revenue machine with proven Video SEO strategies.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-medium"
          >
            Start Now <ArrowRight className="inline ml-2" />
          </button>
        </section>

      </div>
    </AnimatedSection>
  );
}
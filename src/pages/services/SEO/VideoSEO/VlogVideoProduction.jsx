import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../../components/AnimatedSection";
import {
  Video,
  Camera,
  Film,
  TrendingUp,
  Users,
  ArrowRight
} from "lucide-react";

export default function VlogVideoProduction() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Video size={22} />,
      title: "Vlog Content Strategy",
      desc: "We plan high-impact vlog topics that attract viewers and grow your audience.",
    },
    {
      icon: <Camera size={22} />,
      title: "Professional Video Production",
      desc: "High-quality shooting setups that enhance your personal brand and storytelling.",
    },
    {
      icon: <Film size={22} />,
      title: "Cinematic Editing",
      desc: "Engaging edits with smooth transitions, storytelling, and brand consistency.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "YouTube Optimization",
      desc: "SEO-driven optimization to ensure your vlogs rank and get discovered.",
    },
    {
      icon: <Users size={22} />,
      title: "Audience Growth",
      desc: "Strategies focused on subscriber growth and long-term engagement.",
    },
  ];

  const benefits = [
    "Build a strong personal brand",
    "Increase YouTube subscribers",
    "Boost audience engagement",
    "Create consistent content pipeline",
    "Generate long-term organic traffic",
  ];

  const process = [
    "Content & audience research",
    "Vlog planning & scripting",
    "Video shooting & production",
    "Editing & storytelling",
    "Publishing & growth optimization",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[700px] h-[350px] bg-blue-600 opacity-20 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Vlog Video
            <span className="text-blue-500"> Production Services</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Create engaging vlog content that builds your personal brand,
            attracts subscribers, and drives long-term growth.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
          >
            Start Your Channel →
          </button>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Our Vlog Production Services
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
              Why Vlogging Works
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
              Our Production Process
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
            Ready to Build Your Vlog Brand?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s create powerful vlog content that grows your audience and builds authority.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
          >
            Get Started <ArrowRight className="inline ml-2" />
          </button>
        </section>

      </div>
    </AnimatedSection>
  );
}
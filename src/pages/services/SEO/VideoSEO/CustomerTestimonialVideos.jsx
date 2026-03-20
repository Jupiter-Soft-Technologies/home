import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../../../components/AnimatedSection";
import {
  Video,
  Users,
  Star,
  Mic,
  Camera,
  ArrowRight
} from "lucide-react";

export default function CustomerTestimonialVideos() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Video size={22} />,
      title: "Testimonial Video Production",
      desc: "Professional filming of authentic customer testimonials that build trust instantly.",
    },
    {
      icon: <Mic size={22} />,
      title: "Interview Structuring",
      desc: "We craft questions and scripts to capture powerful, emotional responses.",
    },
    {
      icon: <Camera size={22} />,
      title: "Cinematic Editing",
      desc: "High-quality editing with storytelling, branding, and engagement optimization.",
    },
    {
      icon: <Star size={22} />,
      title: "Conversion Optimization",
      desc: "Videos designed to increase trust, conversions, and sales.",
    },
    {
      icon: <Users size={22} />,
      title: "Multi-Platform Distribution",
      desc: "Optimized videos for websites, ads, YouTube, and social media platforms.",
    },
  ];

  const benefits = [
    "Build instant trust with real customer stories",
    "Increase conversions and sales",
    "Strengthen brand credibility",
    "Improve ad performance",
    "Create long-term marketing assets",
  ];

  const process = [
    "Client & audience research",
    "Script & interview planning",
    "Video production & shooting",
    "Editing & storytelling",
    "Publishing & optimization",
  ];

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

        {/* HERO */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div className="absolute w-[700px] h-[350px] bg-blue-600 opacity-20 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Customer Testimonial
            <span className="text-blue-500"> Video Services</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Turn real customer experiences into powerful videos that build trust,
            influence decisions, and drive conversions.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg"
          >
            Get Started →
          </button>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            What We Offer
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
              Why Testimonial Videos Work
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
            Ready to Build Trust with Video?
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Let’s create powerful testimonial videos that convert viewers into customers.
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
import React from "react";
import {
  Settings,
  BadgeCheck,
  Target,
  TrendingUp,
  BarChart3,
  Activity,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "Custom Campaigns",
    desc: "No two businesses are alike. Our tailored marketing strategies adapt to your industry and audience to ensure maximum ROI.",
    icon: <Settings className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "Certified Experts",
    desc: "Our certified specialists bring hands-on experience in SEO, PPC, web development, and performance marketing.",
    icon: <BadgeCheck className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "Full-Funnel Marketing",
    desc: "From awareness to conversion, we build complete strategies that generate real business results.",
    icon: <Target className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "Conversion-Centric Approach",
    desc: "We optimize every touchpoint — from UX improvements to A/B testing — to boost ROI and growth.",
    icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "Data-Driven Decisions",
    desc: "Using analytics and performance insights, we fine-tune campaigns for consistent measurable growth.",
    icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "Real-Time Tracking",
    desc: "Stay informed with live dashboards, performance tracking, and transparent reporting.",
    icon: <Activity className="w-8 h-8 text-orange-400" />,
  },
];

function WhyChooseUs() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-[#0B0F19] text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-16">
          Why Choose Us?
        </h2>

        {/* Grid */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#121826] border border-gray-800 rounded-2xl p-10 transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-[#1A2233] p-4 rounded-xl">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default WhyChooseUs;

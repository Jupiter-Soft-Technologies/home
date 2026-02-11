import React, { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { ClipboardList, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Plan",
    desc: "We analyze your vision, research competitors and create a scalable execution roadmap.",
    icon: ClipboardList,
  },
  {
    title: "Design",
    desc: "High-conversion UI/UX systems crafted for immersive digital experiences.",
    icon: Palette,
  },
  {
    title: "Develop",
    desc: "Agile engineering with performance-first scalable architecture.",
    icon: Code2,
  },
  {
    title: "Launch",
    desc: "Seamless deployment, optimization and long-term growth support.",
    icon: Rocket,
  },
];


// ✅ Separate Tilt Card Component (Correct Hooks Usage)
function TiltCard({ step, index }) {
  const cardRef = useRef(null);
  const Icon = step.icon;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

    card.style.setProperty("--x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--y", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <div className="relative float-soft">

      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 opacity-0 hover:opacity-100 blur-xl transition duration-500"></div>

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-reflection relative bg-white/5 backdrop-blur-xl border border-white/10
                   rounded-2xl p-10
                   shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                   transition-transform duration-300 ease-out
                   transform-gpu"
      >
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-xl bg-white/10 border border-white/10">
            <Icon size={36} className="text-purple-400" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {step.desc}
        </p>

        {/* Step Number */}
        <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">
          0{index + 1}
        </div>
      </div>
    </div>
  );
}


// 🔥 Main Component
function Process() {
  return (
    <AnimatedSection>
      <section className="relative py-32 bg-[#0b0f1a] text-white overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)]"></div>

        {/* Header */}
        <div className="relative z-10 text-center mb-24">
          <h2 className="text-5xl font-bold mb-6">
            Our Execution Framework
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A refined strategic process designed to transform ideas into scalable digital products.
          </p>
        </div>

        {/* Timeline */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 opacity-30"></div>

        {/* Cards */}
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto px-6 perspective">
          {steps.map((step, idx) => (
            <TiltCard key={idx} step={step} index={idx} />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Process;

import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    number: "01",
    title: "Search Engine Optimization (SEO)",
    slug: "seo",
    desc: "Technical SEO and content strategies designed for long-term organic dominance.",
    bullets: [
      "Technical audits & site architecture",
      "Keyword & competitor research",
      "Authority backlink building",
      "Monthly performance tracking",
    ],
  },
  {
    number: "02",
    title: "Paid-per-click Advertising",
    slug: "paid-ads",
    desc: "High-performance Google, Meta & LinkedIn ads built for measurable ROI.",
    bullets: [
      "Campaign strategy & setup",
      "Creative ad testing",
      "Conversion tracking",
      "Scaling & optimization",
    ],
  },
  {
    number: "03",
    title: "Social Media Marketing",
    slug: "social-media",
    desc: "Brand-building and lead generation through data-driven social campaigns.",
    bullets: [
      "Content strategy",
      "Reels & creative direction",
      "Audience targeting",
      "Growth analytics",
    ],
  },
  {
    number: "04",
    title: "Web Development",
    slug: "web-development",
    desc: "Modern, lightning-fast websites built for performance and scalability.",
    bullets: [
      "React / Next.js development",
      "SEO-optimized structure",
      "Speed optimization",
      "Secure deployment",
    ],
  },
  {
    number: "05",
    title: "App Development",
    slug: "app-development",
    desc: "Cross-platform mobile applications engineered for seamless experiences.",
    bullets: [
      "Flutter & React Native",
      "iOS & Android deployment",
      "API integrations",
      "Performance optimization",
    ],
  },
  {
    number: "06",
    title: "Custom Software Solutions",
    slug: "custom-software",
    desc: "Tailored systems that automate workflows and scale with your business.",
    bullets: [
      "CRM & dashboard systems",
      "Business automation tools",
      "Custom SaaS platforms",
      "Secure backend architecture",
    ],
  },
  {
    number: "07",
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    desc: "Secure, scalable infrastructure powered by modern cloud platforms.",
    bullets: [
      "AWS & Firebase setup",
      "CI/CD pipelines",
      "Server optimization",
      "Infrastructure scaling",
    ],
  },
  {
    number: "08",
    title: "UI / UX Design",
    slug: "ui-ux",
    desc: "Conversion-focused design systems built for usability and trust.",
    bullets: [
      "Wireframing & prototyping",
      "Design systems",
      "User journey mapping",
      "A/B design testing",
    ],
  },
  {
    number: "09",
    title: "Conversion Optimization",
    slug: "conversion-optimization",
    desc: "Turn more visitors into paying customers through data-backed testing.",
    bullets: [
      "Landing page optimization",
      "Funnel restructuring",
      "Heatmap analysis",
      "Behavior tracking",
    ],
  },
];

function Services() {
  return (
    <AnimatedSection>
      <section
        id="services"
        className="relative py-32 bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600 opacity-20 blur-[160px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-28">
            <span className="text-blue-400 text-sm uppercase tracking-widest">
              Our Capabilities
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Everything your startup
              <span className="text-blue-500"> needs to scale</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg">
              From marketing acceleration to product engineering, we build
              scalable digital ecosystems that drive predictable growth.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-28">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-16 items-center 
                bg-white/5 backdrop-blur-xl border border-white/10 
                rounded-3xl p-12 hover:border-blue-500 
                transition-all duration-500 group"
              >
                {/* Left */}
                <div>
                  <span className="text-6xl font-bold text-gray-700 group-hover:text-blue-500 transition">
                    {service.number}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-semibold mt-6 group-hover:text-blue-400 transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                    {service.desc}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
                  >
                    Explore Service →
                  </Link>
                </div>

                {/* Right */}
                <div className="space-y-6">
                  {service.bullets.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 text-gray-300 group-hover:text-white transition"
                    >
                      <span className="text-blue-500 text-xl">✓</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-12 text-center mt-32">
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10">
              <h4 className="text-4xl font-bold text-blue-500">250%+</h4>
              <p className="text-gray-400 mt-3">Average traffic growth</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10">
              <h4 className="text-4xl font-bold text-blue-500">180%+</h4>
              <p className="text-gray-400 mt-3">Conversion improvement</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10">
              <h4 className="text-4xl font-bold text-blue-500">50+</h4>
              <p className="text-gray-400 mt-3">Startups scaled globally</p>
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Services;

import React, { useState, useEffect } from "react";
import AnimatedSection from "../../components/AnimatedSection";

const caseStudies = [
  {
    title: "E-commerce Brand – USA",
    result: "+312% Organic Traffic",
    desc: "Scaled from 4k to 18k monthly organic visitors within 6 months using technical optimization and authority backlinks.",
  },
  {
    title: "Local Service Business",
    result: "4X Lead Growth",
    desc: "Dominated local search results and ranked in top 3 positions for high-intent keywords.",
  },
  {
    title: "SaaS Startup",
    result: "+220% Keyword Rankings",
    desc: "Built topical authority and achieved first-page rankings for competitive SaaS terms.",
  },
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO typically takes 3-6 months to see measurable improvements, depending on competition and industry.",
  },
  {
    q: "Do you provide monthly reports?",
    a: "Yes, we provide transparent KPI reports covering rankings, traffic, and performance improvements.",
  },
  {
    q: "Do you offer Local SEO?",
    a: "Absolutely. We optimize Google Business Profile, citations, and local ranking signals.",
  },
];

function SEO() {
  const [current, setCurrent] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [count, setCount] = useState(0);

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % caseStudies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* Animated Counter */
  useEffect(() => {
    let start = 0;
    const end = 320;
    if (start === end) return;

    let duration = 2000;
    let incrementTime = 20;
    let step = Math.ceil(end / (duration / incrementTime));

    let timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0b0f1a] text-white relative">

      {/* ================= HERO ================= */}
      <section className="py-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          SEO Services in USA
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}That Drive Real Growth
          </span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg">
          Our data-driven Search Engine Optimization strategies increase visibility,
          attract qualified traffic, and generate sustainable revenue growth.
        </p>

        <button className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium">
          Get Free SEO Audit →
        </button>
      </section>

      {/* ================= COUNTERS ================= */}
      <AnimatedSection>
        <section className="py-20 bg-white/5 text-center">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                +{count}%
              </h3>
              <p className="text-gray-400 mt-3">Average Traffic Growth</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                4X
              </h3>
              <p className="text-gray-400 mt-3">Lead Increase</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                94%
              </h3>
              <p className="text-gray-400 mt-3">Search Starts With Google</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ================= CASE STUDY SLIDER ================= */}
      <AnimatedSection>
        <section className="py-24 px-6 text-center">
          <h2 className="text-4xl font-semibold mb-12">
            SEO Case Studies
          </h2>

          <div className="max-w-3xl mx-auto bg-white/5 p-10 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold text-blue-400">
              {caseStudies[current].title}
            </h3>

            <p className="text-3xl font-bold mt-4">
              {caseStudies[current].result}
            </p>

            <p className="text-gray-400 mt-6">
              {caseStudies[current].desc}
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-blue-500" : "bg-gray-600"
                }`}
              ></button>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ================= FAQ ================= */}
      <AnimatedSection>
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 py-6 cursor-pointer"
              onClick={() =>
                setOpenFAQ(openFAQ === index ? null : index)
              }
            >
              <h3 className="text-xl font-medium">
                {faq.q}
              </h3>
              {openFAQ === index && (
                <p className="text-gray-400 mt-4">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </section>
      </AnimatedSection>

      {/* ================= CONTACT FORM ================= */}
      <AnimatedSection>
        <section className="py-24 bg-[#111827] px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8">
              Start Your SEO Growth Journey
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
              />
              <input
                type="text"
                placeholder="Your Website"
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
              />
              <textarea
                placeholder="Tell us about your business"
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10"
                rows="4"
              ></textarea>

              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
                Submit →
              </button>
            </form>
          </div>
        </section>
      </AnimatedSection>

      {/* ================= STICKY CTA ================= */}
      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-center py-4">
        <p className="font-medium">
          Ready to rank higher? Call Now: 9999999999
        </p>
      </div>

    </div>
  );
}

export default SEO;

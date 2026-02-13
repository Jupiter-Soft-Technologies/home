import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO typically takes 3–6 months to show measurable improvements depending on competition, industry, and website health. However, technical optimizations can show early gains within weeks.",
  },
  {
    q: "What is the difference between SEO and PPC?",
    a: "SEO focuses on organic search rankings and long-term traffic growth, while PPC (Pay-Per-Click) delivers immediate traffic through paid advertisements like Google Ads and social media ads.",
  },
  {
    q: "Do you provide website and application development?",
    a: "Yes. We design and develop high-performance websites and scalable web/mobile applications optimized for SEO, speed, and user experience.",
  },
  {
    q: "How do you measure marketing performance?",
    a: "We use tools like Google Analytics, Search Console, heatmaps, and conversion tracking dashboards to measure traffic, engagement, ROI, and campaign effectiveness.",
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: "Absolutely. We provide continuous monitoring, optimization, reporting, and technical maintenance to ensure long-term business growth.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <AnimatedSection>
      <section className="py-24 bg-[#0B0F19] text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto px-6 space-y-6 text-left">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;

            return (
              <div
                key={idx}
                className="border border-gray-800 rounded-xl bg-[#121826] transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.q}
                  </h3>

                  <span className="text-orange-400">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {/* Answer with Smooth Fold Animation */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default FAQ;

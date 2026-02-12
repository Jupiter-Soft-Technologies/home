import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* -----------------------------
   SERVICE DATA
----------------------------- */

const serviceContent = {
  seo: {
    title: "SEO Optimization",
    heroDesc:
      "Rank higher, increase visibility, and generate consistent organic traffic with advanced SEO strategies.",
    accent: "blue",
  },
  "paid-ads": {
    title: "Paid Advertising",
    heroDesc:
      "High-converting Google & Meta campaigns built for measurable ROI and scalable growth.",
    accent: "purple",
  },
  "social-media": {
    title: "Social Media Marketing",
    heroDesc:
      "Build brand authority and generate qualified leads through data-driven campaigns.",
    accent: "teal",
  },
  "web-development": {
    title: "Web Development",
    heroDesc:
      "Modern, fast, conversion-focused websites engineered for growth.",
    accent: "green",
  },
};

/* -----------------------------
   ACCENT COLORS
----------------------------- */

const accentMap = {
  blue: "text-blue-500",
  purple: "text-purple-500",
  teal: "text-teal-400",
  green: "text-green-500",
};

const accentBgMap = {
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  teal: "bg-teal-400",
  green: "bg-green-500",
};

/* -----------------------------
   COMPONENT
----------------------------- */

function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceContent[slug];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const caseStudies = [
    {
      title: "E-commerce Brand",
      result: "Increased revenue by 210% in 6 months",
    },
    {
      title: "Local Service Business",
      result: "Generated 350+ qualified leads",
    },
    {
      title: "SaaS Startup",
      result: "Reduced CPA by 48%",
    },
  ];

  const testimonials = [
    {
      name: "John Carter",
      text: "Their strategy completely transformed our online presence.",
    },
    {
      name: "Sarah Williams",
      text: "ROI improved within the first 60 days. Highly recommend.",
    },
    {
      name: "Michael Lee",
      text: "Professional team with measurable results.",
    },
  ];

  const faqs = [
    {
      question: "How long before we see results?",
      answer:
        "Most campaigns start generating measurable improvements within 30–60 days depending on the service.",
    },
    {
      question: "Do you provide reports?",
      answer:
        "Yes. We provide transparent performance reports with clear KPIs and ROI tracking.",
    },
    {
      question: "Is there a contract?",
      answer:
        "We offer flexible plans. Long-term strategies deliver better growth.",
    },
  ];

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === caseStudies.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!service) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Service Not Found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="py-32 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          {service.title}
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          {service.heroDesc}
        </p>

        <button className="mt-10 px-8 py-4 bg-white text-black rounded-lg font-semibold hover:scale-105 transition">
          Book Strategy Call →
        </button>
      </section>

      {/* CASE STUDY SLIDER */}
      <section className="py-24 border-t border-white/10 text-center">
        <h2 className="text-4xl font-semibold mb-16">Case Studies</h2>

        <div className="max-w-3xl mx-auto p-10 bg-white/5 rounded-xl border border-white/10 transition">
          <h3 className="text-2xl font-semibold">
            {caseStudies[currentSlide].title}
          </h3>
          <p
            className={`mt-6 text-xl ${accentMap[service.accent]}`}
          >
            {caseStudies[currentSlide].result}
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-t border-white/10 px-6">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              <p className="text-gray-300">“{t.text}”</p>
              <h4 className="mt-6 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 border-t border-white/10 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-16">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Starter", "Growth", "Pro"].map((plan, i) => (
            <div
              key={i}
              className="p-10 bg-white/5 rounded-xl border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold">{plan}</h3>
              <p
                className={`text-4xl font-bold mt-6 ${accentMap[service.accent]}`}
              >
                ${i === 0 ? "499" : i === 1 ? "999" : "1999"}
              </p>
              <p className="text-gray-400 mt-4">
                Monthly Plan
              </p>

              <button
                className={`mt-8 px-6 py-3 rounded-lg text-black font-semibold ${accentBgMap[service.accent]}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/10 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="mb-6 border-b border-white/10 pb-6"
          >
            <button
              onClick={() =>
                setOpenFAQ(openFAQ === i ? null : i)
              }
              className="w-full text-left text-lg font-medium"
            >
              {faq.question}
            </button>

            {openFAQ === i && (
              <p className="mt-4 text-gray-400">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-gray-900 to-black">
        <h2 className="text-4xl font-semibold">
          Ready to Scale?
        </h2>
        <p className="text-gray-400 mt-6">
          Let’s create a strategy tailored to your goals.
        </p>

        <button className="mt-8 px-8 py-4 bg-white text-black rounded-lg font-medium hover:scale-105 transition">
          Start Now →
        </button>
      </section>

    </div>
  );
}

export default ServiceDetail;
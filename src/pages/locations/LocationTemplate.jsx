import React from "react";
import { useNavigate } from "react-router-dom";

const LocationTemplate = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="px-6 md:px-16 py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {data.heroTitle}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mb-8">
            {data.heroDesc}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Get Free Audit
            </button>
            <button
              onClick={() => navigate("/services/seo")}
              className="border border-gray-600 hover:border-purple-500 px-6 py-3 rounded-lg transition"
            >
              View SEO Services
            </button>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              {data.introTitle}
            </h2>
            <p className="text-gray-400 mb-4">
              {data.introDesc1}
            </p>
            <p className="text-gray-400">
              {data.introDesc2}
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <ul className="space-y-4 text-gray-300">
              {data.benefits.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            {data.servicesTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.services.map((service, i) => (
              <div
                key={i}
                className="p-6 border border-gray-800 rounded-xl hover:border-purple-500 transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              {data.whyTitle}
            </h2>
            <ul className="space-y-4 text-gray-400">
              {data.whyPoints.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">
              {data.resultsTitle}
            </h3>
            <ul className="space-y-3 text-gray-400">
              {data.results.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-16 py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            {data.processTitle}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {data.process.map((step, i) => (
              <div
                key={i}
                className="p-6 border border-gray-800 rounded-xl text-center hover:border-purple-500 transition"
              >
                <div className="text-2xl font-bold text-purple-500 mb-2">
                  {`0${i + 1}`}
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {data.ctaTitle}
        </h2>
        <p className="text-gray-400 mb-8">
          {data.ctaDesc}
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition"
        >
          Get Started Today
        </button>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            FAQs
          </h2>

          <div className="space-y-6">
            {data.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LocationTemplate;
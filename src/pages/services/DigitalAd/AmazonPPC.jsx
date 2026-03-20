import { useEffect } from "react";

export default function AmazonPPC() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 text-center">

        {/* background shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Amazon PPC
          <span className="text-blue-500"> Advertising Services</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Boost your product visibility and sales on Amazon with high-performing PPC campaigns. 
          We optimize your ads to maximize ROI, reduce ACOS, and scale your eCommerce business.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Get Free Audit
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            View Services
          </button>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Why Amazon PPC?
          </h2>
          <p className="text-gray-400">
            Amazon PPC is one of the most effective ways to increase product visibility 
            and drive sales directly on the marketplace. With the right strategy, 
            you can dominate search rankings and outperform competitors.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ High buyer intent audience</li>
            <li>✔ Increased product visibility</li>
            <li>✔ Immediate sales impact</li>
            <li>✔ Scalable advertising model</li>
            <li>✔ Data-driven performance insights</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-10 rounded-3xl border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4">
            What We Handle
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>• Keyword Research & Targeting</li>
            <li>• Campaign Setup (Sponsored Ads)</li>
            <li>• Bid Optimization</li>
            <li>• Competitor Analysis</li>
            <li>• ACOS Optimization</li>
          </ul>
        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Amazon PPC Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Sponsored Products Ads",
              desc: "Promote individual products to increase visibility and sales."
            },
            {
              title: "Sponsored Brands",
              desc: "Showcase your brand and multiple products in search results."
            },
            {
              title: "Sponsored Display Ads",
              desc: "Retarget customers and expand your reach beyond search."
            },
            {
              title: "Keyword Targeting",
              desc: "Target high-converting keywords to maximize sales."
            },
            {
              title: "Competitor Targeting",
              desc: "Show your ads on competitor product pages."
            },
            {
              title: "Retargeting Campaigns",
              desc: "Bring back potential buyers who didn’t convert."
            }
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-gray-800 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}

        </div>
      </section>


      {/* ================= BENEFITS ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Our Amazon PPC Works
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            "Data-driven campaign strategies",
            "Advanced keyword targeting",
            "Continuous bid optimization",
            "ACOS reduction strategies",
            "A/B testing for better performance",
            "ROI-focused scaling approach"
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-gray-800"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
                ✓
              </div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}

        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="py-24 px-6 bg-gray-900">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Process
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

          {[
            "Product Analysis",
            "Keyword Research",
            "Campaign Setup",
            "Ad Creation",
            "Launch",
            "Optimization",
            "Scaling",
            "Reporting"
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-black rounded-2xl border border-gray-800 text-center hover:border-blue-500 transition"
            >
              <h3 className="text-lg font-semibold text-blue-400">
                {step}
              </h3>
            </div>
          ))}

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center relative">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl"></div>

        <h2 className="text-4xl font-bold mb-6">
          Ready to Scale Your Amazon Sales?
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build high-performing Amazon PPC campaigns that drive real revenue and growth.
        </p>

        <button className="bg-blue-500 px-8 py-4 rounded-lg text-lg hover:bg-blue-600 transition">
          Book Free Consultation
        </button>
      </section>

    </div>
  );
}
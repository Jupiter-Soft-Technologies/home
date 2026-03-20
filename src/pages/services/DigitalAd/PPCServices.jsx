import { useEffect } from "react";

export default function PPCServices() {

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
          Pay Per Click
          <span className="text-blue-500"> Advertising</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Get instant traffic, leads, and conversions with data-driven PPC campaigns 
          designed to maximize ROI and scale your business fast.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Get Free Audit
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            View Plans
          </button>
        </div>
      </section>


      {/* ================= WHAT IS PPC ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            What is PPC?
          </h2>
          <p className="text-gray-400">
            Pay-Per-Click (PPC) is a digital advertising model where you pay only when someone clicks your ad.
            It helps businesses generate instant visibility and targeted traffic instead of waiting for organic growth.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ Highly targeted traffic</li>
            <li>✔ Immediate results</li>
            <li>✔ Real-time tracking</li>
            <li>✔ Brand awareness</li>
            <li>✔ Remarketing capabilities</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-10 rounded-3xl border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4">How PPC Works</h3>
          <ul className="space-y-3 text-gray-300">
            <li>• Keyword Research</li>
            <li>• Ad Creation & Targeting</li>
            <li>• Bid Management</li>
            <li>• Performance Tracking</li>
            <li>• Continuous Optimization</li>
          </ul>
        </div>

      </section>


      {/* ================= BENEFITS ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">

        <h2 className="text-4xl font-bold text-center mb-16">
          How PPC Boosts Your ROI
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Strategic Targeting",
              desc: "Reach the right audience based on behavior, location, and interests."
            },
            {
              title: "Instant Visibility",
              desc: "Appear on top of search engines & social platforms instantly."
            },
            {
              title: "Budget Control",
              desc: "Full control over how much you spend and where."
            },
            {
              title: "Performance Optimization",
              desc: "Optimize campaigns based on real-time analytics."
            },
            {
              title: "Geo Targeting",
              desc: "Run ads in specific locations for higher conversions."
            },
            {
              title: "Sales Funnel Alignment",
              desc: "Target users at every stage of the buying journey."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-gray-800 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            "Affordable PPC Solutions",
            "Customized Campaigns",
            "Clear Communication",
            "Data-Driven Approach",
            "Proven Track Record",
            "Focus on ROI"
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
          Our PPC Process
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

          {[
            "PPC Audit",
            "Market Research",
            "Keyword Research",
            "Strategy Execution",
            "Campaign Creation",
            "A/B Testing",
            "Goal Tracking",
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
          Ready to Scale with PPC?
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s create high-converting ad campaigns that drive real revenue.
        </p>

        <button className="bg-blue-500 px-8 py-4 rounded-lg text-lg hover:bg-blue-600 transition">
          Book Free Consultation
        </button>
      </section>

    </div>
  );
}
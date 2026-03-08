import { Link } from "react-router-dom";

export default function PPC() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="py-32 text-center px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Paid Advertising
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          High-performance paid advertising campaigns designed to generate
          predictable leads, lower acquisition costs, and scale profitable
          growth across Google, Meta, LinkedIn, and Amazon.
        </p>

      </section>


      {/* PPC TYPES */}

      <section className="py-24 border-t border-white/10 px-6">

        <h2 className="text-4xl font-semibold text-center mb-16">
          PPC Advertising Services
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* STANDARD PPC */}

          <div className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">

            <h3 className="text-3xl font-semibold text-purple-400">
              Standard PPC Advertising
            </h3>

            <p className="text-gray-400 mt-6">
              Our standard PPC management focuses on Google Ads, Meta Ads
              and LinkedIn campaigns to drive qualified traffic and maximize
              ROI with data-driven targeting and optimization.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✓ Google Ads search campaigns</li>
              <li>✓ Meta (Facebook & Instagram) ads</li>
              <li>✓ LinkedIn lead generation ads</li>
              <li>✓ Conversion tracking & analytics</li>
              <li>✓ Continuous optimization</li>
            </ul>

            <Link
              to="/ppc-pricing"
              className="inline-block mt-10 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
            >
              View PPC Pricing →
            </Link>

          </div>


          {/* AMAZON PPC */}

          <div className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">

            <h3 className="text-3xl font-semibold text-orange-400">
              Amazon PPC Advertising
            </h3>

            <p className="text-gray-400 mt-6">
              Amazon PPC campaigns designed to increase product visibility,
              improve keyword rankings, and maximize profitable sales while
              lowering ACOS.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✓ Sponsored product campaigns</li>
              <li>✓ Sponsored brand ads</li>
              <li>✓ Keyword mining & optimization</li>
              <li>✓ ACOS & bid optimization</li>
              <li>✓ Sales growth strategy</li>
            </ul>

            <Link
              to="/amazon-ppc-pricing"
              className="inline-block mt-10 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
            >
              View Amazon PPC Pricing →
            </Link>

          </div>

        </div>

      </section>


      {/* PPC PLATFORMS */}

      <section className="py-24 border-t border-white/10 text-center">

        <h2 className="text-4xl font-semibold mb-16">
          Advertising Platforms We Manage
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">

          {[
            "Google Ads",
            "Meta Ads",
            "LinkedIn Ads",
            "Amazon Ads"
          ].map((platform, i) => (

            <div
              key={i}
              className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">
                {platform}
              </h3>
            </div>

          ))}

        </div>

      </section>


      {/* PPC PROCESS */}

      <section className="py-24 border-t border-white/10 text-center px-6">

        <h2 className="text-4xl font-semibold mb-16">
          Our PPC Campaign Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {[
            "Market & competitor research",
            "Campaign structure setup",
            "Ad creative testing",
            "Optimization & scaling"
          ].map((step, i) => (

            <div
              key={i}
              className="p-8 bg-white/5 border border-white/10 rounded-xl"
            >
              <h3 className="text-purple-400 font-semibold">
                Step {i + 1}
              </h3>

              <p className="text-gray-400 mt-3">
                {step}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* PERFORMANCE METRICS */}

      <section className="py-24 border-t border-white/10 text-center">

        <h2 className="text-4xl font-semibold mb-16">
          Campaign Performance Metrics
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          {[
            { value: "4.2x", label: "Average ROAS" },
            { value: "48%", label: "CPA Reduction" },
            { value: "320%", label: "Lead Growth" },
          ].map((metric, i) => (

            <div
              key={i}
              className="p-10 bg-white/5 border border-white/10 rounded-xl"
            >
              <h3 className="text-4xl font-bold text-purple-500">
                {metric.value}
              </h3>

              <p className="text-gray-400 mt-4">
                {metric.label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="py-24 text-center bg-gradient-to-r from-gray-900 to-black">

        <h2 className="text-4xl font-semibold">
          Ready to scale your paid advertising?
        </h2>

        <p className="text-gray-400 mt-6">
          Let our PPC specialists build a high-performing campaign strategy.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 px-10 py-4 bg-white text-black rounded-lg font-semibold hover:scale-105 transition"
        >
          Book Free PPC Strategy →
        </Link>

      </section>

    </div>
  );
}
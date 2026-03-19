import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Audit() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>Digital Marketing Audit Services | Jupiter Soft Technologies</title>
        <meta
          name="description"
          content="Get a complete digital marketing audit to identify gaps, improve ROI, and scale your business with data-driven insights and optimization strategies."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-40 pb-28 bg-gradient-to-br from-blue-50 via-slate-100 to-orange-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900"
          >
            Digital Marketing Audit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover what’s working, what’s not, and where you’re losing money. Our comprehensive audit uncovers hidden opportunities to maximize your marketing performance.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition"
          >
            Get Free Audit
          </motion.button>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Your Marketing Isn’t Delivering Results
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Many businesses invest heavily in digital marketing but fail to see results due to hidden inefficiencies, poor targeting, or technical issues.
            </p>
            <p className="mt-4 text-gray-600">
              Without a proper audit, these issues go unnoticed, leading to wasted budget and missed growth opportunities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-10 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">Common Issues:</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Poor campaign performance</li>
              <li>• Low website conversion rates</li>
              <li>• SEO technical errors</li>
              <li>• Ineffective targeting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AUDIT AREAS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What We Audit
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              {
                title: "SEO Audit",
                desc: "Technical, on-page, and off-page analysis for better rankings."
              },
              {
                title: "Paid Ads Audit",
                desc: "Evaluate ad performance, targeting, and ROI optimization."
              },
              {
                title: "Website Audit",
                desc: "UX, speed, and conversion optimization analysis."
              },
              {
                title: "Content Audit",
                desc: "Content performance and engagement evaluation."
              },
              {
                title: "Analytics Review",
                desc: "Tracking setup and data accuracy validation."
              },
              {
                title: "Funnel Analysis",
                desc: "Identify drop-offs and improve conversion flow."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 bg-white rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-3 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Audit Process</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {[
              ["01", "Data Collection"],
              ["02", "Analysis"],
              ["03", "Insights"],
              ["04", "Recommendations"]
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-blue-600">
                  {item[0]}
                </div>
                <h3 className="mt-3 font-semibold">{item[1]}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            What You Gain From Our Audit
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              "Identify growth opportunities",
              "Reduce wasted ad spend",
              "Improve conversion rates",
              "Fix technical SEO issues",
              "Better data tracking",
              "Clear action plan"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready To Improve Your Marketing Performance?
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Get a detailed audit report with actionable insights to boost your ROI and scale your business faster.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:scale-105 transition"
          >
            Request Free Audit
          </button>
        </div>
      </section>
    </div>
  );
}

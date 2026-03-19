import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ReputationManagement() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>Online Reputation Management Services | Jupiter Soft Technologies</title>
        <meta
          name="description"
          content="Protect and enhance your brand image with our online reputation management services. We help you build trust, remove negative impressions, and grow credibility."
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
            Online Reputation Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Build trust, eliminate negative impressions, and strengthen your brand presence with our strategic reputation management solutions.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition"
          >
            Protect Your Brand
          </motion.button>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Reputation Matters More Than Ever
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              A single negative review or search result can damage your brand credibility and impact customer decisions.
            </p>
            <p className="mt-4 text-gray-600">
              Without proactive reputation management, businesses lose trust, conversions, and long-term growth opportunities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-10 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">Common Issues:</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Negative online reviews</li>
              <li>• Poor brand perception</li>
              <li>• Low trust signals</li>
              <li>• Bad search results</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Reputation Management Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              { title: "Review Management", desc: "Monitor and respond to customer reviews effectively." },
              { title: "Brand Monitoring", desc: "Track mentions and sentiment across platforms." },
              { title: "Negative Content Suppression", desc: "Push down harmful content in search results." },
              { title: "Positive PR Campaigns", desc: "Build strong brand image with positive content." },
              { title: "Crisis Management", desc: "Handle brand crises with strategic communication." },
              { title: "Reputation Repair", desc: "Restore trust and rebuild your online image." }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="p-8 bg-white rounded-xl shadow-md">
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
          <h2 className="text-3xl font-bold">Our Reputation Management Process</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {[
              ["01", "Audit"],
              ["02", "Strategy"],
              ["03", "Implementation"],
              ["04", "Monitoring"]
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-blue-600">{item[0]}</div>
                <h3 className="mt-3 font-semibold">{item[1]}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Benefits of Reputation Management</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              "Build customer trust",
              "Improve brand image",
              "Increase conversions",
              "Enhance search presence",
              "Manage customer feedback",
              "Long-term brand growth"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">Ready To Build a Strong Brand Reputation?</h2>

          <p className="mt-6 text-lg opacity-90">
            Let us help you take control of your online presence and turn your reputation into a powerful growth asset.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:scale-105 transition"
          >
            Improve Your Reputation
          </button>
        </div>
      </section>
    </div>
  );
}
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function EmailMarketing() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>Email Marketing Services | Jupiter Soft Technologies</title>
        <meta
          name="description"
          content="Drive conversions with powerful email marketing strategies including automation, funnels, and personalized campaigns that turn leads into loyal customers."
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
            Email Marketing Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Turn leads into loyal customers with high-converting email campaigns, automation funnels, and personalized communication strategies.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition"
          >
            Get Email Strategy
          </motion.button>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Email Marketing Fails
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Many businesses send random emails without segmentation or strategy, resulting in low open rates and poor conversions.
            </p>
            <p className="mt-4 text-gray-600">
              Without automation and personalization, email marketing becomes ineffective instead of a powerful revenue channel.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-10 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">Common Issues:</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Low open rates</li>
              <li>• Poor click-through rates</li>
              <li>• No automation funnels</li>
              <li>• Weak email copy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Email Marketing Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              { title: "Email Automation", desc: "Automated workflows that nurture and convert leads." },
              { title: "Campaign Management", desc: "Strategic campaigns for promotions and engagement." },
              { title: "List Segmentation", desc: "Target the right audience with precision." },
              { title: "Copywriting", desc: "High-converting email copy that drives action." },
              { title: "A/B Testing", desc: "Optimize performance with data-driven testing." },
              { title: "Analytics & Reporting", desc: "Track performance and improve ROI." }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="p-8 bg-white rounded-xl shadow-md">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-3 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNNEL */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Email Funnel Strategy</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {[
              ["01", "Lead Capture"],
              ["02", "Nurturing"],
              ["03", "Conversion"],
              ["04", "Retention"]
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
          <h2 className="text-3xl font-bold text-center">Benefits of Email Marketing</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              "High ROI marketing channel",
              "Direct customer communication",
              "Improved customer retention",
              "Increased conversions",
              "Personalized marketing",
              "Scalable automation"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">Ready To Boost Your Email Revenue?</h2>

          <p className="mt-6 text-lg opacity-90">
            Let us build high-performing email campaigns and automation systems that generate consistent revenue for your business.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:scale-105 transition"
          >
            Start Email Marketing
          </button>
        </div>
      </section>
    </div>
  );
}

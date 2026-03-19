import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Strategy() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>Digital Marketing Strategy Services | Jupiter Soft Technologies</title>
        <meta
          name="description"
          content="Build a data-driven digital marketing strategy to scale your business. We create customized growth systems that drive traffic, leads, and revenue."
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
            Digital Marketing Strategy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We design powerful, data-driven marketing strategies that align with your business goals, ensuring predictable growth, higher ROI, and long-term scalability.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition"
          >
            Get Free Strategy Call
          </motion.button>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Most Businesses Fail in Digital Marketing
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Most businesses jump into SEO, ads, or social media without a clear strategy. This leads to wasted budget, inconsistent results, and no scalable growth system.
            </p>
            <p className="mt-4 text-gray-600">
              Without a structured roadmap, even the best tools and platforms fail to deliver real results.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-10 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">Common Problems:</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• No clear marketing direction</li>
              <li>• Low ROI on ads</li>
              <li>• Poor lead conversion</li>
              <li>• Inconsistent growth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Strategy-First Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              {
                title: "Market Research",
                desc: "Deep analysis of your market, competitors, and audience."
              },
              {
                title: "Channel Planning",
                desc: "Selecting the right platforms for maximum ROI."
              },
              {
                title: "Growth Roadmap",
                desc: "Step-by-step execution plan for scalable growth."
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
          <h2 className="text-3xl font-bold">Our Strategy Process</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {[
              ["01", "Research"],
              ["02", "Planning"],
              ["03", "Execution"],
              ["04", "Optimization"]
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
            What You Get
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              "Clear growth roadmap",
              "Better ROI on marketing spend",
              "Consistent lead generation",
              "Stronger brand positioning",
              "Data-driven decisions",
              "Scalable business growth"
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
            Ready To Build Your Growth Strategy?
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Let our experts create a customized digital marketing strategy that drives real business results.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:scale-105 transition"
          >
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
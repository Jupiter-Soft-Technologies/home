import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContentMarketing() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>Content Marketing Services | Jupiter Soft Technologies</title>
        <meta
          name="description"
          content="Boost your brand authority and organic traffic with powerful content marketing strategies including blogs, SEO content, and conversion-driven storytelling."
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
            Content Marketing Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We create high-quality, SEO-driven content that attracts, engages, and converts your audience into loyal customers while building long-term brand authority.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition"
          >
            Get Content Strategy
          </motion.button>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Most Content Fails
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Many businesses create content without a clear strategy, resulting in low traffic, poor engagement, and no conversions.
            </p>
            <p className="mt-4 text-gray-600">
              Without SEO optimization and audience targeting, content becomes just noise instead of a growth engine.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-10 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">Common Challenges:</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Low organic traffic</li>
              <li>• Poor engagement rates</li>
              <li>• No lead generation</li>
              <li>• Inconsistent publishing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Content Marketing Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              {
                title: "SEO Blog Writing",
                desc: "High-ranking blog content optimized for search engines."
              },
              {
                title: "Website Content",
                desc: "Conversion-focused website copy that drives action."
              },
              {
                title: "Content Strategy",
                desc: "Data-driven planning aligned with business goals."
              },
              {
                title: "Copywriting",
                desc: "Persuasive content designed to increase conversions."
              },
              {
                title: "Content Distribution",
                desc: "Amplify reach through multiple channels."
              },
              {
                title: "Content Optimization",
                desc: "Improve performance of existing content."
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
          <h2 className="text-3xl font-bold">Our Content Process</h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {[
              ["01", "Research"],
              ["02", "Planning"],
              ["03", "Creation"],
              ["04", "Distribution"]
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
            Benefits of Content Marketing
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              "Increase organic traffic",
              "Build brand authority",
              "Generate quality leads",
              "Improve SEO rankings",
              "Engage your audience",
              "Drive long-term growth"
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
            Ready To Grow With Content?
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Let us build a powerful content marketing engine that drives consistent traffic, leads, and revenue.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:scale-105 transition"
          >
            Start Content Marketing
          </button>
        </div>
      </section>
    </div>
  );
}

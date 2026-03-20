import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SocialMediaManagement() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="bg-black text-white relative overflow-hidden">

      {/* 🌈 ANIMATED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 animate-pulse"></div>

      {/* 🌀 FLOATING BLOBS */}
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-[200px] right-[-150px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{ y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[160px] rounded-full"
      />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 🔥 STICKY CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 rounded-full shadow-2xl"
        >
          Get Free Strategy
        </motion.button>
      </div>

      {/* HERO */}
      <section className="py-40 text-center px-6 relative z-10">
        <motion.h1 
          initial="hidden" animate="show" variants={fadeUp}
          className="text-6xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Social Media
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Management Services
          </span>
        </motion.h1>

        <motion.p 
          initial="hidden" animate="show" variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg"
        >
          We create, manage, and grow your social media presence with strategic content,
          audience engagement, and data-driven performance tracking.
        </motion.p>

        <motion.button
          initial="hidden" animate="show" variants={fadeUp}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          className="mt-10 px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-xl"
        >
          Get Free Consultation
        </motion.button>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

          {[
            ["5000+", "Clients Served"],
            ["40+", "Industries"],
            ["93%", "Retention Rate"],
            ["3+ Years", "Avg Client Duration"]
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-6 text-center rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-blue-400">{item[0]}</h2>
              <p className="text-gray-400 mt-2">{item[1]}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 px-6 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Why Social Media Management is Important
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "Brand Visibility",
            "Higher Engagement",
            "Customer Loyalty",
            "Website Traffic",
            "Lead Generation",
            "Better ROI"
          ].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07, rotate: 1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-blue-500 transition shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-400 text-sm">
                Boost your business with strong social media execution.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Our Social Media Management Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "Content Creation",
            "Community Management",
            "Analytics & Reporting",
            "Paid Advertising",
            "Reputation Management",
            "Strategy Planning"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.05 }}
              className="p-6 rounded-2xl border border-gray-800 bg-black/60 backdrop-blur-2xl hover:border-blue-500 transition shadow-lg"
            >
              {item}
            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6 relative z-10">

        <motion.h2 
          initial="hidden" whileInView="show" variants={fadeUp}
          className="text-4xl font-bold"
        >
          Ready to Grow Your Social Presence?
        </motion.h2>

        <motion.p 
          initial="hidden" whileInView="show" variants={fadeUp}
          className="text-gray-400 mt-4 text-lg"
        >
          Let us manage your social media while you focus on your business.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-2xl"
        >
          Contact Us
        </motion.button>

      </section>

    </div>
  );
}
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SocialMediaAdvertising() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-black text-white relative overflow-hidden">

      {/* 🌈 ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 animate-pulse"></div>

      {/* 🌀 FLOATING BLOBS */}
      <motion.div animate={{ y: [0, 50, 0] }} transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />

      <motion.div animate={{ y: [0, -60, 0] }} transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-[200px] right-[-150px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* CTA FLOAT
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 rounded-full shadow-2xl">
          Run Ads Now
        </motion.button>
      </div> */}

      {/* HERO */}
      <section className="py-40 text-center px-6 relative z-10">
        <motion.h1 initial="hidden" animate="show" variants={fadeUp}
          className="text-6xl font-bold leading-tight">

          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Social Media
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Advertising Services
          </span>
        </motion.h1>

        <motion.p initial="hidden" animate="show" variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">

          We create high-converting paid campaigns on Facebook, Instagram, LinkedIn,
          and more to drive traffic, leads, and sales for your business.
        </motion.p>

        <motion.button whileHover={{ scale: 1.1 }}
          className="mt-10 px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-xl">
          Get Free Ad Strategy
        </motion.button>
      </section>

      {/* WHAT IS */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">

        <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
          <h2 className="text-3xl font-semibold mb-4">
            What is Social Media Advertising?
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Social media advertising is a paid marketing strategy where businesses run
            targeted ads on platforms like Facebook, Instagram, LinkedIn, and YouTube
            to reach specific audiences and generate leads, traffic, and conversions.
          </p>
        </motion.div>

        <motion.ul className="space-y-4 text-gray-400"
          initial="hidden" whileInView="show" variants={fadeUp}>

          <li>✔ Paid campaigns on multiple platforms</li>
          <li>✔ Advanced audience targeting</li>
          <li>✔ Budget optimization</li>
          <li>✔ Conversion tracking</li>
          <li>✔ ROI-focused strategies</li>

        </motion.ul>

      </section>

      {/* BENEFITS */}
      <section className="py-28 px-6 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Benefits of Social Media Advertising
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "Targeted Audience Reach",
            "Cost Effective Marketing",
            "Lead Generation",
            "Increased Website Traffic",
            "Real-Time Analytics",
            "Higher Conversion Rates"
          ].map((title, i) => (
            <motion.div key={i}
              whileHover={{ scale: 1.07 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-blue-500 shadow-xl">

              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-400 text-sm">
                Maximize your ROI with data-driven advertising strategies.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Our Advertising Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "Facebook & Instagram Ads",
            "LinkedIn Ads",
            "YouTube Ads",
            "Remarketing Campaigns",
            "Conversion Ads",
            "Ad Creative Design"
          ].map((item, i) => (
            <motion.div key={i}
              whileHover={{ y: -12 }}
              className="p-6 rounded-2xl border border-gray-800 bg-black/60 backdrop-blur-2xl hover:border-blue-500 shadow-lg">

              {item}
            </motion.div>
          ))}

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-6 bg-gray-900/50 backdrop-blur-xl relative z-10">

        <h2 className="text-3xl font-semibold text-center mb-16">
          Our Advertising Process
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          {[
            ["01", "Audience Research"],
            ["02", "Ad Strategy"],
            ["03", "Campaign Launch"],
            ["04", "Optimization"]
          ].map((step, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <h3 className="text-blue-500 text-xl font-bold">{step[0]}</h3>
              <p className="text-gray-400 mt-2">{step[1]}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* PLATFORMS */}
      <section className="py-28 px-6 max-w-6xl mx-auto relative z-10">

        <h2 className="text-3xl font-semibold text-center mb-16">
          Platforms We Advertise On
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center text-lg text-gray-300">

          {[
            "Facebook Ads",
            "Instagram Ads",
            "LinkedIn Ads",
            "YouTube Ads",
            "Twitter (X) Ads",
            "Pinterest Ads"
          ].map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              {p}
            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6 relative z-10">

        <h2 className="text-4xl font-bold">
          Ready to Scale Your Ads?
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Start running high-performing campaigns that generate real results.
        </p>

        <motion.button whileHover={{ scale: 1.1 }}
          className="mt-8 px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-2xl">
          Contact Us
        </motion.button>

      </section>

    </div>
  );
}
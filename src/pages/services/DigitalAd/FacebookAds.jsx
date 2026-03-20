import { useEffect } from "react";

export default function FacebookAds() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 text-center">

        {/* glowing shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Facebook & Instagram
          <span className="text-blue-500"> Ads Services</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Scale your business with high-converting Facebook & Instagram ad campaigns. 
          We create, optimize, and manage ads that generate real leads and sales.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Get Free Strategy
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            View Pricing
          </button>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Why Facebook Ads?
          </h2>
          <p className="text-gray-400">
            Facebook Ads allow businesses to reach billions of users with precise targeting. 
            From brand awareness to lead generation and sales, it’s one of the most powerful 
            platforms for scalable growth.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ Advanced audience targeting</li>
            <li>✔ Massive reach (Facebook + Instagram)</li>
            <li>✔ Cost-effective campaigns</li>
            <li>✔ Retargeting capabilities</li>
            <li>✔ High ROI potential</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-10 rounded-3xl border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4">
            What We Do
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>• Audience Research</li>
            <li>• Campaign Setup</li>
            <li>• Creative Ad Design</li>
            <li>• Conversion Tracking</li>
            <li>• Daily Optimization</li>
          </ul>
        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Facebook Ads Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Lead Generation Ads",
              desc: "Generate high-quality leads directly from Facebook forms."
            },
            {
              title: "E-commerce Ads",
              desc: "Drive sales with high-converting product ads."
            },
            {
              title: "Retargeting Ads",
              desc: "Re-engage users who visited your website."
            },
            {
              title: "Brand Awareness",
              desc: "Reach a wider audience and build brand recall."
            },
            {
              title: "App Promotion",
              desc: "Drive installs and engagement for your mobile apps."
            },
            {
              title: "Video Ads",
              desc: "Capture attention with engaging video creatives."
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
          Why Our Facebook Ads Work
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            "Laser-focused audience targeting",
            "Creative ad copies & visuals",
            "Data-driven optimization",
            "Conversion tracking setup",
            "Continuous A/B testing",
            "ROI-focused strategy"
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
            "Research",
            "Strategy",
            "Ad Creation",
            "Launch",
            "Optimization",
            "Scaling",
            "Testing",
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


      {/* ================= PRICING ================= */}
      <section className="py-24 px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Facebook Ads Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            { name: "Starter", price: "$250" },
            { name: "Growth", price: "$450" },
            { name: "Scale", price: "$750" }
          ].map((plan, i) => (
            <div
              key={i}
              className="bg-white/5 p-8 rounded-2xl border border-gray-800 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {plan.name}
              </h3>

              <p className="text-4xl font-bold text-blue-500 mb-4">
                {plan.price}
              </p>

              <ul className="text-gray-400 space-y-2 mb-6">
                <li>✔ Campaign Setup</li>
                <li>✔ Audience Targeting</li>
                <li>✔ Monthly Optimization</li>
                <li>✔ Performance Reports</li>
              </ul>

              <button className="w-full bg-blue-500 py-3 rounded-lg hover:bg-blue-600 transition">
                Get Started
              </button>
            </div>
          ))}

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center relative">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl"></div>

        <h2 className="text-4xl font-bold mb-6">
          Ready to Scale Your Ads?
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build high-performing Facebook campaigns that generate real revenue.
        </p>

        <button className="bg-blue-500 px-8 py-4 rounded-lg text-lg hover:bg-blue-600 transition">
          Book Free Consultation
        </button>
      </section>

    </div>
  );
}
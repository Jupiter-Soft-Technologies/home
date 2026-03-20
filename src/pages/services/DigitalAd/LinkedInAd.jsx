import { useEffect } from "react";

export default function LinkedInAds() {

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
          LinkedIn Ads
          <span className="text-blue-500"> for B2B Growth</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Generate high-quality B2B leads with LinkedIn advertising. 
          We create precision-targeted campaigns that connect you with decision-makers 
          and drive real business growth.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Get Free Strategy
          </button>
          <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            View Services
          </button>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Why LinkedIn Ads?
          </h2>
          <p className="text-gray-400">
            LinkedIn is the most powerful platform for B2B marketing. It allows businesses 
            to target professionals based on job title, industry, company size, and more—making 
            it ideal for generating high-quality leads and closing bigger deals.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ Target decision-makers directly</li>
            <li>✔ Ideal for B2B lead generation</li>
            <li>✔ Advanced professional targeting</li>
            <li>✔ High-quality leads</li>
            <li>✔ Strong ROI for high-ticket services</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-10 rounded-3xl border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4">
            What We Handle
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>• Audience & Industry Research</li>
            <li>• Campaign Strategy</li>
            <li>• Ad Copy & Creative Design</li>
            <li>• Lead Form Setup</li>
            <li>• Conversion Tracking</li>
          </ul>
        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our LinkedIn Advertising Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Lead Generation Ads",
              desc: "Capture high-quality B2B leads directly from LinkedIn forms."
            },
            {
              title: "Sponsored Content",
              desc: "Promote your content to targeted professionals."
            },
            {
              title: "Message Ads",
              desc: "Reach users directly in their LinkedIn inbox."
            },
            {
              title: "Dynamic Ads",
              desc: "Personalized ads based on user profile data."
            },
            {
              title: "Brand Awareness Campaigns",
              desc: "Increase visibility among your target audience."
            },
            {
              title: "Account-Based Marketing",
              desc: "Target specific companies and decision-makers."
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
          Why Our LinkedIn Ads Work
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            "Precision B2B targeting",
            "High-converting ad creatives",
            "Data-driven campaign optimization",
            "Advanced lead tracking setup",
            "A/B testing for performance",
            "ROI-focused B2B strategy"
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
            "Market Research",
            "Audience Targeting",
            "Campaign Setup",
            "Ad Creation",
            "Launch",
            "Optimization",
            "Scaling",
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
          Ready to Generate B2B Leads?
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build LinkedIn campaigns that connect you with decision-makers and drive real growth.
        </p>

        <button className="bg-blue-500 px-8 py-4 rounded-lg text-lg hover:bg-blue-600 transition">
          Book Free Consultation
        </button>
      </section>

    </div>
  );
}
import { useEffect } from "react";

export default function TwitterAds() {

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
          X (Twitter) Ads
          <span className="text-blue-500"> That Perform</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Reach the right audience in real-time with high-impact Twitter (X) advertising.
          We create campaigns that drive engagement, traffic, and conversions.
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
            Why X (Twitter) Ads?
          </h2>
          <p className="text-gray-400">
            Twitter (X) is a real-time platform where conversations happen instantly. 
            It allows brands to connect with users based on interests, trends, and behaviors, 
            making it ideal for engagement-driven campaigns.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ Real-time audience engagement</li>
            <li>✔ Trend-based targeting</li>
            <li>✔ Strong brand visibility</li>
            <li>✔ High engagement potential</li>
            <li>✔ Effective for awareness & traffic</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-10 rounded-3xl border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4">
            What We Handle
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>• Audience & Trend Research</li>
            <li>• Campaign Setup</li>
            <li>• Ad Copy Creation</li>
            <li>• Hashtag Strategy</li>
            <li>• Performance Optimization</li>
          </ul>
        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our X (Twitter) Advertising Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Promoted Tweets",
              desc: "Boost your tweets to reach a wider and targeted audience."
            },
            {
              title: "Follower Ads",
              desc: "Grow your Twitter following with targeted campaigns."
            },
            {
              title: "Website Traffic Ads",
              desc: "Drive high-quality traffic to your website."
            },
            {
              title: "Engagement Campaigns",
              desc: "Increase likes, retweets, and interactions."
            },
            {
              title: "Trend & Hashtag Ads",
              desc: "Leverage trending topics to maximize visibility."
            },
            {
              title: "Retargeting Ads",
              desc: "Re-engage users who have interacted with your brand."
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
          Why Our Twitter Ads Work
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            "Real-time campaign execution",
            "Trend-based targeting strategies",
            "Engaging and concise ad copy",
            "Continuous performance optimization",
            "A/B testing for best results",
            "ROI-focused campaigns"
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
            "Campaign Launch",
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


      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center relative">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl"></div>

        <h2 className="text-4xl font-bold mb-6">
          Ready to Grow on X (Twitter)?
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build high-impact campaigns that boost engagement and drive results.
        </p>

        <button className="bg-blue-500 px-8 py-4 rounded-lg text-lg hover:bg-blue-600 transition">
          Book Free Consultation
        </button>
      </section>

    </div>
  );
}
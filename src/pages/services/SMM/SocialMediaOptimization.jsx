import { useEffect } from "react";

export default function SocialMediaOptimization() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="py-32 text-center px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Social Media Optimization
          <span className="text-blue-500"> (SMO Services)</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400">
          Improve your brand visibility, engagement, and organic reach across all social platforms
          with powerful Social Media Optimization strategies.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Get Free SMO Audit
        </button>
      </section>

      {/* STATS */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-8">

          <div>
            <h2 className="text-3xl font-bold text-blue-500">5000+</h2>
            <p className="text-gray-400 mt-2">Profiles Optimized</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-500">40+</h2>
            <p className="text-gray-400 mt-2">Industries Served</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-500">90%</h2>
            <p className="text-gray-400 mt-2">Engagement Growth</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-500">3x</h2>
            <p className="text-gray-400 mt-2">Organic Reach Increase</p>
          </div>

        </div>
      </section>

      {/* WHAT IS SMO */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            What is Social Media Optimization?
          </h2>

          <p className="text-gray-400">
            Social Media Optimization (SMO) is the process of optimizing your social media profiles,
            content, and strategy to increase visibility, engagement, and organic growth across platforms
            like Facebook, Instagram, LinkedIn, and Twitter.
          </p>
        </div>

        <div>
          <ul className="space-y-3 text-gray-400">
            <li>✔ Optimize profiles for better branding</li>
            <li>✔ Improve organic reach</li>
            <li>✔ Increase follower engagement</li>
            <li>✔ Build trust & credibility</li>
            <li>✔ Drive consistent traffic</li>
          </ul>
        </div>

      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Benefits of SMO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-black rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Stronger Brand Presence</h3>
              <p className="text-gray-400">
                Build a consistent and professional brand identity across all platforms.
              </p>
            </div>

            <div className="p-6 bg-black rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Higher Engagement</h3>
              <p className="text-gray-400">
                Increase likes, comments, shares, and audience interaction.
              </p>
            </div>

            <div className="p-6 bg-black rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Organic Growth</h3>
              <p className="text-gray-400">
                Grow your followers naturally without relying heavily on ads.
              </p>
            </div>

            <div className="p-6 bg-black rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Better Reach</h3>
              <p className="text-gray-400">
                Get your content seen by the right audience consistently.
              </p>
            </div>

            <div className="p-6 bg-black rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Traffic Generation</h3>
              <p className="text-gray-400">
                Drive traffic from social platforms to your website.
              </p>
            </div>

            <div className="p-6 bg-black rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Trust Building</h3>
              <p className="text-gray-400">
                Establish authority and credibility in your niche.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold text-center mb-12">
          What’s Included in SMO
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Profile Optimization</h3>
            <p className="text-gray-400">
              Optimize bios, images, and branding for a professional presence.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Content Strategy</h3>
            <p className="text-gray-400">
              Plan engaging and valuable content tailored to your audience.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Hashtag Optimization</h3>
            <p className="text-gray-400">
              Use targeted hashtags to increase reach and discoverability.
            </p>
          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-900 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Our SMO Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="font-semibold text-blue-500">01</h3>
              <p className="mt-2 text-gray-400">Profile Audit</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-500">02</h3>
              <p className="mt-2 text-gray-400">Strategy Planning</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-500">03</h3>
              <p className="mt-2 text-gray-400">Optimization</p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-500">04</h3>
              <p className="mt-2 text-gray-400">Monitoring & Growth</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">

        <h2 className="text-3xl font-bold">
          Ready to Boost Your Social Presence?
        </h2>

        <p className="text-gray-400 mt-4">
          Let’s optimize your social media and grow your brand organically.
        </p>

        <button className="mt-6 px-8 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
          Contact Us
        </button>

      </section>

    </div>
  );
}
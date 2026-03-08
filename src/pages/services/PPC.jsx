import { Link } from "react-router-dom";

export default function PPC() {

  const platforms = [
    { name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" },
    { name: "Meta Ads", logo: "https://images.seeklogo.com/logo-png/42/2/meta-icon-new-facebook-2021-logo-png_seeklogo-424014.png" },
    { name: "LinkedIn Ads", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" },
    { name: "Amazon Ads", logo: "https://cdn.prod.website-files.com/61f0f48a97255128fb175a87/620a2d7e6e043369a8bf7a87_Capture%20d%E2%80%99e%CC%81cran%202022-02-14%20a%CC%80%2011.22.31.png" }
  ];

  const funnel = [
    { title: "Traffic", desc: "Targeted paid traffic from search & social ads" },
    { title: "Landing Page", desc: "Optimized pages built to convert visitors" },
    { title: "Leads", desc: "Users submit forms or call your business" },
    { title: "Sales", desc: "Your team converts qualified leads into customers" }
  ];

  const metrics = [
    { label: "Average ROAS", value: "4.2x", width: "85%" },
    { label: "CPA Reduction", value: "48%", width: "70%" },
    { label: "Lead Growth", value: "320%", width: "95%" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="py-32 text-center px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Paid Advertising (PPC)
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          Data-driven paid advertising campaigns that generate leads,
          increase sales and maximize ROI across Google, Meta, LinkedIn
          and Amazon advertising platforms.
        </p>

      </section>


      {/* PLATFORM LOGO WALL */}

      <section className="py-24 border-t border-white/10 text-center">

        <h2 className="text-4xl font-semibold mb-16">
          Platforms We Advertise On
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">

          {platforms.map((platform,i)=>(
            <div
              key={i}
              className="flex flex-col items-center opacity-70 hover:opacity-100
              grayscale hover:grayscale-0 transition transform hover:scale-110"
            >

              <img
                src={platform.logo}
                alt={platform.name}
                className="h-16 object-contain"
              />

              <p className="text-gray-400 mt-3">
                {platform.name}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* GOOGLE ADS DASHBOARD */}

      <section className="py-24 border-t border-white/10 px-6">

        <h2 className="text-4xl text-center font-semibold mb-16">
          Campaign Performance Dashboard
        </h2>

        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-xl p-10">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <p className="text-gray-400">Clicks</p>
              <h3 className="text-3xl font-bold text-blue-500">12,483</h3>
            </div>

            <div>
              <p className="text-gray-400">Conversions</p>
              <h3 className="text-3xl font-bold text-green-500">1,294</h3>
            </div>

            <div>
              <p className="text-gray-400">Cost Per Lead</p>
              <h3 className="text-3xl font-bold text-purple-500">$18.20</h3>
            </div>

          </div>

        </div>

      </section>


      {/* ROAS GROWTH BARS */}

      <section className="py-24 border-t border-white/10 text-center">

        <h2 className="text-4xl font-semibold mb-16">
          Campaign Performance Metrics
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">

          {metrics.map((metric,i)=>(
            <div key={i}>

              <div className="flex justify-between mb-2">
                <span>{metric.label}</span>
                <span className="text-purple-400 font-semibold">
                  {metric.value}
                </span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-4">

                <div
                  className="bg-purple-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: metric.width }}
                ></div>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* PPC FUNNEL */}

      <section className="py-24 border-t border-white/10 text-center">

        <h2 className="text-4xl font-semibold mb-16">
          Our PPC Conversion Funnel
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {funnel.map((step,i)=>(
            <div
              key={i}
              className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >

              <h3 className="text-purple-400 font-semibold">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* SERVICES */}

      <section className="py-24 border-t border-white/10 px-6">

        <h2 className="text-4xl font-semibold text-center mb-16">
          Our PPC Advertising Services
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* STANDARD PPC */}

          <div className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">

            <h3 className="text-3xl font-semibold text-purple-400">
              Standard PPC Advertising
            </h3>

            <p className="text-gray-400 mt-6">
              Google Ads, Meta Ads and LinkedIn campaigns built to drive
              qualified leads and measurable ROI.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✓ Google Search Ads</li>
              <li>✓ Meta Ads (Facebook & Instagram)</li>
              <li>✓ LinkedIn Ads</li>
              <li>✓ Conversion tracking</li>
              <li>✓ Campaign optimization</li>
            </ul>

            <Link
              to="/ppc-pricing"
              className="inline-block mt-10 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
            >
              View PPC Pricing →
            </Link>

          </div>


          {/* AMAZON PPC */}

          <div className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition">

            <h3 className="text-3xl font-semibold text-orange-400">
              Amazon PPC Advertising
            </h3>

            <p className="text-gray-400 mt-6">
              Amazon advertising strategies designed to increase product
              visibility and maximize profitable sales.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✓ Sponsored Products</li>
              <li>✓ Sponsored Brands</li>
              <li>✓ Sponsored Display</li>
              <li>✓ Keyword mining</li>
              <li>✓ ACOS optimization</li>
            </ul>

            <Link
              to="/amazon-ppc-pricing"
              className="inline-block mt-10 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
            >
              View Amazon PPC Pricing →
            </Link>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-24 text-center bg-gradient-to-r from-gray-900 to-black">

        <h2 className="text-4xl font-semibold">
          Ready to scale your advertising?
        </h2>

        <p className="text-gray-400 mt-6">
          Let our PPC specialists build profitable campaigns for your business.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 px-10 py-4 bg-white text-black rounded-lg font-semibold hover:scale-105 transition"
        >
          Book Free PPC Strategy →
        </Link>

      </section>

    </div>
  );
}
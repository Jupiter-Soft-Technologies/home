import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function PPC() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const platforms = [
    {
      name: "Google Ads",
      logo: "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg"
    },
    {
      name: "Meta Ads",
      logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
    },
    {
      name: "LinkedIn Ads",
      logo: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
    },
    {
      name: "Amazon Ads",
      logo: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg"
    }
  ];

  const services = [
    {
      name: "PPC Ads",
      path: "/services/digital-ad/ppcServices",
      tag: "High Intent",
      logo: "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg"
    },
    {
      name: "Facebook Ads",
      path: "/services/digital-ad/facebook-ads",
      tag: "Scaling",
      logo: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg"
    },
    {
      name: "Instagram Ads",
      path: "/services/digital-ad/instagram-ads",
      tag: "Visual Brands",
      logo: "https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
    },
    {
      name: "X Ads",
      path: "/services/digital-ad/twitter-ads",
      tag: "Trends",
      logo: "https://www.vectorlogo.zone/logos/x/x-icon.svg"
    },
    {
      name: "LinkedIn Ads",
      path: "/services/digital-ad/linkedin-ads",
      tag: "B2B",
      logo: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
    },
    {
      name: "Pinterest Ads",
      path: "/services/digital-ad/pinterest-ads",
      tag: "Shopping",
      logo: "https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg"
    },
    {
      name: "Amazon PPC",
      path: "/services/digital-ad/amazon-ppc",
      tag: "E-commerce",
      logo: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg"
    },
    {
      name: "CRO",
      path: "/services/conversion-optimization",
      tag: "Conversion",
      logo: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
    }
  ];

  const funnel = [
    { title: "Traffic", desc: "Targeted paid traffic from ads" },
    { title: "Landing Page", desc: "Optimized pages for conversions" },
    { title: "Leads", desc: "Users submit forms or call" },
    { title: "Sales", desc: "Convert leads into customers" }
  ];

  const metrics = [
    { label: "ROAS", value: "4.2x", width: "85%" },
    { label: "CPA Drop", value: "48%", width: "70%" },
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
          Data-driven campaigns that generate leads and maximize ROI.
        </p>
      </section>

      {/* PLATFORM LOGOS */}
      <section className="py-24 border-t border-white/10 text-center">
        <h2 className="text-4xl font-semibold mb-16">
          Platforms We Advertise On
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {platforms.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-12 w-12 object-contain 
                  grayscale opacity-70 
                  hover:grayscale-0 hover:opacity-100 transition"
                />
              </div>
              <p className="text-gray-400 mt-3">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIGITAL SERVICES */}
      <section className="py-28 px-6 border-t border-white/10">
        <h2 className="text-4xl text-center font-bold mb-16">
          Explore Digital Advertising Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.path}
              className="group p-6 rounded-2xl border border-white/10 
              bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition"
            >

              <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                {s.tag}
              </span>

              <div className="mt-4 p-4 bg-white/5 rounded-xl flex justify-center">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="h-10 object-contain 
                  grayscale opacity-70 
                  group-hover:grayscale-0 group-hover:opacity-100 transition"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-center">
                {s.name}
              </h3>

            </Link>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section className="py-24 border-t border-white/10 text-center">
        <h2 className="text-4xl font-semibold mb-16">
          Campaign Performance
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span>{m.label}</span>
                <span className="text-purple-400">{m.value}</span>
              </div>
              <div className="bg-gray-800 h-3 rounded">
                <div
                  className="bg-purple-600 h-3 rounded"
                  style={{ width: m.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FUNNEL */}
      <section className="py-24 border-t border-white/10 text-center">
        <h2 className="text-4xl font-semibold mb-16">
          Conversion Funnel
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {funnel.map((f, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-xl">
              <h3 className="text-purple-400">{f.title}</h3>
              <p className="text-gray-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-semibold">
          Ready to scale your ads?
        </h2>

        <Link
          to="/contact"
          className="inline-block mt-10 px-10 py-4 bg-white text-black rounded-lg hover:scale-105 transition"
        >
          Book Free Strategy →
        </Link>
      </section>

    </div>
  );
}
import { useState } from "react";
import { Check, X } from "lucide-react";
import ContactModal from "../components/ContactModal";
import { useCurrency } from "../context/CurrencyContext";

const features = [
  {
    section: "ON-PAGE SEO",
    items: [
      ["Website Canonical Check", "✓", "✓", "✓"],
      ["META Tags Optimization", "✓", "✓", "✓"],
      ["Heading Tags Optimization", "✓", "✓", "✓"],
      ["Image Alt Tags Optimization", "✓", "✓", "✓"],
      ["SEO Friendly URL Setup", "✓", "✓", "✓"],
      ["Site Navigation Analysis", "✓", "✓", "✓"],
      ["404 Page Implementation", "✓", "✓", "✓"],
      ["Broken Links Check", "✓", "✓", "✓"],
      ["Website Speed Check", "✓", "✓", "✓"],
      ["Google Indexed Pages Check", "✓", "✓", "✓"],
      ["Robots.txt Creation", "✓", "✓", "✓"],
      ["Google XML Sitemap", "✓", "✓", "✓"],
      ["HTML Sitemap Setup", "✓", "✓", "✓"],
      ["Hyperlink Optimization", "x", "x", "✓"],
      ["Website Responsive Check", "✓", "✓", "✓"],
      ["Internal Linking Optimization", "x", "x", "✓"],
      ["Google Webmaster Tools Setup", "✓", "✓", "✓"],
      ["Bing Webmaster Tools Setup", "x", "x", "✓"],
      ["Google Analytics Setup", "✓", "✓", "✓"],
      ["Structured Data Setup", "x", "x", "✓"],
      ["On Site Blog Section Creation", "✓", "✓", "✓"],
    ],
  },
  {
    section: "OFF-PAGE SEO",
    items: [
      ["Search Engine Submission", "✓", "✓", "✓"],
      ["Blog Writing", "1", "2", "3"],
      ["Blog Links", "1", "2", "3"],
      ["Blog Social Bookmarking Links", "6", "10", "16"],
      ["Article Writing", "1", "2", "3"],
      ["Article Submissions", "1", "2", "3"],
      ["Article Marketing", "5", "10", "15"],
      ["Image Sharing", "2", "4", "8"],
      ["Contextual Links", "✓", "✓", "✓"],
      ["Keyword in Anchor Text", "✓", "✓", "✓"],
      ["Web 2.0 Profile Creation", "x", "1", "2"],
      ["Social Bookmarking Links", "15", "24", "30"],
      ["Micro Blogging", "4", "7", "12"],
      ["Classified Submissions", "5", "8", "12"],
      ["Infographics Creation", "x", "x", "✓"],
      ["Google Business Page Creation", "x", "✓", "✓"],
      ["Local Business Listings", "1", "2", "4"],
      ["NAP Syndication", "✓", "✓", "✓"],
      ["Guest Post", "x", "x", "✓"],
    ],
  },
  {
    section: "SMO (COMPLIMENTARY)",
    items: [
      ["Facebook Posting", "x", "4", "8"],
      ["Instagram Posting", "x", "✓", "8"],
      ["Twitter Posting", "x", "4", "8"],
      ["Pinterest Management", "x", "x", "✓"],
    ],
  },
  {
    section: "REPORTS",
    items: [
      ["Monthly Analytics Report", "✓", "✓", "✓"],
      ["Keyword Ranking Report", "✓", "✓", "✓"],
      ["Off-Page Activity Report", "✓", "✓", "✓"],
    ],
  },
  {
    section: "SUPPORT",
    items: [
      ["Email Support", "✓", "✓", "✓"],
      ["Phone Support", "✓", "✓", "✓"],
      ["Chat Support", "✓", "✓", "✓"],
    ],
  },
];

const plans = [
  { name: "Starter SEO", price: 10000 },
  { name: "Growth SEO", price: 30000, highlight: true },
  { name: "Enterprise SEO", price: 60000 },
];

const Icon = ({ value }) => {
  if (value === "✓")
    return <Check className="text-blue-500 w-4 h-4 mx-auto" />;
  if (value === "x")
    return <X className="text-gray-500 w-4 h-4 mx-auto" />;
  return <span className="text-blue-500 font-semibold">{value}</span>;
};

export default function SeoPricingComparison() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const { convertPrice } = useCurrency();

  return (
    <>
      <section className="bg-black py-24 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          SEO Pricing Comparison
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, planIndex) => (
            <div
              key={plan.name}
              className={`rounded-[40px] border ${
                plan.highlight
                  ? "border-blue-500 scale-105"
                  : "border-gray-800"
              } bg-gradient-to-b from-gray-900 to-black p-8`}
            >
              {/* HEADER */}
              <div className="text-center mb-10">
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-blue-500 mt-2">
                  {convertPrice(plan.price)}
                </p>
                <p className="text-gray-400 text-sm">per month</p>
              </div>

              {/* FEATURES */}
              <div className="space-y-8">
                {features.map((section) => (
                  <div key={section.section}>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">
                      {section.section}
                    </h4>

                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex justify-between text-sm text-gray-300"
                        >
                          <span className="pr-3">{item[0]}</span>
                          <Icon value={item[planIndex + 1]} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  setSelectedPlan(plan.name);
                  setOpen(true);
                }}
                className={`w-full mt-12 py-4 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </section>

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}

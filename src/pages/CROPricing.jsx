import { useState } from "react";
import { Check, X } from "lucide-react";
import ContactModal from "../components/ContactModal";

/* ================= FEATURES ================= */
const features = [
  {
    section: "INITIAL REVIEW & ANALYSIS",
    items: [
      ["In-Depth Site Analysis", "✓", "✓", "✓", "✓"],
      ["Duplicate Content Check", "✓", "✓", "✓", "✓"],
      ["Website Structure Analysis", "✓", "✓", "✓", "✓"],
      ["Page Load Speed Check", "✓", "✓", "✓", "✓"],
      ["Broken Link Check", "✓", "✓", "✓", "✓"],
      ["Google Penalty Check", "✓", "✓", "✓", "✓"],
      ["Cross Browser Compatibility", "✓", "✓", "✓", "✓"],
      ["Initial Rank Report", "✓", "✓", "✓", "✓"],
      ["Competition Analysis", "✓", "✓", "✓", "✓"],
      ["Initial Consultation (15 min)", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    section: "CRO & UX OPTIMIZATION",
    items: [
      ["Landing Page Analysis", "✓", "✓", "✓", "✓"],
      ["CTA Optimization", "✓", "✓", "✓", "✓"],
      ["Enquiry Form Optimization", "✓", "✓", "✓", "✓"],
      ["Thank You Page Optimization", "x", "✓", "✓", "✓"],
      ["Heatmap & User Behavior Analysis", "x", "✓", "✓", "✓"],
      ["A/B Testing Recommendations", "x", "x", "✓", "✓"],
      ["Advanced UX Improvements", "x", "x", "✓", "✓"],
      ["Personalized CRO Strategy", "x", "x", "x", "✓"],
    ],
  },
  {
    section: "PAID ADVERTISEMENT",
    items: [
      ["Ad Budget (Paid by Client)", "$500+", "$500+", "$500+", "$500+"],
      ["Ad Platform Setup (Up to 2)", "✓", "✓", "✓", "✓"],
      ["Campaign Setup", "✓", "✓", "✓", "✓"],
      ["Targeting & Segmentation", "✓", "✓", "✓", "✓"],
      ["Tracking & Analytics Integration", "✓", "✓", "✓", "✓"],
      ["Campaign Optimization", "x", "✓", "✓", "✓"],
    ],
  },
  {
    section: "ON-PAGE OPTIMIZATION",
    items: [
      ["Content Optimization", "✓", "✓", "✓", "✓"],
      ["Header Tags Optimization", "✓", "✓", "✓", "✓"],
      ["Schema Markup Implementation", "x", "✓", "✓", "✓"],
      ["Analytics & Clarity Integration", "✓", "✓", "✓", "✓"],
      ["XML Sitemap & Robots.txt", "✓", "✓", "✓", "✓"],
    ],
  },
  {
    section: "CONTENT & LINK ACQUISITION",
    items: [
      ["Onsite Blog Writing", "10", "10", "10", "10"],
      ["Blog Link Promotion", "15", "30", "30", "30"],
      ["Guest Blog Posting", "x", "2", "2", "2"],
      ["Web 2.0 Profiles", "x", "2", "2", "2"],
      ["Social Backlinks", "10", "10", "10", "10"],
      ["Infographic Creation", "x", "x", "✓", "✓"],
    ],
  },
  {
    section: "SOCIAL MEDIA MARKETING",
    items: [
      ["Facebook Page Optimization", "✓", "✓", "✓", "✓"],
      ["Facebook Post Updates", "15", "15", "15", "15"],
      ["LinkedIn Profile Optimization", "x", "✓", "✓", "✓"],
      ["YouTube Channel Setup", "x", "x", "✓", "✓"],
    ],
  },
  {
    section: "REPORTING & SUPPORT",
    items: [
      ["Monthly KPI Report", "✓", "✓", "✓", "✓"],
      ["Keyword Ranking Report", "✓", "✓", "✓", "✓"],
      ["Backlink Report", "✓", "✓", "✓", "✓"],
      ["Email / Chat / Phone Support", "✓", "✓", "✓", "✓"],
      ["Project Management Tracking", "✓", "✓", "✓", "✓"],
    ],
  },
];

/* ================= PLANS ================= */
const plans = [
  { name: "Silver", price: "$2500" },
  { name: "Gold", price: "$3500", highlight: true },
  { name: "Platinum", price: "$4000" },
  { name: "Premium", price: "$5000" },
];

/* ================= ICON ================= */
const Icon = ({ value }) => {
  if (value === "✓")
    return <Check className="text-blue-500 w-4 h-4 mx-auto" />;
  if (value === "x")
    return <X className="text-gray-500 w-4 h-4 mx-auto" />;
  return <span className="text-blue-400 font-semibold">{value}</span>;
};

/* ================= COMPONENT ================= */
export default function CROPricingComparison() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <>
      <section className="bg-black py-24 px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          CRO Pricing Comparison
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
                  {plan.price}
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
                Start Today →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT MODAL */}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}

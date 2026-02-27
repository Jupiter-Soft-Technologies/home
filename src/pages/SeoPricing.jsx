import { useState } from "react";
import { Check, X } from "lucide-react";
import ContactModal from "../components/ContactModal";

const plans = [
  {
    name: "BASIC",
    price: 500,
    oldPrice: 700,
    color: "text-green-500",
    features: [
      "No. of Keywords – 30",
      "Backlinks (per month) – 40",
      "Target Pages Optimized – Up to 10",
      { label: "GBP (GMB)", value: false },
      { label: "Geotagging", value: false },
      { label: "G.E.O", value: false },
      { label: "A.E.O", value: false },
      { label: "AI Compatibility Testing", value: true },
      "AI Visibility Audit – 2 pages",
    ],
  },
  {
    name: "SILVER",
    price: 700,
    oldPrice: 900,
    color: "text-gray-300",
    features: [
      "No. of Keywords – 40",
      "Backlinks (per month) – 60",
      "Target Pages Optimized – Up to 15",
      { label: "GBP (GMB)", value: true },
      { label: "Geotagging", value: false },
      { label: "G.E.O", value: false },
      { label: "A.E.O", value: false },
      { label: "AI Compatibility Testing", value: true },
      "AI Visibility Audit – 4 pages",
    ],
  },
  {
    name: "GOLD",
    price: 1000,
    oldPrice: 1200,
    highlight: true,
    color: "text-yellow-400",
    features: [
      "No. of Keywords – 50",
      "Backlinks (per month) – 100",
      "Target Pages Optimized – Up to 25",
      { label: "GBP (GMB)", value: true },
      { label: "Geotagging", value: true },
      { label: "G.E.O", value: false },
      { label: "A.E.O", value: false },
      { label: "AI Compatibility Testing", value: true },
      "AI Visibility Audit – 6 pages",
    ],
  },
  {
    name: "PREMIUM",
    price: 1800,
    oldPrice: 2000,
    color: "text-indigo-400",
    features: [
      "No. of Keywords – 100",
      "Backlinks (per month) – 200",
      "Target Pages Optimized – Up to 40",
      { label: "GBP (GMB)", value: true },
      { label: "Geotagging", value: true },
      { label: "G.E.O", value: true },
      { label: "A.E.O", value: true },
      { label: "AI Compatibility Testing", value: true },
      "AI Visibility Audit – 8 pages",
    ],
  },
];

const Feature = ({ item }) => {
  if (typeof item === "string")
    return <li className="text-gray-400 text-sm">{item}</li>;

  return (
    <li className="flex justify-between text-sm text-gray-400">
      <span>{item.label}</span>
      {item.value ? (
        <Check className="text-green-500 w-4 h-4" />
      ) : (
        <X className="text-gray-600 w-4 h-4" />
      )}
    </li>
  );
};

const DetailItem = ({ label, value }) => {
  const isTrue = value === "✓" || value === true;

  return (
    <div className="flex justify-between items-center border-b border-gray-800 py-2 text-sm">
      <span className="text-gray-400">{label}</span>
      {value === "✓" || value === "x" ? (
        isTrue ? (
          <Check className="text-green-500 w-4 h-4" />
        ) : (
          <X className="text-gray-600 w-4 h-4" />
        )
      ) : (
        <span className="text-gray-300 font-medium">{value}</span>
      )}
    </div>
  );
};

export default function PricingCardsDark() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const basicDetails = [
    {
      title: "FIRST HAND SEO ANALYSIS",
      items: [
        ["Pre-Optimization Website Analysis", "x"],
        ["Competitor Analysis", "x"],
        ["Keyword Research & Analysis", "✓"],
        ["Baseline Ranking Check", "✓"],
        ["Duplicate Content Check", "✓"],
        ["Google Penalty Check", "✓"],
        ["Backlink Analysis", "x"],
      ],
    },
    {
      title: "AI VISIBILITY ACTIVITIES",
      items: [
        ["AI Semantic Entity Optimization", "Basic"],
        ["AI Prompt Injection Testing", "x"],
        ["Schema Validator & Repair", "✓"],
        ["AEO", "x"],
        ["Featured Snippet Testing", "x"],
        ["AI Index Monitoring", "Monthly"],
        ["Website Structure & AI Parsability", "Basic"],
        ["AI-Optimized Blog Posts", "1 / mo"],
        ["AI-Optimized Prompt FAQs", "✓"],
        ["AI Ranking & Visibility Report", "Monthly"],
      ],
    },
    {
      title: "ON-PAGE OPTIMIZATION",
      items: [
        ["Canonical Check", "✓"],
        ["Title Tag Optimization", "✓"],
        ["META Tags Optimization", "✓"],
        ["Heading Tags Optimization", "✓"],
        ["Image Alt Tags Optimization", "✓"],
        ["Content Optimization", "✓"],
        ["SEO Friendly URL Setup", "✓"],
        ["404 Page Implementation", "✓"],
        ["Broken Links Check", "✓"],
        ["Website Speed Check", "✓"],
        ["Google Analytics Setup", "✓"],
        ["On Site Blog Posting", "1"],
      ],
    },
    {
      title: "OFF-PAGE OPTIMIZATION",
      items: [
        ["Search Engine Submission", "✓"],
        ["Blog Writing", "1"],
        ["Article Writing", "1"],
        ["Article Marketing", "5"],
        ["Social Bookmarking Links", "15"],
        ["Micro Blogging", "4"],
        ["Classified Submissions", "5"],
        ["Video Marketing", "✓"],
        ["Location Optimization", "1"],
        ["NAP Syndication", "✓"],
      ],
    },
    {
      title: "REPORTS & SUPPORT",
      items: [
        ["Monthly Website Analytics Report", "✓"],
        ["Monthly Keywords Ranking Report", "✓"],
        ["Monthly Off Page Submission Report", "✓"],
        ["Email Support", "✓"],
        ["Phone Support", "✓"],
        ["Chat Support", "✓"],
      ],
    },
  ];

  const silverDetails = [
  {
    title: "FIRST HAND SEO ANALYSIS",
    items: [
      ["Pre-Optimization Website Analysis", "x"],
      ["Competitor Analysis", "x"],
      ["Keyword Research & Analysis", "✓"],
      ["Baseline Ranking Check", "✓"],
      ["Duplicate Content Check", "✓"],
      ["Google Penalty Check", "✓"],
      ["Backlink Analysis (if required)", "x"],
    ],
  },
  {
    title: "AI VISIBILITY ACTIVITIES",
    items: [
      ["AI Semantic Entity Optimization", "Enhanced"],
      ["AI Prompt Injection Testing", "x"],
      ["Schema Validator & Repair", "✓"],
      ["AEO (Answer Engine Optimization)", "x"],
      ["Featured Snippet Testing (A/B)", "x"],
      ["AI Index Monitoring", "Monthly"],
      ["AI-Attributed Image & Infographic Optimization", "x"],
      ["Website Structure & AI Parsability", "Enhanced"],
      ["Internal Linking Optimization", "Basic"],
      ["Conversational AI Optimization", "x"],
      ["Voice Search Optimization", "x"],
      ["Zero-Click Optimization", "x"],
      ["AI Prompt-Based Landing Pages", "1"],
      ["AI-Optimized Blog Posts", "1 / mo"],
      ["AI-Optimized Prompt FAQs", "✓"],
      ["In-Depth Competitor AI Analysis", "x"],
      ["AI Ranking & Visibility Report", "Monthly"],
    ],
  },
  {
    title: "ON-PAGE OPTIMIZATION ACTIVITIES",
    items: [
      ["Website Canonical Check", "✓"],
      ["Title Tag Optimization", "✓"],
      ["META Tags Optimization", "✓"],
      ["Heading Tags Optimization", "✓"],
      ["Image Alt Tags Optimization", "✓"],
      ["Content Optimization", "✓"],
      ["SEO Friendly URL Setup", "✓"],
      ["Site Navigation Analysis", "✓"],
      ["404 Page Implementation", "✓"],
      ["Broken Links Check", "✓"],
      ["Website Speed Check", "✓"],
      ["Google Indexed Pages Check", "✓"],
      ["Robots.txt Creation", "✓"],
      ["Google XML Sitemap", "✓"],
      ["HTML Sitemap (If Available)", "✓"],
      ["Hyperlink Optimization", "x"],
      ["Website Responsive Check", "✓"],
      ["Website Permalinks Analysis", "x"],
      ["Internal Linking Optimization", "x"],
      ["Google Webmaster Tools Setup", "✓"],
      ["Bing Webmaster Tools Setup", "x"],
      ["Google Analytics Setup", "✓"],
      ["Structured Data Setup", "x"],
      ["On Site Blog Section Creation", "✓"],
      ["On Site Blog Posting – Applicable from 1st month", "2"],
    ],
  },
  {
    title: "OFF-PAGE OPTIMIZATION ACTIVITIES",
    items: [
      ["Search Engine Submission", "✓"],
      ["Blog Writing", "1"],
      ["Blog Links", "2"],
      ["Blog Social Bookmarking Links", "10"],
      ["Article Writing", "2"],
      ["Article Submissions", "2"],
      ["Article Marketing", "10"],
      ["Image sharing", "4"],
      ["Contextual Links", "✓"],
      ["Keyword used in anchor text", "✓"],
      ["Share Each Blog Post Across Social Media Networks", "✓"],
      ["Web 2.0 Profile Creation", "1"],
      ["Web 2.0 Profiles Bookmarking Links", "4"],
      ["Press Release (If Client Provides News)", "x"],
      ["Press Release Bookmarking Links", "x"],
      ["Social Bookmarking Links", "24"],
      ["Micro Blogging", "7"],
      ["Classified Submissions", "8"],
      ["Infographics Creation/Month", "x"],
      ["Infographics Post/Month", "x"],
      ["Share each Infographics on Social Media Networks", "x"],
      ["Google Business Page Creation", "✓"],
      ["Bing Local Listing Creation", "✓"],
      ["PPT Submissions", "x"],
      ["Video Marketing (if Client provides)", "✓"],
      ["Location optimization", "2"],
      ["Local Business Listings", "2"],
      ["NAP Syndication", "✓"],
    ],
  },
  {
    title: "SMO ACTIVITIES (COMPLIMENTARY)",
    items: [
      ["Facebook Profile Creation", "✓"],
      ["Facebook Fan Page Creation", "✓"],
      ["Facebook Posting & Sharing", "4"],
      ["Instagram Profile Creation", "✓"],
      ["Instagram Posting & Sharing", "✓"],
      ["Twitter Profile Creation", "✓"],
      ["Twitter Post", "4"],
      ["Pinterest Account Creation/Management", "x"],
      ["Updating of pin boards", "x"],
      ["Pins (If Client Provides Images)", "x"],
      ["Linkedin Profile Creation", "x"],
      ["Linkedin Posting & Sharing", "x"],
    ],
  },
  {
    title: "REPORTS",
    items: [
      ["Monthly Website Analytics Report", "✓"],
      ["Monthly Keywords Ranking Report", "✓"],
      ["Monthly Off Page Submission Report", "✓"],
    ],
  },
  {
    title: "CUSTOMER SUPPORT",
    items: [
      ["Email", "✓"],
      ["Phone", "✓"],
      ["Chat", "✓"],
    ],
  },
];
const goldDetails = [
  {
    title: "FIRST HAND SEO ANALYSIS",
    items: [
      ["Pre-Optimization Website Analysis", "✓"],
      ["Competitor Analysis", "✓"],
      ["Keyword Research & Analysis", "✓"],
      ["Baseline Ranking Check", "✓"],
      ["Duplicate Content Check", "✓"],
      ["Google Penalty Check", "✓"],
      ["Backlink Analysis (if required)", "✓"],
    ],
  },
  {
    title: "AI VISIBILITY ACTIVITIES",
    items: [
      ["AI Semantic Entity Optimization", "NLP-Rich"],
      ["AI Prompt Injection Testing", "✓"],
      ["Schema Validator & Repair", "✓"],
      ["AEO (Answer Engine Optimization)", "x"],
      ["Featured Snippet Testing (A/B)", "✓"],
      ["AI Index Monitoring", "Monthly"],
      ["AI-Attributed Image & Infographic Optimization", "2 / mo"],
      ["Website Structure & AI Parsability", "Advanced"],
      ["Internal Linking Optimization", "Enhanced"],
      ["Conversational AI Optimization", "✓"],
      ["Voice Search Optimization", "x"],
      ["Zero-Click Optimization", "x"],
      ["AI Prompt-Based Landing Pages", "2"],
      ["AI-Optimized Blog Posts", "2 / mo"],
      ["AI-Optimized Prompt FAQs", "✓"],
      ["In-Depth Competitor AI Analysis", "✓"],
      ["AI Ranking & Visibility Report", "Monthly"],
    ],
  },
  {
    title: "ON-PAGE OPTIMIZATION ACTIVITIES",
    items: [
      ["Website Canonical Check", "✓"],
      ["Title Tag Optimization", "✓"],
      ["META Tags Optimization", "✓"],
      ["Heading Tags Optimization", "✓"],
      ["Image Alt Tags Optimization", "✓"],
      ["Content Optimization", "✓"],
      ["SEO Friendly URL Setup", "✓"],
      ["Site Navigation Analysis", "✓"],
      ["404 Page Implementation", "✓"],
      ["Broken Links Check", "✓"],
      ["Website Speed Check", "✓"],
      ["Google Indexed Pages Check", "✓"],
      ["Robots.txt Creation", "✓"],
      ["Google XML Sitemap", "✓"],
      ["HTML Sitemap (If Available)", "✓"],
      ["Hyperlink Optimization", "✓"],
      ["Website Responsive Check", "✓"],
      ["Website Permalinks Analysis", "✓"],
      ["Internal Linking Optimization", "✓"],
      ["Google Webmaster Tools Setup", "✓"],
      ["Bing Webmaster Tools Setup", "✓"],
      ["Google Analytics Setup", "✓"],
      ["Structured Data Setup", "✓"],
      ["On Site Blog Section Creation", "✓"],
      ["On Site Blog Posting – Applicable from 1st month", "4"],
    ],
  },
  {
    title: "OFF-PAGE OPTIMIZATION ACTIVITIES",
    items: [
      ["Search Engine Submission", "✓"],
      ["Blog Writing", "1"],
      ["Blog Links", "3"],
      ["Blog Social Bookmarking Links", "16"],
      ["Article Writing", "3"],
      ["Article Submissions", "3"],
      ["Article Marketing", "15"],
      ["Image sharing", "8"],
      ["Contextual Links", "✓"],
      ["Keyword used in anchor text", "✓"],
      ["Share Each Blog Post Across Social Media Networks", "✓"],
      ["Web 2.0 Profile Creation", "2"],
      ["Web 2.0 Profiles Bookmarking Links", "10"],
      ["Press Release (If Client Provides News)", "x"],
      ["Press Release Bookmarking Links", "x"],
      ["Social Bookmarking Links", "30"],
      ["Micro Blogging", "12"],
      ["Classified Submissions", "12"],
      ["Infographics Creation/Month", "✓"],
      ["Infographics Post/Month", "✓"],
      ["Share each Infographics on Social Media Networks", "✓"],
      ["Google Business Page Creation", "✓"],
      ["Bing Local Listing Creation", "✓"],
      ["PPT Submissions", "1"],
      ["Video Marketing (if Client provides)", "✓"],
      ["Location optimization", "4"],
      ["Local Business Listings", "4"],
      ["NAP Syndication", "✓"],
    ],
  },
  {
    title: "SMO ACTIVITIES (COMPLIMENTARY)",
    items: [
      ["Facebook Profile Creation", "✓"],
      ["Facebook Fan Page Creation", "✓"],
      ["Facebook Posting & Sharing", "8"],
      ["Instagram Profile Creation", "✓"],
      ["Instagram Posting & Sharing", "8"],
      ["Twitter Profile Creation", "✓"],
      ["Twitter Post", "8"],
      ["Pinterest Account Creation/Management", "✓"],
      ["Updating of pin boards", "8"],
      ["Pins (If Client Provides Images)", "✓"],
      ["Linkedin Profile Creation", "x"],
      ["Linkedin Posting & Sharing", "x"],
    ],
  },
  {
    title: "REPORTS",
    items: [
      ["Monthly Website Analytics Report", "✓"],
      ["Monthly Keywords Ranking Report", "✓"],
      ["Monthly Off Page Submission Report", "✓"],
    ],
  },
  {
    title: "CUSTOMER SUPPORT",
    items: [
      ["Email", "✓"],
      ["Phone", "✓"],
      ["Chat", "✓"],
    ],
  },
];

const premiumDetails = [
  {
    title: "FIRST HAND SEO ANALYSIS",
    items: [
      ["Pre-Optimization Website Analysis", "✓"],
      ["Competitor Analysis", "✓"],
      ["Keyword Research & Analysis", "✓"],
      ["Baseline Ranking Check", "✓"],
      ["Duplicate Content Check", "✓"],
      ["Google Penalty Check", "✓"],
      ["Backlink Analysis (if required)", "✓"],
    ],
  },
  {
    title: "AI VISIBILITY ACTIVITIES",
    items: [
      ["AI Semantic Entity Optimization", "Advanced NLP"],
      ["AI Prompt Injection Testing", "✓"],
      ["Schema Validator & Repair", "✓"],
      ["AEO (Answer Engine Optimization)", "✓"],
      ["Featured Snippet Testing (A/B)", "✓"],
      ["AI Index Monitoring", "Monthly"],
      ["AI-Attributed Image & Infographic Optimization", "4 / mo"],
      ["Website Structure & AI Parsability", "Advanced"],
      ["Internal Linking Optimization", "Advanced"],
      ["Conversational AI Optimization", "✓"],
      ["Voice Search Optimization", "✓"],
      ["Zero-Click Optimization", "✓"],
      ["AI Prompt-Based Landing Pages", "3"],
      ["AI-Optimized Blog Posts", "2 / mo"],
      ["AI-Optimized Prompt FAQs", "✓"],
      ["In-Depth Competitor AI Analysis", "✓"],
      ["AI Ranking & Visibility Report", "Monthly"],
    ],
  },
  {
    title: "ON-PAGE OPTIMIZATION ACTIVITIES",
    items: [
      ["Website Canonical Check", "✓"],
      ["Title Tag Optimization", "✓"],
      ["META Tags Optimization", "✓"],
      ["Heading Tags Optimization", "✓"],
      ["Image Alt Tags Optimization", "✓"],
      ["Content Optimization", "✓"],
      ["SEO Friendly URL Setup", "✓"],
      ["Site Navigation Analysis", "✓"],
      ["404 Page Implementation", "✓"],
      ["Broken Links Check", "✓"],
      ["Website Speed Check", "✓"],
      ["Google Indexed Pages Check", "✓"],
      ["Robots.txt Creation", "✓"],
      ["Google XML Sitemap", "✓"],
      ["HTML Sitemap (If Available)", "✓"],
      ["Hyperlink Optimization", "✓"],
      ["Website Responsive Check", "✓"],
      ["Website Permalinks Analysis", "✓"],
      ["Internal Linking Optimization", "✓"],
      ["Google Webmaster Tools Setup", "✓"],
      ["Bing Webmaster Tools Setup", "✓"],
      ["Google Analytics Setup", "✓"],
      ["Structured Data Setup", "✓"],
      ["On Site Blog Section Creation", "✓"],
      ["On Site Blog Posting – Applicable from 1st month", "5"],
    ],
  },
  {
    title: "OFF-PAGE OPTIMIZATION ACTIVITIES",
    items: [
      ["Search Engine Submission", "✓"],
      ["Blog Writing", "3"],
      ["Blog Links", "5"],
      ["Blog Social Bookmarking Links", "35"],
      ["Article Writing", "4"],
      ["Article Submissions", "4"],
      ["Article Marketing", "25"],
      ["Image sharing", "12"],
      ["Contextual Links", "✓"],
      ["Keyword used in anchor text", "✓"],
      ["Share Each Blog Post Across Social Media Networks", "✓"],
      ["Web 2.0 Profile Creation", "5"],
      ["Web 2.0 Profiles Bookmarking Links", "25"],
      ["Press Release (If Client Provides News)", "✓"],
      ["Press Release Bookmarking Links", "✓"],
      ["Social Bookmarking Links", "60"],
      ["Micro Blogging", "20"],
      ["Classified Submissions", "25"],
      ["Infographics Creation/Month", "✓"],
      ["Infographics Post/Month", "✓"],
      ["Share each Infographics on Social Media Networks", "✓"],
      ["Google Business Page Creation", "✓"],
      ["Bing Local Listing Creation", "✓"],
      ["PPT Submissions", "3"],
      ["Video Marketing (if Client provides)", "✓"],
      ["Location optimization", "10"],
      ["Local Business Listings", "10"],
      ["NAP Syndication", "✓"],
    ],
  },
  {
    title: "SMO ACTIVITIES (COMPLIMENTARY)",
    items: [
      ["Facebook Profile Creation", "✓"],
      ["Facebook Fan Page Creation", "✓"],
      ["Facebook Posting & Sharing", "16"],
      ["Instagram Profile Creation", "✓"],
      ["Instagram Posting & Sharing", "16"],
      ["Twitter Profile Creation", "✓"],
      ["Twitter Post", "16"],
      ["Pinterest Account Creation/Management", "✓"],
      ["Updating of pin boards", "16"],
      ["Pins (If Client Provides Images)", "✓"],
      ["Linkedin Profile Creation", "✓"],
      ["Linkedin Posting & Sharing", "16"],
    ],
  },
  {
    title: "REPORTS",
    items: [
      ["Monthly Website Analytics Report", "✓"],
      ["Monthly Keywords Ranking Report", "✓"],
      ["Monthly Off Page Submission Report", "✓"],
    ],
  },
  {
    title: "CUSTOMER SUPPORT",
    items: [
      ["Email", "✓"],
      ["Phone", "✓"],
      ["Chat", "✓"],
    ],
  },
];

  return (
    <>
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative rounded-3xl p-8 bg-gradient-to-b from-gray-900 to-black border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlight
                  ? "border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.25)]"
                  : "border-gray-800 hover:border-gray-600"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 right-6 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  BEST SELLER
                </span>
              )}

              <h3 className="text-center text-xl font-semibold text-white mb-4">
                {plan.name}
              </h3>

              <div className="text-center mb-6">
                <span
                  className={`text-5xl font-bold ${plan.color}`}
                >
                  ${plan.price}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  {plan.oldPrice}
                </span>
                <p className="text-xs text-gray-500 mt-1">/ MONTH</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <Feature key={i} item={f} />
                ))}
              </ul>

              <button
                onClick={() => {
                  setSelectedPlan(plan.name);
                  setShowDetails(true);
                }}
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BASIC PLAN DETAILS MODAL */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-10 relative shadow-2xl">

            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-5 right-6 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">
              {selectedPlan} PLAN – Complete SEO & AI Breakdown
            </h2>

            <div className="space-y-12">
              {
                (
                  selectedPlan === "BASIC"
                  ? basicDetails
                  : selectedPlan === "SILVER"
                  ? silverDetails
                  : selectedPlan === "GOLD"
                  ? goldDetails
                  : premiumDetails
                ).map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-800 pb-2">
                    {section.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-12">
                    {section.items.map((item, i) => (
                      <DetailItem
                        key={i}
                        label={item[0]}
                        value={item[1]}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  setShowDetails(false);
                  setOpen(true);
                }}
                className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
              >
                Start Now
              </button>
            </div>

          </div>
        </div>
      )}

      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}
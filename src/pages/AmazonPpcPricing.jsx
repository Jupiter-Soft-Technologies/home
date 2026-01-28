import PricingComparison from "../components/PricingComparison";

const plans = [
  { name: "Starter Amazon PPC", price: "₹15,000" },
  { name: "Growth Amazon PPC", price: "₹40,000", highlight: true },
  { name: "Enterprise Amazon PPC", price: "₹80,000" },
];

const features = [
  {
    section: "AMAZON ADS SETUP",
    items: [
      ["Sponsored Products", "✓", "✓", "✓"],
      ["Sponsored Brands", "x", "✓", "✓"],
      ["Sponsored Display", "x", "x", "✓"],
      ["Keyword Mining", "✓", "✓", "✓"],
    ],
  },
  {
    section: "OPTIMIZATION",
    items: [
      ["Search Term Mining", "✓", "✓", "✓"],
      ["Bid Optimization", "x", "✓", "✓"],
      ["Negative Keywords", "✓", "✓", "✓"],
    ],
  },
  {
    section: "REPORTING",
    items: [
      ["ACOS Optimization", "✓", "✓", "✓"],
      ["Weekly Reports", "x", "✓", "✓"],
      ["Dedicated Manager", "x", "x", "✓"],
    ],
  },
];

export default function AmazonPpcPricing() {
  return (
    <PricingComparison
      title="Amazon PPC Pricing Plans"
      plans={plans}
      features={features}
    />
  );
}

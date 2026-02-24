import PricingComparison from "../components/PricingComparison";

const plans = [
  { name: "MVP App", price: 50000 },
  { name: "Business App", price: 850000, highlight: true },
  { name: "Enterprise App", price: 120000 },
];

const features = [
  {
    section: "APP BUILD",
    items: [
      ["UI/UX Design", "✓", "✓", "✓"],
      ["Android / iOS", "x", "✓", "✓"],
      ["Backend APIs", "x", "✓", "✓"],
    ],
  },
  {
    section: "ADVANCED",
    items: [
      ["Authentication", "✓", "✓", "✓"],
      ["Payments", "x", "✓", "✓"],
      ["Admin Panel", "x", "✓", "✓"],
    ],
  },
  {
    section: "SUPPORT",
    items: [
      ["App Store Deployment", "✓", "✓", "✓"],
      ["Maintenance", "x", "✓", "✓"],
      ["Dedicated Team", "x", "x", "✓"],
    ],
  },
];

export default function AppDevPricing() {
  return (
    <PricingComparison
      title="Application Development Pricing"
      plans={plans}
      features={features}
    />
  );
}

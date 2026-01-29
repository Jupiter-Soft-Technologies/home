import PricingComparison from "../components/PricingComparison";

const plans = [
  { name: "MVP App", price: 150000 },
  { name: "Business App", price: 350000, highlight: true },
  { name: "Enterprise App", price: 800000 },
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

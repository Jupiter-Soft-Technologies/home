import PricingComparison from "../components/PricingComparison";

const plans = [
  { name: "Basic Website", price: 25000 },
  { name: "Business Website", price: 60000, highlight: true },
  { name: "Advanced Website", price: 120000 },
];

const features = [
  {
    section: "DESIGN",
    items: [
      ["UI/UX Design", "✓", "✓", "✓"],
      ["Mobile Responsive", "✓", "✓", "✓"],
      ["Custom Branding", "x", "✓", "✓"],
    ],
  },
  {
    section: "DEVELOPMENT",
    items: [
      ["React / Next.js", "x", "✓", "✓"],
      ["CMS Integration", "✓", "✓", "✓"],
      ["API Integration", "x", "x", "✓"],
    ],
  },
  {
    section: "SUPPORT",
    items: [
      ["Deployment", "✓", "✓", "✓"],
      ["Maintenance", "x", "✓", "✓"],
      ["Priority Support", "x", "x", "✓"],
    ],
  },
];

export default function WebDevPricing() {
  return (
    <PricingComparison
      title="Website Development Pricing"
      plans={plans}
      features={features}
    />
  );
}

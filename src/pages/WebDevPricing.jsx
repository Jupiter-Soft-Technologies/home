import PricingComparison from "../components/PricingComparison";

const plans = [
  { name: "Basic Website", price: "₹25,000" },
  { name: "Business Website", price: "₹60,000", highlight: true },
  { name: "Advanced Website", price: "₹1,20,000" },
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

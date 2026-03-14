import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    step: "01",
    title: "AI Market Intelligence",
    desc: "We use AI to analyze competitors, search trends, and audience behavior to identify growth opportunities.",
  },
  {
    step: "02",
    title: "Data-Driven Strategy Planning",
    desc: "AI helps generate scalable strategies for SEO, paid ads, product development, and digital marketing campaigns.",
  },
  {
    step: "03",
    title: "Keyword & Audience Prediction",
    desc: "Machine learning models identify high-impact keywords and predict audience intent for better targeting.",
  },
  {
    step: "04",
    title: "Smart Campaign Automation",
    desc: "AI automates PPC campaigns, ad creatives, bidding strategies, and social media targeting for higher ROI.",
  },
  {
    step: "05",
    title: "AI-Powered Design & UX",
    desc: "We design intuitive UI/UX experiences using behavioral data and AI-driven design insights.",
  },
  {
    step: "06",
    title: "Intelligent Development",
    desc: "Our engineers build high-performance websites, apps, and custom software powered by modern AI tools.",
  },
  {
    step: "07",
    title: "Continuous Optimization",
    desc: "AI constantly analyzes traffic, engagement, and conversion patterns to improve performance in real time.",
  },
  {
    step: "08",
    title: "Predictive Growth Scaling",
    desc: "Using predictive analytics we scale marketing, infrastructure, and digital systems for long-term growth.",
  },
];

export default function AIDrivenProcess() {
  return (
    <AnimatedSection>
      <section className="relative py-32 bg-gradient-to-b from-black via-[#0b1120] to-black text-white overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600 opacity-20 blur-[160px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative">

          {/* Header */}
          <div className="text-center mb-24">
            <span className="text-blue-400 uppercase tracking-widest text-sm">
              Our Methodology
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Our
              <span className="text-blue-500"> AI-Driven Process</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
              We combine artificial intelligence, automation, and human expertise
              to design, build, and scale digital systems that generate measurable
              growth for startups and enterprises.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {steps.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 
                rounded-2xl p-10 hover:border-blue-500 transition duration-500"
              >

                <span className="text-5xl font-bold text-blue-500">
                  {item.step}
                </span>

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}
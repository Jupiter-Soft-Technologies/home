import { useParams } from "react-router-dom";
import { portfolioProjects } from "../data/portfolioData";

export default function PortfolioProject() {

  const { slug } = useParams();

  const project = portfolioProjects.find(
    p => p.slug === slug
  );

  if (!project) {
    return (
      <div className="text-center py-40 bg-[#0b0f1a] text-white">
        Project not found
      </div>
    );
  }

  return (

    <section className="bg-[#0b0f1a] text-white py-32">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}

        <h1 className="text-5xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl mb-16 leading-relaxed">
          {project.desc}
        </p>


        {/* Project Overview */}

        <div className="mb-20">

          <h2 className="text-3xl font-semibold mb-6">
            Project Overview
          </h2>

          <p className="text-gray-400 leading-relaxed">
            {project.overview}
          </p>

        </div>


        {/* Client Goals */}

        <div className="mb-20">

          <h2 className="text-3xl font-semibold mb-6">
            Client Goals
          </h2>

          <ul className="space-y-3 text-gray-400">

            {project.goals.map((goal,i)=>(
              <li key={i}>
                • {goal}
              </li>
            ))}

          </ul>

        </div>


        {/* Our Strategy */}

        <div className="mb-20">

          <h2 className="text-3xl font-semibold mb-6">
            Our Strategy
          </h2>

          <p className="text-gray-400 leading-relaxed">
            {project.strategy}
          </p>

        </div>


        {/* Results / Metrics */}

        <div className="grid md:grid-cols-4 gap-6 mb-20">

          {project.metrics.map((metric,i)=>(

            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
            >

              <div className="text-3xl font-bold text-blue-400">
                {metric.value}
              </div>

              <div className="text-gray-400 text-sm mt-2">
                {metric.label}
              </div>

            </div>

          ))}

        </div>


        {/* Before vs After */}

        <div className="grid md:grid-cols-2 gap-12 mb-20">

          <div>

            <h3 className="text-2xl font-semibold mb-4 text-red-400">
              Before
            </h3>

            <p className="text-gray-400">
              {project.before}
            </p>

          </div>


          <div>

            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              After
            </h3>

            <p className="text-gray-400">
              {project.after}
            </p>

          </div>

        </div>


        {/* Key Features */}

        <div className="mb-20">

          <h2 className="text-3xl font-semibold mb-6">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {project.features.map((feature,i)=>(

              <div
                key={i}
                className="bg-white/5 border border-white/10 p-5 rounded-lg"
              >

                {feature}

              </div>

            ))}

          </div>

        </div>


        {/* Technology Stack */}

        <div className="mb-20">

          <h2 className="text-3xl font-semibold mb-6">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">

            {project.tech.map((tech,i)=>(

              <span
                key={i}
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>


        {/* CTA */}

        <div className="text-center mt-32">

          <h2 className="text-3xl font-semibold mb-6">
            Want Similar Results for Your Business?
          </h2>

          <p className="text-gray-400 mb-8">
            We build high-conversion websites designed to generate
            leads, sales, and business growth.
          </p>

          <a
            href="#contact"
            className="bg-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Get Free Consultation
          </a>

        </div>

      </div>

    </section>

  );

}
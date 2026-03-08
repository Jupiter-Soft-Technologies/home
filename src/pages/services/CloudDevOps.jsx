import { useEffect } from "react";
import CountUp from "react-countup";

export default function CloudDevOps() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="py-32 text-center px-6">
        <h1 className="text-5xl font-bold">
          Cloud & DevOps
          <span className="text-blue-500"> Infrastructure</span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          Scalable cloud infrastructure and automated deployment pipelines
          that improve application performance, reliability, and security.
        </p>

        <button className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition">
          Start Your Cloud Journey
        </button>
      </section>


      {/* Services Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Cloud & DevOps Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Cloud Infrastructure Setup
            </h3>
            <p className="text-gray-400">
              We design and deploy scalable cloud architectures that support
              high availability and business growth.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              CI/CD Pipelines
            </h3>
            <p className="text-gray-400">
              Automate your development workflow with continuous integration
              and deployment pipelines for faster releases.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Monitoring & Security
            </h3>
            <p className="text-gray-400">
              We implement monitoring tools and security layers to ensure
              your applications remain stable and protected.
            </p>
          </div>

        </div>
      </section>


      {/* Cloud Platforms */}
      <section className="py-24 px-6 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-16">
          Cloud Platforms We Work With
        </h2>

        <div className="flex flex-wrap justify-center gap-8 text-lg">

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            Amazon Web Services (AWS)
          </div>

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            Google Cloud Platform
          </div>

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            Microsoft Azure
          </div>

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            Docker & Kubernetes
          </div>

          <div className="bg-gray-900 px-8 py-4 rounded-lg">
            Terraform & Infrastructure as Code
          </div>

        </div>
      </section>


      {/* Benefits */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Businesses Choose Our Cloud Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg">

          <div>✔ Highly scalable cloud architecture</div>
          <div>✔ Faster application deployments</div>
          <div>✔ Reduced infrastructure costs</div>
          <div>✔ Improved system performance</div>
          <div>✔ Automated development workflows</div>
          <div>✔ Advanced security and monitoring</div>

        </div>
      </section>


      {/* Animated Stats */}
      <section className="py-24 bg-gray-950 text-center px-6">

        <h2 className="text-4xl font-bold mb-16">
          Our Cloud Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={200} duration={3}/>+
            </h3>
            <p className="text-gray-400 mt-4">
              Cloud Deployments
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={99} duration={3}/>%
            </h3>
            <p className="text-gray-400 mt-4">
              Uptime Reliability
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={70} duration={3}/>%
            </h3>
            <p className="text-gray-400 mt-4">
              Faster Deployments
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={40} duration={3}/>%
            </h3>
            <p className="text-gray-400 mt-4">
              Infrastructure Cost Savings
            </p>
          </div>

        </div>

      </section>


      {/* CTA Section */}
      <section className="py-28 text-center bg-blue-600">

        <h2 className="text-4xl font-bold">
          Ready to Scale Your Infrastructure?
        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Let our cloud experts design and deploy a secure,
          scalable infrastructure for your business.
        </p>

        <button className="mt-10 px-12 py-4 bg-black hover:bg-gray-900 rounded-xl font-semibold text-lg transition">
          Get Free Cloud Consultation
        </button>

      </section>

    </div>
  );
}
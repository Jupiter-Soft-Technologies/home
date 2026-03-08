import { useEffect } from "react";
import CountUp from "react-countup";

export default function ConversionOptimization() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="py-32 text-center px-6">
        <h1 className="text-5xl font-bold">
          Conversion Optimization
          <span className="text-blue-500"> That Increases Revenue</span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          Data-driven CRO strategies designed to turn website visitors
          into paying customers and maximize the value of every click.
        </p>

        <button className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition">
          Improve My Conversions
        </button>
      </section>


      {/* CRO Services */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Conversion Optimization Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              A/B Testing
            </h3>
            <p className="text-gray-400">
              We run controlled experiments to test different page elements
              and identify what drives the most conversions.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Landing Page Optimization
            </h3>
            <p className="text-gray-400">
              Improve landing page design, messaging, and user flow to
              increase leads and sales.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Funnel Optimization
            </h3>
            <p className="text-gray-400">
              Analyze user journeys and optimize every stage of your
              marketing funnel to reduce drop-offs.
            </p>
          </div>

        </div>

      </section>


      {/* Optimization Process */}
      <section className="py-24 px-6 bg-gray-950">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our CRO Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">01</h3>
            <p className="text-gray-400">
              Analyze user behavior and identify conversion barriers.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">02</h3>
            <p className="text-gray-400">
              Develop data-driven hypotheses for improvement.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">03</h3>
            <p className="text-gray-400">
              Run A/B tests and optimize key page elements.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">04</h3>
            <p className="text-gray-400">
              Implement winning variations and scale results.
            </p>
          </div>

        </div>

      </section>


      {/* Benefits */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Conversion Optimization Matters
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg">

          <div>✔ Turn more visitors into paying customers</div>
          <div>✔ Increase ROI from existing traffic</div>
          <div>✔ Reduce bounce rates and drop-offs</div>
          <div>✔ Improve user experience and engagement</div>
          <div>✔ Make data-driven business decisions</div>
          <div>✔ Maximize marketing performance</div>

        </div>

      </section>


      {/* Stats Section */}
      <section className="py-24 bg-gray-950 text-center px-6">

        <h2 className="text-4xl font-bold mb-16">
          Our CRO Results
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={150} duration={3}/>+
            </h3>
            <p className="text-gray-400 mt-4">
              Optimized Websites
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={80} duration={3}/>%
            </h3>
            <p className="text-gray-400 mt-4">
              Average Conversion Growth
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={3} duration={3}/>x
            </h3>
            <p className="text-gray-400 mt-4">
              Increase in Leads
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={95} duration={3}/>%
            </h3>
            <p className="text-gray-400 mt-4">
              Client Satisfaction
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-28 text-center bg-blue-600">

        <h2 className="text-4xl font-bold">
          Ready to Increase Your Website Conversions?
        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Let our CRO experts analyze your website and create
          strategies that turn visitors into loyal customers.
        </p>

        <button className="mt-10 px-12 py-4 bg-black hover:bg-gray-900 rounded-xl font-semibold text-lg transition">
          Get Free CRO Audit
        </button>

      </section>

    </div>
  );
}
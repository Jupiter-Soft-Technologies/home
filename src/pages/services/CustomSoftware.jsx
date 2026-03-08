import { useEffect } from "react";
import CountUp from "react-countup";

export default function CustomSoftware() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="py-32 text-center px-6">
        <h1 className="text-5xl font-bold">
          Custom Software
          <span className="text-blue-500"> Solutions</span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          Tailored business systems designed to automate workflows,
          streamline operations, and accelerate business growth.
        </p>

        <button className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition">
          Start Your Project
        </button>
      </section>


      {/* Services Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Custom Software Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Enterprise Software
            </h3>
            <p className="text-gray-400">
              We build powerful enterprise applications designed to
              support complex business operations and scalability.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              SaaS Applications
            </h3>
            <p className="text-gray-400">
              Custom cloud-based software solutions that allow businesses
              to launch scalable SaaS products quickly.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              System Integration
            </h3>
            <p className="text-gray-400">
              Connect your existing tools and platforms into one
              seamless workflow for maximum efficiency.
            </p>
          </div>

        </div>

      </section>


      {/* Development Process */}
      <section className="py-24 px-6 bg-gray-950">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Development Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">01</h3>
            <p className="text-gray-400">
              We analyze your business needs and define software
              requirements.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">02</h3>
            <p className="text-gray-400">
              Our team designs the architecture and user experience.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">03</h3>
            <p className="text-gray-400">
              We develop scalable software using modern technologies.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">04</h3>
            <p className="text-gray-400">
              After testing, we deploy and continuously improve the system.
            </p>
          </div>

        </div>

      </section>


      {/* Benefits Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Benefits of Custom Software
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg">

          <div>✔ Built specifically for your business workflows</div>
          <div>✔ Highly scalable and flexible architecture</div>
          <div>✔ Increased productivity and automation</div>
          <div>✔ Improved data security and control</div>
          <div>✔ Seamless integration with existing systems</div>
          <div>✔ Long-term cost efficiency</div>

        </div>

      </section>


      {/* Stats Section */}
      <section className="py-24 bg-gray-950 text-center px-6">

        <h2 className="text-4xl font-bold mb-16">
          Our Software Development Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={120} duration={3}/>+
            </h3>
            <p className="text-gray-400 mt-4">
              Software Projects
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={50} duration={3}/>+
            </h3>
            <p className="text-gray-400 mt-4">
              Enterprise Clients
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={99} duration={3}/>%
            </h3>
            <p className="text-gray-400 mt-4">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={10} duration={3}/>+
            </h3>
            <p className="text-gray-400 mt-4">
              Years Experience
            </p>
          </div>

        </div>

      </section>


      {/* CTA Section */}
      <section className="py-28 text-center bg-blue-600">

        <h2 className="text-4xl font-bold">
          Ready to Build Your Custom Software?
        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Let our experts design and develop a software solution
          tailored specifically to your business needs.
        </p>

        <button className="mt-10 px-12 py-4 bg-black hover:bg-gray-900 rounded-xl font-semibold text-lg transition">
          Get Free Consultation
        </button>

      </section>

    </div>
  );
}
import { useEffect } from "react";
import CountUp from "react-countup";

export default function UIUX() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="py-32 text-center px-6">
        <h1 className="text-5xl font-bold">
          UI / UX Design
          <span className="text-blue-500"> That Converts</span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          Beautiful, intuitive, and conversion-focused interfaces that
          enhance user experience and increase engagement.
        </p>

        <button className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition">
          Start Your Design Project
        </button>
      </section>


      {/* UI/UX Services */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our UI / UX Design Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              User Interface Design
            </h3>
            <p className="text-gray-400">
              Modern, visually stunning interfaces designed to create
              memorable digital experiences for users.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              User Experience Research
            </h3>
            <p className="text-gray-400">
              In-depth research and user analysis to understand behavior
              and improve product usability.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Wireframing & Prototyping
            </h3>
            <p className="text-gray-400">
              Interactive prototypes that allow testing and refining
              designs before development begins.
            </p>
          </div>

        </div>

      </section>


      {/* Design Process */}
      <section className="py-24 px-6 bg-gray-950">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Design Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">01</h3>
            <p className="text-gray-400">
              Research user needs and analyze product goals.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">02</h3>
            <p className="text-gray-400">
              Create wireframes and user flow structures.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">03</h3>
            <p className="text-gray-400">
              Design high-fidelity UI components and layouts.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">04</h3>
            <p className="text-gray-400">
              Test, refine, and optimize the final design experience.
            </p>
          </div>

        </div>

      </section>


      {/* Benefits */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Great UI / UX Matters
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg">

          <div>✔ Improve user satisfaction and retention</div>
          <div>✔ Increase product usability and accessibility</div>
          <div>✔ Boost conversions and engagement</div>
          <div>✔ Build stronger brand identity</div>
          <div>✔ Reduce user friction and confusion</div>
          <div>✔ Create memorable digital experiences</div>

        </div>

      </section>


      {/* Stats */}
      <section className="py-24 bg-gray-950 text-center px-6">

        <h2 className="text-4xl font-bold mb-16">
          Our Design Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={200} duration={3}/>+
            </h3>
            <p className="text-gray-400 mt-4">
              Designs Delivered
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={150} duration={3}/>+
            </h3>
            <p className="text-gray-400 mt-4">
              Happy Clients
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={90} duration={3}/>%
            </h3>
            <p className="text-gray-400 mt-4">
              Improved User Engagement
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500">
              <CountUp end={98} duration={3}/>%
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
          Ready to Elevate Your User Experience?
        </h2>

        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Let our design experts create beautiful and user-focused
          experiences that drive engagement and growth.
        </p>

        <button className="mt-10 px-12 py-4 bg-black hover:bg-gray-900 rounded-xl font-semibold text-lg transition">
          Get Free Design Consultation
        </button>

      </section>

    </div>
  );
}
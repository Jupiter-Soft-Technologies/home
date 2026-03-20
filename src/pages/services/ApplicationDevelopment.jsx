
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AppDevelopment() {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="py-32 text-center px-6 relative overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600 opacity-20 blur-[160px] rounded-full"></div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Application Development
          <span className="text-blue-500"> That Scales Your Business</span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          We design and develop powerful mobile and web applications that
          deliver exceptional user experiences and help businesses grow faster.
        </p>

      </section>


      {/* SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Application Development Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
            <p className="text-gray-400">
              High-performance Android and iOS applications designed
              to deliver smooth user experiences.
            </p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-semibold mb-4">Web Applications</h3>
            <p className="text-gray-400">
              Secure and scalable web applications that automate
              business processes.
            </p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-semibold mb-4">Custom Software</h3>
            <p className="text-gray-400">
              Tailor-made software solutions aligned with your
              business workflow and goals.
            </p>
          </div>

        </div>

      </section>

    {/* 🔥 PREMIUM APP DEV SUB SERVICES */}

<section className="py-32 px-6 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-600/20 blur-[160px] rounded-full"></div>

  <div className="relative max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center">
      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
        Explore Our
        <span className="text-blue-500"> App Solutions</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
        High-performance applications designed for growth, engagement,
        and revenue generation.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-12 mt-24">

      {/* Ecommerce App */}
      <div
        onClick={() => navigate("/services/AppDevelopment/ecommerce-app-development")}
        className="group cursor-pointer relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:scale-105 transition"
      >
        <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10 h-full">
          <div className="text-5xl mb-6">🛒</div>
          <h3 className="text-2xl font-semibold text-blue-400">
            E-commerce Apps
          </h3>
          <p className="text-gray-400 mt-4">
            Build powerful shopping apps that boost sales and customer engagement.
          </p>
          <span className="text-sm text-blue-400 mt-6 block">
            🔥 High Revenue Service →
          </span>
        </div>
      </div>

      {/* EdTech App */}
      <div
        onClick={() => navigate("/services/AppDevelopment/edtech-app-development")}
        className="group cursor-pointer relative p-[1px] rounded-3xl bg-white/10 hover:scale-105 transition"
      >
        <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10 h-full">
          <div className="text-5xl mb-6">📚</div>
          <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">
            EdTech Apps
          </h3>
          <p className="text-gray-400 mt-4">
            Create scalable education platforms with courses and live learning.
          </p>
        </div>
      </div>

      {/* Payment Integration */}
      <div
        onClick={() => navigate("/services/AppDevelopment/payment-gateway-integration")}
        className="group cursor-pointer relative p-[1px] rounded-3xl bg-white/10 hover:scale-105 transition"
      >
        <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10 h-full">
          <div className="text-5xl mb-6">💳</div>
          <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition">
            Payment Integration
          </h3>
          <p className="text-gray-400 mt-4">
            Secure and fast payment solutions for apps and platforms.
          </p>
        </div>
      </div>

    </div>

  </div>

</section>

      {/* TECHNOLOGIES */}
      <section className="py-24 px-6 bg-zinc-950">

        <h2 className="text-4xl font-bold text-center mb-16">
          Technologies We Use
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-lg">

          <span className="px-6 py-3 bg-zinc-900 rounded-xl">React</span>
          <span className="px-6 py-3 bg-zinc-900 rounded-xl">React Native</span>
          <span className="px-6 py-3 bg-zinc-900 rounded-xl">Node.js</span>
          <span className="px-6 py-3 bg-zinc-900 rounded-xl">Flutter</span>
          <span className="px-6 py-3 bg-zinc-900 rounded-xl">Firebase</span>
          <span className="px-6 py-3 bg-zinc-900 rounded-xl">MongoDB</span>

        </div>

      </section>


      {/* CROSS PLATFORM */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Cross Platform Development
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Applications that work seamlessly across Android, iOS,
          Web, and Desktop environments.
        </p>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Android Apps</h3>
            <p className="text-gray-400">
              Optimized Android applications for performance and scalability.
            </p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">iOS Apps</h3>
            <p className="text-gray-400">
              Secure and elegant apps for iPhone and iPad users.
            </p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Web Apps</h3>
            <p className="text-gray-400">
              Browser-based applications accessible from anywhere.
            </p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Desktop Apps</h3>
            <p className="text-gray-400">
              Desktop software solutions for Windows and macOS.
            </p>
          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Development Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-3">1. Planning</h3>
            <p className="text-gray-400">Define project scope and goals.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">2. Design</h3>
            <p className="text-gray-400">Create intuitive UI/UX experiences.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">3. Development</h3>
            <p className="text-gray-400">Build scalable application systems.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">4. Launch</h3>
            <p className="text-gray-400">Testing, deployment, and support.</p>
          </div>

        </div>

      </section>


      {/* HOSTING */}
      <section className="py-24 px-6 bg-zinc-950">

        <h2 className="text-4xl font-bold text-center mb-16">
          Application Hosting & Deployment
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Cloud Hosting</h3>
            <p className="text-gray-400">
              Deployment on AWS, Google Cloud, and Azure.
            </p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Scalable Infrastructure</h3>
            <p className="text-gray-400">
              Systems capable of supporting thousands of users.
            </p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
            <p className="text-gray-400">
              Continuous updates, monitoring, and security improvements.
            </p>
          </div>

        </div>

      </section>


      {/* PORTFOLIO */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Recent Application Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-Commerce App</h3>
              <p className="text-gray-400">
                Online shopping application with secure payments.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Healthcare Booking</h3>
              <p className="text-gray-400">
                Appointment system connecting doctors and patients.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Food Delivery App</h3>
              <p className="text-gray-400">
                Delivery app with live tracking and payments.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* SECURITY */}
      <section className="py-24 px-6 bg-zinc-950">

        <h2 className="text-4xl font-bold text-center mb-16">
          Security & Performance
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Data Security</h3>
            <p className="text-gray-400">
              Advanced encryption and authentication systems.
            </p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">High Performance</h3>
            <p className="text-gray-400">
              Optimized architecture for faster loading speeds.
            </p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Scalability</h3>
            <p className="text-gray-400">
              Infrastructure designed for rapid growth.
            </p>
          </div>

        </div>

      </section>


      {/* MONETIZATION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          App Monetization Strategies
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Subscriptions</h3>
            <p className="text-gray-400">Monthly premium plans.</p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">In-App Purchases</h3>
            <p className="text-gray-400">Sell digital products inside apps.</p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Advertisements</h3>
            <p className="text-gray-400">Revenue through ad networks.</p>
          </div>

          <div className="p-8 bg-zinc-900 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Freemium</h3>
            <p className="text-gray-400">Free basic features + paid upgrades.</p>
          </div>

        </div>

      </section>


      {/* PRICING */}
      <section id="pricing" className="py-32 text-center px-6 bg-zinc-950">

        <h2 className="text-4xl font-bold">
          Ready to Build Your Application?
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Let’s transform your idea into a powerful application
          that scales with your business.
        </p>

        <Link
          to="/app-pricing"
          className="mt-10 inline-block px-14 py-5 text-lg font-semibold text-white
          bg-blue-600 hover:bg-blue-700 rounded-xl transition"
        >
          Get Pricing →
        </Link>

      </section>

    </div>
  );
}


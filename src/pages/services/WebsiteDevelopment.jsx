import React from "react";
import { Link } from "react-router-dom";

export default function WebsiteDevelopment() {
    return (
        <div className="bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black text-white">

            {/* HERO */}

            <section className="py-32 text-center px-6 relative overflow-hidden">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600 opacity-20 blur-[160px] rounded-full"></div>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Website Development
                    <span className="text-blue-500"> That Grows Businesses</span>
                </h1>

                <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
                    We design and develop high-performance websites that attract users,
                    convert visitors and scale your business.
                </p>


            </section>

            {/* WHAT IS WEB DEVELOPMENT */}

            <section className="py-24 px-6 max-w-6xl mx-auto">

                <h2 className="text-4xl font-semibold mb-12 text-center">
                    What is Web Design & Development?
                </h2>

                <div className="grid md:grid-cols-2 gap-12 text-gray-400 leading-8">

                    <p>
                        Web design and development refers to the process of creating,
                        designing and maintaining websites. Web design focuses on
                        appearance and user experience, while development focuses on
                        functionality, performance and technical architecture.
                    </p>

                    <p>
                        A well designed website ensures smooth navigation, fast loading,
                        strong branding and clear conversion paths. Modern websites combine
                        UX design, front-end development and backend systems to deliver a
                        seamless digital experience.
                    </p>

                </div>

                <Link
                    to="/web-pricing"
                    className="mt-12 inline-block px-14 py-5 text-lg font-semibold text-white 
  bg-gradient-to-r from-blue-600 to-indigo-600 
  rounded-2xl shadow-lg shadow-blue-600/30 
  hover:shadow-xl hover:shadow-blue-500/40 
  hover:scale-105 hover:from-blue-700 hover:to-indigo-700
  transition-all duration-300"
                >
                    Get Started →
                </Link>

            </section>

            {/* WHY INVEST */}

            <section className="py-24 px-6">

                <h2 className="text-4xl font-semibold text-center mb-16">
                    Why Invest in Professional Web Development?
                </h2>

                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

                    {[
                        "Attract Mobile Audience",
                        "Drive Organic Traffic",
                        "Boost Sales & ROI",
                        "Increase Customer Base",
                        "Generate Qualified Leads",
                        "Improve Conversion Rates"
                    ].map((item, i) => (

                        <div
                            key={i}
                            className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500 hover:scale-105 transition"
                        >

                            <h3 className="text-xl font-semibold text-blue-400 mb-3">
                                {item}
                            </h3>

                            <p className="text-gray-400">
                                Our websites are designed for performance, usability and
                                conversion so your business grows faster online.
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* PROCESS */}

            <section className="py-24 px-6">

                <h2 className="text-4xl font-semibold text-center mb-16">
                    Our Development Process
                </h2>

                <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">

                    {[
                        "Research & Planning",
                        "UI/UX Design",
                        "Development",
                        "Testing & Launch",
                        "SEO Optimization",
                        "Performance Tuning",
                        "Security Setup",
                        "Ongoing Support"
                    ].map((step, i) => (

                        <div
                            key={i}
                            className="p-8 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-blue-600/10 transition"
                        >

                            <h3 className="text-blue-500 font-semibold">
                                Step {i + 1}
                            </h3>

                            <p className="text-gray-400 mt-3">
                                {step}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* SERVICES */}

            <section className="py-24 px-6">

                <h2 className="text-4xl font-semibold text-center mb-16">
                    Our Web Development Services
                </h2>

                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

                    {[
                        "Ecommerce Development",
                        "Shopify Development",
                        "WordPress Development",
                        "Custom Web Applications",
                        "Website Redesign",
                        "Payment Gateway Integration",
                        "CMS Development",
                        "SEO Optimization",
                        "Website Maintenance"
                    ].map((service, i) => (

                        <div
                            key={i}
                            className="p-8 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition"
                        >

                            {service}

                        </div>

                    ))}

                </div>

            </section>

            {/* INDUSTRIES */}

            <section className="py-24 px-6">

                <h2 className="text-4xl font-semibold text-center mb-16">
                    Industries We Serve
                </h2>

                <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto text-gray-400 text-center">

                    {[
                        "Real Estate",
                        "Healthcare",
                        "Education",
                        "Finance",
                        "Restaurants",
                        "Fitness",
                        "Ecommerce",
                        "Hospitality",
                        "Law Firms",
                        "Retail"
                    ].map((industry, i) => (

                        <div
                            key={i}
                            className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600/10 transition"
                        >

                            {industry}

                        </div>

                    ))}

                </div>

            </section>

            {/* CTA */}

            <section className="py-24 text-center">

                <h2 className="text-4xl font-semibold">
                    Ready to Build Your Website?
                </h2>

                <p className="text-gray-400 mt-6 max-w-xl mx-auto">
                    Let’s create a high-performing website that attracts customers and
                    grows your business.
                </p>
                <Link to="/web-pricing">
                    <button className="mt-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
                        Get Started
                    </button>
                </Link>

            </section>

        </div>
    );
}
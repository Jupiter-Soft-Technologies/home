import React from "react";
import { Button } from "../../../ui/button";
import {
    Star,
    ShieldCheck,
    Smile,
    Award,
    ChevronRight,
} from "lucide-react";

export default function Home() {
    return (
        <div className="pt-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

            {/* ================= HERO ================= */}
            <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-900 dark:to-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Modern Dental Care <br />
                            For Confident Smiles
                        </h1>
                        <p className="text-lg opacity-90 mb-8">
                            Experience pain-free, advanced dental treatments delivered by
                            certified professionals using the latest technology.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-white text-blue-700 hover:bg-blue-50">
                                Book Appointment <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="border-white text-white">
                                View Services
                            </Button>
                        </div>

                        {/* Trust badges */}
                        <div className="flex gap-6 mt-10 opacity-90 text-sm">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5" /> ISO Certified Clinic
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5" /> 15+ Years Experience
                            </div>
                        </div>
                    </div>

                    {/* Hero Image Placeholder */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl"></div>
                        <div className="relative bg-white/10 backdrop-blur rounded-3xl p-10 text-center">
                            <Smile className="mx-auto h-24 w-24 mb-6 opacity-90" />
                            <p className="text-lg">
                                Trusted by <strong>10,000+</strong> happy patients
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
                    {[
                        { title: "15+", desc: "Years Experience" },
                        { title: "10K+", desc: "Happy Patients" },
                        { title: "100%", desc: "Safety Standards" },
                        { title: "24/7", desc: "Emergency Support" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-6">
                        Our Specialized Treatments
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
                        Advanced dental services designed to keep your smile healthy and confident.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Cosmetic Dentistry",
                                img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
                            },
                            {
                                title: "Dental Implants",
                                img: "https://images.unsplash.com/photo-1606811842642-7d55d45f2c1d",
                            },
                            {
                                title: "Orthodontics",
                                img: "https://images.unsplash.com/photo-1606811841780-2f03c06b7a87",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="relative h-80 rounded-2xl overflow-hidden group shadow-lg"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                />
                                <div className="absolute inset-0 bg-black/60" />
                                <div className="relative z-10 p-6 flex items-end h-full">
                                    <h3 className="text-white text-2xl font-semibold">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= WHY US ================= */}
            <section className="py-24 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Experienced Doctors",
                            desc: "Certified dentists with international exposure.",
                        },
                        {
                            title: "Pain-Free Procedures",
                            desc: "Advanced equipment for comfortable treatments.",
                        },
                        {
                            title: "Transparent Pricing",
                            desc: "No hidden charges. Honest consultation.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="bg-white/10 p-8 rounded-2xl backdrop-blur">
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="opacity-90">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        What Our Patients Say
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {["Sarah Johnson", "Mike Chen", "Emma Wilson"].map((name, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow"
                            >
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, j) => (
                                        <Star
                                            key={j}
                                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    “Professional staff, painless treatment, and amazing results.
                                    Highly recommended!”
                                </p>
                                <strong>{name}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Ready to Transform Your Smile?
                </h2>
                <p className="mb-8 opacity-90">
                    Schedule your consultation today and experience world-class dental care.
                </p>
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                    Book Appointment Now
                </Button>
            </section>
        </div>
    );
}

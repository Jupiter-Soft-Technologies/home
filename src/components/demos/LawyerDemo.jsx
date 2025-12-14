import React from "react";
import { Scale, Shield, FileText, Users, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const practiceAreas = [
  { title: "Corporate Law", icon: <FileText className="w-8 h-8" />, desc: "Business formation and contracts" },
  { title: "Family Law", icon: <Users className="w-8 h-8" />, desc: "Divorce and custody matters" },
  { title: "Criminal Defense", icon: <Shield className="w-8 h-8" />, desc: "Protecting your rights" },
  { title: "Estate Planning", icon: <Scale className="w-8 h-8" />, desc: "Wills and trusts" },
];

export default function LawyerDemo() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBvZmZpY2V8ZW58MXx8fHwxNzY1NjM4MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/85"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-12 h-12 text-amber-500" />
              <span className="text-amber-500 tracking-wider uppercase text-sm">Justice & Integrity</span>
            </div>
            <h1 className="mb-6">Sterling & Associates</h1>
            <p className="text-xl mb-8 opacity-90">
              Experienced legal representation you can trust. Over 25 years of excellence in serving our clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 transform hover:scale-105 transition-all">
                Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Our Practice Areas
              </Button>
            </div>
          </div>
        </div>

        {/* 3D Decorative Elements */}
        <div className="absolute top-1/4 right-20 w-64 h-64 border-2 border-amber-500/30 rounded-lg transform rotate-12 animate-pulse"></div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Practice Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateY(0deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(-8deg) translateZ(20px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(0deg) translateZ(0px)`;
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-amber-600/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-amber-600 mb-4">{area.icon}</div>
                  <h3 className="mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{area.desc}</p>
                  <div className="text-amber-600 flex items-center gap-2 text-sm">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-5xl mb-4">25+</div>
            <h3 className="mb-2">Years of Experience</h3>
            <p className="text-gray-400">Proven track record of success</p>
          </div>
          <div className="p-6">
            <div className="text-5xl mb-4">500+</div>
            <h3 className="mb-2">Cases Won</h3>
            <p className="text-gray-400">Fighting for justice</p>
          </div>
          <div className="p-6">
            <div className="text-5xl mb-4">100%</div>
            <h3 className="mb-2">Client Focused</h3>
            <p className="text-gray-400">Your success is our priority</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="mb-6">Schedule a Consultation</h2>
                <p className="mb-8 opacity-90">
                  Don't face your legal challenges alone. Contact us today for expert guidance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-amber-500" />
                    <p>(555) 987-6543</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-amber-500" />
                    <p>contact@sterlinglaw.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-amber-500" />
                    <p>456 Justice Boulevard, Suite 200, Chicago, IL 60601</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 w-full md:w-auto px-12 transform hover:scale-105 transition-all">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

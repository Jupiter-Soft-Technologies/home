import React from "react";
import { TrendingUp, PiggyBank, LineChart, Shield, Award, Users, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

const services = [
  { 
    title: "Wealth Management", 
    icon: <TrendingUp className="w-10 h-10" />,
    desc: "Grow and protect your wealth with personalized strategies"
  },
  { 
    title: "Retirement Planning", 
    icon: <PiggyBank className="w-10 h-10" />,
    desc: "Secure your future with comprehensive retirement solutions"
  },
  { 
    title: "Investment Advisory", 
    icon: <LineChart className="w-10 h-10" />,
    desc: "Expert guidance for portfolio optimization"
  },
  { 
    title: "Risk Management", 
    icon: <Shield className="w-10 h-10" />,
    desc: "Protect your assets with strategic planning"
  },
];

export default function FinancialDemo() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjU2MjE3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 to-purple-900/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="mb-6">Building Wealth, Securing Futures</h1>
            <p className="text-xl mb-8 opacity-90">
              Expert financial planning and wealth management services tailored to your goals
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* 3D Card Display */}
          <div className="hidden md:block">
            <div 
              className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20"
              style={{
                transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="text-white space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-75">Portfolio Growth</span>
                  <ArrowUpRight className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-5xl">+24.5%</div>
                <div className="text-sm opacity-75">Year-over-year returns</div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions designed to help you achieve your goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateX(0deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(-10deg) translateY(-10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) translateY(0px)`;
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl mb-3">$5B+</div>
              <p className="opacity-90">Assets Under Management</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-3">10K+</div>
              <p className="opacity-90">Satisfied Clients</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-3">30+</div>
              <p className="opacity-90">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-3">98%</div>
              <p className="opacity-90">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-md">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="mb-3">Award-Winning Service</h3>
              <p className="text-gray-600">Recognized industry leader with multiple accolades for excellence</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-md">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="mb-3">Expert Advisors</h3>
              <p className="text-gray-600">Certified professionals with decades of combined experience</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-md">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="mb-3">Secure & Trusted</h3>
              <p className="text-gray-600">Bank-level security and fiduciary commitment to your interests</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Start Your Financial Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a complimentary consultation with one of our expert advisors
          </p>
          <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-12 transform hover:scale-110 transition-all">
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}

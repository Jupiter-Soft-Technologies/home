import React from "react";
import { Wrench, Droplets, Flame, ShowerHead, Phone, Clock, CheckCircle, Star } from "lucide-react";
import { Button } from "../ui/button";

const services = [
  { title: "Emergency Repairs", icon: <Wrench className="w-10 h-10" />, desc: "24/7 emergency service" },
  { title: "Leak Detection", icon: <Droplets className="w-10 h-10" />, desc: "Advanced leak finding" },
  { title: "Water Heaters", icon: <Flame className="w-10 h-10" />, desc: "Installation & repair" },
  { title: "Bathroom Remodeling", icon: <ShowerHead className="w-10 h-10" />, desc: "Complete renovations" },
];

export default function PlumberDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1654440122140-f1fc995ddb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwdG9vbHN8ZW58MXx8fHwxNzY1NTg5MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <div className="mb-6">
            <Droplets className="w-20 h-20 mx-auto mb-4 animate-bounce" />
            <h1 className="mb-4">QuickFlow Plumbing</h1>
          </div>
          <p className="text-2xl mb-8">
            Fast, Reliable Plumbing Services - Available 24/7
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-110 transition-all shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) PLUMBER
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-800">
              Book Online
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Same-Day Service</span>
            </div>
          </div>
        </div>

        {/* Animated Water Drops */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-white rounded-full animate-drop opacity-60"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-white rounded-full animate-drop-delayed opacity-60"></div>
        <div className="absolute top-32 right-1/4 w-5 h-5 bg-white rounded-full animate-drop-slow opacity-60"></div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-orange-500 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8" />
            <div>
              <p className="text-sm opacity-90">Emergency Service Available</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
            Get Immediate Help
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-3 cursor-pointer group"
                style={{
                  transform: `perspective(1000px) rotateX(0deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(10deg) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) scale(1)`;
                }}
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Why Choose QuickFlow?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Fast Response</h3>
              <p className="text-gray-600">We arrive within 60 minutes for emergencies</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Highly Rated</h3>
              <p className="text-gray-600">4.9/5 stars from over 500 reviews</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2">Guaranteed Work</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Need a Plumber Right Now?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait for a small problem to become a big disaster. Call us today!
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 transform hover:scale-110 transition-all shadow-lg">
            <Phone className="mr-2 h-6 w-6" />
            Call (555) 765-4321
          </Button>
        </div>
      </section>

      <style>{`
        @keyframes drop {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { transform: translateY(100vh) scale(0.5); opacity: 0; }
        }
        @keyframes drop-delayed {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { transform: translateY(100vh) scale(0.5); opacity: 0; }
        }
        @keyframes drop-slow {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { transform: translateY(100vh) scale(0.5); opacity: 0; }
        }
        .animate-drop {
          animation: drop 4s linear infinite;
        }
        .animate-drop-delayed {
          animation: drop-delayed 5s linear infinite 1s;
        }
        .animate-drop-slow {
          animation: drop-slow 6s linear infinite 2s;
        }
      `}</style>
    </div>
  );
}

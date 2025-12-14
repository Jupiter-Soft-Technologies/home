import React from "react";
import { Shield, Heart, Home, Car, Umbrella, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";

const coverageTypes = [
  { 
    title: "Life Insurance", 
    icon: <Heart className="w-10 h-10" />,
    desc: "Protect your family's financial future",
    features: ["Term Life", "Whole Life", "Universal Life"]
  },
  { 
    title: "Home Insurance", 
    icon: <Home className="w-10 h-10" />,
    desc: "Comprehensive coverage for your property",
    features: ["Property Damage", "Liability", "Personal Belongings"]
  },
  { 
    title: "Auto Insurance", 
    icon: <Car className="w-10 h-10" />,
    desc: "Complete protection on the road",
    features: ["Collision", "Comprehensive", "Liability"]
  },
  { 
    title: "Umbrella Policy", 
    icon: <Umbrella className="w-10 h-10" />,
    desc: "Extra liability protection",
    features: ["Extended Coverage", "Legal Defense", "Peace of Mind"]
  },
];

export default function InsuranceDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542665093852-744c79500d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2NTcwMjE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-16 h-16 animate-pulse" />
            </div>
            <h1 className="mb-6">Shield Insurance Group</h1>
            <p className="text-2xl mb-8 opacity-90">
              Comprehensive protection for everything that matters most
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 transform hover:scale-105 transition-all">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900">
                Learn More
              </Button>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Licensed Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>24/7 Claims Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Competitive Rates</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Floating Shields */}
        <div className="absolute top-20 right-20 opacity-20">
          <Shield className="w-32 h-32 animate-float" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Shield className="w-24 h-24 animate-float-delayed" />
        </div>
      </section>

      {/* Coverage Types Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Coverage Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored insurance solutions to protect what you value most
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageTypes.map((coverage, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateY(0deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(5deg) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(0deg) scale(1)`;
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{coverage.icon}</div>
                  <h3 className="mb-2">{coverage.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{coverage.desc}</p>
                  <ul className="space-y-2">
                    {coverage.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Why Choose Shield Insurance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="mb-3">Award-Winning</h3>
              <p className="text-gray-600">Recognized for outstanding customer service and claims handling</p>
            </div>
            <div className="text-center p-8">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="mb-3">Best Rates</h3>
              <p className="text-gray-600">Competitive pricing without compromising on coverage</p>
            </div>
            <div className="text-center p-8">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="mb-3">Fast Claims</h3>
              <p className="text-gray-600">Quick and hassle-free claims processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl mb-3">50K+</div>
            <p className="opacity-90">Policies Issued</p>
          </div>
          <div>
            <div className="text-5xl mb-3">98%</div>
            <p className="opacity-90">Customer Satisfaction</p>
          </div>
          <div>
            <div className="text-5xl mb-3">40+</div>
            <p className="opacity-90">Years in Business</p>
          </div>
          <div>
            <div className="text-5xl mb-3">24/7</div>
            <p className="opacity-90">Support Available</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Shield Insurance made the process so easy. Their agents are knowledgeable and truly care about finding the right coverage."
              </p>
              <p>- Jennifer Martinez</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "When I had a claim, they handled everything quickly and professionally. Highly recommend!"
              </p>
              <p>- Robert Thompson</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Get Your Free Quote Today</h2>
              <p className="text-xl mb-8 opacity-90">
                Protect what matters most with comprehensive coverage tailored to your needs
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <p>(555) 234-5678</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <p>quotes@shieldinsurance.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl text-gray-900 transform hover:scale-105 transition-all">
              <h3 className="mb-6">Quick Quote Form</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300">
                  <option>Select Coverage Type</option>
                  <option>Life Insurance</option>
                  <option>Home Insurance</option>
                  <option>Auto Insurance</option>
                  <option>Umbrella Policy</option>
                </select>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  Get My Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
}

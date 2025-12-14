import React from "react";
import { Coffee, UtensilsCrossed, Clock, MapPin, Star, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "../ui/button";

const menuCategories = [
  { 
    name: "Breakfast", 
    icon: <Coffee className="w-8 h-8" />,
    items: ["Avocado Toast", "Belgian Waffles", "Farm Eggs Benedict"]
  },
  { 
    name: "Lunch & Dinner", 
    icon: <UtensilsCrossed className="w-8 h-8" />,
    items: ["Truffle Pasta", "Grilled Salmon", "Wagyu Burger"]
  },
  { 
    name: "Desserts", 
    icon: "🍰",
    items: ["Tiramisu", "Chocolate Lava Cake", "Crème Brûlée"]
  },
  { 
    name: "Beverages", 
    icon: "☕",
    items: ["Artisan Coffee", "Fresh Juices", "Craft Cocktails"]
  },
];

const specialties = [
  { title: "Farm-to-Table", desc: "Fresh, locally-sourced ingredients" },
  { title: "Chef's Specials", desc: "Rotating seasonal menu" },
  { title: "Wine Selection", desc: "Curated collection of fine wines" },
];

export default function RestaurantDemo() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1724589511191-1ced6d014934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2FmZXxlbnwxfHx8fDE3NjU3MDIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <div className="mb-8">
            <UtensilsCrossed className="w-20 h-20 mx-auto mb-4 text-amber-400" />
            <h1 className="mb-4">The Golden Spoon</h1>
            <p className="text-xl opacity-90">Where Culinary Art Meets Passion</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 transform hover:scale-105 transition-all">
              Reserve a Table
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black">
              View Menu
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="ml-2">4.9/5 • 2,500+ Reviews</span>
          </div>
        </div>

        {/* Floating Food Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-30 animate-float">🍽️</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-30 animate-float-delayed">☕</div>
        <div className="absolute top-40 right-20 text-5xl opacity-30 animate-float-slow">🥖</div>
      </section>

      {/* Info Banner */}
      <section className="bg-amber-600 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6" />
            <div>
              <p className="text-sm opacity-90">Open Daily</p>
              <p>8:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <div>
              <p className="text-sm opacity-90">Visit Us</p>
              <p>123 Gourmet Avenue, NYC</p>
            </div>
          </div>
          <Button className="bg-white text-amber-600 hover:bg-amber-50">
            <Phone className="mr-2 h-4 w-4" />
            Call (555) FOOD-123
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">Our Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                style={{
                  transform: `perspective(1000px) rotateY(0deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(-10deg) translateZ(30px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(0deg) translateZ(0px)`;
                }}
              >
                <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                  {typeof category.icon === 'string' ? (
                    <div className="text-5xl">{category.icon}</div>
                  ) : (
                    category.icon
                  )}
                </div>
                <h3 className="mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-amber-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-800 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-16">What Makes Us Special</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, idx) => (
              <div key={idx} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                <h3 className="mb-3">{specialty.title}</h3>
                <p className="opacity-90">{specialty.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Experience the Ambiance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, idx) => (
              <div
                key={idx}
                className="h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div 
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1724589511191-1ced6d014934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2FmZXxlbnwxfHx8fDE3NjU3MDIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">What Our Guests Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Absolutely exceptional! The food, service, and atmosphere exceeded all expectations. A true culinary gem!"
              </p>
              <p>- Emily Rodriguez</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Best dining experience in the city! Every dish was a masterpiece. Can't wait to return!"
              </p>
              <p>- David Chen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-6">Reserve Your Table Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us for an unforgettable dining experience
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 px-12 transform hover:scale-110 transition-all">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600">
              Order Takeout
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-10deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 1s;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
}

import React from "react";
import { Home, Key, DollarSign, MapPin, Bed, Bath, Square, Search } from "lucide-react";
import { Button } from "../ui/button";

const featuredListings = [
  { 
    price: "$850,000", 
    address: "123 Oak Street", 
    city: "Beverly Hills, CA",
    beds: 4, 
    baths: 3, 
    sqft: "2,800" 
  },
  { 
    price: "$1,200,000", 
    address: "456 Palm Avenue", 
    city: "Malibu, CA",
    beds: 5, 
    baths: 4, 
    sqft: "3,500" 
  },
  { 
    price: "$675,000", 
    address: "789 Sunset Blvd", 
    city: "Los Angeles, CA",
    beds: 3, 
    baths: 2, 
    sqft: "2,100" 
  },
];

export default function RealEstateDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaG91c2V8ZW58MXx8fHwxNzY1NzAyMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="mb-6">Find Your Dream Home</h1>
          <p className="text-2xl mb-12 opacity-90">
            Luxury real estate that exceeds expectations
          </p>
          
          {/* Search Bar with 3D Effect */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto transform hover:scale-105 transition-all"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                 transform: 'perspective(1000px) rotateX(5deg)',
               }}>
            <div className="grid md:grid-cols-4 gap-4">
              <input 
                type="text" 
                placeholder="Location" 
                className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900"
              />
              <select className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900">
                <option>Property Type</option>
                <option>House</option>
                <option>Condo</option>
                <option>Apartment</option>
              </select>
              <select className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900">
                <option>Price Range</option>
                <option>$0 - $500k</option>
                <option>$500k - $1M</option>
                <option>$1M+</option>
              </select>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Floating 3D Shapes */}
        <div className="absolute top-20 right-10 w-24 h-24 border-4 border-emerald-500/30 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-4 border-emerald-500/30 rounded-full animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl mb-2">500+</div>
            <p className="opacity-90">Properties Sold</p>
          </div>
          <div>
            <div className="text-5xl mb-2">$2B+</div>
            <p className="opacity-90">Total Value</p>
          </div>
          <div>
            <div className="text-5xl mb-2">15+</div>
            <p className="opacity-90">Years Experience</p>
          </div>
          <div>
            <div className="text-5xl mb-2">98%</div>
            <p className="opacity-90">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Featured Properties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredListings.map((listing, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                style={{
                  transform: `perspective(1000px) rotateY(0deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(-5deg) translateZ(20px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(0deg) translateZ(0px)`;
                }}
              >
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaG91c2V8ZW58MXx8fHwxNzY1NzAyMTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                    }}
                  ></div>
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full">
                    {listing.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2">{listing.address}</h3>
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {listing.city}
                  </p>
                  <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{listing.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{listing.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{listing.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="mb-3">Buy a Home</h3>
              <p className="text-gray-600">Find your perfect property with our expert guidance</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="mb-3">Sell a Home</h3>
              <p className="text-gray-600">Get top dollar for your property with our marketing</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="mb-3">Rent a Home</h3>
              <p className="text-gray-600">Discover rental properties that fit your lifestyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experienced agents help you navigate the real estate market
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-12 transform hover:scale-110 transition-all">
            Contact an Agent
          </Button>
        </div>
      </section>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

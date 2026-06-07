import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, CheckCircle } from 'lucide-react';
import Pets from "../assets/Mains/Cancer Statistics In Pets - Types of Cancer Found in Dogs & Cats.jpg";

const HeroSection = () => {
  return (
    <section className="bg-[#FDF2E9] min-h-[600px] px-6 py-12 md:px-16 md:py-24 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D1FAE5] text-[#065F46] px-4 py-1.5 rounded-full text-sm font-semibold">
            <Heart size={16} fill="currentColor" />
            Loved by 10,000+ pet parents
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#2D1B14] leading-[1.1] tracking-tight">
            Everything <br />
            your pet <br />
            needs, in one <br />
            place.
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-[#5C4D46] max-w-md leading-relaxed">
            Premium supplies, gentle grooming & boarding, and trusted veterinary 
            care — delivered with warmth and a wagging tail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/Shop">
              <button className="bg-[#BC4626] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#A33B1F] transition-all shadow-lg shadow-orange-900/10">
                Shop Now
              </button>
            </Link>
            
            <Link to="/grooming">
              <button className="bg-white text-[#2D1B14] border border-gray-100 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all shadow-sm">
                Book Grooming
              </button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-[#5C4D46] font-medium">
              <Star className="text-[#BC4626]" size={18} fill="currentColor" />
              <span>4.9/5 reviews</span>
            </div>
            <div className="flex items-center gap-2 text-[#5C4D46] font-medium">
              <CheckCircle className="text-[#34D399]" size={18} />
              <span>Certified vets</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src={Pets}
              alt="Golden Retriever and long-haired cat" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
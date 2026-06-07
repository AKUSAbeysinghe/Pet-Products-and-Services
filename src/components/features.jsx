import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Scissors, Stethoscope } from 'lucide-react';
import Shop from "../assets/supplies/dog toys 🐾.jpg";
import Grooming from '../assets/Grooming/Pet grooming.jpg';
import VeterinaryCare from '../assets/vet/vet.jpg';

const FeaturesSection = () => {
  const features = [
    {
      title: "Pet Supplies",
      description: "Curated foods, toys, beds & accessories from brands you trust.",
      icon: <ShoppingBag size={20} className="text-[#1B3B36]" />,
      image: Shop,
      link: "/Shop"
    },
    {
      title: "Grooming & Boarding",
      description: "Spa-style baths, cuts, and cozy overnight stays.",
      icon: <Scissors size={20} className="text-[#1B3B36]" />,
      image: Grooming,
      link: "/grooming"
    },
    {
      title: "Veterinary Care",
      description: "Wellness exams, vaccines, and diagnostics from caring vets.",
      icon: <Stethoscope size={20} className="text-[#1B3B36]" />,
      image: VeterinaryCare,
      link: "/vetcare"
    }
  ];

  return (
    <section className="bg-[#FDF8F3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#2D1B14] mb-4">
            Three ways we care
          </h2>
          <p className="text-xl text-[#5C4D46]">
            From pantry to grooming table to exam room.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col h-full shadow-sm">
              {/* Image Container */}
              <div className="h-64 w-full">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="bg-[#D1FAE5] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-[#2D1B14] mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-[#5C4D46] text-lg leading-relaxed mb-8 flex-grow">
                  {feature.description}
                </p>

                {/* Updated Explore Link */}
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-[#BC4626] font-bold text-lg hover:underline transition-all"
                >
                  Explore <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
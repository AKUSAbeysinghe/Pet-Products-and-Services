import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The grooming team treats Biscuit like royalty. He actually pulls me into the shop now!",
      author: "Sarah & Biscuit"
    },
    {
      quote: "Friendly vets who took the time to explain everything. Luna's first checkup was stress-free.",
      author: "Marcus & Luna"
    },
    {
      quote: "One-stop shop for all of Mochi's food and toys. The recommendations are spot on.",
      author: "Priya & Mochi"
    }
  ];

  return (
    <section className="bg-[#FDF2E9] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-bold text-[#2D1B14] mb-16">
          Loved by happy tails
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[2.5rem] flex flex-col justify-between shadow-sm border border-[#F3E8E0]/50"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-[#BC4626] fill-[#BC4626]" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#2D1B14] text-xl leading-relaxed font-medium mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="text-[#5C4D46] text-lg font-medium">
                — {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
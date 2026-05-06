import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-[#FDF8F3] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#FFD8B9] to-[#FFC3A0] rounded-[4rem] py-20 px-8 text-center shadow-sm">
          
          {/* Subtle Radial Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-40"></div>

          <div className="relative z-10 space-y-6">
            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-bold text-[#2D1B14] tracking-tight">
              Come say hi — bring the pup.
            </h2>

            {/* Subtext */}
            <p className="text-xl text-[#5C4D46] font-medium">
              Drop in for a treat or book your pet's next appointment online.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#BC4626] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#A33B1F] transition-all shadow-lg shadow-orange-900/20 active:scale-95">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
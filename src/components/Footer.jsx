import React from 'react';
import { PawPrint } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FDF2E9] pt-20 pb-10 px-6 border-t border-[#F3E8E0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#BC4626] p-2 rounded-full">
                <PawPrint className="text-white w-5 h-5" />
              </div>
              <span className="text-3xl font-bold text-[#2D1B14] tracking-tight">
                Pawsome
              </span>
            </div>
            <p className="text-[#5C4D46] text-lg max-w-sm leading-relaxed">
              Premium pet supplies, gentle grooming & boarding, and 
              trusted veterinary care — all under one warm, friendly roof.
            </p>
          </div>

          {/* Spacer for layout */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Explore Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xl font-bold text-[#2D1B14]">Explore</h4>
            <ul className="space-y-3">
              <li><a href="/Shop" className="text-[#5C4D46] hover:text-[#BC4626] transition-colors text-lg">Pet Supplies</a></li>
              <li><a href="/grooming" className="text-[#5C4D46] hover:text-[#BC4626] transition-colors text-lg">Grooming & Boarding</a></li>
              <li><a href="/vetcare" className="text-[#5C4D46] hover:text-[#BC4626] transition-colors text-lg">Veterinary Care</a></li>
            </ul>
          </div>

          {/* Visit Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xl font-bold text-[#2D1B14]">Visit</h4>
            <ul className="space-y-3 text-[#5C4D46] text-lg">
              <li>123 Bark Street</li>
              <li>Mon–Sat: 8am – 8pm</li>
              <li>(555) 010–PAWS</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#F3E8E0] text-center">
          <p className="text-[#5C4D46]">
            © 2026 Pawsome. Made with love for pets.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
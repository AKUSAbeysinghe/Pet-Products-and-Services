import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/Shop' },
    { name: 'Grooming', path: '/grooming' },
    { name: 'Vet Care', path: '/vetcare' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#FDF8F3] border-b border-gray-100">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <div className="bg-[#BC4626] p-2 rounded-full">
          <PawPrint className="text-white w-5 h-5" />
        </div>
        <span className="text-2xl font-bold text-[#2D1B14] tracking-tight">
          Pawsome
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium transition-colors ${
                isActive
                  ? 'text-[#BC4626]'
                  : 'text-[#5C4D46] hover:text-[#BC4626]'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* CTA Button */}
      <Link to="/book-visit">
        <button className="bg-[#BC4626] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#A33B1F] transition-all shadow-sm">
          Book a Visit
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
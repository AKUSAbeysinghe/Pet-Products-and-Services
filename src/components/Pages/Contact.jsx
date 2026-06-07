import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-[#FDF8F3]">
      {/* ================= HEADER ================= */}
      <section className="bg-[#FDF2E9] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-[#BC4626] font-semibold uppercase tracking-widest text-sm mb-4">
            Contact Us
          </h4>
          <h2 className="text-5xl md:text-6xl font-bold text-[#2D1B14] mb-6 tracking-tight">
            We’re here for you and your pet
          </h2>
          <p className="text-xl text-[#5C4D46] max-w-2xl mx-auto">
            Have questions about supplies, grooming, vet care, or appointments? 
            Our team is always happy to help.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* PHONE */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl border border-gray-100 text-center transition-all">
            <div className="flex justify-center text-[#BC4626] mb-6">
              <Phone size={56} strokeWidth={1.6} />
            </div>
            <h3 className="text-3xl font-bold text-[#2D1B14] mb-3">Call Us</h3>
            <p className="text-[#5C4D46] text-xl">+94 11 234 5678</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl border border-gray-100 text-center transition-all">
            <div className="flex justify-center text-[#BC4626] mb-6">
              <Mail size={56} strokeWidth={1.6} />
            </div>
            <h3 className="text-3xl font-bold text-[#2D1B14] mb-3">Email Us</h3>
            <p className="text-[#5C4D46] text-xl">hello@pawsome.lk</p>
          </div>

          {/* LOCATION */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl border border-gray-100 text-center transition-all">
            <div className="flex justify-center text-[#BC4626] mb-6">
              <MapPin size={56} strokeWidth={1.6} />
            </div>
            <h3 className="text-3xl font-bold text-[#2D1B14] mb-3">Visit Us</h3>
            <p className="text-[#5C4D46] text-xl">Colombo, Sri Lanka</p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[3rem] bg-gradient-to-br from-[#BC4626] to-[#A33B1F] px-8 md:px-20 py-20 text-center text-white shadow-xl">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Need immediate help?
            </h2>
            <p className="mt-6 text-xl text-orange-100 max-w-2xl mx-auto">
              Our team is just a message away. Book an appointment or get quick support for your pet.
            </p>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-12 py-4 bg-white text-[#BC4626] rounded-full font-bold text-lg hover:bg-orange-50 transition-all active:scale-95"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
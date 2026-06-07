import React from "react";
import { PawPrint, Calendar, Heart, Shield, Stethoscope } from 'lucide-react';
import VetCare from "../../assets/vet/Dog Euthanasia – Speak to a Vet and Book Now.jpg";

const VetHeader = () => {
  return (
    <section className="bg-[#FDF8F3] py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="text-[#BC4626] font-semibold uppercase tracking-wide text-sm mb-4">Veterinary Clinic</h4>
          <h2 className="text-5xl font-bold text-[#2D1B14] mb-6 leading-tight">
            Caring Vets,<br />Calm Visits
          </h2>
          <p className="text-lg text-[#5C4D46] max-w-lg">
            From puppy's first checkup to senior wellness, our team blends modern medicine with a gentle, fear-free approach. 
            Plus, fill prescriptions right at our retail pharmacy.
          </p>
          <div className="mt-8">
            <a 
              href="#vet-services" 
              className="inline-block px-8 py-4 bg-[#BC4626] text-white rounded-full font-semibold hover:bg-[#A33B1F] transition"
            >
              Schedule Visit
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={VetCare}
            alt="Veterinary Care" 
            className="w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

/* ================= VET SERVICE CARD ================= */
const VetServiceCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
    <div className="w-16 h-16 bg-[#FFF4ED] rounded-2xl flex items-center justify-center text-[#BC4626] mb-6">
      {icon}
    </div>
    
    <h3 className="text-2xl font-bold text-[#2D1B14] mb-4">{title}</h3>
    
    <p className="text-[#5C4D46] leading-relaxed flex-grow">
      {description}
    </p>

    <button className="mt-8 w-full py-4 border-2 border-[#2D1B14] text-[#2D1B14] rounded-2xl font-semibold hover:bg-[#2D1B14] hover:text-white transition">
      Learn More
    </button>
  </div>
);

/* ================= MAIN VET CARE PAGE ================= */
const VeterinaryCare = () => {
  const services = [
    {
      title: "Wellness Exams",
      description: "Annual checkups and preventive care for every life stage.",
      icon: <Stethoscope size={32} />
    },
    {
      title: "Vaccinations",
      description: "Core and lifestyle vaccines tailored to your pet.",
      icon: <Shield size={32} />
    },
    {
      title: "Diagnostics",
      description: "On-site labs, digital X-ray and ultrasound.",
      icon: <Heart size={32} />
    },
    {
      title: "Dental Care",
      description: "Cleanings and oral health assessments under safe anesthesia.",
      icon: <PawPrint size={32} />
    },
    {
      title: "In-Clinic Pharmacy",
      description: "Pick up prescriptions, parasite preventives and Rx diets in-store.",
      icon: <Heart size={32} />
    },
    {
      title: "Microchipping",
      description: "Quick, painless ID that lasts a lifetime.",
      icon: <Shield size={32} />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <VetHeader />

      <section id="vet-services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D1B14]">Our Veterinary Services</h2>
            <p className="mt-4 text-[#5C4D46] text-lg max-w-2xl mx-auto">
              Compassionate care with modern veterinary medicine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <VetServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Us Section */}
      <section className="py-20 px-6 bg-[#FDF8F3]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2D1B14] mb-6">
            Why Pet Parents Choose Pawsome Vet Care
          </h2>
          <p className="text-[#5C4D46] text-lg mb-12">Gentle care. Modern medicine. Happy pets.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <div className="text-5xl mb-4">🐾</div>
              <h3 className="text-2xl font-semibold mb-3">Fear-Free Approach</h3>
              <p className="text-[#5C4D46]">We make every visit as stress-free as possible.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-2xl font-semibold mb-3">On-Site Lab & Pharmacy</h3>
              <p className="text-[#5C4D46]">Get results and medications faster.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-[#5C4D46]">Compassionate vets who truly love animals.</p>
            </div>
          </div>

          <div className="mt-16">
            <a 
              href="#" 
              className="inline-block px-10 py-4 bg-[#BC4626] text-white rounded-full font-semibold text-lg hover:bg-[#A33B1F] transition"
            >
              Schedule Your Pet’s Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VeterinaryCare;







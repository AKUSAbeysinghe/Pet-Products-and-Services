import React, { useEffect, useState } from "react";
import { PawPrint, Star } from 'lucide-react';
import grooming from "../../assets/Grooming/Master the Art of Dog Grooming with Pro Shears.jpg";

const GroomingHeader = () => {
  return (
    <section className="bg-[#FDF8F3] py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="text-[#BC4626] font-semibold uppercase tracking-wide text-sm mb-4">Grooming & Boarding</h4>
          <h2 className="text-5xl font-bold text-[#2D1B14] mb-6 leading-tight">
            A Spa Day They'll Wag For
          </h2>
          <p className="text-lg text-[#5C4D46] max-w-lg">
            Our certified groomers use low-stress handling and natural products to keep your pet calm, clean, and adorable.
          </p>
          <div className="mt-8">
            <a href="#grooming-services" className="inline-block px-8 py-4 bg-[#BC4626] text-white rounded-full font-semibold hover:bg-[#A33B1F] transition">
              Book Grooming Now
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={grooming}
            alt="Pet Grooming" 
            className="w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

/* ================= SERVICE CARD ================= */
const ServiceCard = ({ service }) => {
  const isPopular = service.popular || service.name.toLowerCase().includes("full groom");

  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="relative">
        <img
          src={
            service.image_url 
              ? `http://localhost/pet_care/${service.image_url}` 
              : "https://via.placeholder.com/600x400?text=Grooming+Service"
          }
          alt={service.name}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
          }}
        />

        {isPopular && (
          <div className="absolute top-4 left-4 bg-[#BC4626] text-white px-5 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star size={16} /> Most Popular
          </div>
        )}

        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#2D1B14] px-5 py-2 rounded-2xl font-bold text-xl shadow">
          Rs. {Number(service.price).toLocaleString("en-LK")}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-3xl font-bold text-[#2D1B14] mb-4">{service.name}</h3>
        
        <p className="text-[#5C4D46] text-[15.5px] leading-relaxed mb-6 flex-grow">
          {service.description || "Professional grooming service for your beloved pet."}
        </p>

        <div className="mt-auto">
          <button 
            onClick={() => alert(`Booking ${service.name}...`)} // Replace with real booking modal later
            className="w-full py-4 bg-[#2D1B14] hover:bg-black text-white rounded-2xl font-semibold transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN GROOMING PAGE ================= */
const Grooming = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGroomingServices = async () => {
      try {
        // Fetch products under Grooming category
        const res = await fetch("http://localhost/pet_care/api/get_products.php?category=grooming");
        
        if (!res.ok) throw new Error("Failed to connect to server");

        const data = await res.json();

        if (data.success) {
          setServices(data.data || []);
        } else {
          setError(data.message || "Could not load grooming services");
        }
      } catch (err) {
        setError("Failed to fetch grooming services. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroomingServices();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {error && (
        <div className="p-4 bg-red-100 text-red-700 text-center font-medium">
          {error}
        </div>
      )}

      {loading && (
        <div className="py-20 text-center text-xl text-[#5C4D46]">
          Loading Premium Grooming Services...
        </div>
      )}

      <GroomingHeader />

      <section id="grooming-services" className="py-20 px-6 bg-[#FDF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D1B14]">Our Grooming & Boarding Services</h2>
            <p className="mt-4 text-[#5C4D46] text-lg">
              Professional care with love and patience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.length > 0 ? (
              services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))
            ) : (
              !loading && (
                <p className="col-span-3 text-center text-gray-500 py-10 text-lg">
                  No grooming services available at the moment.
                </p>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2D1B14] mb-6">Why Pet Parents Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#FDF8F3] p-8 rounded-3xl">
              <div className="text-5xl mb-4">🧴</div>
              <h3 className="font-semibold text-xl mb-2">Natural Products</h3>
              <p className="text-[#5C4D46]">Gentle, hypoallergenic, and chemical-free</p>
            </div>
            <div className="bg-[#FDF8F3] p-8 rounded-3xl">
              <div className="text-5xl mb-4">🐾</div>
              <h3 className="font-semibold text-xl mb-2">Low-Stress Handling</h3>
              <p className="text-[#5C4D46]">Calm environment for anxious pets</p>
            </div>
            <div className="bg-[#FDF8F3] p-8 rounded-3xl">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-semibold text-xl mb-2">Certified Groomers</h3>
              <p className="text-[#5C4D46]">Experienced and pet-loving staff</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grooming;
import React, { useEffect, useState } from "react";
import { PawPrint, ShoppingBag, Heart, Star } from 'lucide-react';
import PuppyToys from "../../assets/supplies/dog food.jpg"; 

/* ================= PET HEADER ================= */
const PetHeader = () => {
  return (
    <section className="bg-[#FDF8F3] py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h4 className="text-[#BC4626] font-semibold uppercase tracking-wide text-sm mb-4">Pet Supplies</h4>
          <h2 className="text-5xl font-bold text-[#2D1B14] mb-6 leading-tight">
            Treats, Toys &<br />Everything in Between
          </h2>
          <p className="text-lg text-[#5C4D46] max-w-lg">
            From everyday essentials to little luxuries — quality you can trust, prices you'll love.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pet-products" className="px-8 py-4 bg-[#BC4626] text-white rounded-full font-semibold hover:bg-[#A33B1F] transition">
              Shop All Supplies
            </a>
            <a href="/grooming" className="px-8 py-4 border border-[#2D1B14] text-[#2D1B14] rounded-full font-semibold hover:bg-[#2D1B14] hover:text-white transition">
              Explore Grooming
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={PuppyToys}
            alt="Pet Supplies" 
            className="w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

/* ================= PRODUCT CARD ================= */
const PetCard = ({ item }) => (
  <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
    <div className="relative">
      <img
        src={item.image_url ? `http://localhost/pharmacy-project/${item.image_url}` : "https://via.placeholder.com/600x400?text=Pet+Product"}
        alt={item.name}
        className="w-full h-72 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
        }}
      />

      {item.is_bestseller && (
        <div className="absolute top-4 left-4 bg-[#BC4626] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star size={14} /> Bestseller
        </div>
      )}

      {item.is_new && (
        <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          New
        </div>
      )}

      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#2D1B14] px-4 py-1.5 rounded-full font-bold shadow">
        ${item.price || 0}
      </div>
    </div>

    <div className="p-7">
      <h3 className="text-2xl font-semibold text-[#2D1B14]">{item.name}</h3>
      <p className="mt-3 text-[#5C4D46] line-clamp-2 text-[15px]">
        {item.description || "Premium pet product"}
      </p>
      
      <button className="mt-6 w-full py-4 bg-[#2D1B14] text-white rounded-2xl font-semibold hover:bg-black transition">
        Add to Cart
      </button>
    </div>
  </div>
);

/* ================= PRODUCT SECTION ================= */
const ProductSection = ({ title, subtitle, items }) => (
  <section id="pet-products" className="py-20 px-6 bg-white">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-[#2D1B14]">{title}</h2>
      <p className="mt-4 text-[#5C4D46] text-lg">{subtitle}</p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {items.length > 0 ? (
        items.map((item) => <PetCard key={item.id} item={item} />)
      ) : (
        <p className="col-span-3 text-center text-gray-500 py-10">No products available</p>
      )}
    </div>
  </section>
);

/* ================= WHY CHOOSE US ================= */
const WhyChooseUs = () => {
  const benefits = [
    { icon: <ShoppingBag size={32} />, title: "Premium Quality", desc: "Carefully selected products from trusted brands" },
    { icon: <Heart size={32} />, title: "Made with Love", desc: "Safe, healthy & durable for your furry friends" },
    { icon: <PawPrint size={32} />, title: "Wide Selection", desc: "Everything your pet needs in one place" },
    { icon: <Star size={32} />, title: "Best Prices", desc: "Great value without compromising quality" },
  ];

  return (
    <section className="bg-[#FDF8F3] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2D1B14]">Why Pet Parents Love Us</h2>
        <p className="mt-4 text-[#5C4D46]">Quality products. Happy pets. Happy humans.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#FFF4ED] flex items-center justify-center text-[#BC4626]">
                {b.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#2D1B14] mb-4">{b.title}</h3>
              <p className="text-[#5C4D46]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= MAIN PET SUPPLIES PAGE ================= */
const PetSupplies = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost/pharmacy-project/api/get_products.php?category_id=1"); // Change category_id as needed
        const data = await res.json();

        if (data.success) {
          setProducts(data.data || []);
        } else {
          setError("Could not load pet supplies");
        }
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // You can filter by sub-category if needed
  const food = products.filter((i) => i.sub_category_name?.toLowerCase().includes("food") || i.name.toLowerCase().includes("kibble"));
  const toys = products.filter((i) => i.sub_category_name?.toLowerCase().includes("toy"));
  const beds = products.filter((i) => i.sub_category_name?.toLowerCase().includes("bed"));
  const grooming = products.filter((i) => i.sub_category_name?.toLowerCase().includes("groom"));

  return (
    <div className="bg-white min-h-screen">
      {error && <div className="p-4 bg-red-100 text-red-700 text-center">{error}</div>}
      {loading && <div className="py-20 text-center text-xl">Loading Pawsome Products...</div>}

      <PetHeader />

      <ProductSection 
        title="Best Sellers" 
        subtitle="Most loved by pet parents" 
        items={products.slice(0, 6)} 
      />

      <ProductSection 
        title="Food & Treats" 
        subtitle="Wholesome nutrition for happy pets" 
        items={food} 
      />

      <ProductSection 
        title="Toys & Playtime" 
        subtitle="Keep tails wagging with fun toys" 
        items={toys} 
      />

      <ProductSection 
        title="Beds & Comfort" 
        subtitle="Cozy rest for your furry friend" 
        items={beds} 
      />

      <WhyChooseUs />
    </div>
  );
};

export default PetSupplies;
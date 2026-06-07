import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost/food_and_restaurant/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Signup successful!");
        setTimeout(() => {
          navigate("/login"); 
        }, 2000);
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setMessage("Something went wrong! Make sure PHP server is running.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3]">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 w-full max-w-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2D1B14]">Create Account</h2>
          <p className="text-[#5C4D46] mt-2">Join Pawsome Admin</p>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#BC4626] transition-colors text-[#2D1B14] placeholder-[#9C8E85]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#BC4626] transition-colors text-[#2D1B14] placeholder-[#9C8E85]"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#BC4626] transition-colors text-[#2D1B14] placeholder-[#9C8E85]"
            required
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-[#BC4626] text-white py-4 rounded-2xl hover:bg-[#A33B1F] transition-all duration-200 font-semibold text-lg"
          >
            Sign Up
          </button>
        </div>

        {message && (
          <p
            className={`text-center mt-6 text-sm font-medium ${
              message === "Signup successful!" ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center mt-6 text-sm text-[#5C4D46]">
          Already have an account?{" "}
          <a href="/login" className="text-[#BC4626] hover:underline font-medium">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
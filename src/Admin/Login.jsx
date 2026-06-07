import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
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
      const res = await fetch("http://localhost/food_and_restaurant/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Login successful!");
        setTimeout(() => {
          navigate("/admin"); 
        }, 2000);
      } else {
        setMessage(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setMessage("Something went wrong! Make sure PHP server is running.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3]">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 w-full max-w-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2D1B14]">Welcome Back</h2>
          <p className="text-[#5C4D46] mt-2">Log in to access admin panel</p>
        </div>

        <div className="space-y-6">
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
            Log In
          </button>
        </div>

        {message && (
          <p
            className={`text-center mt-6 text-sm font-medium ${
              message === "Login successful!" ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center mt-6 text-sm text-[#5C4D46]">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#BC4626] hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
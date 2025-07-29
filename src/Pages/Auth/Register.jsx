import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    const { name, email, password, phone } = formData;
    if (!name || !email || !password || !phone) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (phone.length < 10) {
      toast.error("Phone number must be at least 10 digits");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    const finalData = { ...formData, role };

    try {
      await axios.post("/api/register", finalData);
      toast.success("Registered successfully!");
      setFormData({ name: "", email: "", password: "", phone: "" });
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex">
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Left Box */}
      <div className="w-1/2 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center p-10">
        <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center">
          <h2 className="text-2xl font-bold text-indigo-700 flex items-center justify-center gap-2 mb-2">
            <span role="img" aria-label="racket">🏸</span>
            Register Now
          </h2>
          <p className="text-gray-600 text-sm">
            Join our sports platform to manage turfs and bookings efficiently.
            Whether you're a player or a provider, start your journey today.
          </p>
        </div>
      </div>

      {/* Right Form Box */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Get Started</h2>
          <p className="text-gray-500 text-sm mb-6">Create your account as a User or Provider</p>

          {/* Role Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setRole("user")}
              className={`w-1/2 py-2 rounded-lg border text-sm font-medium transition ${
                role === "user"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            >
              I am a User
            </button>
            <button
              onClick={() => setRole("provider")}
              className={`w-1/2 py-2 rounded-lg border text-sm font-medium transition ${
                role === "provider"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            >
              I am a Provider
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Register as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

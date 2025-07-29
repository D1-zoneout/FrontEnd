import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please enter both fields");
      return;
    }

    try {
      const res = await axios.post("/api/login", {
        ...formData,
        role: "admin" // Fixed role
      });

      toast.success("Admin login successful");

      // ⬇️ Replace this with your own navigation
      setTimeout(() => {
        window.location.href = "/admin/dashboard";
      }, 2000);
    } catch (err) {
      toast.error("Invalid credentials or unauthorized access");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer position="top-right" autoClose={2500} />
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-2">🔐 Admin Login</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Authorized access only</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
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
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

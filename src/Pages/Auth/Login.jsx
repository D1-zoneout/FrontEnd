import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // ✅ Dummy users
  const dummyUsers = [
    { email: "user1@example.com", password: "password1", role: "user" },
    { email: "provider1@example.com", password: "password2", role: "provider" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    // 🔍 Match dummy user
    const found = dummyUsers.find(
      user =>
        user.email === formData.email &&
        user.password === formData.password &&
        user.role === role
    );

    if (found) {
      toast.success("Logged in successfully!");

      setTimeout(() => {
        if (role === "user") {
          navigate("/user/");
        } else if (role === "provider") {
          navigate("/provider/dashboard");
        }
      }, 1000);
    } else {
      toast.error("Invalid credentials or role mismatch.");
    }
  };

  return (
    <div className="min-h-screen flex">
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Left Info Box */}
      <div className="w-1/2 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center p-10">
        <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center">
          <h2 className="text-2xl font-bold text-indigo-700 flex items-center justify-center gap-2 mb-2">
            <span role="img" aria-label="key">🔐</span>
            Login Now
          </h2>
          <p className="text-gray-600 text-sm">
            Access your account to book or manage turf slots. Whether you’re a player or provider — you're just one login away.
          </p>
        </div>
      </div>

      {/* Right Form Box */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back</h2>
          <p className="text-gray-500 text-sm mb-6">Login as User or Provider to continue</p>

          {/* Role Toggle */}
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

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

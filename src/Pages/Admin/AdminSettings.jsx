import React, { useState } from "react";

const AdminSettings = () => {
  const [adminInfo, setAdminInfo] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    theme: "light",
    notifications: true,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAdminInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Admin Info:", adminInfo);
    // You can connect this to your backend here
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Admin Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Information */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  name="name"
                  value={adminInfo.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                  placeholder="Admin Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={adminInfo.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                  placeholder="admin@example.com"
                />
              </div>
            </div>
          </div>

          {/* System Preferences */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">System Preferences</h2>
            <div className="flex flex-col gap-4">
              <label className="block text-sm font-medium">Theme</label>
              <select
                name="theme"
                value={adminInfo.theme}
                onChange={handleChange}
                className="w-full p-2 border rounded-xl"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>

              <label className="inline-flex items-center mt-4">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={adminInfo.notifications}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-sm">Enable Email Notifications</span>
              </label>
            </div>
          </div>

          {/* Password Section */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">New Password</label>
                <input
                  type="password"
                  name="password"
                  value={adminInfo.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={adminInfo.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettings;

import React, { useState } from "react";

const ProviderProfile = () => {
  const [provider, setProvider] = useState({
    businessName: "Dream Turf Arena",
    ownerName: "John Doe",
    email: "turf@example.com",
    phone: "+91 9876543210",
    location: "Pune, Maharashtra",
    logo: null,
    website: "",
    description: "Premium 5-a-side turf with night lighting and cafeteria.",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setProvider((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Provider Info:", provider);
    // API integration goes here
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Provider Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Logo Upload */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Logo / Image</h2>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                {provider.logo ? (
                  <img
                    src={URL.createObjectURL(provider.logo)}
                    alt="Logo Preview"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">No image</span>
                )}
              </div>
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
                className="border p-2 rounded-xl"
              />
            </div>
          </div>

          {/* Basic Info */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Business Name</label>
                <input
                  name="businessName"
                  value={provider.businessName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                  placeholder="Turf Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Owner Name</label>
                <input
                  name="ownerName"
                  value={provider.ownerName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                  placeholder="Owner"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={provider.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  name="phone"
                  value={provider.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  name="location"
                  value={provider.location}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Optional Business Info */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Website</label>
                <input
                  name="website"
                  value={provider.website}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl"
                  placeholder="https://yourturf.in"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={provider.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border rounded-xl"
                  placeholder="Add details about your turf, facilities, rules..."
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProviderProfile;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProviderProfile() {
  const navigate = useNavigate();

  // Initial data (would usually come from backend API)
  const [profile, setProfile] = useState({
    id: 1,
    name: 'Turf Owner',
    email: 'provider@example.com',
    contact: '9876543210',
    turfName: 'Turf Galaxy',
    turfLocation: 'Pune, Maharashtra',
    turfImage: '', // URL or file name
    description: 'A high-quality turf with excellent facilities.',
    availableFrom: '06:00',
    availableTo: '22:00',
    pricePerHour: 500,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleUpdate = () => {
    // Send profile to backend via API (axios/fetch)
    console.log('Updated Profile:', profile);
    alert('Profile updated successfully!');
  };

  const handleDelete = () => {
    // Call delete API
    if (window.confirm('Are you sure you want to delete your profile?')) {
      console.log('Profile deleted!');
      alert('Profile deleted');
      navigate('/'); // redirect to homepage or logout
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <button
        onClick={() => navigate('/provider/dashboard')}
        className="mb-6 text-sm text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-center">Provider Profile</h2>

      <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-xl shadow space-y-4">
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Provider Name"
            className="border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="contact"
            value={profile.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="turfName"
            value={profile.turfName}
            onChange={handleChange}
            placeholder="Turf Name"
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="turfLocation"
            value={profile.turfLocation}
            onChange={handleChange}
            placeholder="Turf Location"
            className="border px-4 py-2 rounded"
          />
          <input
            type="number"
            name="pricePerHour"
            value={profile.pricePerHour}
            onChange={handleChange}
            placeholder="Price Per Hour"
            className="border px-4 py-2 rounded"
          />
          <input
            type="time"
            name="availableFrom"
            value={profile.availableFrom}
            onChange={handleChange}
            placeholder="Available From"
            className="border px-4 py-2 rounded"
          />
          <input
            type="time"
            name="availableTo"
            value={profile.availableTo}
            onChange={handleChange}
            placeholder="Available To"
            className="border px-4 py-2 rounded"
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          value={profile.description}
          onChange={handleChange}
          placeholder="Turf Description"
          className="border px-4 py-2 rounded w-full"
          rows={4}
        />

        {/* Update + Delete Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleUpdate}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Update Profile
          </button>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:underline"
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProviderProfile;

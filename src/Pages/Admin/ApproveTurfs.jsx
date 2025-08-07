import React, { useState } from "react";
import AdminNavbar from '../../Components/admin/AdminNavbar';
import AdminSidebar from '../../Components/admin/AdminSidebar';
import Turf1 from "../../assets/turf301.jpg";
import Turf2 from "../../assets/turf101.jpg";
import Turf3 from "../../assets/turf201.jpg";

const turfData = [
  {
    id: 1,
    name: "Green Field Turf",
    owner: "Rohan Deshmukh",
    location: "Downtown",
    sport: "Football",
    pinCode: "400001",
    price: 500,
    mapLink: "https://maps.google.com/?q=greenfield+mumbai",
    images: [Turf1, Turf2, Turf3],
    description: "Well-maintained turf with artificial grass. Floodlights and restrooms available.",
    facilities: ["Floodlights", "Restrooms", "Synthetic Grass"]
  },
  {
    id: 2,
    name: "City Sports Arena",
    owner: "Anjali Patil",
    location: "Uptown",
    sport: "Cricket",
    pinCode: "400002",
    price: 750,
    mapLink: "https://maps.google.com/?q=citysportsarena",
    images: [Turf2, Turf3, Turf1],
    description: "Spacious cricket pitch with seating and lighting.",
    facilities: ["Seating", "Lighting", "Parking"]
  },
  {
    id: 3,
    name: "Elite Play Zone",
    owner: "Akshay Mane",
    location: "Midtown",
    sport: "Futsal",
    pinCode: "400003",
    price: 600,
    mapLink: "https://maps.google.com/?q=eliteplayzone",
    images: [Turf3, Turf1, Turf2],
    description: "Indoor futsal turf with premium flooring and cooling system.",
    facilities: ["Air Conditioning", "Premium Flooring", "Drinking Water"]
  }
];

export default function ApproveTurfs() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewIndex, setViewIndex] = useState(null);
  const [zoomImg, setZoomImg] = useState(null);

  const handleToggleView = (index) => {
    setViewIndex(viewIndex === index ? null : index);
  };

  const handleApprove = (name) => {
    alert(`${name} approved.`);
  };

  const handleCancel = (name) => {
    alert(`${name} rejected.`);
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 z-10 shadow-md bg-white">
        <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      {/* Main content with fixed Navbar and scrollable content */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-64 right-0 z-10 shadow bg-white">
          <AdminNavbar setOpen={setSidebarOpen} />
        </div>

        {/* Scrollable turf list */}
        <div className="mt-20 overflow-y-auto h-[calc(100vh-5rem)] px-6 py-4">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">Approve Turf Requests</h2>

          <div className="space-y-6 pr-2">
            {turfData.map((turf, index) => (
              <div key={turf.id} className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex items-center gap-6">
                  <img
                    src={turf.images[0]}
                    alt={turf.name}
                    className="w-32 h-24 rounded-lg object-cover shadow"
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-indigo-700">{turf.name}</h3>
                    <p className="text-sm text-gray-600">
                      Location: {turf.location} | Sport: {turf.sport} | Pin: {turf.pinCode}
                    </p>
                    <p className="text-sm text-gray-600">Owner: {turf.owner}</p>
                  </div>
                  <div className="space-x-4">
                    <button
                      onClick={() => handleToggleView(index)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
                    >
                      {viewIndex === index ? "Hide" : "View"}
                    </button>
                    <button
                      onClick={() => handleApprove(turf.name)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleCancel(turf.name)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {viewIndex === index && (
                  <div className="mt-4 text-sm text-gray-700 ml-36 space-y-2">
                    <p><strong>Description:</strong> {turf.description}</p>
                    <p><strong>Price:</strong> ₹{turf.price}/hr</p>
                    <p><strong>Map:</strong> <a href={turf.mapLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">View on Google Maps</a></p>
                    <p><strong>Facilities:</strong></p>
                    <ul className="list-disc list-inside ml-4">
                      {turf.facilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4 mt-2">
                      {turf.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Turf ${i + 1}`}
                          className="w-24 h-20 object-cover rounded-lg shadow cursor-pointer hover:scale-105 transition"
                          onClick={() => setZoomImg(img)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Zoom modal */}
        {zoomImg && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative">
              <img src={zoomImg} alt="Zoomed Turf" className="max-w-full max-h-[80vh] rounded-lg shadow-lg" />
              <button
                onClick={() => setZoomImg(null)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

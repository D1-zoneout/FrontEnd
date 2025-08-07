import React, { useState } from 'react';
import ProviderNavbar from '../../Components/ProviderNavbar';
import ProviderSidebar from '../../Components/ProviderSidebar';
import Turf1 from '../../assets/Turf1.jpg'; // adjust the paths as needed
import Turf2 from '../../assets/Turf2.jpg';
import Turf3 from '../../assets/Turf3.jpg';

export default function BookingRequests() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewIndex, setViewIndex] = useState(null);

  const bookings = [
    {
      id: 1,
      name: "Green Field Turf",
      location: "Downtown",
      type: "Football",
      rate: 500,
      image: Turf1,
      user: "Rohan Deshmukh",
      date: "2025-08-01",
      timeSlot: "10:00 AM - 11:00 AM",
      description: "Booking for a football match with 10 players. Includes facility access and lights.",
    },
    {
      id: 2,
      name: "City Sports Arena",
      location: "Uptown",
      type: "Cricket",
      rate: 750,
      image: Turf2,
      user: "Anjali Patil",
      date: "2025-08-03",
      timeSlot: "6:00 PM - 7:00 PM",
      description: "Turf booked for practice session. Requires additional nets and ball machine.",
    },
    {
      id: 3,
      name: "Elite Play Zone",
      location: "Midtown",
      type: "Futsal",
      rate: 600,
      image: Turf3,
      user: "Akshay Mane",
      date: "2025-08-05",
      timeSlot: "5:00 PM - 6:00 PM",
      description: "Friendly futsal match with 8 participants. Need water and first aid kit.",
    },
  ];

  const handleToggleView = (index) => {
    setViewIndex(index === viewIndex ? null : index);
  };

  const handleCancel = (index) => {
    alert(`Booking for ${bookings[index].name} has been cancelled.`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <ProviderSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1">
        <ProviderNavbar setOpen={setSidebarOpen} />

        <div className="mt-20 px-6 py-4">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">Booking Requests</h2>

          <div className="space-y-6">
            {bookings.map((booking, index) => (
              <div key={booking.id} className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex items-center gap-6">
                  <img src={booking.image} alt={booking.name} className="w-32 h-24 rounded-lg object-cover shadow" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-indigo-700">{booking.name}</h3>
                    <p className="text-sm text-gray-600">
                      {booking.date} | {booking.timeSlot}
                    </p>
                    <p className="text-sm text-gray-600">
                      Location: {booking.location} | Sport: {booking.type} | ₹{booking.rate}/hr
                    </p>
                  </div>
                  <div className="space-x-4">
                    <button
                      onClick={() => handleToggleView(index)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
                    >
                      {viewIndex === index ? 'Hide' : 'View'}
                    </button>
                    <button
                      onClick={() => handleCancel(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                {viewIndex === index && (
                  <div className="mt-4 text-sm text-gray-700 ml-36">
                    <p><strong>Booked By:</strong> {booking.user}</p>
                    <p><strong>Details:</strong> {booking.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

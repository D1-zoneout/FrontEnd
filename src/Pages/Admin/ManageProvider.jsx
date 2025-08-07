import React, { useState } from 'react';
import AdminNavbar from '../../Components/admin/AdminNavbar';
import AdminSidebar from '../../Components/admin/AdminSidebar';

import Turf1 from '../../assets/turf301.jpg';
import Turf2 from '../../assets/turf101.jpg';
import Turf3 from '../../assets/turf201.jpg';

const sampleProviders = [
  {
    id: 1,
    owner: 'Rohan Deshmukh',
    turfName: 'Green Field Turf',
    city: 'Downtown',
    sport: 'Football',
    rate: 500,
    status: 'Active',
    facilities: ['Floodlights', 'Washroom', 'Synthetic Grass', 'Drinking Water'],
    description: 'Spacious football ground with floodlights and synthetic grass.',
    images: [Turf1, Turf2, Turf3],
  },
  {
    id: 2,
    owner: 'Anjali Patil',
    turfName: 'City Sports Arena',
    city: 'Uptown',
    sport: 'Cricket',
    rate: 750,
    status: 'Inactive',
    facilities: ['Seating', 'Parking', 'LED Lights', 'Changing Rooms'],
    description: 'Large cricket pitch with modern facilities and proper lighting.',
    images: [Turf2, Turf3, Turf1],
  },
  {
    id: 3,
    owner: 'Akshay Mane',
    turfName: 'Elite Play Zone',
    city: 'Midtown',
    sport: 'Futsal',
    rate: 600,
    status: 'Active',
    facilities: ['AC', 'CCTV', 'Refreshments'],
    description: 'Indoor futsal court with premium flooring and air conditioning.',
    images: [Turf3, Turf1, Turf2],
  },
];

export default function ManageProvider() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewIndex, setViewIndex] = useState(null);

  const handleView = (index) => {
    setViewIndex(index === viewIndex ? null : index);
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden">
      <div className="fixed top-0 left-0 h-full w-64 z-10 shadow-md bg-white">
        <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      <div className="flex flex-col flex-1 ml-64">
        <div className="fixed top-0 left-64 right-0 z-10 shadow bg-white">
          <AdminNavbar setOpen={setSidebarOpen} />
        </div>

        <div className="mt-20 overflow-y-auto h-[calc(100vh-5rem)] p-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">Manage Turf Providers</h2>

          <div className="overflow-x-auto bg-white rounded-xl shadow border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-100 text-indigo-800">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Owner</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Turf Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">City</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Sport</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {sampleProviders.map((provider, index) => (
                  <React.Fragment key={provider.id}>
                    <tr>
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">{provider.owner}</td>
                      <td className="px-6 py-4">{provider.turfName}</td>
                      <td className="px-6 py-4">{provider.city}</td>
                      <td className="px-6 py-4">{provider.sport}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            provider.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {provider.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 space-x-2">
                        <button
                          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-lg text-sm shadow"
                          onClick={() => handleView(index)}
                        >
                          {viewIndex === index ? 'Close' : 'View'}
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm shadow">
                          Delete
                        </button>
                      </td>
                    </tr>

                    {viewIndex === index && (
                      <tr className="bg-indigo-50 border-t border-indigo-200">
                        <td colSpan="7" className="p-6">
                          <h3 className="text-lg font-semibold text-indigo-700 mb-2">{provider.turfName}</h3>
                          <p className="text-sm text-gray-700 mb-2">{provider.description}</p>
                          <p className="text-sm text-gray-600">
                            <strong>Location:</strong> {provider.city} | <strong>Sport:</strong> {provider.sport} |{' '}
                            <strong>Rate:</strong> ₹{provider.rate}/hr
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Owner:</strong> {provider.owner}
                          </p>
                          <p className="mb-2 text-sm text-gray-600">
                            <strong>Facilities:</strong>{' '}
                            {provider.facilities.map((f, i) => (
                              <span key={i} className="inline-block mx-1 px-2 py-1 text-indigo-600 bg-indigo-100 rounded-full text-xs">
                                {f}
                              </span>
                            ))}
                          </p>
                          <div className="flex gap-4 mt-3">
                            {provider.images.map((img, i) => (
                              <img key={i} src={img} alt={`img-${i}`} className="w-28 h-20 rounded-lg object-cover shadow" />
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import ProviderNavbar from "../../Components/ProviderNavbar";
import ProviderSidebar from "../../Components/ProviderSidebar";
import { Link } from "react-router-dom";

function TurfList() {
  const [turfs, setTurfs] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    setTurfs([
      {
        id: 1,
        name: "GreenField Turf",
        location: "Kothrud, Pune",
        players: 10,
        price: 1000,
        status: "Active",
      },
      {
        id: 2,
        name: "PlayZone Turf",
        location: "Baner, Pune",
        players: 8,
        price: 800,
        status: "Inactive",
      },
    ]);
  }, []);

  const handleEdit = (id) => {
    console.log("Edit turf", id);
    // navigate(`/provider/edit-turf/${id}`);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this turf?");
    if (confirm) {
      setTurfs(turfs.filter((turf) => turf.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* <ProviderSidebar /> */}
      <div className="flex-1 ml-64">
        <ProviderNavbar />
        <main className="p-6 mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Manage Turfs</h2>
            <Link
              to="/provider/add-turf"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500"
            >
              + Add New Turf
            </Link>
          </div>

          <div className="bg-white shadow rounded-md overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left font-medium">Name</th>
                  <th className="px-6 py-3 text-left font-medium">Location</th>
                  <th className="px-6 py-3 text-left font-medium">Players</th>
                  <th className="px-6 py-3 text-left font-medium">Price/hr</th>
                  <th className="px-6 py-3 text-left font-medium">Status</th>
                  <th className="px-6 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {turfs.map((turf) => (
                  <tr key={turf.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{turf.name}</td>
                    <td className="px-6 py-4 text-gray-700">{turf.location}</td>
                    <td className="px-6 py-4 text-gray-700">{turf.players}</td>
                    <td className="px-6 py-4 text-gray-700">₹{turf.price}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          turf.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {turf.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <button
                        onClick={() => handleEdit(turf.id)}
                        className="text-indigo-600 hover:text-indigo-900 font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(turf.id)}
                        className="text-red-600 hover:text-red-800 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TurfList;


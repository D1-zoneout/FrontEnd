import React from 'react';
import { Link } from 'react-router-dom';

function ProviderSidebar() {
  return (
    <aside className="w-64 h-screen pt-20 fixed bg-white border-r border-gray-200 shadow-sm">
      <nav className="flex flex-col gap-2 px-6 text-sm font-medium text-gray-700">
        <Link to="/provider/dashboard" className="py-2 hover:text-indigo-600">Dashboard</Link>
        <Link to="/provider/add-turf" className="py-2 hover:text-indigo-600">Add Turf</Link>
        <Link to="/provider/manage-pricing/:turfId" className="py-2 hover:text-indigo-600">Manage Pricing</Link>
        <Link to="/provider/manage-slots/:turfId" className="py-2 hover:text-indigo-600">Manage Slots</Link>
        <Link to="/provider/booking-requests" className="py-2 hover:text-indigo-600">Booking Requests</Link>
        <Link to="/provider/booking-history" className="py-2 hover:text-indigo-600">Booking History</Link>
        <Link to="/provider/payments" className="py-2 hover:text-indigo-600">Payment Management</Link>
        <Link to="/provider/reviews" className="py-2 hover:text-indigo-600">Turf Reviews</Link>
        <Link to="/provider/turfs" className="py-2 hover:text-indigo-600">Turf List</Link>
        <Link to="/provider/turf-analytics" className="py-2 hover:text-indigo-600">Analytics</Link>
      </nav>
    </aside>
  );
}

export default ProviderSidebar;

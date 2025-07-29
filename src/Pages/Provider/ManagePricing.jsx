import React from 'react';
import ProviderNavbar from '../../Components/ProviderNavbar';
import ProviderSidebar from '../../Components/ProviderSidebar';

function ManagePricing() {
  return (
    <>
      <ProviderNavbar />

      <div className="ml-60 pt-20 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Manage Turf Pricing</h2>

        {/* Example pricing cards */}
        <div className="bg-white shadow rounded p-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Normal Price (₹)</label>
              <input type="number" className="w-full border rounded px-3 py-2 shadow-sm" defaultValue={1000} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Peak Hour Price (₹)</label>
              <input type="number" className="w-full border rounded px-3 py-2 shadow-sm" defaultValue={1200} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Peak Hours</label>
              <input type="text" className="w-full border rounded px-3 py-2 shadow-sm" defaultValue="5:00 PM - 9:00 PM" />
            </div>
          </div>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Save Changes</button>
        </div>

        {/* Add more turf pricing blocks as needed */}
      </div>
    </>
  );
}

export default ManagePricing;
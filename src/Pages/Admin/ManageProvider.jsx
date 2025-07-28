import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

const ManageProvider = () => {
  const providers = [
    { id: 1, name: 'TurfZone Pvt Ltd', email: 'turfzone@example.com', status: 'Active' },
    { id: 2, name: 'PlayGround Arena', email: 'arena@example.com', status: 'Pending' },
    { id: 3, name: 'Green Turf', email: 'green@example.com', status: 'Suspended' },
  ]

  return (
    <div className="min-h-screen flex bg-gray-100">
      <AdminSidebar />
      <div className="flex-1">
        <AdminNavbar />

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Providers</h2>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">#</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {providers.map((provider, index) => (
                  <tr key={provider.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{provider.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{provider.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          provider.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : provider.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {provider.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-indigo-600 hover:text-indigo-900 font-medium mr-2">View</button>
                      <button className="text-red-600 hover:text-red-900 font-medium">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageProvider

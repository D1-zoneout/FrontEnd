import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

const turfs = [
  {
    id: 1,
    name: 'Sunset Arena',
    location: 'Mumbai',
    provider: 'Ravi Sharma',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Sky Turf',
    location: 'Delhi',
    provider: 'Anjali Mehta',
    status: 'Approved',
  },
  {
    id: 3,
    name: 'Green Field',
    location: 'Pune',
    provider: 'Sahil Kapoor',
    status: 'Rejected',
  },
]

const getStatusStyle = (status) => {
  switch (status) {
    case 'Approved':
      return 'bg-green-100 text-green-700'
    case 'Rejected':
      return 'bg-red-100 text-red-700'
    case 'Pending':
    default:
      return 'bg-yellow-100 text-yellow-800'
  }
}

const ApproveTurfs = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Approve Turfs</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-indigo-600 text-white text-left">
                  <th className="px-6 py-3">Turf Name</th>
                  <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3">Provider</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {turfs.map((turf, idx) => (
                  <tr
                    key={turf.id}
                    className={`border-b ${idx === turfs.length - 1 ? '' : 'border-gray-200'} hover:bg-gray-50`}
                  >
                    <td className="px-6 py-4">{turf.name}</td>
                    <td className="px-6 py-4">{turf.location}</td>
                    <td className="px-6 py-4">{turf.provider}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-sm rounded-full font-medium ${getStatusStyle(turf.status)}`}>
                        {turf.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full mr-2">
                        Approve
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full">
                        Reject
                      </button>
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

export default ApproveTurfs

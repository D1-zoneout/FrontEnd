import React, { useState } from "react";
import AdminNavbar from '../../Components/admin/AdminNavbar';
import AdminSidebar from '../../Components/admin/AdminSidebar';

const users = [
  {
    id: 1,
    name: "Rohan Deshmukh",
    email: "rohan@example.com",
    mobile: "9876543210",
    turf: "Green Field Turf"
  },
  {
    id: 2,
    name: "Anjali Patil",
    email: "anjali@example.com",
    mobile: "9123456780",
    turf: "City Sports Arena"
  },
  {
    id: 3,
    name: "Akshay Mane",
    email: "akshay@example.com",
    mobile: "9988776655",
    turf: "Elite Play Zone"
  },
  {
    id: 3,
    name: "Smita Deshmukh",
    email: "smita@example.com",
    mobile: "9988777799",
    turf: "City Sports Arena"
  },
  {
    id: 3,
    name: "Rohit Sharma",
    email: "rohit@example.com",
    mobile: "99887846799",
    turf: "Green Field Turf"
  }
];

export default function ManageUsers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">Manage Users</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow rounded-lg">
              <thead>
                <tr className="bg-indigo-100 text-indigo-800">
                  <th className="py-3 px-6 border border-gray-300 text-left">User Name</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Email</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Mobile Number</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Turf Name</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="py-3 px-6 border border-gray-300">{user.name}</td>
                    <td className="py-3 px-6 border border-gray-300">{user.email}</td>
                    <td className="py-3 px-6 border border-gray-300">{user.mobile}</td>
                    <td className="py-3 px-6 border border-gray-300">{user.turf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

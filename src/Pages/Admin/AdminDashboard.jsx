import React from 'react';
import AdminNavbar from '../../Components/admin/AdminNavbar';
import AdminSidebar from '../../Components/admin/AdminSidebar';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const AdminDashboard = () => {
  // Static counts
  const totalUsers = 150;
  const totalProviders = 40;

  // Chart data setup
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Users',
        data: [80, 100, 120, 140, 150, totalUsers],
        borderColor: '#6366f1', // Indigo
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Providers',
        data: [20, 25, 30, 35, 38, totalProviders],
        borderColor: '#22c55e', // Green
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#4B5563' },
      },
    },
    scales: {
      x: { ticks: { color: '#4B5563' } },
      y: { ticks: { color: '#4B5563' }, beginAtZero: true },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800 overflow-hidden">
      <div className="fixed top-0 left-0 h-full w-64 z-10 shadow-md bg-white">
        <AdminSidebar />
      </div>

      <div className="flex flex-col flex-1 ml-64">
        <div className="fixed top-0 left-64 right-0 z-10 shadow bg-white">
          <AdminNavbar />
        </div>

        <div className="mt-20 overflow-y-auto h-[calc(100vh-5rem)] p-6 space-y-6">
          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>

          {/* Stat Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-600 text-white rounded-xl p-6 shadow-lg">
              <h2 className="text-lg">Total Users</h2>
              <p className="text-3xl font-bold">{totalUsers}</p>
            </div>
            <div className="bg-green-500 text-white rounded-xl p-6 shadow-lg">
              <h2 className="text-lg">Total Providers</h2>
              <p className="text-3xl font-bold">{totalProviders}</p>
            </div>
          </div>

          {/* Graph Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Growth Overview</h2>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
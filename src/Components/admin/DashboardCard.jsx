import React from 'react'

const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 transition-transform hover:scale-105">
      <h2 className="text-sm text-gray-500 mb-2">{title}</h2>
      <p className="text-2xl font-bold text-purple-600">{value}</p>
    </div>
  )
}

export default DashboardCard

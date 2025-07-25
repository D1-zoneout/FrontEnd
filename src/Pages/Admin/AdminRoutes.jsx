import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import ManageUsers from './ManageUsers'
import ManageProvider from './ManageProvider'
import ApproveTurfs from './ApproveTurfs'
import ViewAllbookings from './ViewAllbookings'
import ViewPayment from './ViewPayment'
import ReviewModeration from './ReviewModeration'
import AdminAnalytics from './AdminAnalytics'
import Notification from './Notification'
import AdminSettings from './AdminSettings'
import AdminLogin from './AdminLogin'

function AdminRoutes() {
  return (
    <div>
      <h1>Admin route</h1>
      <Routes>
        {/* <Route path='dashboard' element={<AdminDashboard/>} /> */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<ManageUsers/>} />
        <Route path="/providers" element={<ManageProvider />} />
        <Route path="/approve-turfs" element={<ApproveTurfs />} />
        <Route path="/bookings" element={<ViewAllbookings />} />
        <Route path="/payments" element={<ViewPayment />} />
        <Route path="/review-moderation" element={<ReviewModeration />} />
        <Route path="/analytics" element={<AdminAnalytics />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/login" element={<AdminLogin />} />
        {/* Add more admin-specific routes here */}
      </Routes>
    </div>
  )
}

export default AdminRoutes

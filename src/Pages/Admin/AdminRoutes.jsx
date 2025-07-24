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

function AdminRoutes() {
  return (
    <div>
       <Routes>
          <Route path='dashboard' element={<AdminDashboard/>} />
         <Route path="/admin/dashboard" element={<AdminDashboard />} />
         <Route path="/admin/users" element={<ManageUsers/>} />
<Route path="/admin/providers" element={<ManageProvider />} />
<Route path="/admin/approve-turfs" element={<ApproveTurfs />} />
<Route path="/admin/bookings" element={<ViewAllbookings />} />
<Route path="/admin/payments" element={<ViewPayment />} />
<Route path="/admin/review-moderation" element={<ReviewModeration />} />
<Route path="/admin/analytics" element={<AdminAnalytics />} />
<Route path="/admin/notifications" element={<Notification />} />
<Route path="/admin/settings" element={<AdminSettings/>} />

            
                </Routes>
    </div>
  )
}

export default AdminRoutes

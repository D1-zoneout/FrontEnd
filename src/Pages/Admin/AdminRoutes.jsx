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
       <Routes>
          <Route path='dashboard' element={<AdminDashboard/>} />
         <Route path="/manageusers" element={<ManageUsers/>} />
<Route path="/manageproviders" element={<ManageProvider />} />
<Route path="/turfs" element={<ApproveTurfs />} />
<Route path="/bookings" element={<ViewAllbookings />} />
<Route path="/payments" element={<ViewPayment />} />
<Route path="/reviews" element={<ReviewModeration />} />
<Route path="/analytics" element={<AdminAnalytics />} />
<Route path="/notifications" element={<Notification />} />
<Route path="/settings" element={<AdminSettings/>} />
<Route path="/login" element={<AdminLogin/>} />

            
                </Routes>
    </div>
  )
}

export default AdminRoutes

import React from 'react'
import { Routes , Route } from 'react-router-dom';
import ProviderLogin from "./ProviderLogin";
import ProviderSignUp from './ProviderSignUp';
import AddTurf from './AddTurf';
import TurfList from './TurfList';
import EditTurf from './EditTurf';
import TurfDetails from './TurfDetails';
import ManageSlots from './ManageSlots';
import ManagePricing from './ManagePricing';
import BookingRequests from './BookingRequests';
import BookingHistory from './BookingHistory';
import PaymentManagement from './PaymentManagement';
import TurfReviews from './TurfReviews';
import TurfAnalytics from './TurfAnalytics';
import ProviderProfile from './ProviderProfile';
import ProviderDashboard from './ProviderDashboard';
function ProviderRoutes() {
  return (
   <Routes>
     <Route path="login" element={<ProviderLogin />} />
     <Route path="register" element={<ProviderSignUp />} />
     <Route path="add-turf" element={<AddTurf />} />
        <Route path="turfs" element={<TurfList/>} />
        <Route path="turfs/:turfId/edit" element={<EditTurf/>} />
        <Route path="turfs/:turfId" element={<TurfDetails/>} />
        <Route path="manage-slots/:turfId" element={<ManageSlots/>} />
        <Route path="manage-pricing/:turfId" element={<ManagePricing/>} />
        <Route path="booking-requests" element={<BookingRequests/>} />
        <Route path="booking-history" element={<BookingHistory/>} />
        <Route path="payments" element={<PaymentManagement/>} />
        <Route path="reviews" element={<TurfReviews/>} />
        <Route path="analytics" element={<TurfAnalytics/>} />
        <Route path="profile" element={<ProviderProfile/>} />
        <Route path = 'dashboard' element = {<ProviderDashboard/>}/>
   </Routes>
  )
}

export default ProviderRoutes;

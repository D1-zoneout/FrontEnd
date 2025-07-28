import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AdminRoutes from './Pages/Admin/AdminRoutes'
import ProviderRoutes from './Pages/Provider/ProviderRoutes'
import UserRoutes from './Pages/User/UserRoutes';



function App() {

  return (
    <>
      <Routes>
        <Route path="/provider/*" element={<ProviderRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />}  />
        <Route path="/user/*" element={<UserRoutes />} />
      </Routes>
      <ToastContainer />
    </>
  )
}
export default App; 
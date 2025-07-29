import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AdminRoutes from './Pages/Admin/AdminRoutes'
import ProviderRoutes from './Pages/Provider/ProviderRoutes'
import UserRoutes from './Pages/User/UserRoutes';
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'



function App() {

  return (
    <>
      <Routes>
        <Route path="/provider/*" element={<ProviderRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />}  />
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <ToastContainer />
    </>
  )
}
export default App; 
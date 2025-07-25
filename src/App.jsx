import { useState } from 'react'
import ProviderRoutes from './Pages/Provider/ProviderRoutes'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AdminRoutes from './Pages/Admin/AdminRoutes'

import UserRoutes from './Pages/User/UserRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
       <Routes>
             <Route path="/provider/*" element={<ProviderRoutes />} />
             <Route path='/admin/*' element={<AdminRoutes/>} />
             <Route path='/user/*' element={<UserRoutes/>} />
       </Routes>
       <ToastContainer />
      </>
  )
}

export default App

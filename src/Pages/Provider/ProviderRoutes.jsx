import React from 'react'
import { Routes , Route } from 'react-router-dom';
import ProviderLogin from "./ProviderLogin";
import ProviderSignUp from './ProviderSignUp';
import AddTurf from './AddTurf';
function ProviderRoutes() {
  return (
   <Routes>
     <Route path="login" element={<ProviderLogin />} />
     <Route path="register" element={<ProviderSignUp />} />
     <Route path="add-turf" element={<AddTurf />} />
     
   </Routes>
  )
}

export default ProviderRoutes;

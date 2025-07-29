import React from "react";
import { Outlet } from 'react-router-dom';
import ProviderSidebar from "../../Components/ProviderSidebar";
import UserFooter from "../../Components/User/UserHomeFooter";

const ProviderLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <ProviderSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="min-h-[calc(100vh-64px)]"> {/* Space for footer */}
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer */}
      <UserFooter />
    </div>
  );
};

export default ProviderLayout;

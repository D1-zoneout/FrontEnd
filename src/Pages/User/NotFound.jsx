
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-5xl font-bold text-green-500 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

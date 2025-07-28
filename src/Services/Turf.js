import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar"; 

const TurfDetailsPage = () => {
  const { turfId } = useParams();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-[#22c55e] mb-4">
          Turf Details - ID #{turfId}
        </h2>
        <div className="bg-gray-100 rounded-2xl shadow p-6">
          <p className="text-gray-600">Loading turf details...</p>
        </div>
      </div>
    </div>
  );
};

export default TurfDetailsPage;
import axios  from "axios";


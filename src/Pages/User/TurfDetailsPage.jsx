import { useParams, Link } from "react-router-dom";
import UserNavbar from "../../Components/User/UserNavbar";
import UserSidebar from "../../Components/User/UserSidebar";
import TurfImageGallery from "../../Components/User/TurfImageGallery";
import { useState } from "react";

// Turf 1 images
import Turf1Img1 from "../../assets/turf301.jpg";
import Turf1Img2 from "../../assets/turf2.jpg";
import Turf1Img3 from "../../assets/turf303.jpg";

// Turf 2 images
import Turf2Img1 from "../../assets/turf101.jpg";
import Turf2Img2 from "../../assets/turf102.jpg";
import Turf2Img3 from "../../assets/turf402.jpg";

// Turf 3 images
import Turf3Img1 from "../../assets/turf201.jpg";
import Turf3Img2 from "../../assets/turf202.jpg";
import Turf3Img3 from "../../assets/turf203.jpg";

const sampleTurfs = {
  1: {
    name: "Green Field Turf",
    description: "Spacious football ground with floodlights and synthetic grass.",
    rate: 500,
    contact: "9876543210",
    location: "Downtown, City Center",
    facilities: ["Floodlights", "Washroom", "Synthetic Grass", "Drinking Water"],
    reviews: ["Great turf!", "Well maintained and accessible.", "Perfect for team matches."],
    images: [Turf1Img1, Turf1Img2, Turf1Img3],
  },
  2: {
    name: "City Sports Arena",
    description: "Large cricket pitch with modern facilities and proper lighting.",
    rate: 750,
    contact: "9123456780",
    location: "Uptown, Main Street",
    facilities: ["Seating", "Parking", "LED Lights", "Changing Rooms"],
    reviews: ["Best pitch for night matches.", "Very professional and neat.", "Highly recommended."],
    images: [Turf2Img1, Turf2Img2, Turf2Img3],
  },
  3: {
    name: "Elite Play Zone",
    description: "Indoor futsal court with premium flooring and air conditioning.",
    rate: 600,
    contact: "9988776655",
    location: "Midtown, Business Bay",
    facilities: ["Air Conditioning", "Refreshments", "Shoes Rental", "CCTV Monitoring"],
    reviews: ["Loved the vibe!", "Very clean and modern.", "Will book again."],
    images: [Turf3Img1, Turf3Img2, Turf3Img3],
  },
};

export default function TurfDetailsPage() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const turf = sampleTurfs[id] || {
    name: "Unknown Turf",
    description: "Details unavailable",
    rate: 0,
    contact: "N/A",
    location: "N/A",
    facilities: [],
    reviews: [],
    images: [],
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <UserSidebar open={open} setOpen={setOpen} />

      <div className="flex-1 ml-2">
        <UserNavbar setOpen={setOpen} />

        <div className="p-6 pt-20">
          
          <h1 className="text-3xl font-bold text-indigo-700 mb-6">{turf.name}</h1>

        
          <TurfImageGallery images={turf.images} />

          
          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-white p-6 rounded-2xl shadow-lg border border-indigo-100">
          
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-indigo-700">{turf.name}</h2>
              <span className="text-lg font-semibold bg-indigo-600 text-white px-4 py-1 rounded-full shadow">
                ₹{turf.rate}/hr
              </span>
            </div>

          
            <p className="text-gray-700 mb-4">{turf.description}</p>

            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-600">
                <span className="text-indigo-600 text-xl">📍</span>
                {turf.location}
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <span className="text-indigo-600 text-xl">📞</span>
                {turf.contact}
              </p>
            </div>

           
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">🏟️ Facilities</h3>
              <div className="flex flex-wrap gap-3">
                {turf.facilities.map((f, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm shadow"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">🗣️ Reviews</h3>
              <div className="space-y-2">
                {turf.reviews.map((r, idx) => (
                  <p
                    key={idx}
                    className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg text-gray-700 shadow-sm"
                  >
                    “{r}”
                  </p>
                ))}
              </div>
            </div>

            <Link
              to={`/user/book/${id}`}
              className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

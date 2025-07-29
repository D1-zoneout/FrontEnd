import { useState } from "react";
import { Link } from "react-router-dom";
import UserNavbar from "../../Components/User/UserNavbar";
import UserSidebar from "../../Components/User/UserSidebar";
import TurfCard from "../../Components/User/TurfCard";

import Turf1 from "../../assets/turf1.jpg";
import Turf2 from "../../assets/turf2.jpg";
import Turf3 from "../../assets/turf3.jpg";

export default function ExploreTurfs() {
  const [open, setOpen] = useState(false);

  const turfs = [
    {
      id: 1,
      name: "Green Field Turf",
      location: "Downtown",
      type: "Football",
      rate: 500,
      image: Turf1,
    },
    {
      id: 2,
      name: "City Sports Arena",
      location: "Uptown",
      type: "Cricket",
      rate: 750,
      image: Turf2,
    },
    {
      id: 3,
      name: "Elite Play Zone",
      location: "Midtown",
      type: "Futsal",
      rate: 600,
      image: Turf3,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <UserSidebar open={open} setOpen={setOpen} />

      <div className="flex-1">
        <UserNavbar setOpen={setOpen} />

        <main className="p-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">Explore Turfs</h1>

          <div className="flex justify-between gap-6">
            {turfs.map((turf) => (
              <div key={turf.id} className="bg-white rounded-xl shadow-lg p-4 text-center">
                <img src={turf.image} alt={turf.name} className="rounded-lg w-full h-40 object-cover mb-3" />
                <h2 className="text-lg font-bold text-gray-800">{turf.name}</h2>
                <p className="text-gray-600">{turf.location}</p>
                <p className="text-indigo-600 font-semibold mb-3">₹{turf.rate}/hr</p>
                <Link
                  to={`/user/turf/${turf.id}`}
                  state={{ turf }}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

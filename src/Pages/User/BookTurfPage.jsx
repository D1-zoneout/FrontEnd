// src/pages/user/BookTurfPage.jsx
import { useNavigate } from "react-router-dom";

export default function BookTurfPage() {
  const navigate = useNavigate();

  const handleBook = () => {
    const bookingDetails = {
      turfName: "Elite Turf Ground",
      slotTime: "6:00 PM - 7:00 PM",
      price: 500,
      turfId: "TURF123",
      slotId: "SLOT456",
    };

    navigate("/user/payment", { state: bookingDetails });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-500 mb-4">Book Turf</h1>
      <div className="bg-white p-4 rounded shadow">
        <p className="mb-2">Select your slot and confirm booking.</p>
        <button
          onClick={handleBook}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

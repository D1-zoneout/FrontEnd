// src/pages/user/PaymentPage.jsx
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { turfName, slotTime, price } = location.state || {};

  const handlePay = () => {
    // Simulate API payment success
    alert("Payment Successful!");
    navigate("/user/booking-confirmed", { replace: true });
  };

  if (!turfName) return <div className="p-6 text-red-500">No booking details found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Page</h1>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <p><strong>Turf:</strong> {turfName}</p>
        <p><strong>Slot:</strong> {slotTime}</p>
        <p><strong>Price:</strong> ₹{price}</p>
        <button
          onClick={handlePay}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Pay ₹{price}
        </button>
      </div>
    </div>
  );
}

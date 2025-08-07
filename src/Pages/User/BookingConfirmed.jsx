// src/pages/user/BookingConfirmed.jsx
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

export default function BookingConfirmed() {
  const navigate = useNavigate();

  const handleDownloadInvoice = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Turf Booking Invoice", 20, 20);

    doc.setFontSize(12);
    doc.text(`Invoice ID: INV-${Math.floor(Math.random() * 1000000)}`, 20, 35);
    doc.text("Turf: Elite Turf Ground", 20, 45);
    doc.text("Slot: 6:00 PM - 7:00 PM", 20, 55);
    doc.text("Amount Paid: ₹500", 20, 65);
    doc.text("Payment Status: Successful", 20, 75);
    doc.text("Date: " + new Date().toLocaleDateString(), 20, 85);

    doc.save("TurfBooking_Invoice.pdf");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Booking Confirmed!</h1>
      <p className="mb-6">Your turf booking and payment were successful.</p>
      
      <div className="space-x-4">
        <button
          onClick={handleDownloadInvoice}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Download Invoice
        </button>
        <button
          onClick={() => navigate("/user/dashboard")}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserNavbar from "../../Components/User/UserNavbar";
import UserSidebar from "../../Components/User/UserSidebar";

export default function BookTurfPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  
  const turf = location.state?.turf || {
    name: `Turf #${id}`,
    rate: 500,
    location: "Downtown, City Center"
  };

  const slots = [
    "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM",
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM",
    "10:00 PM"
  ];

 
  const bookedSlotsByDate = {
    "2025-07-28": ["08:00 AM", "11:00 AM", "06:00 PM"],
    "2025-07-29": ["07:00 AM", "09:00 AM"],
    "2025-07-30": ["10:00 AM", "03:00 PM"]
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const formatDate = (date) => date.toISOString().split("T")[0]; 

  const handleBook = () => {
    if (!selectedDate || !selectedSlot) {
      alert("Please select date and time slot.");
      return;
    }

    navigate("/user/payment", {
      state: {
        turfName: turf.name,
        slotTime: `${selectedDate.toDateString()} at ${selectedSlot}`,
        price: turf.rate
      }
    });
  };

  const bookedSlots = selectedDate ? bookedSlotsByDate[formatDate(selectedDate)] || [] : [];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserSidebar open={open} setOpen={setOpen} />
      <div className="flex-1">
        <UserNavbar setOpen={setOpen} />

        <main className="p-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">
            Book: {turf.name}
          </h1>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 mb-2">📍 Location: {turf.location}</p>
            <p className="text-indigo-500 font-semibold mb-4">💰 Rate: ₹{turf.rate}/hr</p>

           
            <div className="mb-6">
              <p className="text-lg font-medium mb-2 text-gray-800">Select Date:</p>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setSelectedSlot(null);
                }}
                className="border border-gray-300 p-2 rounded-lg"
                dateFormat="dd/MM/yyyy"
                placeholderText="Choose a date"
                minDate={new Date()}
              />
            </div>

            
            {selectedDate && (
              <>
                <p className="text-lg font-medium mb-3 text-gray-800">
                  Select an available time slot:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                  {slots.map((slot) => {
                    const isBooked = bookedSlots.includes(slot);
                    const isSelected = selectedSlot === slot;

                    return (
                      <button
                        key={slot}
                        disabled={isBooked}
                        onClick={() => setSelectedSlot(slot)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition
                          ${
                            isBooked
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : isSelected
                              ? "bg-indigo-600 text-white border-2 border-indigo-800"
                              : "bg-white hover:bg-indigo-100 text-indigo-700 border border-indigo-500"
                          }`}
                      >
                        {slot} {isSelected && !isBooked && "✓"}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            <button
              onClick={handleBook}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow"
            >
              Confirm Booking
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

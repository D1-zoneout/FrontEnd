import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate submission
    console.log("Submitted Contact Form:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <form
            className="space-y-4 bg-gray-50 p-6 rounded-2xl shadow-md"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Message sent! We will get back to you soon.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <div className="space-y-2 text-gray-700">
            <div>
              <p className="font-semibold">📍 Address:</p>
              <p>123 Turf Road, Pune, Maharashtra, India</p>
            </div>
            <div>
              <p className="font-semibold">📧 Email:</p>
              <p>support@turfy.in</p>
            </div>
            <div>
              <p className="font-semibold">📞 Phone:</p>
              <p>+91 98765 43210</p>
            </div>
            <div>
              <p className="font-semibold">🕒 Working Hours:</p>
              <p>Mon - Sat: 9:00 AM to 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

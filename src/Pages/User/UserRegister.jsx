import { useState } from "react";
export default function UserRegister() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log("Register:", formData); };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-indigo-500 mb-4">Register</h1>
        <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white w-full py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}

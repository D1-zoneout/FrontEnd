import { useState } from "react";
export default function UserLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log("Login:", credentials); };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-indigo-500 mb-4">Login</h1>
        <input name="email" type="email" placeholder="Email" value={credentials.email} onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" value={credentials.password} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
}
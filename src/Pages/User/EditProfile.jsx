export default function EditProfile() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl text-indigo-500 font-bold mb-4">Edit Profile</h1>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400" />
          <input type="email" placeholder="Email" className="border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400" />
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-lg shadow">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

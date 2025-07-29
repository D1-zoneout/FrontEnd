import { Link } from "react-router-dom";

export default function UserNavbar() {
  return (
    <nav className="bg-indigo-500 text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center">
        
        <Link to="/user/home" className="text-xl font-semibold">
          TurfMate
        </Link>
        
       
        <div className="space-x-4">
          
          <Link to="/logout" className="hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

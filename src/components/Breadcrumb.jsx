// src/components/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-500 px-4 py-2">
      <nav className="flex items-center space-x-1">
        <Link to="/" className="hover:underline text-blue-600 font-medium">
          Home
        </Link>
        {path.map((segment, index) => (
          <div key={index} className="flex items-center space-x-1">
            <span>/</span>
            <span className="text-gray-700 capitalize">{segment}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-lg text-gray-900 hover:text-primary transition duration-300 tracking-tight"
        >
          Nawal
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/profile"
            className="text-sm text-gray-700 hover:text-primary px-3 py-2 rounded-md transition duration-300 hover:bg-gray-50"
          >
            Profile
          </Link>
          <Link
            to="/experience"
            className="text-sm text-gray-700 hover:text-primary px-3 py-2 rounded-md transition duration-300 hover:bg-gray-50"
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="text-sm text-gray-700 hover:text-primary px-3 py-2 rounded-md transition duration-300 hover:bg-gray-50"
          >
            Projects
          </Link>
          <a
            href="mailto:nawalfirjatullah16@gmail.com"
            className="text-sm text-gray-700 hover:text-primary px-3 py-2 rounded-md transition duration-300 hover:bg-gray-50 ml-2 font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        <a class="flex items-center gap-3 font-bold text-lg text-gray-900 hover:text-primary transition duration-300 tracking-tight" href="/">
          <img src="/nawal-profile.webp" alt="Nawal" class="w-8 h-8 rounded-full object-cover flex-shrink-0">Nawal
        </a>
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
          <Link
            to="/contact"
            className="text-sm text-gray-700 hover:text-primary px-3 py-2 rounded-md transition duration-300 hover:bg-gray-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

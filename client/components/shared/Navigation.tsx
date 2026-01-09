import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-gray-900 hover:text-primary transition">
          Nawal
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/profile" className="text-sm text-gray-700 hover:text-primary transition">
            Profile
          </Link>
          <Link to="/experience" className="text-sm text-gray-700 hover:text-primary transition">
            Experience
          </Link>
          <Link to="/projects" className="text-sm text-gray-700 hover:text-primary transition">
            Projects
          </Link>
          <a
            href="mailto:nawalfirjatullah16@gmail.com"
            className="text-sm text-gray-700 hover:text-primary transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

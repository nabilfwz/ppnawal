import { Link } from "react-router-dom";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 relative z-10">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Muhammad Nawal F.
              </h3>
              <p className="text-xs font-mono text-primary mt-1">
                GEODETIC ENGINEER
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Leveraging geospatial data accuracy for precision infrastructure,
              3D mapping, and BIM solutions. Based in Yogyakarta, Indonesia.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-mono uppercase text-gray-500 tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-primary transition-colors text-sm w-fit"
              >
                Home
              </Link>
              <Link
                to="/experience"
                className="text-gray-400 hover:text-primary transition-colors text-sm w-fit"
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-primary transition-colors text-sm w-fit"
              >
                Projects
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-mono uppercase text-gray-500 tracking-wider">
              Contact
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:nawalfirjatullah16@gmail.com"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <div className="p-2 rounded bg-gray-800 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm">nawalfirjatullah16@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/nawalfirjatullah"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <div className="p-2 rounded bg-gray-800 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm">
                  linkedin.com/in/nawalfirjatullah
                </span>
              </a>

              <a
                href="https://wa.me/6285126426465"
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <div className="p-2 rounded bg-gray-800 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm">+62 851 2642 6465</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono">
          <p>&copy; {new Date().getFullYear()} MNF. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Available for work
            </span>
            <span>Yogyakarta, ID (UTC+7)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

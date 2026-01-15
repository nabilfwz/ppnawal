import { Mail, Linkedin, Phone, ArrowRight } from "lucide-react";
import Navigation from "@/components/shared/Navigation";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                  Geodetic Engineer
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Muhammad Nawal
                <br />
                Firjatullah
              </h1>
              <p className="text-2xl text-gray-600 font-light">
                Specializing in surveying, LiDAR mapping, and BIM modeling
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl font-light">
              Fresh graduate from Universitas Gadjah Mada with hands-on
              experience in topographic surveying, 3D point cloud processing,
              and Building Information Modeling for infrastructure projects.
              Currently working as BIM Engineer at PT Kereta Api Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 group shadow-sm hover:shadow-md"
              >
                View Work Experience
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary font-semibold px-6 py-3 border-2 border-primary rounded-lg hover:bg-red-50 transition duration-300 group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>

            <div className="pt-12 border-t border-gray-200 flex flex-wrap gap-8">
              <a
                href="mailto:nawalfirjatullah16@gmail.com"
                className="inline-flex items-center gap-3 text-gray-700 hover:text-primary transition duration-300 group"
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-red-50 transition">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">
                    nawalfirjatullah16@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/nawalfirjatullah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-700 hover:text-primary transition duration-300 group"
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-red-50 transition">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">LinkedIn</p>
                  <p className="font-semibold text-gray-900">
                    nawalfirjatullah
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/6285126426465"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-700 hover:text-primary transition duration-300 group"
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-red-50 transition">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">WhatsApp</p>
                  <p className="font-semibold text-gray-900">
                    +62 851 2642 6465
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2025 Muhammad Nawal Firjatullah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

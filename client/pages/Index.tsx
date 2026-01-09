import { Mail, Linkedin, Phone, ExternalLink, ArrowRight } from "lucide-react";
import Navigation from "@/components/shared/Navigation";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-8 bg-gradient-to-b from-white via-white to-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Muhammad Nawal Firjatullah
              </h1>
              <p className="text-xl text-gray-600">
                Geodetic Engineer specializing in surveying, LiDAR mapping, and BIM modeling
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Fresh graduate from Universitas Gadjah Mada with hands-on experience in topographic surveying, 
              3D point cloud processing, and Building Information Modeling for infrastructure projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-primary transition group"
              >
                View Work Experience
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-primary transition group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>

            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
              <a
                href="mailto:nawalfirjatullah16@gmail.com"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a
                href="https://linkedin.com/in/nawalfirjatullah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="tel:+6285126426465"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition"
              >
                <Phone className="w-5 h-5" />
                +62 851 2642 6465
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-8 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2025 Muhammad Nawal Firjatullah</p>
        </div>
      </footer>
    </div>
  );
}

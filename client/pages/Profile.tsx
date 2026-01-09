import Navigation from "@/components/shared/Navigation";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Muhammad Nawal Firjatullah
              </h1>
              <p className="text-xl text-gray-600">
                Geodetic Engineer
              </p>
            </div>
          </div>

          {/* Personal Info */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-4">
              <a
                href="mailto:nawalfirjatullah16@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
              >
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">nawalfirjatullah16@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+6285126426465"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
              >
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">+62 851 2642 6465</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/nawalfirjatullah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition"
              >
                <Linkedin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <p className="font-medium text-gray-900">linkedin.com/in/nawalfirjatullah</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium text-gray-900">Yogyakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="border-l-2 border-primary pl-6 pb-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Bachelor's Degree in Geodetic Engineering
              </h3>
              <p className="text-primary font-medium">Universitas Gadjah Mada</p>
              <p className="text-gray-600 mt-1">Aug 2021 - Nov 2025</p>
              <p className="text-gray-700 mt-3">GPA: 3.55 / 4.00</p>
            </div>
          </section>

          {/* About */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">About</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A fresh graduate in Geodetic Engineering from Universitas Gadjah Mada with hands-on experience 
                in surveying, LiDAR mapping, mining, and construction engineering. Highly motivated to develop 
                technical skills, collaborate in teams, and adapt to multidisciplinary engineering environments.
              </p>
              <p>
                My specialization focuses on topographic surveying, LiDAR-based 3D mapping, and Building Information 
                Modeling (BIM) for industrial applications. I have gained valuable experience across several fields, 
                including construction, mining, and infrastructure projects.
              </p>
              <p>
                Currently serving as a BIM Engineer in the 3D BIM development project for PT KAI railway stations, 
                responsible for processing point cloud data and developing accurate BIM models to support as-built 
                documentation and infrastructure management.
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Licenses & Certifications</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-gray-900">
                  Remote Pilot Certificate
                </h3>
                <p className="text-gray-600">DKPPU (Direktotat Jenderal Perhubungan Udara)</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-gray-900">
                  Remote Pilot Certificate
                </h3>
                <p className="text-gray-600">APDI (Asosiasi Pilot Drone Indonesia)</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-semibold text-gray-900">
                  Land Surveying & Mapping Training Instructor (FETC)
                </h3>
                <p className="text-gray-600">Mining Sector, Forestry Sector, Construction Sector</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-8 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2025 Muhammad Nawal Firjatullah</p>
        </div>
      </footer>
    </div>
  );
}

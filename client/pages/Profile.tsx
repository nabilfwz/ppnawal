import Navigation from "@/components/shared/Navigation";
import { Mail, Phone, Linkedin, MapPin, ExternalLink } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-40 pb-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-20 space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
              Profile
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Muhammad Nawal Firjatullah — Geodetic Engineer
            </p>
          </div>

          {/* Personal Info */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:nawalfirjatullah16@gmail.com"
                className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 hover:border-primary hover:bg-red-50 transition duration-300"
              >
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="font-semibold text-gray-900 mt-1">
                    nawalfirjatullah16@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="tel:+6285126426465"
                className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 hover:border-primary hover:bg-red-50 transition duration-300"
              >
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                    Phone
                  </p>
                  <p className="font-semibold text-gray-900 mt-1">
                    +62 851 2642 6465
                  </p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/nawalfirjatullah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 hover:border-primary hover:bg-red-50 transition duration-300"
              >
                <Linkedin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                    LinkedIn
                  </p>
                  <p className="font-semibold text-gray-900 mt-1 flex items-center gap-1">
                    nawalfirjatullah
                    <ExternalLink className="w-4 h-4" />
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-5 rounded-lg bg-gray-50 border border-gray-200">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="font-semibold text-gray-900 mt-1">
                    Yogyakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight">
              Education
            </h2>
            <div className="border-l-4 border-primary pl-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  Bachelor's Degree in Geodetic Engineering
                </h3>
                <p className="text-lg text-primary font-semibold">
                  Universitas Gadjah Mada
                </p>
                <p className="text-gray-600 font-medium">Aug 2021 - Nov 2025</p>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-gray-700">
                    <span className="font-semibold">GPA:</span> 3.55 / 4.00
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight">
              About
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-light">
              <p>
                A fresh graduate in Geodetic Engineering from Universitas Gadjah
                Mada with hands-on experience in surveying, LiDAR mapping,
                mining, and construction engineering. Highly motivated to
                develop technical skills, collaborate in teams, and adapt to
                multidisciplinary engineering environments.
              </p>
              <p>
                My specialization focuses on topographic surveying, LiDAR-based
                3D mapping, and Building Information Modeling (BIM) for
                industrial applications. I have gained valuable experience
                across several fields, including construction, mining, and
                infrastructure projects.
              </p>
              <p>
                Currently serving as a BIM Engineer in the 3D BIM development
                project for PT KAI railway stations, responsible for processing
                point cloud data and developing accurate BIM models to support
                as-built documentation and infrastructure management.
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight">
              Licenses & Certifications
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-8 pb-6">
                <h3 className="font-bold text-gray-900 text-lg">
                  Remote Pilot Certificate
                </h3>
                <p className="text-primary font-semibold mt-2">
                  DKPPU (Direktotat Jenderal Perhubungan Udara)
                </p>
              </div>
              <div className="border-l-4 border-primary pl-8 pb-6">
                <h3 className="font-bold text-gray-900 text-lg">
                  Remote Pilot Certificate
                </h3>
                <p className="text-primary font-semibold mt-2">
                  APDI (Asosiasi Pilot Drone Indonesia)
                </p>
              </div>
              <div className="border-l-4 border-primary pl-8">
                <h3 className="font-bold text-gray-900 text-lg">
                  Land Surveying & Mapping Training Instructor (FETC)
                </h3>
                <p className="text-primary font-semibold mt-2">
                  Mining, Forestry, & Construction Sectors
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2025 Muhammad Nawal Firjatullah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

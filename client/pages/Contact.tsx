import Navigation from "@/components/shared/Navigation";
import { Mail, Phone, Linkedin, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-40 pb-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-20 space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
              Contact
            </h1>
            <p className="text-xl text-gray-600 font-light">Get in touch</p>
          </div>

          {/* Contact Information */}
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
                href="https://wa.me/6285126426465"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 hover:border-primary hover:bg-red-50 transition duration-300"
              >
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                    WhatsApp
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

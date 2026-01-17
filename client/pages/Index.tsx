import { Mail, Linkedin, Phone, ArrowRight } from "lucide-react";
import Navigation from "@/components/shared/Navigation";
import { Link } from "react-router-dom";
import Footer from "@/components/shared/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* Diperlebar agar muat 2 kolom */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* KOLOM KIRI: Teks & Info */}
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded border border-primary/20">
                    Geodetic Engineer
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Muhammad Nawal
                  <br />
                  <span className="text-primary">Firjatullah</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light">
                  Specializing in surveying, LiDAR mapping, and BIM modeling
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed font-light border-l-4 border-gray-200 pl-6">
                Fresh graduate from Universitas Gadjah Mada with hands-on
                experience in topographic surveying, 3D point cloud processing,
                and Building Information Modeling for infrastructure projects.
                Currently working as BIM Engineer at PT Kereta Api Indonesia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/experience"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-700 transition duration-300 group shadow-lg shadow-primary/25"
                >
                  View Work Experience
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 text-primary font-semibold px-8 py-4 border-2 border-primary rounded-lg hover:bg-red-50 transition duration-300 group"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>
              </div>

              <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-6 sm:gap-12">
                <a
                  href="mailto:nawalfirjatullah16@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition group"
                >
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                  <span className="font-medium">Email Me</span>
                </a>
                <a
                  href="https://linkedin.com/in/nawalfirjatullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/6285126426465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition group"
                >
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* KOLOM KANAN: Foto */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5]">
                {/* Element Dekoratif di belakang foto */}
                <div className="absolute top-4 right-4 w-full h-full border-2 border-gray-200 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>

                {/* Container Gambar */}
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 relative">
                  {/* Pastikan file gambar Anda bernama 'home-nawal' (tambah .jpg/.png jika perlu) di folder public */}
                  <img
                    src="/home-nawal.png"
                    alt="Muhammad Nawal Firjatullah"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback jika gambar error/tidak ditemukan
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/400x500?text=Foto+Anda";
                    }}
                  />

                  {/* Overlay gradasi halus di bawah foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

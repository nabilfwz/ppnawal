import { Mail, Linkedin, Phone, ExternalLink } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold text-gray-900">
            Nawal
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-700 hover:text-primary transition"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8 bg-gradient-to-b from-white via-white to-gray-50">
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

            <div className="flex flex-wrap gap-4 pt-4">
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

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Experience</h2>

          <div className="space-y-12">
            {[
              {
                company: "PT Kereta Api Indonesia",
                position: "BIM Engineer",
                period: "Dec 2025 - Present",
                description:
                  "Processing point cloud data and developing 3D BIM models for 25 railway stations based on LiDAR surveys. Producing as-built drawings and documentation.",
              },
              {
                company: "PT Mifa Bersaudara",
                position: "Mine Surveyor Intern",
                period: "Dec 2024 - Feb 2025",
                description:
                  "Conducted topographic surveys and stockpile measurements using multiple surveying methods including GNSS RTK, Total Station, and Terrestrial Laser Scanner.",
              },
              {
                company: "PT Frasta Era Teknologi Cemerlang",
                position: "Surveyor Certification Trainer",
                period: "Jul 2025 - Nov 2025",
                description:
                  "Provided professional training on surveying theory, instrument operation, and data processing using Autodesk Civil 3D and field equipment.",
              },
              {
                company: "Balai Wilayah Sungai Sumatera I",
                position: "Project Surveyor Intern",
                period: "Jul 2023",
                description:
                  "Conducted surveys and staking out for reservoir inundation and highway construction projects using Total Station and GNSS.",
              },
            ].map((job, idx) => (
              <div key={idx} className="border-l-2 border-primary pl-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {job.company}
                    </h3>
                    <p className="text-primary font-medium">{job.position}</p>
                  </div>
                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    {job.period}
                  </p>
                </div>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Skills & Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Software
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Autodesk Suite (Civil 3D, Revit, AutoCAD, ReCap)</p>
                <p>Point Cloud Processing (RiSCAN PRO, CloudCompare)</p>
                <p>GIS & Mapping (ArcGIS Pro, QGIS)</p>
                <p>Drone Processing (Agisoft Metashape, Pix4D)</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                Hardware
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Total Station & GNSS RTK Systems</p>
                <p>Terrestrial Laser Scanner (TLS)</p>
                <p>UAV Drones (DJI Mavic 3E)</p>
                <p>Surveying Instruments & Equipment</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-300">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              Certifications
            </h3>
            <div className="space-y-2 text-gray-700">
              <p>Remote Pilot Certificate (DKPPU, APDI)</p>
              <p>Land Surveying & Mapping Trainer (FETC) - Mining, Forestry, Construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Selected Projects</h2>

          <div className="space-y-8">
            {[
              {
                title: "3D BIM Development - PT KAI Railway Stations",
                description:
                  "Processing LiDAR point cloud data and developing 3D BIM models for 25 railway stations as-built documentation.",
              },
              {
                title: "Prof. KRMT Wreksodiningrat Bridge Survey",
                description:
                  "Comprehensive TLS survey and BIM modeling of bridge structure with as-built documentation.",
              },
              {
                title: "PT Pertamina Drilling Sites Survey",
                description:
                  "Led topographic survey team across 8 proposed drilling rig locations (±38 hectares) with quality control and mapping.",
              },
              {
                title: "Indoor Mapping Performance Evaluation",
                description:
                  "Evaluated accuracy and efficiency of laser scanning systems (TLS, SLAM, CMS) for indoor mapping applications.",
              },
            ].map((project, idx) => (
              <div key={idx} className="pb-8 border-b border-gray-200 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

          <div className="space-y-4">
            <a
              href="mailto:nawalfirjatullah16@gmail.com"
              className="flex items-center justify-between group p-4 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-900">nawalfirjatullah16@gmail.com</span>
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition" />
            </a>

            <a
              href="tel:+6285126426465"
              className="flex items-center justify-between group p-4 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-900">+62 851 2642 6465</span>
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition" />
            </a>

            <a
              href="https://linkedin.com/in/nawalfirjatullah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group p-4 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-gray-900">linkedin.com/in/nawalfirjatullah</span>
              </span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transition" />
            </a>
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

import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Nawal</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition">
              About
            </a>
            <a href="#experience" className="text-gray-700 hover:text-primary transition">
              Experience
            </a>
            <a href="#projects" className="text-gray-700 hover:text-primary transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition">
              Contact
            </a>
          </div>
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary/90">Get in Touch</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary-foreground/80 text-lg">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Muhammad Nawal Firjatullah
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Geodetic Engineer & Surveying Specialist
              </p>
            </div>
            <p className="text-primary-foreground/85 text-base leading-relaxed max-w-lg">
              Fresh graduate from Universitas Gadjah Mada specializing in topographic surveying, 
              LiDAR-based 3D mapping, and BIM modeling. Passionate about delivering precise geospatial 
              solutions for industrial applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact">
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Download CV
                </Button>
              </a>
              <a href="https://linkedin.com/in/nawalfirjatullah" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-xl flex items-center justify-center">
                <svg
                  className="w-3/4 h-3/4 text-primary-foreground/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 h-96 md:h-auto flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">5+</div>
                <p className="text-lg font-semibold text-gray-800">Major Projects</p>
                <p className="text-gray-600 mt-2">Surveying & Mapping Solutions</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Geodetic Engineering graduate from Universitas Gadjah Mada (UGM) with strong interest 
                in topographic surveying and LiDAR-based 3D mapping for industrial applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My experience spans construction, mining, and infrastructure sectors, focusing on precise 
                surveying, advanced 3D mapping, and Building Information Modeling (BIM). Currently serving 
                as a BIM Engineer on PT KAI railway station projects, developing accurate as-built documentation 
                from point cloud data.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm text-gray-600">Education</p>
                  <p className="font-semibold text-gray-900">Universitas Gadjah Mada</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm text-gray-600">Specialization</p>
                  <p className="font-semibold text-gray-900">Surveying & Mapping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                company: "PT Kereta Api Indonesia",
                position: "BIM Engineer",
                period: "Dec 2025 - Present",
                description: "Processing point cloud data and developing 3D BIM models for 25 railway stations based on LiDAR surveys",
                highlights: ["3D BIM Modeling", "Point Cloud Processing", "As-Built Documentation"],
              },
              {
                company: "PT Mifa Bersaudara",
                position: "Mine Surveyor Intern",
                period: "Dec 2024 - Feb 2025",
                description: "Conducted comprehensive mining surveys using multiple surveying methods and instruments",
                highlights: ["LiDAR Scanning", "Volume Calculation", "Data Processing"],
              },
              {
                company: "PT Frasta Era Teknologi Cemerlang",
                position: "Surveyor Certification Trainer",
                period: "Jul 2025 - Nov 2025",
                description: "Provided professional training on surveying concepts, instruments, and data processing",
                highlights: ["Training & Development", "Technical Instruction", "Field Demonstrations"],
              },
            ].map((job, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{job.company}</h3>
                    <p className="text-lg text-primary font-semibold">{job.position}</p>
                  </div>
                  <p className="text-gray-600 font-medium">{job.period}</p>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "3D BIM Development - PT KAI Railway Stations",
                description: "Processing LiDAR point cloud data and developing accurate 3D BIM models for 25 railway stations as-built documentation",
                tools: ["Autodesk ReCap", "Autodesk Revit", "Point Cloud Processing"],
              },
              {
                title: "Prof. KRMT Wreksodiningrat Bridge BIM Modeling",
                description: "Developed comprehensive 3D BIM model and as-built drawings from terrestrial laser scanner survey data",
                tools: ["TLS Survey", "Autodesk Revit", "AutoCAD"],
              },
              {
                title: "PT Pertamina Drilling Sites Survey",
                position: "Survey Group Leader",
                description: "Led topographic survey team across 8 proposed drilling rig locations (±38 hectares)",
                tools: ["Total Station", "Civil 3D", "Team Coordination"],
              },
              {
                title: "Indoor Mapping Performance Evaluation",
                description: "Evaluated accuracy and efficiency of static and dynamic laser scanning systems for indoor mapping applications",
                tools: ["TLS", "SLAM", "CMS Systems"],
              },
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Technical Proficiencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hardware & Instruments</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Total Station
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  GNSS RTK
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Terrestrial Laser Scanner
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  UAV Drones
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Software & Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Autodesk Suite (Civil 3D, Revit, AutoCAD)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Point Cloud Processing (RiSCAN PRO, CloudCompare)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  GIS & Mapping (ArcGIS, QGIS)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Drone Processing (Agisoft Metashape, Pix4D)
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Remote Pilot Certificate (DKPPU)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Remote Pilot Certificate (APDI)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Surveyor Training Instructor (FETC)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Connect!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Ready to discuss surveying projects, 3D mapping solutions, or collaboration opportunities? 
            Let's get in touch.
          </p>
          <div className="space-y-4 mb-12">
            <a
              href="mailto:nawalfirjatullah16@gmail.com"
              className="flex items-center justify-center gap-3 text-lg hover:text-primary-foreground/80 transition"
            >
              <Mail className="w-6 h-6" />
              nawalfirjatullah16@gmail.com
            </a>
            <a
              href="tel:+6285126426465"
              className="flex items-center justify-center gap-3 text-lg hover:text-primary-foreground/80 transition"
            >
              <Phone className="w-6 h-6" />
              +62 851 2642 6465
            </a>
            <a
              href="https://linkedin.com/in/nawalfirjatullah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-lg hover:text-primary-foreground/80 transition"
            >
              <Linkedin className="w-6 h-6" />
              linkedin.com/in/nawalfirjatullah
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:nawalfirjatullah16@gmail.com">
              <Button className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                Send Email
              </Button>
            </a>
            <a href="https://linkedin.com/in/nawalfirjatullah" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Visit LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Muhammad Nawal Firjatullah. All rights reserved.</p>
          <p className="text-sm mt-2">Geodetic Engineer | Surveying Specialist | 3D Mapping Expert</p>
        </div>
      </footer>
    </div>
  );
}

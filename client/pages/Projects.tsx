import Navigation from "@/components/shared/Navigation";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-40 pb-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
              Projects
            </h1>
            <p className="text-xl text-gray-600 font-light mt-4">
              Professional portfolio of geomatics and infrastructure projects
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title:
                  "Development of 3D BIM Model and As-Built Drawings for PT Kereta Api Indonesia (KAI) Stations",
                period: "Dec 2025 - Present",
                role: "BIM Engineer",
                image: "https://images.pexels.com/photos/29148783/pexels-photo-29148783.jpeg",
                imageAlt: "3D BIM model and architectural visualization",
                description:
                  "Developing comprehensive 3D Building Information Models for 25 railway stations based on LiDAR point cloud data acquisition and processing. Creating accurate as-built documentation to support infrastructure management and maintenance operations.",
                highlights: [
                  "Processing point cloud data from LIDAR surveys using Autodesk ReCap",
                  "Modeling 25 railway stations in Autodesk Revit",
                  "Producing detailed as-built drawings and documentation",
                  "Ensuring geometric accuracy for infrastructure management",
                ],
                tools: [
                  "Autodesk ReCap",
                  "Autodesk Revit",
                  "Autodesk AutoCAD",
                  "Point Cloud Processing",
                ],
              },
              {
                title:
                  "Development of 3D BIM Model and As-Built Drawings for Prof. Ir. KRMT Wreksodiningrat Bridge",
                period: "Sep 2024 - Dec 2024",
                role: "Project Lead",
                image: "https://images.pexels.com/photos/8090293/pexels-photo-8090293.jpeg",
                imageAlt: "Laser scanning and 3D point cloud technology for bridge survey",
                description:
                  "Conducted comprehensive terrestrial laser scanner survey and developed detailed 3D BIM model of historic bridge structure. Produced accurate as-built drawings for engineering documentation and structural analysis.",
                highlights: [
                  "Conducted TLS survey using Topcon GLS-2000 laser scanner",
                  "Processed and registered point cloud data with high accuracy",
                  "Developed detailed 3D BIM in Autodesk Revit",
                  "Created comprehensive as-built drawings in AutoCAD",
                ],
                tools: [
                  "Topcon GLS-2000",
                  "Autodesk Revit",
                  "Autodesk AutoCAD",
                  "Magnet Collage",
                  "Maptek PointStudio",
                ],
              },
              {
                title:
                  "Topographic Survey Project for 8 Proposed Drilling Rig Sites (PT Pertamina EP)",
                period: "Nov 2025 - Dec 2025",
                role: "Survey Group Leader",
                image: "https://images.pexels.com/photos/3274655/pexels-photo-3274655.jpeg",
                imageAlt: "Aerial topographic survey of drilling rig locations",
                description:
                  "Led comprehensive topographic survey team across 8 proposed drilling rig locations covering approximately 38 hectares. Managed quality control, data processing, and delivered professional topographic maps for infrastructure planning.",
                highlights: [
                  "Planned and executed surveys at 8 locations totaling ±38 hectares",
                  "Led a 4-member survey team with coordinated fieldwork",
                  "Performed quality control on all collected data",
                  "Processed survey data and generated topographic maps using Civil 3D",
                ],
                tools: [
                  "Total Station",
                  "Autodesk Civil 3D",
                  "Surveying Equipment",
                  "Team Coordination",
                ],
              },
              {
                title:
                  "Performance Evaluation and Accuracy Assessment of Static and Dynamic/Mobile Laser Scanner for Indoor Mapping",
                period: "May 2025 - Oct 2025",
                role: "Research Lead",
                description:
                  "Conducted comprehensive evaluation of various laser scanning technologies for indoor mapping applications. Compared accuracy, efficiency, and practical applications of static TLS, SLAM systems, and mobile laser scanners.",
                highlights: [
                  "Tested three laser scanning systems: TLS (Topcon GLS-2000), SLAM (FJD Trion P1), and CMS (Teledyne CMS V500)",
                  "Processed and analyzed point cloud data from multiple systems",
                  "Evaluated accuracy metrics and efficiency comparisons",
                  "Documented findings and recommendations for practical applications",
                ],
                tools: [
                  "Topcon GLS-2000",
                  "FJD Trion P1",
                  "Teledyne CMS V500",
                  "MAGNET Collage",
                  "FJD Trion Model",
                  "Maptek PointStudio",
                ],
              },
              {
                title:
                  "Mining Survey and Monitoring Project (PT Mifa Bersaudara)",
                period: "Dec 2024 - Feb 2025",
                role: "Mine Surveyor Intern",
                description:
                  "Conducted comprehensive surveying and monitoring for coal mining operations. Performed topographic surveys, stockpile volume measurements, and structural deformation monitoring using advanced surveying technologies.",
                highlights: [
                  "Monthly stockpile measurements using RIEGL VZ-2000i laser scanner (TLS method)",
                  "Monthly stockpile measurements using DJI Mavic 3E drone (PPK method)",
                  "Monthly stockpile measurements using Sokkia GRX3 GNSS RTK",
                  "Monthly stockpile measurements using Leica TS-13 Total Station",
                  "Structural deformation monitoring using Topcon ES105",
                  "Point cloud data processing and orthophoto generation",
                ],
                tools: [
                  "RIEGL VZ-2000i",
                  "DJI Mavic 3E",
                  "GNSS RTK",
                  "Total Station",
                  "Agisoft Metashape",
                  "Pix4D",
                  "RiSCAN PRO",
                  "Minescape",
                ],
              },
              {
                title:
                  "Dam Support Highway Survey and BIM Development (Balai Wilayah Sungai Sumatera I)",
                period: "Jul 2023",
                role: "Project Surveyor Intern",
                description:
                  "Conducted comprehensive surveying for the design and construction of a 7-km highway supporting the Keureuto Reservoir dam. Performed control point establishment, topographic mapping, and as-built documentation.",
                highlights: [
                  "Established control point network for 7-km highway route",
                  "Conducted topographic surveys using Sokkia IM-52 Total Station",
                  "Created planimetric maps and 3D models using Autodesk Civil 3D",
                  "Staking out for main dump designs and structural points",
                  "Constructed benchmark and control point markers at 1-km intervals",
                  "Quality control and design compliance verification",
                ],
                tools: [
                  "Sokkia IM-52 Total Station",
                  "Autodesk Civil 3D",
                  "Surveying Equipment",
                ],
              },
            ].map((project, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-8 pb-12">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <p className="text-lg text-primary font-semibold">
                      {project.role}
                    </p>
                    <p className="text-sm font-semibold text-gray-600">
                      {project.period}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-widest">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0 mt-0.5">
                          ▪
                        </span>
                        <span className="text-gray-700 leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gradient-to-br from-red-50 to-red-100 text-primary font-semibold px-3 py-1.5 rounded-full border border-red-200 hover:bg-red-100 transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

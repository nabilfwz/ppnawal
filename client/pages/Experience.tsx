import Navigation from "@/components/shared/Navigation";

export default function Experience() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16">
            Work Experience
          </h1>

          <div className="space-y-12">
            {[
              {
                company: "PT Kereta Api Indonesia",
                position: "BIM Engineer",
                period: "Dec 2025 - Present",
                location: "Sleman, Yogyakarta",
                highlights: [
                  "Processing point cloud data for 25 PT KAI railway stations using Autodesk ReCap",
                  "Developing Building Information Models (BIM) for 25 PT KAI railway stations using Autodesk Revit",
                  "Producing as-built drawings for 25 PT KAI railway stations based on BIM dimensions",
                ],
              },
              {
                company: "PT Mifa Bersaudara",
                position: "Mine Surveyor Intern",
                period: "Dec 2024 - Feb 2025",
                location: "West Aceh, Aceh",
                highlights: [
                  "Conducted measurements of Coal Crushing Plant (CCP) area using RIEGL VZ-2000i laser scanner and DJI Mavic 3E",
                  "Conducted monthly stockpile measurements using multiple instruments (RIEGL VZ-2000i, DJI Mavic 3E, Sokkia GRX3 GNSS RTK, Leica TS-13)",
                  "Performed staking out activities for land parcels, WIUP, and bench boundary points using Sokkia GRX3 GNSS RTK",
                  "Monitored structural deformation in Mobile Crusher project using Topcon ES105 Total Station",
                  "Processed point cloud data from RIEGL VZ-2000i laser scanner using RiSCAN PRO for end-of-month measurements",
                ],
              },
              {
                company: "PT Frasta Era Teknologi Cemerlang",
                position: "Trainer for Surveyor Competency Certification",
                period: "Jul 2025 - Nov 2025",
                location: "Sleman, Yogyakarta",
                highlights: [
                  "Provided tutorials on theoretical and practical concepts of land surveying",
                  "Demonstrated polygon control network establishment using Geomax Zoom 20 Pro Total Station",
                  "Instructed calculation of control points adjustment using the Bowditch method",
                  "Instructed topographic data processing and map layout creation using Autodesk Civil 3D",
                  "Guided stockpile volume calculations and creation of longitudinal and cross-sectional profiles",
                ],
              },
              {
                company: "PT Pertamina EP",
                position: "Survey Group Leader (External Consultant)",
                period: "Nov 2025 - Dec 2025",
                location: "Prabumulih, South Sumatera",
                highlights: [
                  "Planned and managed topographic surveys across 8 proposed drilling rig locations (±38 ha)",
                  "Led and coordinated a 4-member survey team with clear role assignments",
                  "Coordinated with cross-functional teams to resolve field issues and improve survey efficiency",
                  "Performed quality control, data processing, and produced topographic maps using Autodesk Civil 3D",
                ],
              },
              {
                company: "Balai Wilayah Sungai Sumatera I",
                position: "Project Surveyor Intern",
                period: "Jul 2023",
                location: "North Aceh, Aceh",
                highlights: [
                  "Conducted control measurements and monitoring of constructed buildings and roads",
                  "Performed staking out activities for main dump design and work structures at Keureuto Reservoir",
                  "Conducted preliminary surveys and installed water-level markers for reservoir inundation area",
                  "Acquired field data for 7-km route survey of dam-supporting highway using Sokkia IM-52 Total Station",
                  "Created highway maps and existing 3D models using Autodesk Civil 3D",
                ],
              },
            ].map((job, idx) => (
              <div key={idx} className="border-l-2 border-primary pl-6 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {job.company}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {job.position}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    {job.period}
                  </p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{job.location}</p>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <section className="mt-20 pt-20 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Tools</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Software & Tools
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>Autodesk Suite (Civil 3D, Revit, AutoCAD, ReCap)</p>
                  <p>Point Cloud Processing (RiSCAN PRO, CloudCompare)</p>
                  <p>GIS & Mapping (ArcGIS Pro, QGIS)</p>
                  <p>Drone Processing (Agisoft Metashape, Pix4D)</p>
                  <p>Mining Software (Minescape, Surpac)</p>
                  <p>Data Processing (Magnet Collage, Maptek PointStudio)</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Hardware & Instruments
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>Total Station (Sokkia, Topcon, Leica, Geomax)</p>
                  <p>GNSS RTK Systems (Sokkia, Trimble, DJI)</p>
                  <p>Terrestrial Laser Scanner (RIEGL VZ-2000i, Topcon GLS-2000)</p>
                  <p>UAV Drones (DJI Mavic 3E)</p>
                  <p>Static/Dynamic Laser Scanners (FJD Trion, CMS)</p>
                  <p>Surveying Instruments & Field Equipment</p>
                </div>
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

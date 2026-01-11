import Navigation from "@/components/shared/Navigation";

export default function Experience() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-40 pb-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
              Work Experience
            </h1>
            <p className="text-xl text-gray-600 font-light mt-4">
              Professional journey in surveying, geomatics, and BIM development
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                company: "PT Kereta Api Indonesia",
                position: "BIM Engineer",
                period: "Dec 2025 - Present",
                location: "Sleman, Yogyakarta",
                image: "https://images.pexels.com/photos/29148783/pexels-photo-29148783.jpeg",
                imageAlt: "3D BIM model and architectural design visualization",
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
                image: "https://images.pexels.com/photos/8090293/pexels-photo-8090293.jpeg",
                imageAlt: "Laser scanning and 3D point cloud technology",
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
              <div key={idx} className="border-l-4 border-primary pl-8 pb-12">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.company}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {job.position}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end">
                    <p className="text-sm font-semibold text-gray-600 whitespace-nowrap">
                      {job.period}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 font-medium mb-6">{job.location}</p>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, i) => (
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
            ))}
          </div>

          {/* Skills Section */}
          <section className="mt-24 pt-20 border-t-2 border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">
              Skills & Tools
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6 pb-3 border-b-2 border-primary">
                    Software & Tools
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        Autodesk Suite (Civil 3D, Revit, AutoCAD, ReCap)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        Point Cloud Processing (RiSCAN PRO, CloudCompare)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        GIS & Mapping (ArcGIS Pro, QGIS)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        Drone Processing (Agisoft Metashape, Pix4D)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        Mining Software (Minescape, Surpac)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        Data Processing (Magnet Collage, Maptek PointStudio)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6 pb-3 border-b-2 border-primary">
                    Hardware & Instruments
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        Total Station (Sokkia, Topcon, Leica, Geomax)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        GNSS RTK Systems (Sokkia, Trimble, DJI)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        Terrestrial Laser Scanner (RIEGL VZ-2000i, Topcon
                        GLS-2000)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        UAV Drones (DJI Mavic 3E)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        Static/Dynamic Laser Scanners (FJD Trion, CMS)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">
                        Surveying Instruments & Field Equipment
                      </span>
                    </div>
                  </div>
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

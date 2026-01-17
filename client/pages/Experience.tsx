import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Experience() {
  // Data Pengalaman Kerja
  const experiences = [
    {
      company: "PT Kereta Api Indonesia",
      position: "BIM Engineer",
      period: "Dec 2025 - Present",
      location: "Sleman, Yogyakarta",
      // UBAH JADI ARRAY (Saya duplikat agar bisa di-slide)
      images: [
        "/kai_1.png",
        "/kai_2.png",
        "/kai_3.png",
        "/kai_4.png",
        "/kai_5.png",
        "/kai_6.png",
        "/kai_7.png",
        "/kai_8.png",
        "/kai_9.png",
      ],
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
      images: [
        "https://images.pexels.com/photos/8090293/pexels-photo-8090293.jpeg",
        "https://images.pexels.com/photos/8090293/pexels-photo-8090293.jpeg",
      ],
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
      images: [
        "https://images.pexels.com/photos/14664518/pexels-photo-14664518.jpeg",
        "https://images.pexels.com/photos/14664518/pexels-photo-14664518.jpeg",
      ],
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
      images: [
        "https://images.pexels.com/photos/3274655/pexels-photo-3274655.jpeg",
        "https://images.pexels.com/photos/3274655/pexels-photo-3274655.jpeg",
      ],
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
      images: [
        "https://images.pexels.com/photos/3274655/pexels-photo-3274655.jpeg",
        "https://images.pexels.com/photos/3274655/pexels-photo-3274655.jpeg",
      ],
      highlights: [
        "Conducted control measurements and monitoring of constructed buildings and roads",
        "Performed staking out activities for main dump design and work structures at Keureuto Reservoir",
        "Conducted preliminary surveys and installed water-level markers for reservoir inundation area",
        "Acquired field data for 7-km route survey of dam-supporting highway using Sokkia IM-52 Total Station",
        "Created highway maps and existing 3D models using Autodesk Civil 3D",
      ],
    },
  ];

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
            {experiences.map((job, idx) => (
              <div
                key={idx}
                className="border-l-4 border-primary pl-8 pb-12 group"
              >
                {/* --- BAGIAN CAROUSEL --- */}
                {job.images && job.images.length > 0 && (
                  <div className="mb-6 overflow-hidden rounded-lg -ml-8 pl-8">
                    <Carousel
                      className="w-full"
                      opts={{
                        loop: true, // Fitur Loop aktif
                      }}
                    >
                      <CarouselContent>
                        {job.images.map((img, i) => (
                          <CarouselItem key={i}>
                            <div className="w-full h-64 sm:h-80 overflow-hidden rounded-lg relative bg-gray-100">
                              <img
                                src={img}
                                alt={`${job.company} - ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      {/* Navigasi Panah (Muncul saat hover) */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CarouselPrevious className="left-12 bg-white/80 hover:bg-white border-none shadow-md" />
                        <CarouselNext className="right-4 bg-white/80 hover:bg-white border-none shadow-md" />
                      </div>
                    </Carousel>
                  </div>
                )}
                {/* ----------------------- */}

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
        </div>
      </main>
      <Footer />
    </div>
  );
}

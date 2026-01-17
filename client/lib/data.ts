export interface ProjectData {
  slug: string;
  category: "Professional" | "Research";
  title: string;
  period: string;
  role: string;
  images: string[];
  description: string;
  highlights: string[];
  tools: string[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "bim-wreksodiningrat-bridge",
    category: "Professional",
    title:
      "Development of 3D BIM Model and As-Built Drawings for Prof. Ir. KRMT Wreksodiningrat Bridge",
    period: "Sep 2024 - Dec 2024",
    role: "Project Lead",
    images: [
      "/krmt_1.png",
      "/krmt_2.png",
      "/krmt_3.png",
      "/krmt_4.png",
      "/krmt_5.png",
      "/krmt_6.png",
      "/krmt_7.png",
      "/krmt_8.png",
      "/krmt_9.png",
      "/krmt_10.png",
    ],
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
    slug: "pertamina-drilling-sites",
    category: "Professional",
    title:
      "Topographic Survey Project for 8 Proposed Drilling Rig Sites (PT Pertamina EP)",
    period: "Nov 2025 - Dec 2025",
    role: "Survey Group Leader",
    images: [
      "https://images.pexels.com/photos/3274655/pexels-photo-3274655.jpeg",
      "https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg",
    ],
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
    slug: "mining-survey-mifa",
    category: "Professional",
    title: "Mining Survey and Monitoring Project (PT Mifa Bersaudara)",
    period: "Dec 2024 - Feb 2025",
    role: "Mine Surveyor Intern",
    images: [
      "https://images.pexels.com/photos/3274655/pexels-photo-3274655.jpeg",
    ],
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
    slug: "dam-support-highway",
    category: "Professional",
    title:
      "Dam Support Highway Survey and BIM Development (Balai Wilayah Sungai Sumatera I)",
    period: "Jul 2023",
    role: "Project Surveyor Intern",
    images: [
      "https://images.pexels.com/photos/3274655/pexels-photo-3274655.jpeg",
    ],
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
  {
    slug: "indoor-mapping-research",
    category: "Research",
    title:
      "Performance Evaluation and Accuracy Assessment of Static and Dynamic/Mobile Laser Scanner for Indoor Mapping",
    period: "May 2025 - Oct 2025",
    role: "Research Lead",
    images: [
      "https://images.pexels.com/photos/8090293/pexels-photo-8090293.jpeg",
    ],
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
];

// ... kode projectsData di atas biarkan saja ...

export interface ExperienceData {
  slug: string;
  company: string;
  position: string;
  period: string;
  location: string;
  type: string; // <--- Properti Baru
  images: string[];
  highlights: string[];
}

export const experiencesData: ExperienceData[] = [
  {
    slug: "bim-engineer-kai",
    company: "PT Kereta Api Indonesia",
    position: "BIM Engineer",
    period: "Dec 2025 - Present",
    location: "Sleman, Yogyakarta",
    type: "Contract", // <--- Contract
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
      "/kai_10.png",
    ],
    highlights: [
      "Processing point cloud data for 25 PT KAI railway stations using Autodesk ReCap",
      "Developing Building Information Models (BIM) for 25 PT KAI railway stations using Autodesk Revit",
      "Producing as-built drawings for 25 PT KAI railway stations based on BIM dimensions",
    ],
  },
  {
    slug: "mine-surveyor-mifa",
    company: "PT Mifa Bersaudara",
    position: "Mine Surveyor Intern",
    period: "Dec 2024 - Feb 2025",
    location: "West Aceh, Aceh",
    type: "Internship", // <--- Internship
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
    slug: "trainer-frasta",
    company: "PT Frasta Era Teknologi Cemerlang",
    position: "Trainer for Surveyor Competency Certification",
    period: "Jul 2025 - Nov 2025",
    location: "Sleman, Yogyakarta",
    type: "Contract", // <--- Contract
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
    slug: "survey-leader-pertamina",
    company: "PT Pertamina EP",
    position: "Survey Group Leader (External Consultant)",
    period: "Nov 2025 - Dec 2025",
    location: "Prabumulih, South Sumatera",
    type: "Internship", // <--- Internship
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
    slug: "surveyor-intern-bwss",
    company: "Balai Wilayah Sungai Sumatera I",
    position: "Project Surveyor Intern",
    period: "Jul 2023",
    location: "North Aceh, Aceh",
    type: "Internship", // <--- Internship
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
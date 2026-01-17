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
    slug: "indoor-mapping-research",
    category: "Research",
    title:
      "Performance Evaluation and Accuracy Assessment of Static and Dynamic/Mobile Laser Scanner for Indoor Mapping",
    period: "May 2025 - Oct 2025",
    role: "Research Lead",
    images: [
      "/rt (4).png",
      "/rt (2).png",
      "/rt (3).png",
      "/rt (1).png",
      "/rt (5).png",
      "/rt (6).png",
      "/rt (7).png",
      "/rt (8).png",
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
      "/mifa (4).png",
      "/mifa (1).png",
      "/mifa (2).png",
      "/mifa (3).png",
      "/mifa (5).png",
      "/mifa (6).png",
      "/mifa (7).png",
      "/mifa (8).png",
      "/mifa (9).png",
      "/mifa (10).png",
      "/mifa (11).png",
      "/mifa (12).png",
      "/mifa (13).png",
      "/mifa (14).png",
      "/mifa (15).png",
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
      "/frasta (8).png",
      "/frasta (1).png",
      "/frasta (2).png",
      "/frasta (3).png",
      "/frasta (5).png",
      "/frasta (6).png",
      "/frasta (7).png",
      "/frasta (4).png",
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
    type: "Contract", // <--- Internship
    images: [
      "/pertamina (0).png",
      "/pertamina (1).png",
      "/pertamina (2).png",
      "/pertamina (3).png",
      "/pertamina (4).png",
      "/pertamina (5).png",
      "/pertamina (6).png",
      "/pertamina (7).png",
      "/pertamina (8).png",
      "/pertamina (9).png",
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
      "/pu (0).png",
      "/pu (1).png",
      "/pu (2).png",
      "/pu (3).png",
      "/pu (4).png",
      "/pu (5).png",
      "/pu (7).png",
      "/pu (8).png",
      "/pu (9).png",
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
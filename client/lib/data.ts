// client/lib/data.ts

export interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
  images: string[]; // <--- Array string
  description: string;
  technologies: string[];
  details: string;
}

export const projects: Project[] = [
  {
    slug: "topographic-survey-tol-sumatera",
    title: "Topographic Survey - Tol Sumatera",
    category: "Surveying",
    date: "2024",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], // <--- Masukkan banyak foto
    description: "High precision topographic survey for highway planning.",
    technologies: ["Total Station", "GPS Geodetic", "AutoCAD Civil 3D"],
    details: "Detail panjang tentang proyek ini...",
  },
  {
    slug: "lidar-mapping-ikn",
    title: "LiDAR Mapping - IKN Project",
    category: "LiDAR",
    date: "2023",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Aerial LiDAR data processing for forestry analysis.",
    technologies: ["DJI Matrice 300", "Terrasolid"],
    details: "Detail panjang tentang proyek ini...",
  },
];

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  images: string[]; // <--- Tambahkan ini
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "BIM Engineer",
    company: "PT Kereta Api Indonesia",
    period: "2024 - Present",
    images: ["/placeholder.svg", "/placeholder.svg"],
    description: "Leading the BIM implementation...",
  },
];

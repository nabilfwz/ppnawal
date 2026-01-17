import { useParams, Link, Navigate } from "react-router-dom";
import { projectsData } from "@/lib/data";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { ArrowLeft, Calendar, User, Wrench, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectDetail() {
  const { slug } = useParams();

  // Cari data proyek yang cocok dengan URL
  const project = projectsData.find((p) => p.slug === slug);

  // Jika tidak ketemu (misal user asal ketik URL), lempar ke 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Tombol Back */}
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="pl-0 -ml-2 hover:bg-transparent hover:text-primary"
            >
              <Link
                to="/projects"
                className="flex items-center gap-2 text-gray-500 font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="mb-10 max-w-4xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold text-primary uppercase bg-primary/5 rounded border border-primary/20">
              <Layers className="w-3 h-3" />
              {project.category} Project
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
              {project.title}
            </h1>
          </div>

          {/* MAIN CAROUSEL (Big Showcase) */}
          <div className="mb-16 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm relative group">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {project.images.map((img, index) => (
                  <CarouselItem key={index}>
                    {/* Container gambar responsif */}
                    <div className="w-full h-[300px] md:h-[500px] bg-gray-200 relative flex items-center justify-center">
                      <img
                        src={img}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </Carousel>
          </div>

          {/* GRID LAYOUT: Kiri (Konten), Kanan (Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* KIRI: Deskripsi & Highlights (8 Kolom) */}
            <div className="lg:col-span-8 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  Project Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg font-light whitespace-pre-line">
                  {project.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  Key Highlights & Methodology
                </h2>
                <div className="space-y-4">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transition hover:border-primary/20 hover:bg-primary/5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border border-gray-200 text-primary text-sm font-bold shadow-sm">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700 leading-relaxed font-medium mt-1">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* KANAN: Sidebar Info (4 Kolom) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Card Metadata */}
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <User className="w-4 h-4" />{" "}
                    <span className="text-xs font-mono uppercase tracking-wider">
                      Role
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">
                    {project.role}
                  </p>
                </div>

                <div className="w-full h-px bg-gray-100"></div>

                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />{" "}
                    <span className="text-xs font-mono uppercase tracking-wider">
                      Period
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">
                    {project.period}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">
                  <Wrench className="w-4 h-4 text-primary" /> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

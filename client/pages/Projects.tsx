import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import { projectsData } from "@/lib/data";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projects() {
  const professionalProjects = projectsData.filter(
    (p) => p.category === "Professional",
  );
  const researchProjects = projectsData.filter(
    (p) => p.category === "Research",
  );

  const renderProjects = (projects: typeof projectsData) => {
    return projects.map((project, idx) => (
      <div
        key={idx}
        className="border-l-4 border-primary pl-4 md:pl-8 pb-12 group"
      >
        {project.images && project.images.length > 0 && (
          <div className="mb-6 overflow-hidden rounded-lg -ml-4 md:-ml-8 pl-4 md:pl-8">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {project.images.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="w-full h-64 sm:h-80 overflow-hidden rounded-lg relative bg-gray-100">
                      <img
                        src={img}
                        alt={`${project.title} - ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* --- PERBAIKAN PANAH CAROUSEL --- */}
              {/* Mobile: Selalu muncul (opacity-100), Desktop: Muncul saat hover (lg:opacity-0) */}
              <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <CarouselPrevious className="left-2 h-9 w-9 lg:left-12 lg:h-10 lg:w-10 bg-white/90 hover:bg-white border-none shadow-md text-gray-800" />
                <CarouselNext className="right-2 h-9 w-9 lg:right-4 lg:h-10 lg:w-10 bg-white/90 hover:bg-white border-none shadow-md text-gray-800" />
              </div>
              {/* ------------------------------- */}
            </Carousel>
          </div>
        )}

        <div className="mb-4">
          <Link
            to={`/projects/${project.slug}`}
            className="group/link inline-flex items-start gap-2 hover:text-primary transition-colors"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-all mt-1" />
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-lg text-primary font-semibold">{project.role}</p>
            <p className="text-sm font-semibold text-gray-600">
              {project.period}
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 font-light line-clamp-3">
          {project.description}
        </p>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center text-sm font-bold text-primary hover:underline underline-offset-4 mb-6"
        >
          View Full Details &rarr;
        </Link>

        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 5).map((tool, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 5 && (
            <span className="text-xs text-gray-400 px-2 py-1.5">
              +{project.tools.length - 5} more
            </span>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-28 pb-20 px-4 sm:px-8 md:pt-40">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light mt-4">
              Professional portfolio of geomatics and infrastructure projects
            </p>
          </div>

          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 tracking-tight pb-4 border-b-2 border-primary">
              Professional Projects
            </h2>
            <div className="space-y-12">
              {renderProjects(professionalProjects)}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 tracking-tight pb-4 border-b-2 border-primary">
              Research & Thesis
            </h2>
            <div className="space-y-12">{renderProjects(researchProjects)}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

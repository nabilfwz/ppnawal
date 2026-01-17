import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import { experiencesData } from "@/lib/data"; // IMPORT DATA
import { Link } from "react-router-dom"; // IMPORT LINK
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            {experiencesData.map((job, idx) => (
              <div
                key={idx}
                className="border-l-4 border-primary pl-8 pb-12 group"
              >
                {/* --- BAGIAN CAROUSEL --- */}
                {job.images && job.images.length > 0 && (
                  <div className="mb-6 overflow-hidden rounded-lg -ml-8 pl-8">
                    <Carousel className="w-full" opts={{ loop: true }}>
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
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CarouselPrevious className="left-12 bg-white/80 hover:bg-white border-none shadow-md" />
                        <CarouselNext className="right-4 bg-white/80 hover:bg-white border-none shadow-md" />
                      </div>
                    </Carousel>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                  <div className="flex-1">
                    {/* Link ke Detail */}
                    <Link
                      to={`/experience/${job.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.company}
                      </h3>
                    </Link>

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

                <ul className="space-y-3 mb-6">
                  {/* Tampilkan Max 3 Highlight di halaman depan */}
                  {job.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0 mt-0.5">
                        ▪
                      </span>
                      <span className="text-gray-700 leading-relaxed line-clamp-2">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/experience/${job.slug}`}
                  className="inline-flex items-center text-sm font-bold text-primary hover:underline underline-offset-4"
                >
                  View Full Details &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import { experiencesData } from "@/lib/data";
import { Link } from "react-router-dom";
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
      <main className="pt-28 pb-20 px-4 sm:px-8 md:pt-40">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
              Work Experience
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light mt-4">
              Professional journey in surveying, geomatics, and BIM development
            </p>
          </div>

          <div className="space-y-16">
            {experiencesData.map((job, idx) => (
              <div
                key={idx}
                className="border-l-4 border-primary pl-4 md:pl-8 pb-12 group"
              >
                {job.images && job.images.length > 0 && (
                  <div className="mb-6 overflow-hidden rounded-lg -ml-4 md:-ml-8 pl-4 md:pl-8">
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

                      {/* --- PERBAIKAN PANAH CAROUSEL --- */}
                      <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <CarouselPrevious className="left-2 h-9 w-9 lg:left-12 lg:h-10 lg:w-10 bg-white/90 hover:bg-white border-none shadow-md text-gray-800" />
                        <CarouselNext className="right-2 h-9 w-9 lg:right-4 lg:h-10 lg:w-10 bg-white/90 hover:bg-white border-none shadow-md text-gray-800" />
                      </div>
                      {/* ------------------------------- */}
                    </Carousel>
                  </div>
                )}

                <div className="flex flex-col gap-2 mb-3">
                  <Link
                    to={`/experience/${job.slug}`}
                    className="hover:text-primary transition-colors w-fit"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {job.company}
                    </h3>
                  </Link>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <p className="text-lg text-primary font-semibold">
                      {job.position}
                    </p>
                    <p className="text-sm font-semibold text-gray-600">
                      {job.period}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 font-medium mb-6">{job.location}</p>

                <ul className="space-y-3 mb-6">
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

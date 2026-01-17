import { useParams, Link, Navigate } from "react-router-dom";
import { experiencesData } from "@/lib/data";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import { ArrowLeft, MapPin, Calendar, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const experience = experiencesData.find((e) => e.slug === slug);

  if (!experience) return <Navigate to="/404" replace />;

  const isInternship = experience.type === "Internship";
  const typeBadgeColor = isInternship
    ? "bg-blue-50 text-blue-700 border-blue-200"
    : "bg-green-50 text-green-700 border-green-200";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-28 pb-20 px-4 sm:px-8 md:pt-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 md:mb-8">
            <Button
              asChild
              variant="ghost"
              className="pl-0 -ml-2 hover:bg-transparent hover:text-primary"
            >
              <Link
                to="/experience"
                className="flex items-center gap-2 text-gray-500 font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Experience
              </Link>
            </Button>
          </div>

          <div className="mb-8 md:mb-10 max-w-4xl space-y-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${typeBadgeColor}`}
            >
              {experience.type}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2]">
              {experience.position}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold">
              {experience.company}
            </h2>
          </div>

          <div className="mb-12 md:mb-16 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm relative group">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {experience.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="w-full h-[250px] md:h-[500px] bg-gray-200 relative flex items-center justify-center">
                      <img
                        src={img}
                        alt={`${experience.company} ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* --- PERBAIKAN PANAH CAROUSEL --- */}
              <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <CarouselPrevious className="left-2 md:left-4 h-9 w-9 md:h-10 md:w-10 bg-white/90 hover:bg-white border-0 shadow-lg text-gray-800" />
                <CarouselNext className="right-2 md:right-4 h-9 w-9 md:h-10 md:w-10 bg-white/90 hover:bg-white border-0 shadow-lg text-gray-800" />
              </div>
              {/* ------------------------------- */}
            </Carousel>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  Key Responsibilities & Achievements
                </h2>
                <div className="space-y-4">
                  {experience.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold mt-1">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700 leading-relaxed font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Briefcase className="w-4 h-4" />{" "}
                    <span className="text-xs font-mono uppercase tracking-wider">
                      Employment Type
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">
                    {experience.type}
                  </p>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <MapPin className="w-4 h-4" />{" "}
                    <span className="text-xs font-mono uppercase tracking-wider">
                      Location
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">
                    {experience.location}
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
                    {experience.period}
                  </p>
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

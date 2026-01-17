import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Helper untuk mengecek apakah link sedang aktif
  const checkActive = (path: string) => location.pathname === path;

  return (
    // UBAH DISINI: bg-primary (Merah), text-white (Putih), border-none
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-white shadow-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo: Putih */}
        <Link
          to="/"
          className="text-xl font-bold font-mono tracking-tighter text-white hover:opacity-90 transition-opacity"
        >
          MNF<span className="text-white/70">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* Link Desktop: Teks Putih */}
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-white/80 ${checkActive("/") ? "text-white font-bold" : "text-white/90"}`}
          >
            Home
          </Link>
          <Link
            to="/experience"
            className={`text-sm font-medium transition-colors hover:text-white/80 ${checkActive("/experience") ? "text-white font-bold" : "text-white/90"}`}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-medium transition-colors hover:text-white/80 ${checkActive("/projects") ? "text-white font-bold" : "text-white/90"}`}
          >
            Projects
          </Link>

          {/* Tombol Contact Desktop: Background Putih, Teks Merah (Primary) */}
          <Button
            asChild
            size="sm"
            className="rounded-full px-6 bg-white text-primary hover:bg-gray-100 border-none"
          >
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger (Hamburger) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              {/* Icon Hamburger: Putih */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 hover:text-white"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            {/* Isi Sidebar Mobile (Tetap Putih agar bersih) */}
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-10">
                {/* Link Mobile: Teks Hitam (Default) */}
                <Link
                  to="/"
                  className={`text-sm font-medium transition-colors ${checkActive("/") ? "text-primary font-bold" : "text-gray-600"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/experience"
                  className={`text-sm font-medium transition-colors ${checkActive("/experience") ? "text-primary font-bold" : "text-gray-600"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  to="/projects"
                  className={`text-sm font-medium transition-colors ${checkActive("/projects") ? "text-primary font-bold" : "text-gray-600"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>

                <hr className="border-gray-100" />

                {/* Tombol Contact Mobile: Merah */}
                <Button
                  asChild
                  className="w-full bg-primary text-white hover:bg-red-700"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact Me
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

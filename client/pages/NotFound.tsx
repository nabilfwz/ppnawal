import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-lg">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[150px] font-bold opacity-20">404</h1>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-primary-foreground/90 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-white text-primary hover:bg-gray-100">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

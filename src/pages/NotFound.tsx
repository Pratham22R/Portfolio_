
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="glass-card p-8 max-w-md w-full text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-foreground text-background hover:opacity-90 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;

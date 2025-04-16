
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Trigger animation sequence
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
          <div className="relative z-10">
            {/* Animated decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-event-pink/30 to-event-purple/30 animate-spin-slow blur-xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gradient-to-br from-event-yellow/30 to-event-orange/30 animate-bounce-slow blur-lg"></div>
            
            <div className="text-center bg-white/40 backdrop-blur-md p-12 rounded-2xl border border-white/20 shadow-xl">
              <div className="relative mb-8">
                <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">404</h1>
                <div className={`absolute -top-6 -right-6 w-16 h-16 rounded-full bg-event-yellow/80 animate-pulse blur-sm transition-opacity duration-1000 ${isAnimationComplete ? 'opacity-70' : 'opacity-0'}`}></div>
                <div className={`absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-event-pink/60 animate-pulse blur-sm transition-opacity duration-1000 ${isAnimationComplete ? 'opacity-70' : 'opacity-0'}`}></div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Oops! Page not found</h2>
              <p className="text-gray-600 mb-8 max-w-md">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
              
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-event-purple to-event-pink text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <ArrowLeft size={18} />
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default NotFound;

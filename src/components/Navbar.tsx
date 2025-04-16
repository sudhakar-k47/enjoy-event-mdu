
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">Enjoy Events Madurai</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
          <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Gallery</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </div>
        
        <Link to="/contact" className="hidden md:flex btn-gradient">Book Now</Link>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3 p-4">
            <Link to="/" className={`text-lg ${isActive('/') ? 'font-medium text-event-purple' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" className={`text-lg ${isActive('/services') ? 'font-medium text-event-purple' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="/gallery" className={`text-lg ${isActive('/gallery') ? 'font-medium text-event-purple' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/about" className={`text-lg ${isActive('/about') ? 'font-medium text-event-purple' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className={`text-lg ${isActive('/contact') ? 'font-medium text-event-purple' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/contact" className="btn-gradient text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

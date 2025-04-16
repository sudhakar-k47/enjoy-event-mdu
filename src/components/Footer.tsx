
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-event-purple/10 to-event-pink/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">Enjoy Events Madurai</h3>
            <p className="text-gray-700 mb-4">
              Creating unforgettable moments and celebrations that will be cherished for a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-event-purple to-event-pink flex items-center justify-center text-white hover:shadow-lg transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-event-purple to-event-pink flex items-center justify-center text-white hover:shadow-lg transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-event-purple to-event-pink flex items-center justify-center text-white hover:shadow-lg transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700 hover:text-event-purple transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-event-purple transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-700 hover:text-event-purple transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-event-purple transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-event-purple transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-700 hover:text-event-purple transition-colors">Wedding Planning</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-event-purple transition-colors">Birthday Parties</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-event-purple transition-colors">Corporate Events</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-event-purple transition-colors">Private Parties</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-event-purple transition-colors">Baby Showers</Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-event-purple" />
                <span className="text-gray-700">123 Event Street, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-event-purple" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-event-purple" />
                <span className="text-gray-700">info@Enjoy Events Madurai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Enjoy Events Madurai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

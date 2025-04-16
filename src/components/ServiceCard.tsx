
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, image, delay = 0 }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  // Generate a random gradient for each card
  const gradients = [
    'from-event-purple/70 to-event-pink/70',
    'from-event-yellow/70 to-event-orange/70', 
    'from-event-blue/70 to-event-green/70',
    'from-event-green/70 to-event-blue/70',
    'from-event-pink/70 to-event-purple/70',
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  return (
    <div 
      className={`event-card group relative overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Colorful animated border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-event-purple via-event-pink to-event-orange rounded-2xl opacity-75 blur group-hover:animate-spin-slow"></div>
      
      <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-64 object-cover transition-all duration-700 ${isHovered ? 'scale-110 filter saturate-150' : ''}`}
        />
        
        {/* Animated decorative elements */}
        <div 
          className={`absolute top-10 right-10 w-16 h-16 rounded-full bg-gradient-to-r ${randomGradient} opacity-60 blur-sm z-10 transition-transform duration-700 ${isHovered ? 'scale-150' : 'scale-100'}`}
        ></div>
        
        <div className="absolute top-4 left-4 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110">
          <div className="text-event-purple">
            {icon}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-all duration-500">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-y-0">{title}</h3>
          <p className={`text-white/80 mb-4 line-clamp-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>{description}</p>
          <Link 
            to="/contact" 
            className={`inline-flex items-center gap-2 text-white font-medium relative overflow-hidden group-hover:text-white transition-all duration-300 before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-r ${randomGradient} before:translate-x-[-100%] before:rounded-md before:z-[-1] hover:before:translate-x-0 before:transition-transform before:duration-300`}
          >
            <span className="relative z-10">Book This Service</span>
            <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          {/* Animated particles on hover */}
          {isHovered && (
            <>
              <div className="absolute w-3 h-3 rounded-full bg-event-yellow animate-bounce-slow" style={{top: '20%', left: '80%', animationDelay: '0.1s'}}></div>
              <div className="absolute w-2 h-2 rounded-full bg-event-pink animate-bounce-slow" style={{top: '40%', left: '90%', animationDelay: '0.3s'}}></div>
              <div className="absolute w-4 h-4 rounded-full bg-event-blue animate-bounce-slow" style={{top: '60%', left: '85%', animationDelay: '0.5s'}}></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

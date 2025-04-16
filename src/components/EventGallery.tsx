
import { useState, useEffect } from 'react';

interface GalleryItemProps {
  image: string;
  category: string;
  title: string;
  index: number;
}

const GalleryItem = ({ image, category, title, index }: GalleryItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);
    
    return () => clearTimeout(timeout);
  }, [index]);
  
  // Generate a random gradient for each item
  const gradients = [
    'from-event-purple/60 to-event-pink/60',
    'from-event-yellow/60 to-event-orange/60', 
    'from-event-blue/60 to-event-green/60',
    'from-event-green/60 to-event-blue/60'
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  
  return (
    <div 
      className={`relative group overflow-hidden rounded-xl ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated colorful border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-event-purple via-event-pink to-event-orange rounded-xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-300"></div>
      
      <div className="relative rounded-xl overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-t ${randomGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Animated decorative elements when hovered */}
        {isHovered && (
          <>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-event-yellow/30 animate-float z-20" style={{animationDelay: '0.1s'}}></div>
            <div className="absolute top-6 right-12 w-4 h-4 rounded-full bg-event-pink/40 animate-float z-20" style={{animationDelay: '0.3s'}}></div>
          </>
        )}
        
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 transform group-hover:translate-y-0 translate-y-3">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
            <span className="text-white/80 text-sm">{category}</span>
            <h3 className="text-white text-xl font-bold">{title}</h3>
          </div>
          
          {/* Added animated underline */}
          <div className="w-0 h-0.5 bg-white group-hover:w-1/3 transition-all duration-700 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

interface EventGalleryProps {
  items: {
    image: string;
    category: string;
    title: string;
  }[];
}

const EventGallery = ({ items }: EventGalleryProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to trigger the stagger animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);
  
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {items.map((item, index) => (
        <GalleryItem 
          key={index} 
          image={item.image} 
          category={item.category} 
          title={item.title} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default EventGallery;

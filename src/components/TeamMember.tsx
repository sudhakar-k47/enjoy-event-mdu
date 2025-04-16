
import { useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  delay?: number;
}

const TeamMember = ({ name, role, image, bio, delay = 0 }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative rounded-xl overflow-hidden group animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 sm:opacity-100'}`}>
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-white/80 mb-2">{role}</p>
        
        <div className={`max-h-0 overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-24 mt-2' : 'max-h-0'}`}>
          <p className="text-white/70 text-sm mb-4">{bio}</p>
          <div className="flex space-x-3">
            <a href="#" className="text-white hover:text-event-pink transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white hover:text-event-pink transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-white hover:text-event-pink transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

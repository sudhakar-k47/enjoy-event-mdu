
import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  density?: number;
}

const AnimatedBackground = ({ density = 20 }: AnimatedBackgroundProps) => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Generate animated particles with more professional colors
    const colors = [
      'bg-indigo-500',
      'bg-violet-400',
      'bg-fuchsia-400', 
      'bg-rose-400',
      'bg-amber-400',
      'bg-teal-400',
      'bg-cyan-400',
      'bg-purple-500',
      'bg-pink-400'
    ];
    
    const shapes = [
      'rounded-full',
      'rounded-xl',
      'rounded-lg',
      'rounded-2xl'
    ];
    
    const newParticles: JSX.Element[] = [];
    
    for (let i = 0; i < density; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      const randomSize = Math.random() * 30 + 10; // 10-40px
      const randomX = Math.random() * 100; // 0-100%
      const randomY = Math.random() * 100; // 0-100%
      const randomDelay = Math.random() * 5; // 0-5s delay
      const randomDuration = 20 + Math.random() * 40; // 20-60s duration
      const randomRotation = Math.random() * 360; // 0-360deg rotation
      const opacity = Math.random() * 0.07 + 0.03; // 0.03-0.1 opacity
      const blurAmount = Math.random() * 12 + 8; // 8-20px blur
      
      newParticles.push(
        <div 
          key={i}
          className={`fixed ${randomColor} ${randomShape} pointer-events-none animate-float`}
          style={{
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            left: `${randomX}%`,
            top: `${randomY}%`,
            opacity: opacity,
            filter: `blur(${blurAmount}px)`,
            animationDelay: `${randomDelay}s`,
            animationDuration: `${randomDuration}s`,
            transform: `rotate(${randomRotation}deg)`,
            transition: 'transform 2s ease-out'
          }}
        />
      );
    }
    
    setParticles(newParticles);
    
    return () => {
      setParticles([]);
    };
  }, [density]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-violet-50/40 transition-opacity duration-1000"
        style={{
          backgroundPosition: `${mousePosition.x * 0.02}px ${mousePosition.y * 0.02}px`
        }}
      />
      
      {/* Mouse follower gradient */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-event-purple/10 to-event-pink/10 pointer-events-none blur-3xl"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          transition: 'left 1s ease-out, top 1s ease-out'
        }}
      />
      
      {particles}

      {/* Extra decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-teal-400/10 to-green-300/10 blur-3xl animate-float" style={{ animationDuration: '15s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-amber-400/10 to-orange-300/10 blur-3xl animate-float" style={{ animationDuration: '18s', animationDelay: '2s' }}></div>
    </div>
  );
};

export default AnimatedBackground;

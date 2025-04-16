import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PartyPopper, Calendar, Heart, Award, Zap } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"

const HeroSection = () => {
  const [animatedElements, setAnimatedElements] = useState<JSX.Element[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1683121131492-9ae8cdfea4f7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFydHklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=80",
      alt: "Corporate Event"
    },
    {
      src: "https://thumbs.dreamstime.com/b/young-party-cheerful-people-showered-confetti-club-31137048.jpg",
      alt: "Wedding Celebration"
    },
    
    {
      src: "https://m.media-amazon.com/images/I/71p93pW7TPL._AC_UF1000,1000_QL80_.jpg",
      alt: "Concert Crowd"
    },
    {
      src: "https://images.stockcake.com/public/9/6/d/96d4100c-ca71-4e09-b84e-d7e90c294a87_large/joyful-party-celebration-stockcake.jpg",
      alt: "Joyful Party"
    },
    {
      src: "https://hips.hearstapps.com/hmg-prod/images/family-toasting-on-christmas-dinner-at-home-royalty-free-image-1699896250.jpg?crop=1xw:0.84236xh;center,top&resize=1200:*",
      alt: "Fashion Expo"
    },
    
  ];

  useEffect(() => {
    const elements: JSX.Element[] = [];
    const colors = ['bg-indigo-500', 'bg-violet-400', 'bg-fuchsia-400', 'bg-rose-400', 'bg-amber-400', 'bg-teal-400'];

    for (let i = 0; i < 20; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 5;
      const randomSize = Math.random() * 10 + 5;
      const randomRotation = Math.random() * 360;
      const randomDuration = 2 + Math.random() * 3;

      elements.push(
        <div
          key={i}
          className={`confetti ${randomColor} opacity-80`}
          style={{
            left: `${randomLeft}%`,
            top: '-20px',
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            animationDelay: `${randomDelay}s`,
            animationDuration: `${randomDuration}s`,
            transform: `rotate(${randomRotation}deg)`
          }}
        />
      );
    }

    setAnimatedElements(elements);
    setIsVisible(true);

    return () => {
      setAnimatedElements([]);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {animatedElements}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 -z-10" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block">Craft Your</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">Perfect Events</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-700 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We transform ordinary occasions into extraordinary memories.
            From elegant weddings to spectacular corporate events, our attention to detail ensures a flawless celebration.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium rounded-full px-6 py-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
              <PartyPopper size={18} />
              Book Your Event
            </Link>
            <Link to="/services" className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 rounded-full hover:bg-indigo-500/10 transition-colors duration-300 flex items-center gap-2">
              <Calendar size={18} />
              Our Services
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white mb-2 hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7" />
              </div>
              <p className="font-semibold">200+ Events</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white mb-2 hover:scale-110 transition-transform duration-300">
                <Heart className="w-7 h-7" />
              </div>
              <p className="font-semibold">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white mb-2 hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7" />
              </div>
              <p className="font-semibold">Creative Team</p>
            </div>
          </div>
        </div>

        {/* Desktop Images */}
        {/* <div className={`order-1 lg:order-2 relative hidden md:flex justify-center items-center h-[500px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute bg-white rounded-2xl shadow-2xl overflow-hidden animate-float"
              style={{
                top: `${index * 90 + 20}px`,
                left: index % 2 === 0 ? `${index * 50 + 10}px` : "auto",
                right: index % 2 !== 0 ? `${index * 40 + 0}px` : "auto",
                width: "180px",
                height: "180px",
                animationDuration: `${7 + index}s`,
                animationDelay: `${index * 0.4}s`
              }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div> */}

        {/* Mobile Swiper */}
        <div className="order-1 lg:order-2 w-full">
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-64 lg:h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

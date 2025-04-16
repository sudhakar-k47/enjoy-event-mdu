
import { useEffect } from 'react';
import { HeartHandshake, Cake, BriefcaseBusiness, GlassWater, Baby, Music, Utensils, Camera, Palette } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'weddings',
      title: "Wedding Planning",
      description: "Our comprehensive wedding planning services ensure your special day is perfect in every way. From venue selection to coordination on the day, we handle every detail with care and precision.",
      icon: <HeartHandshake size={28} />,
      image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Venue Selection", "Vendor Management", "Theme Design", "Budget Planning", "Day-of Coordination", "Guest Management"]
    },
    {
      id: 'birthdays',
      title: "Birthday Celebrations",
      description: "Create unforgettable birthday memories with our custom party planning services. Whether it's a milestone birthday or an annual celebration, we'll make it special.",
      icon: <Cake size={28} />,
      image: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Theme Development", "Entertainment Booking", "Cake & Catering", "Decoration Setup", "Activity Planning", "Photography"]
    },
    {
      id: 'corporate',
      title: "Corporate Events",
      description: "Elevate your business gatherings with our professional corporate event planning. From team-building activities to formal galas, we ensure a seamless experience.",
      icon: <BriefcaseBusiness size={28} />,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Venue Selection", "Catering Management", "Technical Setup", "Speaker Coordination", "Branding Integration", "Attendee Registration"]
    },
    {
      id: 'cocktail',
      title: "Cocktail Parties",
      description: "Host sophisticated cocktail gatherings with expertly crafted drinks and elegant ambiance. Perfect for social networking or celebrating special occasions.",
      icon: <GlassWater size={28} />,
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Mixologist Hiring", "Bar Setup", "Hors d'Oeuvres", "Ambient Lighting", "Music Selection", "Service Staff"]
    },
    {
      id: 'baby',
      title: "Baby Showers",
      description: "Celebrate new arrivals with beautifully designed baby showers. Our thoughtful planning creates joyful gatherings for parents-to-be and their loved ones.",
      icon: <Baby size={28} />,
      image: "https://images.unsplash.com/photo-1543342384-1f1350e27861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Gender Reveal Options", "Custom Themes", "Game Planning", "Gift Table Setup", "Catering", "Party Favors"]
    },
    {
      id: 'parties',
      title: "Private Parties",
      description: "Transform any occasion into an extraordinary event with our private party planning services. Tailored experiences that reflect your style and preferences.",
      icon: <Music size={28} />,
      image: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: ["Theme Development", "Entertainment", "Catering Options", "Décor Design", "Invitation Management", "Timeline Planning"]
    }
  ];

  const additionalServices = [
    {
      title: "Catering",
      description: "Delicious food options for any event type and dietary need.",
      icon: <Utensils className="h-6 w-6 text-event-purple" />
    },
    {
      title: "Photography",
      description: "Professional photography to capture your special moments.",
      icon: <Camera className="h-6 w-6 text-event-purple" />
    },
    {
      title: "Décor Services",
      description: "Custom decoration setups that match your event theme.",
      icon: <Palette className="h-6 w-6 text-event-purple" />
    }
  ];

  return (
    <PageTransition>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-event-purple/10 to-event-pink/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Event <span className="bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">Services</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            From dreamy weddings to exciting corporate gatherings, we offer comprehensive event planning and coordination services tailored to your needs.
          </p>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-20 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-full md:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-event-purple via-event-pink to-event-orange rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-300"></div>
                  <div className={`relative overflow-hidden rounded-2xl`}>
                    <div className={`absolute inset-0 rounded-2xl opacity-70 ${index % 2 === 0 ? 'bg-gradient-to-r from-event-purple/30 to-event-pink/30' : 'bg-gradient-to-r from-event-yellow/30 to-event-orange/30'} transform transition-all duration-300 group-hover:scale-105`}></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover rounded-2xl shadow-lg relative z-10 transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Animated decorative elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-event-yellow/60 to-event-orange/60 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 group-hover:scale-150"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-r from-event-purple/60 to-event-pink/60 opacity-0 group-hover:opacity-80 blur-md transition-all duration-500 group-hover:scale-150" style={{ transitionDelay: '100ms' }}></div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-xl ${index % 2 === 0 ? 'bg-gradient-to-r from-event-purple to-event-pink' : 'bg-gradient-to-r from-event-yellow to-event-orange'} text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 transform transition-all duration-300 hover:translate-x-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-event-purple">
                        <path d="M13.3333 4L6.00001 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-gradient inline-flex items-center gap-2 group relative overflow-hidden">
                  <span className="relative z-10">Book This Service</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-event-purple/5 to-event-pink/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title animate-fade-in">Additional Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              We offer these complementary services to enhance your event experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-event-purple/10 flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:bg-event-purple/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
        <div className="container mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-event-yellow/30 to-event-orange/30 blur-xl animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-event-purple/30 to-event-pink/30 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="bg-gradient-to-r from-event-purple to-event-pink rounded-3xl p-12 text-white text-center relative overflow-hidden z-10">
            {/* Animated particle effects */}
            <div className="absolute top-10 right-10 w-6 h-6 rounded-full bg-white/20 blur-sm animate-float"></div>
            <div className="absolute bottom-10 left-10 w-4 h-4 rounded-full bg-white/20 blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-white/10 blur-sm animate-float" style={{ animationDelay: '1.5s' }}></div>
            
            <h2 className="text-4xl font-bold mb-4">Ready to Create Your Perfect Event?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today to discuss your event needs and let our experienced team bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-event-purple font-medium rounded-full px-8 py-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us Now</span>
              <span className="absolute inset-0 bg-white group-hover:bg-gradient-to-r from-white to-event-yellow/50 opacity-100 transition-all duration-300 -z-0"></span>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageTransition>
  );
};

export default Services;

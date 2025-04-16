
import { useEffect } from 'react';
import { HeartHandshake, Star, BriefcaseBusiness, CalendarHeart, Cake, Users } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Weddings",
      description: "Create the wedding of your dreams with our expert planning and coordination services.",
      icon: <HeartHandshake size={24} />,
      image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Birthday Parties",
      description: "Unforgettable birthday celebrations for all ages, tailored to your style and preferences.",
      icon: <Cake size={24} />,
      image: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Corporate Events",
      description: "Impress your clients and team with professionally organized corporate gatherings.",
      icon: <BriefcaseBusiness size={24} />,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah & Michael",
      event: "Wedding",
      quote: "Enjoy Events Madurai made our wedding day absolutely magical. Everything was perfect, from the decorations to the coordination. We couldn't have asked for more!",
      image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "David Johnson",
      event: "Corporate Gala",
      quote: "Our company gala was a huge success thanks to Enjoy Events Madurai. The attention to detail and professional approach impressed everyone in attendance.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Emma Rodriguez",
      event: "Sweet 16 Party",
      quote: "My daughter's sweet 16 was beyond our expectations! The theme execution was flawless, and the event coordination made everything run so smoothly.",
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Event Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we offer a comprehensive range of event planning and coordination services to make your special day memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
                image={service.image} 
                delay={index * 200} 
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-gradient inline-flex items-center gap-2">
              View All Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-event-purple/5 to-event-pink/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We bring creativity, passion and attention to detail to every event we plan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-event-purple to-event-pink flex items-center justify-center text-white mb-6">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Exceptional Quality</h3>
              <p className="text-gray-700">
                We pride ourselves on delivering the highest quality events that exceed expectations and create lasting memories.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-event-yellow to-event-orange flex items-center justify-center text-white mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-700">
                Our team of experienced planners work closely with you to understand your vision and bring it to life with creativity and skill.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-event-blue to-event-green flex items-center justify-center text-white mb-6">
                <CalendarHeart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalization</h3>
              <p className="text-gray-700">
                Every event is unique. We customize each detail to reflect your personality, style, and preferences for a truly personal experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our happy clients about their experience with Enjoy Events Madurai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.event}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="flex text-event-yellow mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-event-purple to-event-pink text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Plan Your Next Event?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to start planning your dream event. Our team is ready to make your vision come to life.
          </p>
          <Link to="/contact" className="bg-white text-event-purple font-medium rounded-full px-8 py-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2">
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;


import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { Check } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Planner",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "With over 10 years of experience in event planning, Sarah brings creativity and perfectionism to every event."
    },
    {
      name: "Michael Thompson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Michael's background in design helps create visually stunning and memorable events for our clients."
    },
    {
      name: "Emma Rodriguez",
      role: "Wedding Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Emma specializes in creating dream weddings that reflect each couple's unique love story."
    },
    {
      name: "David Chen",
      role: "Logistics Manager",
      image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "David ensures that every event runs smoothly, handling all the behind-the-scenes logistics."
    }
  ];
  
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every detail, from the initial concept to the final execution of your event."
    },
    {
      title: "Creativity",
      description: "Our innovative approach ensures each event is unique, memorable, and reflects your personal style."
    },
    {
      title: "Integrity",
      description: "We believe in transparency and honesty in all our client relationships and business practices."
    },
    {
      title: "Passion",
      description: "We are genuinely passionate about creating extraordinary events and exceeding client expectations."
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-event-purple/10 to-event-pink/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">Enjoy Events Madurai</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            We're a passionate team of event specialists dedicated to creating unforgettable moments for our clients.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute -top-8 -left-8 w-full h-full bg-event-purple/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Our team planning an event" 
                className="relative z-10 rounded-3xl shadow-lg w-full"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Enjoy Events Madurai was founded in 2018 with a simple mission: to transform ordinary gatherings into extraordinary experiences. What started as a small operation run by our founder, Sarah Johnson, has grown into a full-service event planning company with a team of dedicated professionals.
              </p>
              <p className="text-gray-700 mb-6">
                With backgrounds in design, hospitality, and project management, our team brings diverse skills and experience to every event we plan. We're passionate about what we do, and we believe that this passion shines through in the events we create.
              </p>
              <p className="text-gray-700">
                Over the years, we've had the privilege of planning hundreds of events, from intimate gatherings to grand celebrations. Each event is an opportunity for us to create something special and memorable for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-event-purple/10 to-event-pink/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These core principles guide everything we do at Enjoy Events Madurai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-event-purple to-event-pink flex items-center justify-center text-white mb-4">
                  <Check size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet Our Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our talented and passionate event specialists are dedicated to making your vision come to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index} 
                name={member.name} 
                role={member.role} 
                image={member.image} 
                bio={member.bio} 
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-event-purple to-event-pink text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Enjoy Events Madurai?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 animate-fade-in">
              <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
              <p className="text-white/80">
                We take the time to understand your vision and create a customized experience that reflects your style and personality.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-bold mb-3">Attention to Detail</h3>
              <p className="text-white/80">
                From the big picture to the smallest details, we ensure every aspect of your event is carefully considered.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold mb-3">Stress-Free Planning</h3>
              <p className="text-white/80">
                We handle all the logistics and coordination, allowing you to enjoy your event without worrying about the details.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;

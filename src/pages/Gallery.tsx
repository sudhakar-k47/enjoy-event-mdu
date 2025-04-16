
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventGallery from '@/components/EventGallery';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'birthdays', label: 'Birthdays' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'parties', label: 'Parties' }
  ];
  
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Corporate",
      title: "Annual Tech Conference",
      filter: "corporate"
    },
    {
      image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Wedding",
      title: "Sarah & James' Wedding",
      filter: "weddings"
    },
    {
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Party",
      title: "Summer Dance Party",
      filter: "parties"
    },
    {
      image: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Birthday",
      title: "Emma's Sweet 16",
      filter: "birthdays"
    },
    {
      image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Wedding",
      title: "Beach Wedding Ceremony",
      filter: "weddings"
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Wedding",
      title: "Garden Reception",
      filter: "weddings"
    },
    {
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Corporate",
      title: "Product Launch",
      filter: "corporate"
    },
    {
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Birthday",
      title: "Kids' Birthday Party",
      filter: "birthdays"
    },
    {
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Party",
      title: "Rooftop Cocktail Night",
      filter: "parties"
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.filter === activeFilter);

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-event-purple/10 to-event-pink/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Event <span className="bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">Gallery</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Browse through our portfolio of stunning events and get inspired for your own special occasion.
          </p>
          
          {/* Filter Tabs */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-white rounded-full shadow-md">
            {filters.map((filter) => (
              <button 
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all ${activeFilter === filter.id ? 'bg-gradient-to-r from-event-purple to-event-pink text-white' : 'hover:bg-gray-100'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <EventGallery items={filteredItems} />
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-event-purple/10 to-event-pink/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">200+</div>
              <p className="text-gray-700">Events Organized</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">150+</div>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">15+</div>
              <p className="text-gray-700">Awards Won</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">5+</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;

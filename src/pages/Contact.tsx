
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: "123 Event Street, City, Country",
      color: "from-event-purple to-event-pink"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
      color: "from-event-yellow to-event-orange"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: "info@Enjoy Events Madurai.com",
      color: "from-event-blue to-event-green"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: "Mon-Fri: 9AM - 6PM",
      color: "from-event-purple to-event-pink"
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-event-purple/10 to-event-pink/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">Touch</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Have questions about our services or ready to start planning your event? We'd love to hear from you!
          </p>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 text-center animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} mx-auto flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <ContactForm />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                <div className="h-full">
                  {/* Replace this with an actual map or embed if needed */}
                  <div className="bg-gradient-to-br from-event-purple/10 to-event-pink/10 p-8 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                    <p className="text-gray-700 mb-6">
                      We'd love to meet you in person! Stop by our office to discuss your event needs with our friendly team.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-event-purple mt-1" />
                        <div>
                          <h4 className="font-bold">Address:</h4>
                          <p>123 Event Street, Suite 101</p>
                          <p>City, Country, 12345</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="text-event-purple mt-1" />
                        <div>
                          <h4 className="font-bold">Office Hours:</h4>
                          <p>Monday - Friday: 9AM - 6PM</p>
                          <p>Saturday: 10AM - 2PM (By Appointment)</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                    <button className="btn-gradient mt-8 self-start">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-event-purple/10 to-event-pink/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Find answers to commonly asked questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md animate-fade-in">
              <h3 className="text-xl font-bold mb-3">How far in advance should I book?</h3>
              <p className="text-gray-700">
                We recommend booking 6-12 months in advance for larger events like weddings, and at least 2-3 months for smaller events to ensure availability and adequate planning time.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-bold mb-3">What is your pricing structure?</h3>
              <p className="text-gray-700">
                Our pricing varies based on the scope and size of your event. We offer different packages as well as custom quotes tailored to your specific needs and budget.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold mb-3">Do you handle destination events?</h3>
              <p className="text-gray-700">
                Yes! We have experience planning events both locally and at destinations around the country. Additional travel fees may apply for events outside our local area.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-bold mb-3">What happens after I contact you?</h3>
              <p className="text-gray-700">
                After reaching out, we'll schedule an initial consultation (in person or virtual) to discuss your event vision, answer questions, and determine how we can best assist you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

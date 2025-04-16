
import { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guests: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        guests: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-event-purple to-event-pink">Get in Touch</h3>
        <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you soon!</p>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-event-purple/50 focus:border-event-purple outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-event-purple/50 focus:border-event-purple outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-event-purple/50 focus:border-event-purple outline-none transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
              <div className="relative">
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-event-purple/50 focus:border-event-purple outline-none transition-all"
                />
                <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
              <div className="relative">
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-event-purple/50 focus:border-event-purple outline-none transition-all appearance-none"
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="private">Private Party</option>
                  <option value="babyshower">Baby Shower</option>
                  <option value="other">Other</option>
                </select>
                <Clock size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
              <div className="relative">
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-event-purple/50 focus:border-event-purple outline-none transition-all"
                  placeholder="50"
                />
                <Users size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-event-purple/50 focus:border-event-purple outline-none transition-all"
                placeholder="Tell us about your event and any specific requirements you may have..."
              ></textarea>
              <MessageSquare size={18} className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg bg-gradient-to-r from-event-purple to-event-pink text-white font-medium flex justify-center items-center gap-2 transition-all ${isSubmitting ? 'opacity-70' : 'hover:shadow-lg hover:-translate-y-1'}`}
          >
            {isSubmitting ? (
              <>Processing...</>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

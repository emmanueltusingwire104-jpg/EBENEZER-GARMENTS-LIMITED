import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or need to discuss a project? We're here to help. Reach out to our team today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Whether you need a quick quote, have questions about our services, or want to discuss a large-scale order, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Makindye<br />
                    Kampala<br />
                    Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone & WhatsApp</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Main: +256 775 588 050<br />
                    WhatsApp: +256 775 588 050
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    sharonnagasha@yahoo.com<br />
                    sales@ebenezergarments.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-600 p-3 rounded-xl text-white">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

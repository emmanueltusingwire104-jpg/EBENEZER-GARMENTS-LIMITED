import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, Send } from 'lucide-react';

export default function QuoteRequest() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl max-w-lg w-full text-center border border-gray-100"
        >
          <div className="inline-flex justify-center items-center w-24 h-24 bg-green-100 rounded-full mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Received!</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Thank you for reaching out. Our team will review your requirements and get back to you with a detailed quote within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex justify-center items-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Request a Free Quote</h1>
          <p className="text-xl text-blue-100">
            Fill out the form below with your requirements, and we'll provide a detailed estimate for your project.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">1. Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company / School Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">2. Project Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white">
                    <option value="">Select a service...</option>
                    <option value="school">School Uniforms</option>
                    <option value="corporate">Corporate Uniforms</option>
                    <option value="promotional">Promotional T-Shirts</option>
                    <option value="embroidery">Embroidery Services</option>
                    <option value="other">Other / Custom</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity *</label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white">
                      <option value="">Select quantity...</option>
                      <option value="1-50">1 - 50 items</option>
                      <option value="51-200">51 - 200 items</option>
                      <option value="201-500">201 - 500 items</option>
                      <option value="500+">500+ items</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Required Delivery Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                  <textarea 
                    required 
                    rows={6} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none" 
                    placeholder="Please describe your requirements in detail (e.g., fabric preferences, colors, branding needs)..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xl shadow-blue-600/30"
              >
                Submit Quote Request
                <Send className="ml-2 w-5 h-5" />
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                We respect your privacy. Your information will only be used to provide this quote.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

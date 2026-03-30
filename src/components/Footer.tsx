import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg inline-block">
                <Scissors size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Ebenezer<span className="text-blue-500">Garments</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              High-quality tailoring, embroidery, and bulk garment solutions you can trust. We provide premium custom uniforms and branded apparel for schools and businesses.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">School Uniforms</li>
              <li className="text-gray-400 text-sm">Corporate Uniforms</li>
              <li className="text-gray-400 text-sm">Promotional T-Shirts</li>
              <li className="text-gray-400 text-sm">Embroidery Services</li>
              <li className="text-gray-400 text-sm">Tailoring & Custom Fitting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Makindye, Kampala</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span className="text-gray-400 text-sm">+256 775 588 050</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span className="text-gray-400 text-sm">sharonnagasha@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ebenezer Garments. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

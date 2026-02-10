import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo, products } from '../utils/mockData';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=Hello, I would like to inquire about your racking systems.`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">GGRAY</h3>
            <p className="text-gray-400 mb-4">
              Leading manufacturer of industrial warehouse storage solutions in Northeast India.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-orange-500 transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-orange-500 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm">{companyInfo.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Popular Products</h4>
            <ul className="space-y-2">
              {products.slice(0, 6).map((product) => (
                <li key={product.id}>
                  <Link to="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              Need a custom storage solution? Contact us for a free warehouse layout consultation.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md transition-all hover:shadow-lg w-full font-medium"
            >
              WhatsApp Us Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} GGRAY Racking System. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="hover:text-orange-500 cursor-pointer transition-colors">
                Warehouse Racks Guwahati
              </span>
              <span className="hover:text-orange-500 cursor-pointer transition-colors">
                Industrial Racks Assam
              </span>
              <span className="hover:text-orange-500 cursor-pointer transition-colors">
                Storage Solutions Northeast India
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

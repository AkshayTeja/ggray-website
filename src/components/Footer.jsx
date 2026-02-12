import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { companyInfo, products } from '../utils/mockData';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=Hello, I would like to inquire about your racking systems.`, '_blank');
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes shine {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .footer-col {
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
        }
        .footer-col:nth-child(1) { animation-delay: 0.05s; }
        .footer-col:nth-child(2) { animation-delay: 0.15s; }
        .footer-col:nth-child(3) { animation-delay: 0.25s; }
        .footer-col:nth-child(4) { animation-delay: 0.35s; }

        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.2s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #f97316;
          transition: width 0.25s ease;
        }
        .footer-link:hover::after { width: 100%; }

        .contact-item {
          transition: transform 0.2s ease;
        }
        .contact-item:hover { transform: translateX(4px); }

        .button-shine {
          position: relative;
          overflow: hidden;
          background-image: linear-gradient(
            120deg,
            transparent 0%,
            transparent 30%,
            rgba(255,255,255,0.2) 50%,
            transparent 70%,
            transparent 100%
          );
          background-size: 200% auto;
          transition: background-position 0s;
        }
        .button-shine:hover {
          background-position: 200% center;
          animation: shine 0.6s linear;
        }

        .divider-line {
          background: linear-gradient(to right, transparent, #374151, #f97316, #374151, transparent);
          height: 1px;
          border: none;
        }

        .seo-tag {
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .seo-tag:hover {
          color: #f97316;
          transform: translateY(-1px);
        }
      `}</style>

      <footer className="bg-gray-900 text-gray-300">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Company Info */}
            <div className="footer-col">
              <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">GGRAY</h3>
              <div className="w-8 h-0.5 bg-orange-500 mb-4" />
              <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                Leading manufacturer of industrial warehouse storage solutions in Northeast India.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 contact-item">
                  <MapPin size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{companyInfo.address}</span>
                </div>
                <div className="flex items-center gap-3 contact-item">
                  <Phone size={16} className="text-orange-500 flex-shrink-0" />
                  <a href={`tel:${companyInfo.phone}`} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 contact-item">
                  <Mail size={16} className="text-orange-500 flex-shrink-0" />
                  <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-3 contact-item">
                  <Clock size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{companyInfo.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="text-base font-semibold text-white mb-1 tracking-wide uppercase">Quick Links</h4>
              <div className="w-8 h-0.5 bg-orange-500 mb-4" />
              <ul className="space-y-2.5">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/products', label: 'Products' },
                  { to: '/projects', label: 'Projects' },
                  { to: '/contact', label: 'Contact Us' },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="footer-link text-sm text-gray-400 hover:text-orange-500">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Products */}
            <div className="footer-col">
              <h4 className="text-base font-semibold text-white mb-1 tracking-wide uppercase">Popular Products</h4>
              <div className="w-8 h-0.5 bg-orange-500 mb-4" />
              <ul className="space-y-2.5">
                {products.slice(0, 6).map((product) => (
                  <li key={product.id}>
                    <Link to="/products" className="footer-link text-sm text-gray-400 hover:text-orange-500">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="footer-col">
              <h4 className="text-base font-semibold text-white mb-1 tracking-wide uppercase">Get In Touch</h4>
              <div className="w-8 h-0.5 bg-orange-500 mb-4" />
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Need a custom storage solution? Contact us for a free warehouse layout consultation.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md transition-all hover:shadow-2xl w-full font-semibold flex items-center justify-center gap-2 group"
              >
                WhatsApp Us Now
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="divider-line" />
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} GGRAY Racking System. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
              <span className="seo-tag cursor-pointer">Warehouse Racks Guwahati</span>
              <span className="seo-tag cursor-pointer">Industrial Racks Assam</span>
              <span className="seo-tag cursor-pointer">Storage Solutions Northeast India</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
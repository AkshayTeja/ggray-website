import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { companyInfo } from "../utils/mockData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleContactClick = () => {
    window.open(
      `https://wa.me/${companyInfo.whatsapp}?text=Hello, I would like to inquire about your racking systems.`,
      "_blank",
    );
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">{companyInfo.email}</span>
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <Phone size={14} />
              <span>{companyInfo.phone}</span>
            </a>
          </div>
          <div className="text-xs text-gray-400">
            {companyInfo.workingHours}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900">GGRAY</span>
                <span className="ml-2 text-sm text-gray-600 hidden sm:block">
                  Racking System
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors relative group ${
                    location.pathname === link.path
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full ${
                      location.pathname === link.path ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                  onClick={handleContactClick}
                  className="button-shine bg-orange-600 hover:bg-white text-white hover:text-orange-600 border-2 border-orange-600 hover:border-orange-600 w-full mt-2 transition-all duration-200"
                >
                  Get Free Layout Plan
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium py-2 transition-colors ${
                      location.pathname === link.path
                        ? "text-orange-600"
                        : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  onClick={handleContactClick}
                  className="button-shine bg-orange-600 hover:bg-white text-white hover:text-orange-600 border-2 border-orange-600 hover:border-orange-600 w-full mt-2 transition-all duration-200"
                >
                  Get Free Layout Plan
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

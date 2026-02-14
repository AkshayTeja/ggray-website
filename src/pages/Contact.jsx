import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { companyInfo } from '../utils/mockData';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    const message = `Hello, I am ${formData.name} from ${formData.company || 'N/A'}. Email: ${formData.email} Requirements: ${formData.requirements || 'General inquiry'}`;
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    toast.success('Redirecting to WhatsApp...');
    setFormData({ name: '', email: '', company: '', requirements: '' });
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1 },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    },
  };

  const formItemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    },
  };

  return (
    <div>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.7s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .stagger-1 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .stagger-2 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Contact Us</h1>
          <p className="text-xl text-orange-100 animate-fade-in-up stagger-1">
            Get in touch for a free warehouse layout consultation
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>
              <motion.h2
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                Get In Touch
              </motion.h2>
              <motion.p
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-600 mb-8 leading-relaxed"
              >
                We're here to help you optimize your warehouse space. Reach out to us for product
                inquiries, custom solutions, or to schedule a free consultation. Our team of experts
                is ready to assist you.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={itemVariant} className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600">{companyInfo.address}</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Address</h3>
                    <p className="text-gray-600">{companyInfo.email}</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariant} className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">{companyInfo.workingHours}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Quick WhatsApp Button */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response on WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get instant replies to your queries on WhatsApp
                </p>
                <Button
                  onClick={() =>
                    window.open(
                      `https://wa.me/${companyInfo.whatsapp}?text=Hello, I would like to inquire about your racking systems.`,
                      '_blank'
                    )
                  }
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                  size="lg"
                >
                  Chat on WhatsApp
                </Button>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <motion.form
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <motion.div variants={formItemVariant}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </motion.div>
                    <motion.div variants={formItemVariant}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </motion.div>
                    <motion.div variants={formItemVariant}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </motion.div>
                    <motion.div variants={formItemVariant}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Requirements
                      </label>
                      <Textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="Describe your warehouse requirements..."
                        rows={4}
                      />
                    </motion.div>
                    <motion.div variants={formItemVariant}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      >
                        Send Message on WhatsApp
                        <Send className="ml-2" size={18} />
                      </Button>
                    </motion.div>
                    <motion.p
                      variants={formItemVariant}
                      className="text-sm text-gray-600 text-center"
                    >
                      Your message will be sent via WhatsApp for instant response
                    </motion.p>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
            <p className="text-gray-600">
              Located in Guwahati, Assam - serving all of Northeast India
            </p>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
          >
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.797588011364!2d91.75832087499589!3d26.170720777097173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5978f4d02ea3%3A0x8c3538454052ad64!2sGGRAY%20RACKING%20SYSTEM!5e0!3m2!1sen!2sin!4v1770915346300!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Directions Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-6"
          >
            <a
              href="https://maps.app.goo.gl/gQafPi2CzEtMUzdRA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-orange-600 hover:bg-orange-700 text-white inline-flex items-center gap-2 group transition-all hover:shadow-2xl font-semibold" size="lg">
                <MapPin size={18} />
                Get Directions on Google Maps
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>  
    </div>
  );
};

export default Contact;
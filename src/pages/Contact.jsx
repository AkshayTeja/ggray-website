import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { companyInfo } from '../utils/mockData';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    const message = `Hello, I am ${formData.name} from ${formData.company || 'N/A'}.
Email: ${formData.email}
Requirements: ${formData.requirements || 'General inquiry'}`;

    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    
    setFormData({
      name: '',
      email: '',
      company: '',
      requirements: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1661156295677-ce91c410be9b"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              Get in touch for a free warehouse layout consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We're here to help you optimize your warehouse space. Reach out to us for product inquiries, 
                custom solutions, or to schedule a free consultation. Our team of experts is ready to assist you.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="border-2 border-gray-100 hover:border-orange-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Our Location</h3>
                        <p className="text-gray-700">{companyInfo.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-orange-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Phone Number</h3>
                        <a href={`tel:${companyInfo.phone}`} className="text-gray-700 hover:text-orange-600 transition-colors">
                          {companyInfo.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-orange-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Email Address</h3>
                        <a href={`mailto:${companyInfo.email}`} className="text-gray-700 hover:text-orange-600 transition-colors">
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-100 hover:border-orange-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
                        <p className="text-gray-700">{companyInfo.workingHours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick WhatsApp Button */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Quick Response on WhatsApp</h3>
                <p className="text-gray-700 mb-4">
                  Get instant replies to your queries on WhatsApp
                </p>
                <Button
                  onClick={() => window.open(`https://wa.me/${companyInfo.whatsapp}?text=Hello, I would like to inquire about your racking systems.`, '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                  size="lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-gray-200 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@company.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="requirements" className="block text-sm font-semibold text-gray-700 mb-2">
                        Requirements
                      </label>
                      <Textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="Tell us about your warehouse storage requirements..."
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      Send Message on WhatsApp
                      <Send className="ml-2" size={18} />
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      Your message will be sent via WhatsApp for instant response
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Facility
            </h2>
            <p className="text-gray-600">
              Located in Guwahati, Assam - serving all of Northeast India
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 font-semibold">Guwahati, Assam, India</p>
              <p className="text-gray-500 text-sm mt-2">Map integration available on request</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

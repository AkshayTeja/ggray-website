import React from 'react';
import { CheckCircle2, Target, Award, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { whyChooseUs } from '../utils/mockData';
import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    show: { opacity: 1, rotate: 0, scale: 1 },
  };

  const cardContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  const cardItemLeft = {
    hidden: { opacity: 0, x: -40, rotate: -5 },
    show: { opacity: 1, x: 0, rotate: 0 },
  };

  const cardItemRight = {
    hidden: { opacity: 0, x: 40, rotate: 5 },
    show: { opacity: 1, x: 0, rotate: 0 },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  const itemBounce = {
    hidden: { opacity: 0, y: -30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.7s ease-out forwards;
        }

        .animate-zoom-in {
          animation: zoomIn 0.6s ease-out forwards;
        }

        .animate-rotate-in {
          animation: rotateIn 0.7s ease-out forwards;
        }

        .stagger-1 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .stagger-2 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .stagger-3 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1684695749267-233af13276d0"
            alt="About GGRAY"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-left">
              About GGRAY Racking System
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl animate-slide-in-left stagger-1">
              Northeast India's leading manufacturer of premium industrial storage solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Who We Are
              </motion.h2>
              <motion.p
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-4 leading-relaxed"
              >
                GGRAY Racking System is a leading manufacturer based in Guwahati, Assam, specializing in 
                industrial warehouse storage solutions. With over 20 years of experience, we have established 
                ourselves as the most trusted name in Northeast India for quality racking systems.
              </motion.p>
              <motion.p
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-4 leading-relaxed"
              >
                We manufacture a comprehensive range of products including heavy-duty racks, pallet racking 
                systems, mezzanine floors, cantilever racks, slotted angle racks, mobile compactors, and 
                custom storage solutions tailored to your specific needs.
              </motion.p>
              <motion.p
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                transition={{ delay: 0.6, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-gray-700 leading-relaxed"
              >
                Our commitment to sustainability, premium quality materials, and strong engineering has made 
                us the preferred choice for warehouse owners, FMCG distributors, pharmaceutical companies, 
                and logistics facilities across the region.
              </motion.p>
            </div>
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1661156295677-ce91c410be9b"
                alt="GGRAY Manufacturing"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover transform hover:scale-105 transition duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={cardItemLeft}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-gray-200 hover:border-orange-500 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <Target className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver innovative, sustainable, and cost-effective storage solutions that maximize 
                    warehouse efficiency and help businesses optimize their space utilization. We strive to 
                    be the most reliable partner for industrial storage needs in Northeast India.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={cardItemRight}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-gray-200 hover:border-orange-500 transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become India's most trusted name in warehouse storage solutions by consistently 
                    delivering superior quality products, exceptional customer service, and innovative 
                    designs that transform the way businesses manage their inventory and logistics.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GGRAY?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the industrial storage industry
            </p>
          </motion.div>
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.id}
                variants={rotateIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle2 className="text-orange-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div
              variants={itemBounce}
              transition={{ duration: 0.8, delay: 0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-400">Premium materials and rigorous quality control in every product</p>
            </motion.div>
            <motion.div
              variants={itemBounce}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-400">Dedicated to understanding and exceeding customer expectations</p>
            </motion.div>
            <motion.div
              variants={itemBounce}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-400">On-time delivery and dependable after-sales support</p>
            </motion.div>
            <motion.div
              variants={itemBounce}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <TrendingUp size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-400">Continuously improving designs and manufacturing processes</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Quality Certified Manufacturing
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Our manufacturing facility adheres to the highest quality standards. We are ISO certified and 
            follow strict quality control processes to ensure every product meets international standards. 
            Our team of experienced engineers and technicians work with precision to deliver storage 
            solutions that are built to last decades.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-5xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Projects Completed</div>
            </motion.div>
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-5xl font-bold text-orange-600 mb-2">300+</div>
              <div className="text-gray-700 font-semibold">Satisfied Clients</div>
            </motion.div>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-5xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-700 font-semibold">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects } from '../utils/mockData';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Projects = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -5, scale: 0.95 },
    show: { opacity: 1, rotate: 0, scale: 1 },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  const slideUpBounce = {
    hidden: { opacity: 0, y: 50 },
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

  // CountUp component for stats
  function CountUp({ end, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    const valueStr = end.toString();
    const hasPlus = valueStr.includes("+");
    const hasPercent = valueStr.includes("%");
    const hasSuffix = valueStr.includes("M+");
    
    let target;
    if (hasSuffix) {
      target = parseFloat(valueStr.replace("M+", ""));
    } else {
      target = parseInt(valueStr.replace(/[+%]/g, ""), 10);
    }

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!started) return;

      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);

        if (hasSuffix) {
          setCount(Math.floor(percent * target * 10) / 10);
        } else {
          setCount(Math.floor(percent * target));
        }

        if (percent < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, [started, target, duration, hasSuffix]);

    return (
      <span ref={ref}>
        {hasSuffix ? count.toFixed(1) : count}
        {hasSuffix && "M"}
        {hasPlus && "+"}
        {hasPercent && "%"}
      </span>
    );
  }

  const handleWhatsAppClick = () => {
      window.open(`https://wa.me/${companyInfo.whatsapp}?text=Hello, I would like to start my project.`, '_blank');
    };

  return (
    <div className="min-h-screen bg-white">
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

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-5deg) scale(0.95);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
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

        .stagger-4 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1661156965965-ef5e6f68a51b"
            alt="Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-left">
              Our Projects
            </h1>
            <p className="text-xl text-gray-200 animate-slide-in-left stagger-1">
              Showcasing our successful warehouse transformations across Northeast India
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <CountUp end="500+" />
              </div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="animate-scale-in stagger-1">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <CountUp end="300+" />
              </div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="animate-scale-in stagger-2">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <CountUp end="1M+" />
              </div>
              <div className="text-gray-400">Sq Ft Optimized</div>
            </div>
            <div className="animate-scale-in stagger-3">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <CountUp end="100%" />
              </div>
              <div className="text-gray-400">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore how we've helped businesses across Northeast India optimize their warehouse space
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={index % 2 === 0 ? fadeLeft : fadeRight}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all group">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-600 text-white px-3 py-1">
                        {project.year}
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-orange-600 mb-3">
                      <Building size={18} />
                      <span className="font-semibold">{project.client}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50 overflow-hidden">
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
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized storage solutions for diverse industries
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "FMCG Distribution",
                description: "High-capacity pallet racking for fast-moving consumer goods warehouses",
                icon: "📦"
              },
              {
                title: "Pharmaceutical Storage",
                description: "Temperature-controlled and organized storage solutions for pharma products",
                icon: "💊"
              },
              {
                title: "Manufacturing Units",
                description: "Heavy-duty racks for raw materials and finished goods storage",
                icon: "🏭"
              },
              {
                title: "Textile Industry",
                description: "Specialized fabric roll racks and garment storage systems",
                icon: "🧵"
              },
              {
                title: "Logistics Centers",
                description: "Comprehensive warehouse solutions for 3PL and distribution hubs",
                icon: "🚚"
              },
              {
                title: "Retail Warehouses",
                description: "Efficient storage and picking systems for retail distribution",
                icon: "🏪"
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={rotateIn}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Card className="border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Project Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we ensure smooth execution
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your warehouse needs and space constraints"
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Custom layout design and 3D visualization of the solution"
              },
              {
                step: "03",
                title: "Manufacturing",
                description: "In-house production with quality control at every stage"
              },
              {
                step: "04",
                title: "Installation",
                description: "Professional installation and final quality inspection"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={slideUpBounce}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold transition-transform duration-300 hover:scale-110">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
     <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <motion.h2
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold mb-6"
    >
      Ready to Transform Your Warehouse?
    </motion.h2>
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-xl text-gray-300 mb-8"
    >
      Join 500+ satisfied clients who have optimized their storage with GGRAY
    </motion.p>
    <button
      onClick={handleWhatsAppClick}
      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md transition-all hover:shadow-2xl font-semibold inline-flex items-center justify-center gap-2 group"
    >
      Start your project today
    </button>
  </div>
</section>
    </div>
  );
};

export default Projects;
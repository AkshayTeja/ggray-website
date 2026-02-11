import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Quote } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  companyInfo,
  products,
  benefits,
  testimonials,
  whyChooseUs,
  services,
  stats,
} from "../utils/mockData";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const handleGetQuote = () => {
    window.open(
      `https://wa.me/${companyInfo.whatsapp}?text=Hello, I would like to get a free layout plan for my warehouse.`,
      "_blank",
    );
  };

  function CountUp({ end, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    const valueStr = end.toString();
    const hasPlus = valueStr.includes("+");
    const target = parseInt(valueStr.replace("+", ""), 10);

    // Detect scroll into view
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.4 },
      );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    }, []);

    // Counting animation
    useEffect(() => {
      if (!started) return;

      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const percent = Math.min(progress / duration, 1);

        setCount(Math.floor(percent * target));

        if (percent < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, [started, target, duration]);

    return (
      <span ref={ref}>
        {count}
        {hasPlus && "+"}
      </span>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const cardContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
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

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
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

        @keyframes fadeIn {
          from {
            opacity: 0;
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

        .button-shine {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-shine:hover {
          transform: scale(1.05);
        }

        .button-shine::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .button-shine:hover::before {
          animation: shine 0.8s;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.7s ease-out forwards;
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

        .stagger-3 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .stagger-4 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .stagger-5 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .stagger-6 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1714650601435-67a4d51a0798"
            alt="Modern Warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              We Create Space
              <br />
              in Space
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in-up stagger-1">
              Leading manufacturer of industrial warehouse storage solutions in
              Northeast India. Sustainable, premium, and strong racking systems
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-2">
              <Button
                onClick={handleGetQuote}
                size="lg"
                className="button-shine bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold transition-all hover:shadow-xl"
              >
                Get a Free Layout Plan
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="button-shine bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold transition-all w-full sm:w-auto"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center animate-scale-in stagger-${Math.min(index + 1, 4)}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  <CountUp end={stat.value} />
                </div>

                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1661156965965-ef5e6f68a51b"
                  alt="Industrial Warehouse"
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition duration-700"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                We Are Specialized In Industrial Manufacturing
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-6 leading-relaxed"
              >
                GGRAY Racking System is the leading manufacturer of heavy-duty
                racks, industrial modular mezzanine floors, warehouse storage
                racks, mobile compactor storage systems, and multi-tier storage
                solutions in Northeast India.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-700 mb-8 leading-relaxed"
              >
                With over 20 years of experience, we deliver premium quality
                storage solutions with effective and timely delivery to
                warehouses, FMCG distributors, pharmaceutical companies, and
                logistics facilities across Assam and Northeast India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Link to="/about">
                  <Button className="button-shine bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">
                    Learn More About Us
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GGRAY?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for sustainable, premium, and strong
              warehouse storage solutions
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={cardItem}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle2 className="text-orange-600" size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of industrial storage solutions for every
              warehouse need
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.slice(0, 6).map((product) => (
              <motion.div
                key={product.id}
                variants={item}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {product.name}
                    </h3>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="space-y-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-orange-600 flex-shrink-0"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <Button
                size="lg"
                className="button-shine bg-orange-600 hover:bg-orange-700 text-white px-8 py-6"
              >
                View All Products
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services We Offer
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end solutions from concept to installation and support
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <CheckCircle2 size={40} />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/* Testimonials Section */}
<section className="py-20 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Trusted by leading businesses across Northeast India
      </p>
    </motion.div>

    {/* Testimonials Grid */}
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-8"
    >
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          variants={item}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 border-gray-100 hover:shadow-xl transition-all">
            <CardContent className="p-6">

              <Quote className="text-orange-600 mb-4" size={40} />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}
                </div>
                <div className="text-sm text-orange-600">
                  {testimonial.company}
                </div>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Need Product for Your Office/Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up stagger-1">
            Get a free warehouse layout consultation and quote today
          </p>
          <div className="animate-fade-in-up stagger-2">
            <Button
              onClick={handleGetQuote}
              size="lg"
              className="button-shine bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 text-lg font-semibold transition-all hover:shadow-2xl"
            >
              Contact Us Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  X,
  Layers,
  Package,
  ShoppingCart,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { products, companyInfo } from "../utils/mockData";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  {
    id: "racks",
    label: "Racks",
    icon: Package,
    description:
      "Heavy-duty racking systems engineered for maximum load capacity and operational efficiency.",
    filter: (p) => p.id >= 1 && p.id <= 24,
  },
  {
    id: "mezzanine",
    label: "Mezzanine Floors",
    icon: Layers,
    description:
      "Structural mezzanine platforms that double your usable floor space without expanding your footprint.",
    filter: (p) => p.id === 25 || p.id === 26,
  },
  {
    id: "trolleys",
    label: "Trolleys",
    icon: ShoppingCart,
    description:
      "Robust material handling trolleys designed for seamless movement across warehouse environments.",
    filter: (p) => p.id >= 27,
  },
];

// Get section products based on ID ranges
const getSectionProducts = (section, allProducts) => {
  return allProducts.filter(section.filter);
};

const Products = () => {
  const [activeSection, setActiveSection] = useState("racks");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currentSection = SECTIONS.find((s) => s.id === activeSection);
  const sectionProducts = getSectionProducts(currentSection, products);

  const handleInquiry = (productName) => {
    const message = productName
      ? `Hello, I would like to inquire about ${productName}.`
      : `Hello, I would like to inquire about your products.`;
    window.open(
      `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
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
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const tabVariant = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const modalVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
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

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1685483749753-0dab7e144794"
            alt="Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-left">
              Our Products
            </h1>
            <p className="text-xl text-gray-200 animate-slide-in-left stagger-1">
              Comprehensive range of industrial storage solutions
            </p>
          </div>
        </div>
      </section>

      {/* Section Tabs */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            {SECTIONS.map((section, index) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <motion.button
                  key={section.id}
                  variants={tabVariant}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    flex items-center justify-center gap-2 px-3 sm:px-6 py-4 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-all flex-1
                    ${
                      isActive
                        ? "border-orange-600 text-orange-600"
                        : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                    }
                  `}
                >
                  <Icon size={18} className="hidden sm:block" />
                  <Icon size={16} className="block sm:hidden" />
                  <span className="hidden sm:inline">{section.label}</span>
                  <span className="inline sm:hidden text-[11px]">
                    {section.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Content */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            >
              {React.createElement(currentSection.icon, { size: 16 })}
              {currentSection.label}
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              {currentSection.label === "Racks" && "Industrial Racking Systems"}
              {currentSection.label === "Mezzanine Floors" &&
                "Mezzanine Floor Solutions"}
              {currentSection.label === "Trolleys" &&
                "Material Handling Trolleys"}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              {currentSection.description}
            </motion.p>
          </div>

          {/* Products Grid */}
          {sectionProducts.length > 0 ? (
            <motion.div
              key={activeSection}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sectionProducts.map((product, index) => {
                const productFeatures = product.features || [];
                return (
                  <motion.div key={product.id} variants={cardVariant}>
                    <Card
                      className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                          {product.name}
                        </h3>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="space-y-2 mb-6">
                          {productFeatures.map((feature, idx) => (
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
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleInquiry(product.name);
                          }}
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                        >
                          Get Quote
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            variants={backdropVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              variants={modalVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Key Features */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {(selectedProduct.features || []).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-orange-600 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Specifications - Only for Trolleys (ID >= 27) */}
                {selectedProduct.specifications && (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Technical Specifications
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(selectedProduct.specifications).map(
                          ([key, value], idx) => (
                            <div key={idx} className="flex flex-col">
                              <span className="text-sm font-semibold text-gray-600 mb-1">
                                {key}
                              </span>
                              <span className="text-gray-900">{value}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* Applications - Only for Trolleys (ID >= 27) */}
                {selectedProduct.applications && (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Applications
                    </h3>
                    <div className="bg-orange-50 rounded-lg p-6 mb-8">
                      <ul className="space-y-3">
                        {selectedProduct.applications.map(
                          (application, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <CheckCircle2
                                size={20}
                                className="text-orange-600 flex-shrink-0 mt-0.5"
                              />
                              <span>{application}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </>
                )}

                <div className="flex gap-4">
                  <Button
                    onClick={() => handleInquiry(selectedProduct.name)}
                    className="bg-orange-600 hover:bg-orange-700 text-white flex-1"
                    size="lg"
                  >
                    Request Quote on WhatsApp
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                  <Button
                    onClick={() => setSelectedProduct(null)}
                    variant="outline"
                    size="lg"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Need Custom Storage Solutions?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-700 mb-8"
          >
            Every warehouse is unique. We design and manufacture custom racking
            systems tailored to your specific requirements.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              onClick={() => handleInquiry()}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 text-lg"
            >
              Discuss Your Requirements
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            {[
              "Warehouse Racks in Guwahati",
              "Industrial Racks in Assam",
              "Storage Racks in Northeast India",
              "Pallet Rack Suppliers Guwahati",
              "Mezzanine Floor Manufacturer Assam",
              "Heavy Duty Racks Northeast",
            ].map((keyword, index) => (
              <motion.span
                key={keyword}
                variants={cardVariant}
                className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                {keyword}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;

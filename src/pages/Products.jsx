import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, X, Layers, Package, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { products, companyInfo } from '../utils/mockData';

const SECTIONS = [
  {
    id: 'racks',
    label: 'Racks',
    icon: Package,
    description: 'Heavy-duty racking systems engineered for maximum load capacity and operational efficiency.',
    filter: (p) => p.category === 'racks' || (!p.category && p.name?.toLowerCase().includes('rack')),
  },
  {
    id: 'mezzanine',
    label: 'Mezzanine Floors',
    icon: Layers,
    description: 'Structural mezzanine platforms that double your usable floor space without expanding your footprint.',
    filter: (p) => p.category === 'mezzanine' || (!p.category && (p.name?.toLowerCase().includes('mezzanine') || p.name?.toLowerCase().includes('floor'))),
  },
  {
    id: 'trolleys',
    label: 'Trolleys',
    icon: ShoppingCart,
    description: 'Robust material handling trolleys designed for seamless movement across warehouse environments.',
    filter: (p) => p.category === 'trolleys' || (!p.category && p.name?.toLowerCase().includes('trolley')),
  },
];

// Fallback: if products don't have categories, distribute them across sections for demo
const getSectionProducts = (section, allProducts) => {
  const filtered = allProducts.filter(section.filter);
  if (filtered.length > 0) return filtered;

  // Fallback distribution if no category metadata exists
  const idx = SECTIONS.findIndex((s) => s.id === section.id);
  const chunkSize = Math.ceil(allProducts.length / SECTIONS.length);
  return allProducts.slice(idx * chunkSize, (idx + 1) * chunkSize);
};

const Products = () => {
  const [activeSection, setActiveSection] = useState('racks');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currentSection = SECTIONS.find((s) => s.id === activeSection);
  const sectionProducts = getSectionProducts(currentSection, products);

  const handleInquiry = (productName) => {
    const message = productName
      ? `Hello, I would like to inquire about ${productName}.`
      : `Hello, I would like to inquire about your products.`;
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-xl text-gray-200">Comprehensive range of industrial storage solutions</p>
          </div>
        </div>
      </section>

      {/* Section Tabs */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto scrollbar-none">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all
                    ${isActive
                      ? 'border-orange-600 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'}
                  `}
                >
                  <Icon size={18} />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              {React.createElement(currentSection.icon, { size: 16 })}
              {currentSection.label}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentSection.label === 'Racks' && 'Industrial Racking Systems'}
              {currentSection.label === 'Mezzanine Floors' && 'Mezzanine Floor Solutions'}
              {currentSection.label === 'Trolleys' && 'Material Handling Trolleys'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{currentSection.description}</p>
          </div>

          {/* Products Grid */}
          {sectionProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectionProducts.map((product) => {
                const productFeatures = product.features || [];
                return (
                  <Card
                    key={product.id}
                    className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                        {product.name}
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      <div className="space-y-2 mb-6">
                        {productFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2 size={16} className="text-orange-600 flex-shrink-0" />
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
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedProduct.description}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {(selectedProduct.features || []).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={20} className="text-orange-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={() => handleInquiry(selectedProduct.name)}
                  className="bg-orange-600 hover:bg-orange-700 text-white flex-1"
                  size="lg"
                >
                  Request Quote on WhatsApp
                  <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button onClick={() => setSelectedProduct(null)} variant="outline" size="lg">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Custom Storage Solutions?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Every warehouse is unique. We design and manufacture custom racking systems tailored to your specific requirements.
          </p>
          <Button
            onClick={() => handleInquiry()}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 text-lg"
          >
            Discuss Your Requirements
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gray-800 px-4 py-2 rounded-full">Warehouse Racks in Guwahati</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">Industrial Racks in Assam</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">Storage Racks in Northeast India</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">Pallet Rack Suppliers Guwahati</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">Mezzanine Floor Manufacturer Assam</span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">Heavy Duty Racks Northeast</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
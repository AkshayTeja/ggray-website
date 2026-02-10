import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects } from '../utils/mockData';

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-gray-200">
              Showcasing our successful warehouse transformations across Northeast India
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">300+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">1M+</div>
              <div className="text-gray-400">Sq Ft Optimized</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-400">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore how we've helped businesses across Northeast India optimize their warehouse space
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
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
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized storage solutions for diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Card key={index} className="border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all">
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
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Project Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we ensure smooth execution
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Warehouse?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ satisfied clients who have optimized their storage with GGRAY
          </p>
          <button
            onClick={() => window.open(`https://wa.me/919707918272?text=Hello, I would like to discuss my warehouse project.`, '_blank')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-md text-lg font-semibold transition-all hover:shadow-2xl"
          >
            Start Your Project Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;


import { useState } from 'react';
import { ExternalLink, Globe, Users, Code, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "EduPlatform",
      sector: "Education",
      description: "Modern learning management system for universities and colleges",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      url: "https://example-edu.com",
      features: ["Student Portal", "Course Management", "Online Testing"],
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "HealthCare Plus",
      sector: "Healthcare",
      description: "Patient management and appointment booking system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      url: "https://example-health.com",
      features: ["Appointment Booking", "Patient Records", "Telemedicine"],
      tech: ["React", "TypeScript", "PostgreSQL"]
    },
    {
      id: 3,
      title: "RetailMax",
      sector: "E-commerce",
      description: "Complete e-commerce solution with inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      url: "https://example-retail.com",
      features: ["Online Store", "Payment Gateway", "Inventory Tracking"],
      tech: ["Next.js", "Stripe", "Firebase"]
    },
    {
      id: 4,
      title: "FinanceHub",
      sector: "Finance",
      description: "Banking and financial services platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      url: "https://example-finance.com",
      features: ["Account Management", "Transaction History", "Investment Tools"],
      tech: ["React", "Express", "MySQL"]
    },
    {
      id: 5,
      title: "FoodieDelights",
      sector: "Restaurant",
      description: "Restaurant management and online ordering system",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      url: "https://example-restaurant.com",
      features: ["Online Ordering", "Table Booking", "Menu Management"],
      tech: ["Vue.js", "Node.js", "SQLite"]
    },
    {
      id: 6,
      title: "TechStartup",
      sector: "Technology",
      description: "SaaS platform for business automation",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      url: "https://example-tech.com",
      features: ["Workflow Automation", "Analytics Dashboard", "API Integration"],
      tech: ["React", "Python", "Docker"]
    }
  ];

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const getSectorIcon = (sector: string) => {
    switch (sector.toLowerCase()) {
      case 'education': return Users;
      case 'healthcare': return Zap;
      case 'e-commerce': return Globe;
      case 'finance': return Code;
      case 'restaurant': return Globe;
      case 'technology': return Code;
      default: return Globe;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Discover the innovative websites we've crafted for businesses across various industries. 
            Each project showcases our commitment to excellence and modern design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const SectorIcon = getSectorIcon(project.sector);
            const isHovered = hoveredProject === project.id;
            
            return (
              <Card 
                key={project.id}
                className={`glass-card border-slate-700 overflow-hidden cursor-pointer transition-all duration-500 hover-glow group ${
                  isHovered ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-48 object-cover transition-transform duration-500 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-90' : 'opacity-60'
                  }`} />
                  
                  {/* Sector Badge */}
                  <div className="absolute top-4 left-4 flex items-center bg-violet-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <SectorIcon className="h-4 w-4 text-white mr-2" />
                    <span className="text-white text-sm font-medium">{project.sector}</span>
                  </div>

                  {/* External Link Button */}
                  <Button
                    onClick={() => openInNewTab(project.url)}
                    className={`absolute top-4 right-4 bg-slate-800/80 hover:bg-violet-500 transition-all duration-300 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className={`text-slate-300 mb-4 transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-80'
                  }`}>
                    {project.description}
                  </p>

                  {/* Expanded Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-4">
                      {/* Features */}
                      <div>
                        <h4 className="text-violet-400 font-semibold mb-2">Key Features:</h4>
                        <ul className="text-slate-300 text-sm space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-violet-400 font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="bg-slate-700/50 text-cyan-400 px-2 py-1 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Project Button */}
                      <Button 
                        onClick={() => openInNewTab(project.url)}
                        className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white rounded-full transition-all duration-300 group/btn"
                      >
                        View Live Website
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">How It Works</h3>
            <p className="text-slate-400 text-sm">
              (in under 24hrs)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Choose a Site</h4>
              <p className="text-slate-300">Browse our portfolio and select a design that fits your vision</p>
            </div>

            <div className="flex flex-col items-center text-center group relative">
              <ArrowRight className="hidden md:block absolute -left-8 top-8 text-violet-400 opacity-50" size={24} />
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Tell Me What to Change</h4>
              <p className="text-slate-300">Share your requirements, branding, and any customizations needed</p>
              <ArrowRight className="hidden md:block absolute -right-8 top-8 text-violet-400 opacity-50" size={24} />
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">I Deliver It</h4>
              <p className="text-slate-300">Receive your custom website, fully optimized and ready to launch</p>
            </div>
          </div>
        </div>

        {/* Custom Website Option */}
        <div className="text-center mb-8">
          <div className="bg-slate-800/20 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 max-w-2xl mx-auto">
            <p className="text-slate-300 mb-4">
              Don't see what you need? I can create a completely custom website built from scratch, tailored specifically to your business requirements.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-300 group"
            >
              Request Custom Website
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-slate-300 mb-6">
            Ready to see your business featured in our next showcase?
          </p>
          <Button 
            className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

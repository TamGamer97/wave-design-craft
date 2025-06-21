
import { useEffect, useRef, useState } from 'react';
import { Monitor, Smartphone, ShoppingCart, Search, Palette, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
      features: ['React/Next.js', 'Custom CMS', 'API Integration', 'Performance Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive designs that look perfect on all devices, from mobile phones to desktop screens.',
      features: ['Mobile Optimization', 'Touch Interactions', 'Progressive Web Apps', 'Cross-Platform']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with secure payment processing and inventory management.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Multi-Currency']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Search engine optimization to help your business rank higher and attract more customers.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics Setup']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your website secure, updated, and performing well.',
      features: ['Security Updates', '24/7 Monitoring', 'Backup Services', 'Performance Tuning']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We offer comprehensive web development services to help your business succeed online. 
            From design to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              data-index={index}
              className={`service-card glass-card border-slate-700 hover-glow transition-all duration-700 transform ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <service.icon className="h-12 w-12 text-violet-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-slate-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PricingSection = () => {
  const packages = [
    {
      name: "Starter",
      price: "$1,299",
      description: "Perfect for small businesses and startups",
      features: [
        "Responsive Design",
        "Up to 5 Pages",
        "Contact Form",
        "Basic SEO Setup",
        "Mobile Optimization",
        "1 Month Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,499",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Up to 15 Pages",
        "E-commerce Integration",
        "Advanced SEO",
        "Analytics Setup",
        "3 Months Support",
        "Content Management System"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      description: "For large businesses with custom needs",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom Development",
        "Advanced Integrations",
        "Performance Optimization",
        "6 Months Support",
        "Priority Development"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the perfect package for your business needs. All packages include hosting setup and domain configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`glass-card hover-glow relative animate-on-scroll ${
                pkg.popular ? 'border-violet-500 border-2' : 'border-slate-700'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  <span className="text-slate-400 ml-2">one-time</span>
                </div>
                <p className="text-slate-300">{pkg.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600' 
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  } transition-all duration-300 hover:scale-105`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-slate-400 mb-4">
            Need something custom? We'd love to discuss your project.
          </p>
          <Button 
            variant="outline" 
            className="border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white"
          >
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

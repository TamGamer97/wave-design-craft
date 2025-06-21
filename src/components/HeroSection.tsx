
import { useEffect, useState } from 'react';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-white mb-4">Transform Your</span>
            <span className="gradient-text">Digital Presence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We create stunning, high-converting websites that help businesses thrive in the digital world. 
            From concept to launch, we deliver excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
                  href={'#contact'}
                  className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover-glow group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
            
              <Button 
                variant="outline" 
                size="lg" 
                className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => openInNewTab('https://fiverr.com/tamgamer97')}
              >
                View Our Work
              </Button>

          </div>

          {/* Feature icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Code, title: 'Custom Development', description: 'Tailored solutions for your unique needs' },
              { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed and performance' },
              { icon: Globe, title: 'Global Reach', description: 'Accessible to audiences worldwide' }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className={`glass-card p-6 rounded-xl transition-all duration-700 hover-glow ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <feature.icon className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

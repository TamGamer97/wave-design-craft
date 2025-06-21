
import { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: Users, number: '4.9', label: 'Raiting' },
    { icon: Award, number: '100%', label: 'Response Rate' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: TrendingUp, number: '50+', label: 'Projects' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About <span className="gradient-text">TDesigns</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              We are a passionate team of web developers and designers dedicated to creating exceptional 
              digital experiences. With years of experience in the industry, we understand what it takes 
              to build websites that not only look great but also drive business results.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Our mission is to help businesses of all sizes establish a strong online presence through 
              innovative web solutions. We combine cutting-edge technology with creative design to deliver 
              websites that engage users and convert visitors into customers.
            </p>
            
            <div className="space-y-4">
              {[
                'Custom web development tailored to your needs',
                'Modern, responsive designs that work on all devices',
                'SEO-optimized to help you rank higher in search results',
                'Ongoing support and maintenance for peace of mind'
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full mr-4"></div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`glass-card p-6 rounded-xl text-center hover-glow transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

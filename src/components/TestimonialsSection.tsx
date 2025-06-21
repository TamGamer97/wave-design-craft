
import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'WebCraft Pro transformed our online presence completely. The website they built for us increased our conversion rate by 150% in just 3 months.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'GreenLeaf Restaurant',
      role: 'Owner',
      content: 'The team delivered exactly what we needed - a beautiful, fast website that showcases our restaurant perfectly. Orders through the site have tripled!',
      rating: 5,
      avatar: '👨‍🍳'
    },
    {
      name: 'Emma Rodriguez',
      company: 'FitLife Gym',
      role: 'Marketing Director',
      content: 'Professional, responsive, and incredibly talented. They understood our vision and brought it to life better than we ever imagined.',
      rating: 5,
      avatar: '👩‍💪'
    },
    {
      name: 'David Thompson',
      company: 'EcoSolutions',
      role: 'Founder',
      content: 'Outstanding work! The e-commerce platform they built handles our complex inventory perfectly. Sales have increased by 200% since launch.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Park',
      company: 'Creative Agency',
      role: 'Creative Director',
      content: 'The attention to detail and design quality exceeded our expectations. Our clients love the new portfolio site - it truly represents our brand.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'James Wilson',
      company: 'Local Law Firm',
      role: 'Partner',
      content: 'They made the entire process seamless. The website is professional, fast, and has helped us attract higher-quality clients consistently.',
      rating: 5,
      avatar: '👨‍⚖️'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleTestimonials(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const testimonialCards = sectionRef.current?.querySelectorAll('.testimonial-card');
    testimonialCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              data-index={index}
              className={`testimonial-card glass-card border-slate-700 hover-glow transition-all duration-700 transform ${
                visibleTestimonials.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-violet-400 mb-4" />
                <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    <p className="text-violet-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: 'Irfan U',
      company: 'SWT',
      role: 'Creative Director',
      content: 'This guy has met all that i wanted, with day/night support throughout the project. Very efficient and pleasant to work with,,with alot of patience he continued to work on my project until completion. Buy his package without any hesitations. Highly recommended, will defiantly use his services again. Many thanks Tamim stay blessed!!!!!',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'Daniel C',
      company: 'Firelaps',
      role: 'Analyst',
      content: "Tamim did great work for us in laying the groundwork for our app as we requested. His communication was proactive and clear, and his work was quick and complete. The end result was something that accomplished our objectives and we can use to move forward in our project. We'll reach out to Tamim again if we need any additional mobile app development.",
      rating: 5,
      avatar: '👨‍🍳'
    },
    {
      name: 'Clark A',
      company: 'Sandwich Builder Club',
      role: 'Marketing Director',
      content: 'Excellent game designer! Responsive, helpful, went above and beyond in developing assets, fulfilled all of my details and requests, and added lots of insight and helpful tools. Helped me with my revisions with no issues, and delivered in a timely manner. I highly recommend working with Tamim!',
      rating: 5,
      avatar: '👩‍💪'
    },
    {
      name: 'Tanvir R',
      company: '',
      role: '',
      content: 'Got exactly what I needed. He is an expert on his work. Will recommend to others.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'James E',
      company: 'EcoPanda',
      role: 'CEO',
      content: 'Very prompt and accommodating. Will definitely love to work again.',
      rating: 5,
      avatar: '👨‍⚖️'
    },
    {
      name: 'Cherelle E',
      company: '',
      role: '',
      content: 'This seller worked quickly on the order and really paid attention to detail. Was always available for questions and gave me a great end product.',
      rating: 5,
      avatar: '👩‍💼'
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

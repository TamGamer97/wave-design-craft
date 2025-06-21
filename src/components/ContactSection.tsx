
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    const serviceId = "service_qm9re99"
    const templateId = "template_4n91qir"
    const publicKey = "qj-kpn96myFWtF034"

    if(formData.message == '')
    {
        return
    }


    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('Email Sent Successfuly', response)
        // Simulate form submission
        setTimeout(() => {
          toast({
            title: 'Message Sent!',
            description: 'Thank you for your interest. We\'ll get back to you within 24 hours.',
          });
          setFormData({ name: '', email: '', company: '', message: '' });
          setIsSubmitting(false);
        }, 1000);
      })
      .catch((error) => {
        console.log('Error')
        setTimeout(() => {
          toast({
            title: 'Failed',
            description: 'Your messsage has failed to be sent.',
          });
        }, 1000);
      })
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact.tamdev@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: 'Temporarily unavailable',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Hertfordshire, England',
      description: 'Schedule a meeting'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your business with a stunning website? Get in touch with us today 
            for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We'd love to hear about your project and discuss how we can help your business grow online. 
                Reach out using any of the methods below or fill out our contact form.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="glass-card border-slate-700 hover-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <info.icon className="h-8 w-8 text-violet-400 mr-4" />
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        <p className="text-violet-400 font-medium">{info.content}</p>
                        <p className="text-slate-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-slate-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover-glow group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import { Heart, Code, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">TDesigns</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We specialize in creating beautiful, high-performing websites that help businesses 
              succeed online. From concept to launch, we're your trusted web development partner.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-3 text-violet-400" />
                <span>contact.tamdev@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-3 text-violet-400" />
                <span>Temporarily unavailable</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-3 text-violet-400" />
                <span>Hertfordshire, England</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Pricing', 'About', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-300 hover:text-violet-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'E-Commerce',
                'SEO Optimization',
                'UI/UX Design',
                'Maintenance'
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-slate-300 mb-4 md:mb-0">
              {/* <span>Made with</span> */}
              {/* <Heart className="h-4 w-4 mx-2 text-red-400 fill-current" /> */}
              {/* <span>and</span> */}
              <Code className="h-4 w-4 mx-2 text-violet-400" />
              <span>by TDesigns</span>
            </div>
            <p className="text-slate-400 text-sm">
              © {currentYear} TDesigns. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

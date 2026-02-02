import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black font-display tracking-tighter text-white">
                GDSC
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary font-semibold">
                Renovations
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional renovation services in Sofia. We transform spaces with precision, transparency, and guaranteed deadlines.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Painting', href: '#services' },
                { name: 'Plaster & Putty', href: '#services' },
                { name: 'Tiles', href: '#services' },
                { name: 'Electrical', href: '#services' },
                { name: 'Plumbing', href: '#services' },
                { name: 'Drywall', href: '#services' },
                { name: 'Flooring', href: '#services' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0 duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-4">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Blog', href: '#blog' },
                { name: 'Contact', href: '#quote' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0 duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Business Park Sofia, Building 12<br />Sofia 1766, Bulgaria
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm font-semibold">+359 88 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">info@gdsc.bg</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Latest Posts</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-500 hover:text-white text-xs transition-colors">5 Tips for Kitchen Renovation</a></li>
                <li><a href="#blog" className="text-gray-500 hover:text-white text-xs transition-colors">Choosing the Right Tiles</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 GDSC Renovations. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

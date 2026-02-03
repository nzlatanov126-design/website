import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#0F172A] text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/">
              <img 
                src="/logo-gdcs-cropped.png" 
                alt="GDCS" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Професионални ремонтни услуги в София. Преобразяваме пространства с прецизност, прозрачност и гарантирани срокове.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" data-testid="link-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white">Нашите услуги</h3>
            <ul className="space-y-3">
              {[
                { name: 'Бояджийство', href: '/services/painting' },
                { name: 'Мазилка и шпакловка', href: '/services/plaster-putty' },
                { name: 'Плочки', href: '/services/tiles' },
                { name: 'Електро', href: '/services/electrical' },
                { name: 'ВиК', href: '/services/plumbing' },
                { name: 'Гипсокартон', href: '/services/drywall' },
                { name: 'Подови настилки', href: '/services/flooring' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white">Компания</h3>
            <ul className="space-y-3">
              {[
                { name: 'За нас', href: '/about' },
                { name: 'Отзиви', href: '/testimonials' },
                { name: 'Блог', href: '/blog' },
                { name: 'Поискай оферта', href: '/quote' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group text-sm">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white">Свържете се с нас</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Бизнес Парк София, Сграда 12<br />София 1766, България
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+359897744774" className="text-slate-400 text-sm font-medium hover:text-primary transition-colors">+359 89 7744774</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@gdcs.bg" className="text-slate-400 text-sm hover:text-primary transition-colors">info@gdcs.bg</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p className="text-center md:text-left">© 2026 GDCS Construction & Finishing. Всички права запазени.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика за поверителност</a>
            <a href="#" className="hover:text-white transition-colors">Условия за ползване</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

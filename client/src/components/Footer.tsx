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
                Ремонти
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Професионални ремонтни услуги в София. Преобразяваме пространства с прецизност, прозрачност и гарантирани срокове.
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
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-4">Нашите услуги</h3>
            <ul className="space-y-3">
              {[
                { name: 'Бояджийство', href: '#services' },
                { name: 'Мазилка и шпакловка', href: '#services' },
                { name: 'Плочки', href: '#services' },
                { name: 'Електро', href: '#services' },
                { name: 'ВиК', href: '#services' },
                { name: 'Гипсокартон', href: '#services' },
                { name: 'Подови настилки', href: '#services' }
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
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-4">Компания</h3>
            <ul className="space-y-3">
              {[
                { name: 'За нас', href: '#about' },
                { name: 'Отзиви', href: '#testimonials' },
                { name: 'ЧЗВ', href: '#faq' },
                { name: 'Блог', href: '#blog' },
                { name: 'Контакт', href: '#quote' }
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
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-4">Свържете се с нас</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Бизнес Парк София, Сграда 12<br />София 1766, България
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
              <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Последни публикации</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-500 hover:text-white text-xs transition-colors">5 съвета за ремонт на кухня</a></li>
                <li><a href="#blog" className="text-gray-500 hover:text-white text-xs transition-colors">Как да изберем правилните плочки</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 GDSC Ремонти. Всички права запазени.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика за поверителност</a>
            <a href="#" className="hover:text-white transition-colors">Условия за ползване</a>
            <a href="#" className="hover:text-white transition-colors">Карта на сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

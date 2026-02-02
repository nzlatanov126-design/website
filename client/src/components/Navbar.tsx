import { useState, useEffect } from 'react';
import { Link } from "wouter";
import { Menu, X, Phone, Mail, Clock, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [housesOpen, setHousesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Бояджийство", href: "/services/painting" },
    { name: "Мазилка и шпакловка", href: "/services/plaster-putty" },
    { name: "Плочки", href: "/services/tiles" },
    { name: "Електро", href: "/services/electrical" },
    { name: "ВиК", href: "/services/plumbing" },
    { name: "Гипсокартон", href: "/services/drywall" },
    { name: "Подови настилки", href: "/services/flooring" }
  ];

  const categories = [
    { name: "Ремонт на баня", href: "/projects/bathroom-renovation" },
    { name: "Ремонт на кухня", href: "/projects/kitchen-renovation" },
    { name: "Ремонт на спалня", href: "/projects/bedroom-renovation" },
    { name: "Ремонт на офис", href: "/projects/office-renovation" }
  ];

  const navLinks = [
    { name: "Начало", href: "/" },
    { 
      name: "Услуги", 
      href: "/#services", 
      hasDropdown: true,
      isOpen: servicesOpen,
      toggle: () => { setServicesOpen(!servicesOpen); setHousesOpen(false); },
      items: services
    },
    { 
      name: "Апартаменти и къщи", 
      href: "/#projects", 
      hasDropdown: true,
      isOpen: housesOpen,
      toggle: () => { setHousesOpen(!housesOpen); setServicesOpen(false); },
      items: categories
    },
    { name: "Отзиви", href: "/#testimonials" },
    { name: "За нас", href: "/#about" },
    { name: "Блог", href: "/#blog" },
    { name: "Контакт", href: "/#quote" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-accent text-accent-foreground py-2 text-xs font-medium tracking-wide border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" /> София, България
            </span>
            <a href="mailto:info@gdsc.bg" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary" /> info@gdsc.bg
            </a>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary" /> Пон–Пет 09:30–18:30
            </span>
          </div>
          <a href="tel:+359881234567" className="flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors">
            <Phone className="w-3.5 h-3.5" /> +359 88 123 4567
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2 border-border" : "bg-white py-4 border-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="group" onClick={() => setIsOpen(false)}>
              <div className="flex flex-col leading-none cursor-pointer">
                <span className="text-3xl font-black font-display tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  GDSC
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors font-semibold">
                  Ремонти
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/item py-2">
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3 group-hover/item:rotate-180 transition-transform" />}
                  </Link>
                  
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 invisible group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:visible transition-all duration-200 z-50">
                      <div className="bg-white border border-border shadow-xl rounded-2xl py-3 overflow-hidden">
                        {link.items?.map((item) => (
                          <Link 
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/item:w-full" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider rounded-full shadow-lg shadow-primary/20">
                <a href="/#quote">Поискай оферта</a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "lg:hidden fixed inset-x-0 top-[60px] bg-background border-b shadow-xl transition-all duration-300 overflow-y-auto max-h-[calc(100vh-60px)]",
            isOpen ? "opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="container px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <Link 
                    href={link.href}
                    className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault();
                        link.toggle();
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {link.hasDropdown && <ChevronDown className={cn("w-4 h-4 transition-transform", link.isOpen && "rotate-180")} />}
                    </span>
                  </Link>
                </div>
                {link.hasDropdown && (
                  <div className={cn("pl-4 flex flex-col gap-2 py-2 bg-secondary/30 rounded-xl transition-all overflow-hidden", link.isOpen ? "max-h-96" : "max-h-0 py-0")}>
                    {link.items?.map((item) => (
                      <Link 
                        key={item.name}
                        href={item.href}
                        className="text-sm font-semibold text-muted-foreground py-1 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="mt-4 w-full bg-primary font-bold uppercase rounded-xl" onClick={() => setIsOpen(false)}>
              <a href="/#quote">Поискай оферта</a>
            </Button>
            
            <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" /> +359 88 123 4567
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" /> info@gdsc.bg
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

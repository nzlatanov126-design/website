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
      href: "/services/painting", 
      hasDropdown: true,
      isOpen: servicesOpen,
      toggle: () => { setServicesOpen(!servicesOpen); setHousesOpen(false); },
      items: services
    },
    { 
      name: "Апартаменти и къщи", 
      href: "/projects/bathroom-renovation", 
      hasDropdown: true,
      isOpen: housesOpen,
      toggle: () => { setHousesOpen(!housesOpen); setServicesOpen(false); },
      items: categories
    },
    { name: "Отзиви", href: "/testimonials" },
    { name: "За нас", href: "/about" },
    { name: "Блог", href: "/blog" },
    { name: "Контакт", href: "/contact" },
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
            <a href="mailto:info@gdcs.bg" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary" /> info@gdcs.bg
            </a>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary" /> Пон–Пет 09:00–18:00
            </span>
          </div>
          <a href="tel:+359897744774" className="flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors">
            <Phone className="w-3.5 h-3.5" /> +359 89 7744774
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2 border-border" : "bg-white py-3 border-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center gap-8">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center" onClick={() => setIsOpen(false)} data-testid="link-logo">
              <img 
                src="/logo-gdcs-cropped.png" 
                alt="GDCS Construction & Finishing" 
                className="h-7 md:h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/item">
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
                    data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3 group-hover/item:rotate-180 transition-transform" />}
                  </Link>
                  
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 invisible group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:visible transition-all duration-200 z-50">
                      <div className="bg-white border border-border shadow-xl rounded-lg py-2 overflow-hidden">
                        {link.items?.map((item) => (
                          <Link 
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                            data-testid={`nav-dropdown-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block shrink-0">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider rounded-md shadow-lg shadow-primary/20 px-6">
                <Link href="/quote" data-testid="nav-cta-quote">Поискай оферта</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "lg:hidden fixed inset-x-0 top-[72px] bg-background border-b border-border shadow-xl transition-all duration-300 overflow-y-auto",
            isOpen ? "max-h-[calc(100vh-72px)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="container px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <Link 
                    href={link.href}
                    className="text-base font-bold text-foreground hover:text-primary transition-colors"
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
                  <div className={cn("pl-4 flex flex-col gap-1 py-2 bg-secondary/50 rounded-md my-1 transition-all overflow-hidden", link.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 py-0 my-0")}>
                    {link.items?.map((item) => (
                      <Link 
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground py-2 px-2 hover:text-primary hover:bg-white/50 rounded transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="mt-4 w-full bg-primary font-bold uppercase rounded-md h-12" onClick={() => setIsOpen(false)}>
              <Link href="/quote">Поискай оферта</Link>
            </Button>
            
            <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+359897744774" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +359 89 7744774
              </a>
              <a href="mailto:info@gdcs.bg" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> info@gdcs.bg
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

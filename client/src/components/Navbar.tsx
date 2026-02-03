import { useState, useEffect } from 'react';
import { Link } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
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
      name: "Проекти", 
      href: "/projects/bathroom-renovation", 
      hasDropdown: true,
      isOpen: housesOpen,
      toggle: () => { setHousesOpen(!housesOpen); setServicesOpen(false); },
      items: categories
    },
    { name: "Отзиви", href: "/testimonials" },
    { name: "За нас", href: "/about" },
    { name: "Контакт", href: "#footer", isAnchor: true },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center" onClick={() => setIsOpen(false)} data-testid="link-logo">
            <img 
              src="/logo-gdcs-cropped.png" 
              alt="GDCS" 
              className={cn(
                "h-8 md:h-10 w-auto object-contain transition-all",
                scrolled ? "" : "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/item">
                {link.isAnchor ? (
                  <a 
                    href={link.href} 
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      scrolled ? "text-[#334155] hover:text-primary" : "text-white/90 hover:text-white"
                    )}
                    data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    href={link.href} 
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                      scrolled ? "text-[#334155] hover:text-primary" : "text-white/90 hover:text-white"
                    )}
                    data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 group-hover/item:rotate-180 transition-transform" />}
                  </Link>
                )}
                
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 invisible group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:visible transition-all duration-200 z-50">
                    <div className="bg-white border border-[#E2E8F0] shadow-xl rounded-lg py-2 overflow-hidden">
                      {link.items?.map((item) => (
                        <Link 
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-medium text-[#334155] hover:bg-[#F8FAFC] hover:text-primary transition-colors"
                          data-testid={`nav-dropdown-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+359897744774" 
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                scrolled ? "text-[#334155] hover:text-primary" : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              +359 89 7744774
            </a>
            <Button asChild className="bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-md px-6 h-10">
              <Link href="/quote" data-testid="nav-cta-quote">Поискай оферта</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-primary-foreground" : "text-white"
            )}
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
          "lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-[#E2E8F0] shadow-xl transition-all duration-300 overflow-y-auto",
          isOpen ? "max-h-[calc(100vh-60px)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="container px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <div className="flex items-center justify-between py-3 border-b border-[#E2E8F0]">
                {link.isAnchor ? (
                  <a 
                    href={link.href}
                    className="text-base font-semibold text-primary-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    href={link.href}
                    className="text-base font-semibold text-primary-foreground hover:text-primary transition-colors"
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
                )}
              </div>
              {link.hasDropdown && (
                <div className={cn("pl-4 flex flex-col gap-1 py-2 bg-[#F8FAFC] rounded-lg my-1 transition-all overflow-hidden", link.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 py-0 my-0")}>
                  {link.items?.map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-[#64748B] py-2 px-3 hover:text-primary hover:bg-white rounded transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button asChild className="mt-4 w-full bg-primary text-primary-foreground font-bold uppercase rounded-md h-12" onClick={() => setIsOpen(false)}>
            <Link href="/quote">Поискай оферта</Link>
          </Button>
          
          <div className="mt-6 pt-6 border-t border-[#E2E8F0] flex flex-col gap-3 text-sm text-[#64748B]">
            <a href="tel:+359897744774" className="flex items-center gap-3 hover:text-primary transition-colors font-medium">
              <Phone className="w-5 h-5 text-primary" /> +359 89 7744774
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

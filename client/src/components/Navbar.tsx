import { useState, useEffect } from 'react';
import { Link } from "wouter";
import { Menu, X, Phone, Mail, Clock, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Product", href: "/#products" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-accent text-accent-foreground py-2 text-xs font-medium tracking-wide">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" /> Sofia, Bulgaria
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-primary" /> info@gdsc.bg
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary" /> Mon–Fri 09:30–18:30
            </span>
          </div>
          <div className="flex items-center gap-2 font-bold text-primary">
            <Phone className="w-3.5 h-3.5" /> +359 88 123 4567
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-white/10",
          scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2 border-border" : "bg-white py-4 border-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="group">
              <div className="flex flex-col leading-none cursor-pointer">
                <span className="text-3xl font-black font-display tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  GDSC
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors font-semibold">
                  Renovations
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/item">
                  <a 
                    href={link.href} 
                    className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3 group-hover/item:rotate-180 transition-transform" />}
                  </a>
                  {/* Subtle underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/item:w-full" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider rounded-sm shadow-lg shadow-primary/20">
                <a href="#contact">Request a Quote</a>
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
            "lg:hidden fixed inset-x-0 top-[60px] bg-background border-b shadow-xl transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-screen py-6 opacity-100" : "max-h-0 py-0 opacity-0"
          )}
        >
          <div className="container px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-foreground py-2 border-b border-border hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-4 w-full bg-primary font-bold uppercase rounded-sm" onClick={() => setIsOpen(false)}>
              Request a Quote
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

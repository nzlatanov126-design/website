import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Ruler, CalendarClock, PhoneCall, Hammer, PaintBucket, Wrench, Bath, Plug, Quote, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* modern apartment interior living room renovation */}
          <img 
            src="https://pixabay.com/get/g85c3ed622e4a05f4899372af22bfd897638476d08818dd98223af3487ed7751a131ac248dc047961b7c83050828803bd9b7a1330e12c6d28b5dd88e6a346e00a_1280.jpg" 
            alt="Modern Interior Renovation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        </div>

        <div className="container relative z-10 px-4 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Transform Your Space</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[1.1] mb-6 drop-shadow-lg">
              Professional Home <span className="text-primary">Renovations</span> With Real <span className="text-white border-b-4 border-primary">Deadlines</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl font-light">
              Turnkey apartment renovations, bathrooms, kitchens, drywall, tiles, painting, electrical and plumbing services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider h-14 px-8 text-base shadow-lg shadow-primary/25">
                <a href="#quote">Request a Quote</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:text-white uppercase tracking-wider h-14 px-8 text-base font-semibold backdrop-blur-sm">
                <a href="#services">Our Services</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {[
                { icon: ShieldCheck, text: "Written Warranty" },
                { icon: Hammer, text: "Clean Work" },
                { icon: CalendarClock, text: "Fixed Deadlines" },
                { icon: Check, text: "Professional Team" }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white text-sm font-semibold leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose GDSC</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground">
                  We Build Trust Through <br/> Transparency & Quality.
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  "High quality finishing with premium materials",
                  "Clear pricing structure - no hidden fees",
                  "Clean execution and waste management",
                  "Strong communication throughout the project"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary font-bold" />
                    </div>
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-4 p-6 bg-accent rounded-sm text-white max-w-md">
                  <PhoneCall className="w-10 h-10 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Have questions?</p>
                    <p className="text-xl font-bold font-display">+359 88 123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <FeatureCard 
                title="Quality Control" 
                description="QUALITY — warranty & control. Rigorous supervision at every stage. We provide a written warranty for all our work."
                icon={ShieldCheck}
                variant="primary"
              />
              <FeatureCard 
                title="Transparent Pricing" 
                description="PRICE — transparent offers. Detailed estimates with clear breakdowns. You'll know exactly where every cent goes."
                icon={Ruler}
              />
              <FeatureCard 
                title="Strict Deadlines" 
                description="DEADLINES — planned execution. We respect your time. Our project management ensures work is completed on schedule."
                icon={CalendarClock}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">Comprehensive Renovation Services</h2>
            <p className="text-muted-foreground text-lg">From complete turn-key solutions to specific repairs, we handle every aspect of your home improvement.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Full Renovation" 
              description="Complete apartment transformation from demolition to final touches. Turnkey solutions tailored to your needs."
              icon={Hammer}
              // modern white living room
              image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Bathroom" 
              description="Modern bathroom designs, waterproofing, tiling, and sanitary installation for your private sanctuary."
              icon={Bath}
              // luxury modern bathroom
              image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Kitchens" 
              description="Functional and stylish kitchen remodeling. Cabinetry installation, backsplashes, and appliance integration."
              icon={Wrench}
              // modern kitchen interior
              image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Painting" 
              description="Flawless wall finishing, decorative plasters, and professional painting services for a fresh look."
              icon={PaintBucket}
              // painter painting wall
              image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Tiles & Flooring" 
              description="Expert installation of ceramic, porcelain, laminate, and hardwood floors with perfect leveling."
              icon={Hammer}
            />
            <ServiceCard 
              title="Drywall" 
              description="Suspended ceilings, partition walls, and custom drywall structures to reshape your space."
              icon={Ruler}
            />
            <ServiceCard 
              title="Electrical" 
              description="Complete rewiring, lighting design, switchboard upgrades, and smart home installations."
              icon={Plug}
            />
            <ServiceCard 
              title="Plumbing" 
              description="Pipe replacement, drainage systems, and fixture installation ensuring leak-free performance."
              icon={Wrench}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">What Our Clients Say</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-border hover:border-primary hover:text-primary transition-colors">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </Button>
              <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-border hover:border-primary hover:text-primary transition-colors">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div id="testimonials" className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Dimitrova",
                project: "Full Apartment Renovation",
                text: "The team at GDSC completely transformed our old apartment. They finished on time and the quality is outstanding. Highly recommended!",
                location: "Sofia, Lozenets"
              },
              {
                name: "Ivan Georgiev",
                project: "Bathroom Remodel",
                text: "Professional approach from day one. The quote was accurate, and they kept the site clean every day. The new bathroom looks amazing.",
                location: "Sofia, Mladost"
              },
              {
                name: "Elena Popova",
                project: "Kitchen & Flooring",
                text: "We needed a quick renovation before moving in. They worked efficiently and handled unexpected issues without stress. Great communication.",
                location: "Sofia, Center"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-secondary/30 p-8 rounded-sm relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-border">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6 group-hover:text-primary transition-colors" />
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(star => (
                    <div key={star} className="w-4 h-4 bg-primary text-primary-foreground flex items-center justify-center text-[10px] rounded-sm">★</div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-foreground font-display">{review.name}</h4>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-1">{review.project}</p>
                  <p className="text-muted-foreground text-xs">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-accent text-accent-foreground relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">FAQ</span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Common Questions</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">Everything you need to know about our renovation process, pricing, and warranties.</p>
              <Button className="bg-white text-accent hover:bg-gray-200 font-bold uppercase tracking-wider">
                <a href="#contact">Ask a Question</a>
              </Button>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-2">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "What services do you offer?", a: "We offer complete home renovation services including demolition, plumbing, electrical, dry walling, painting, tiling, and flooring installation. We specialize in turnkey apartment renovations." },
                  { q: "How do I get an estimate?", a: "Simply fill out our contact form or give us a call. We will schedule a site visit to assess the work and provide a detailed, itemized quote typically within 48 hours." },
                  { q: "Do you provide a warranty?", a: "Yes, we provide a written warranty for all our workmanship. The duration depends on the type of work performed, typically ranging from 2 to 5 years." },
                  { q: "Can changes be made during renovation?", a: "Yes, changes are possible. We will discuss any implications on the timeline and budget before proceeding. We believe in flexibility to ensure you get exactly what you want." }
                ].map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10 last:border-0">
                    <AccordionTrigger className="text-white hover:text-primary hover:no-underline font-semibold text-left px-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 px-4 pb-4">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Contact Section */}
      <section id="quote" className="py-20 md:py-28 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Get in Touch</span>
                <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">Start Your Project Today</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ready to transform your home? Contact us for a free consultation and quote. 
                  Our team is ready to answer all your questions and help you plan your perfect renovation.
                  Please include your project location and a brief description of the work needed.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Phone</h4>
                    <p className="text-muted-foreground mb-1">Mon-Fri from 9am to 6pm.</p>
                    <a href="tel:+359881234567" className="text-lg font-bold hover:text-primary transition-colors">+359 88 123 4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Office</h4>
                    <p className="text-muted-foreground mb-1">Come say hello at our office HQ.</p>
                    <p className="font-medium">Business Park Sofia, Building 12, Sofia 1766</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Site Visit</h4>
                    <p className="text-muted-foreground">
                      We offer free on-site consultations to assess your project needs accurately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

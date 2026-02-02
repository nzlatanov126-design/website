import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function OfficeRenovation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-20 bg-accent text-accent-foreground overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Office Renovation</h1>
              <p className="text-xl text-gray-400 mb-8">Productive, modern, and representative spaces for your business success.</p>
              <Button size="lg" asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider h-14 px-8">
                <a href="/#quote">Request a Quote</a>
              </Button>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold font-display mb-8">What's Included</h2>
                <ul className="space-y-4">
                  {["Open space and partition setup", "Network and power infrastructure", "Acoustic solutions", "High-traffic flooring", "Branding-aligned decor"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                <h2 className="text-3xl font-bold font-display mb-8">Process</h2>
                <div className="space-y-6">
                  {[{ step: "01", title: "Survey", desc: "Understanding workflow and tech needs." }, { step: "02", title: "Build", desc: "Efficient execution to minimize downtime." }, { step: "03", title: "Finish", desc: "Polishing for a professional look." }].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-2xl font-black text-primary/30 font-display">{item.step}</span>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30 border-y border-border text-center max-w-2xl mx-auto container rounded-2xl mb-20 mt-10 p-10">
          <h2 className="text-3xl font-bold font-display mb-6">Pricing Guidance</h2>
          <p className="text-muted-foreground mb-8">B2B projects are quoted based on square meters and spec level.</p>
          <div className="p-6 bg-white border border-border rounded-2xl inline-block px-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Estimate Starts From</p>
            <p className="text-4xl font-black text-foreground font-display">80 BGN / m²</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

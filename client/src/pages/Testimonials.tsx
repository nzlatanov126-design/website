import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Quote, Star, MapPin, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Мария Димитрова",
    project: "Цялостен ремонт на апартамент",
    text: "Екипът на GDSC напълно преобрази стария ни апартамент. Завършиха навреме и качеството е отлично. Горещо препоръчвам!",
    location: "София, Лозенец",
    rating: 5
  },
  {
    name: "Иван Георгиев",
    project: "Ремонт на баня",
    text: "Професионален подход от първия ден. Офертата беше точна и поддържаха обекта чист всеки ден. Новата баня изглежда страхотно.",
    location: "София, Младост",
    rating: 5
  },
  {
    name: "Елена Попова",
    project: "Кухня и подове",
    text: "Имахме нужда от бърз ремонт преди нанасяне. Работиха ефективно и се справиха с неочаквани проблеми без стрес. Страхотна комуникация.",
    location: "София, Център",
    rating: 5
  },
  {
    name: "Петър Стоянов",
    project: "Електро и ВиК",
    text: "Подмениха цялата електрическа инсталация в панелния ни апартамент. Работата беше чиста и професионална. Много съм доволен от резултата.",
    location: "София, Люлин",
    rating: 5
  },
  {
    name: "Анна Николова",
    project: "Гипсокартон и боядисване",
    text: "Направиха невероятен окачен таван с вградено осветление. Екипът беше много внимателен към детайлите и изключително учтив.",
    location: "София, Витоша",
    rating: 5
  },
  {
    name: "Георги Василев",
    project: "Ремонт на офис",
    text: "Преобразиха офиса ни за две седмици. Работиха през уикендите, за да не пречат на бизнеса ни. Резултатът е впечатляващ!",
    location: "София, Бизнес Парк",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-accent text-accent-foreground overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Отзиви</span>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Какво казват нашите клиенти</h1>
              <p className="text-xl text-gray-200 mb-8">Доверието на нашите клиенти е най-голямата ни награда. Прочетете техните истории и се убедете сами в качеството на нашата работа.</p>
              <Button size="lg" asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider h-14 px-8">
                <Link href="/quote">Поискай оферта</Link>
              </Button>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </section>

        {/* Stats */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Завършени проекта" },
                { value: "98%", label: "Доволни клиенти" },
                { value: "15+", label: "Години опит" },
                { value: "50+", label: "Експерти в екипа" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-4xl md:text-5xl font-black text-primary font-display mb-2">{stat.value}</p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((review, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl relative group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-border"
                >
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6 group-hover:text-primary transition-colors" />
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{review.text}"</p>
                  <div>
                    <h4 className="font-bold text-foreground font-display">{review.name}</h4>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-1">{review.project}</p>
                    <p className="text-muted-foreground text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {review.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Готови ли сте да се присъедините към доволните ни клиенти?</h2>
            <p className="text-gray-200 text-lg mb-8">Свържете се с нас днес за безплатна консултация и оферта. Нека преобразим вашия дом заедно.</p>
            <Button size="lg" asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider h-14 px-8">
              <Link href="/quote" className="flex items-center gap-2">Поискай оферта <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Контакти</span>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Свържете се с нас</h1>
              <p className="text-xl text-gray-200 mb-8">Имате въпроси или искате да обсъдим вашия проект? Ние сме тук, за да помогнем. Свържете се с нас по удобен за вас начин.</p>
              <Button size="lg" asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider h-14 px-8">
                <Link href="/quote">Поискай оферта</Link>
              </Button>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Phone, title: "Телефон", info: "+359 89 7744774", subinfo: "Пон-Пет 9:00-18:00", action: "tel:+359897744774" },
                { icon: Mail, title: "Имейл", info: "info@gdsc.bg", subinfo: "Отговаряме до 24 часа", action: "mailto:info@gdsc.bg" },
                { icon: MapPin, title: "Офис", info: "Бизнес Парк София", subinfo: "Сграда 12, София 1766", action: "#map" },
                { icon: Clock, title: "Работно време", info: "Пон-Пет 9:00-18:00", subinfo: "Събота по заявка", action: null }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary/30 p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  {item.action ? (
                    <a href={item.action} className="text-lg font-semibold text-foreground hover:text-primary transition-colors block">{item.info}</a>
                  ) : (
                    <p className="text-lg font-semibold text-foreground">{item.info}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{item.subinfo}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-8">
                <div>
                  <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Изпратете запитване</span>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Как можем да помогнем?</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Попълнете формата и ние ще се свържем с вас в рамките на 24 часа. Можете също да ни се обадите директно за спешни въпроси.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Бърз отговор</h4>
                      <p className="text-sm text-muted-foreground">Отговаряме на всички запитвания в рамките на 24 часа в работни дни.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Безплатен оглед</h4>
                      <p className="text-sm text-muted-foreground">Предлагаме безплатна консултация на място за всички проекти в София.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-accent rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Предпочитате да се обадите?</h4>
                  <p className="text-gray-200 text-sm mb-4">Нашият екип е на линия от понеделник до петък.</p>
                  <a href="tel:+359897744774" className="text-2xl font-black font-display text-primary hover:text-primary/80 transition-colors">
                    +359 89 7744774
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Локация</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Посетете ни в офиса</h2>
              <p className="text-muted-foreground">Намираме се в Бизнес Парк София, лесно достъпен с градски транспорт и автомобил.</p>
            </div>
            
            <div className="bg-secondary/30 rounded-2xl overflow-hidden border border-border h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Бизнес Парк София</h3>
                <p className="text-muted-foreground mb-4">Сграда 12, София 1766, България</p>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Отвори в Google Maps <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Готови за вашия нов проект?</h2>
            <p className="text-gray-200 text-lg mb-8">Не чакайте повече. Свържете се с нас днес и нека започнем да планираме вашия перфектен ремонт.</p>
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

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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pb-16 md:pb-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop" 
            alt="Модерен интериор" 
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
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Преобразете пространството си</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[1.1] mb-6 drop-shadow-lg">
              Професионални <span className="text-primary">ремонти</span> с реални <span className="text-white border-b-4 border-primary">срокове</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl font-light">
              Цялостни ремонти на апартаменти, бани, кухни, гипсокартон, плочки, бояджийство, ел. и ВиК услуги.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider h-14 px-8 text-base shadow-lg shadow-primary/25">
                <a href="#quote">Поискай оферта</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:text-white uppercase tracking-wider h-14 px-8 text-base font-semibold backdrop-blur-sm">
                <a href="#services">Нашите услуги</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {[
                { icon: ShieldCheck, text: "Писмена гаранция" },
                { icon: Hammer, text: "Чиста работа" },
                { icon: CalendarClock, text: "Фиксирани срокове" },
                { icon: Check, text: "Професионален екип" }
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
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Защо да изберете GDSC</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground">
                  Изграждаме доверие чрез <br/> прозрачност и качество.
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  "Високо качество с премиум материали",
                  "Ясна ценова структура — без скрити такси",
                  "Чисто изпълнение и управление на отпадъците",
                  "Силна комуникация през целия проект"
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
                <div className="flex items-center gap-4 p-6 bg-accent rounded-2xl text-white max-w-md">
                  <PhoneCall className="w-10 h-10 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Имате въпроси?</p>
                    <p className="text-xl font-bold font-display">+359 89 7744774</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <FeatureCard 
                title="Контрол на качеството" 
                description="КАЧЕСТВО — гаранция и контрол. Стриктен надзор на всеки етап. Предоставяме писмена гаранция за всички дейности."
                icon={ShieldCheck}
                variant="primary"
              />
              <FeatureCard 
                title="Прозрачно ценообразуване" 
                description="ЦЕНА — прозрачни оферти. Детайлни сметки с ясни разбивки. Ще знаете точно къде отива всяка стотинка."
                icon={Ruler}
              />
              <FeatureCard 
                title="Стриктни срокове" 
                description="СРОКОВЕ — планирано изпълнение. Уважаваме времето ви. Управлението на проекта гарантира навременно завършване."
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
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Какво правим</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">Пълен спектър ремонтни услуги</h2>
            <p className="text-muted-foreground text-lg">От цялостни решения до ключ до специфични ремонти — справяме се с всеки аспект от обновяването на дома ви.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Цялостен ремонт" 
              description="Пълна трансформация на апартамента от събаряне до финални щрихи. Решения до ключ по ваша мярка."
              icon={Hammer}
              image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Баня" 
              description="Модерен дизайн на бани, хидроизолация, облицовка и монтаж на санитария за вашето лично убежище."
              icon={Bath}
              image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Кухня" 
              description="Функционално и стилно преустройство на кухни. Монтаж на шкафове, гръб и интеграция на уреди."
              icon={Wrench}
              image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Бояджийство" 
              description="Безупречна обработка на стени, декоративни мазилки и професионално боядисване за свеж вид."
              icon={PaintBucket}
              image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
            />
            <ServiceCard 
              title="Плочки и подове" 
              description="Експертен монтаж на керамика, порцелан, ламинат и дърво с перфектно нивелиране."
              icon={Hammer}
            />
            <ServiceCard 
              title="Гипсокартон" 
              description="Окачени тавани, преградни стени и конструкции от гипсокартон за преоформяне на пространството."
              icon={Ruler}
            />
            <ServiceCard 
              title="Електро" 
              description="Цялостно окабеляване, осветителен дизайн, подмяна на табло и интелигентни инсталации."
              icon={Plug}
            />
            <ServiceCard 
              title="ВиК" 
              description="Подмяна на тръби, канализация и монтаж на арматура с гарантирана защита от течове."
              icon={Wrench}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Отзиви</span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">Какво казват клиентите</h2>
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Мария Димитрова",
                project: "Цялостен ремонт на апартамент",
                text: "Екипът на GDSC напълно преобрази стария ни апартамент. Завършиха навреме и качеството е отлично. Горещо препоръчвам!",
                location: "София, Лозенец"
              },
              {
                name: "Иван Георгиев",
                project: "Ремонт на баня",
                text: "Професионален подход от първия ден. Офертата беше точна и поддържаха обекта чист всеки ден. Новата баня изглежда страхотно.",
                location: "София, Младост"
              },
              {
                name: "Елена Попова",
                project: "Кухня и подове",
                text: "Имахме нужда от бърз ремонт преди нанасяне. Работиха ефективно и се справиха с неочаквани проблеми без стрес. Страхотна комуникация.",
                location: "София, Център"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-secondary/30 p-8 rounded-2xl relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-border">
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">ЧЗВ</span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Често задавани въпроси</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">Всичко, което трябва да знаете за нашия ремонтен процес, ценообразуване и гаранции.</p>
              <Button asChild className="bg-white text-accent hover:bg-gray-200 font-bold uppercase tracking-wider">
                <a href="#quote">Задайте въпрос</a>
              </Button>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-2">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "Какви услуги предлагате?", a: "Предлагаме пълен набор ремонтни услуги, включително събаряне, ВиК, електро, гипсокартон, бояджийство, облицовка и подови настилки. Специализираме се в цялостни ремонти на апартаменти до ключ." },
                  { q: "Как да получа оферта?", a: "Просто попълнете формата за контакт или ни се обадете. Ще насрочим оглед на място, за да оценим работата и да предоставим детайлна оферта обикновено до 48 часа." },
                  { q: "Предоставяте ли гаранция?", a: "Да, предоставяме писмена гаранция за всички извършени дейности. Продължителността зависи от вида работа — обикновено от 2 до 5 години." },
                  { q: "Може ли да се правят промени по време на ремонта?", a: "Да, промените са възможни. Ще обсъдим всички последици върху графика и бюджета преди да продължим. Вярваме в гъвкавостта, за да получите точно това, което искате." }
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
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Свържете се с нас</span>
                <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">Започнете проекта си днес</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Готови ли сте да преобразите дома си? Свържете се с нас за безплатна консултация и оферта. 
                  Екипът ни е готов да отговори на всички ваши въпроси и да помогне при планирането на перфектния ремонт.
                  Моля, включете местоположението на обекта и кратко описание на необходимата работа.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Телефон</h4>
                    <p className="text-muted-foreground mb-1">Пон–Пет от 9:00 до 18:00.</p>
                    <a href="tel:+359897744774" className="text-lg font-bold hover:text-primary transition-colors">+359 89 7744774</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Офис</h4>
                    <p className="text-muted-foreground mb-1">Елате да се запознаем в офиса ни.</p>
                    <p className="font-medium">Бизнес Парк София, Сграда 12, София 1766</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">Оглед на място</h4>
                    <p className="text-muted-foreground">
                      Предлагаме безплатни консултации на място за точна оценка на нуждите по вашия проект.
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

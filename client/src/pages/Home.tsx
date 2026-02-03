import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroSlider } from "@/components/HeroSlider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Ruler, CalendarClock, PhoneCall, Hammer, PaintBucket, Wrench, Bath, Plug, Quote, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - Premium Architectural Style with Image Slider */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image Slider */}
        <HeroSlider interval={6000} />

        <div className="container relative z-10 px-4 py-20 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-block text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-6">
              Преобразете пространството си
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-8 text-shadow-lg">
              Професионални
              <br />
              <span className="text-primary">ремонти</span> с реални срокове.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              Цялостни ремонти на апартаменти, бани, кухни, гипсокартон, плочки, бояджийство, ел. и ВиК услуги.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" asChild className="bg-primary text-primary-foreground font-bold uppercase tracking-wider h-14 px-10 text-base rounded-md">
                <a href="#quote">Поискай оферта</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:text-white uppercase tracking-wider h-14 px-10 text-base font-semibold rounded-md backdrop-blur-sm">
                <a href="#services">Нашите услуги</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, text: "Писмена гаранция" },
                { icon: Hammer, text: "Чиста работа" },
                { icon: CalendarClock, text: "Фиксирани срокове" },
                { icon: Check, text: "Професионален екип" }
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                    <badge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-white text-sm font-medium leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Light Section */}
      <section id="about" className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Защо да изберете GDSC</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
                  Изграждаме доверие чрез прозрачност и качество.
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  "Високо качество с премиум материали",
                  "Ясна ценова структура — без скрити такси",
                  "Чисто изпълнение и управление на отпадъците",
                  "Силна комуникация през целия проект"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                    <div className="mt-1 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-[#334155] font-medium text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-5 p-6 bg-[#0F172A] rounded-xl text-white max-w-md">
                  <PhoneCall className="w-12 h-12 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-slate-400">Имате въпроси?</p>
                    <p className="text-2xl font-bold">+359 89 7744774</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <FeatureCard 
                title="Контрол на качеството" 
                description="Стриктен надзор на всеки етап. Предоставяме писмена гаранция за всички дейности."
                icon={ShieldCheck}
                variant="primary"
              />
              <FeatureCard 
                title="Прозрачно ценообразуване" 
                description="Детайлни сметки с ясни разбивки. Ще знаете точно къде отива всяка стотинка."
                icon={Ruler}
              />
              <FeatureCard 
                title="Стриктни срокове" 
                description="Уважаваме времето ви. Управлението на проекта гарантира навременно завършване."
                icon={CalendarClock}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Section */}
      <section id="services" className="py-24 md:py-32 bg-[#0F172A]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Какво правим</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Пълен спектър ремонтни услуги</h2>
            <p className="text-slate-400 text-lg">От цялостни решения до ключ до специфични ремонти — справяме се с всеки аспект от обновяването на дома ви.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Цялостен ремонт" 
              description="Пълна трансформация на апартамента от събаряне до финални щрихи."
              icon={Hammer}
              image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
              href="/services/plaster-putty"
            />
            <ServiceCard 
              title="Баня" 
              description="Модерен дизайн на бани, хидроизолация, облицовка и монтаж на санитария."
              icon={Bath}
              image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
              href="/services/tiles"
            />
            <ServiceCard 
              title="Кухня" 
              description="Функционално и стилно преустройство на кухни. Монтаж на шкафове и интеграция на уреди."
              icon={Wrench}
              image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
              href="/services/tiles"
            />
            <ServiceCard 
              title="Бояджийство" 
              description="Безупречна обработка на стени, декоративни мазилки и професионално боядисване."
              icon={PaintBucket}
              image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
              href="/services/painting"
            />
            <ServiceCard 
              title="Плочки и подове" 
              description="Експертен монтаж на керамика, порцелан, ламинат и дърво с перфектно нивелиране."
              icon={Hammer}
              href="/services/flooring"
            />
            <ServiceCard 
              title="Гипсокартон" 
              description="Окачени тавани, преградни стени и конструкции от гипсокартон."
              icon={Ruler}
              href="/services/drywall"
            />
            <ServiceCard 
              title="Електро" 
              description="Цялостно окабеляване, осветителен дизайн и интелигентни инсталации."
              icon={Plug}
              href="/services/electrical"
            />
            <ServiceCard 
              title="ВиК" 
              description="Подмяна на тръби, канализация и монтаж на арматура с гарантирана защита."
              icon={Wrench}
              href="/services/plumbing"
            />
          </div>
        </div>
      </section>

      {/* Testimonials - Light Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-[#F8FAFC] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Отзиви</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground">Какво казват клиентите</h2>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-lg w-12 h-12 p-0 border-[#E2E8F0] hover:border-primary hover:text-primary transition-colors">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </Button>
              <Button variant="outline" className="rounded-lg w-12 h-12 p-0 border-[#E2E8F0] hover:border-primary hover:text-primary transition-colors">
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
              <div key={idx} className="bg-white p-8 rounded-xl relative group hover:shadow-xl transition-all duration-300 border border-[#E2E8F0]">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6 group-hover:text-primary/40 transition-colors" />
                <div className="flex items-center gap-1 mb-5">
                  {[1,2,3,4,5].map(star => (
                    <div key={star} className="w-5 h-5 bg-primary text-primary-foreground flex items-center justify-center text-xs rounded">★</div>
                  ))}
                </div>
                <p className="text-[#64748B] mb-6 italic leading-relaxed text-lg">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-primary-foreground text-lg">{review.name}</h4>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">{review.project}</p>
                  <p className="text-[#94A3B8] text-sm">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Dark Section */}
      <section id="faq" className="py-24 md:py-32 bg-[#0F172A] relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">ЧЗВ</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8">Често задавани въпроси</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md">Всичко, което трябва да знаете за нашия ремонтен процес, ценообразуване и гаранции.</p>
              <Button asChild className="bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-md h-12 px-8">
                <a href="#quote">Задайте въпрос</a>
              </Button>
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 p-4">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "Какви услуги предлагате?", a: "Предлагаме пълен набор ремонтни услуги, включително събаряне, ВиК, електро, гипсокартон, бояджийство, облицовка и подови настилки. Специализираме се в цялостни ремонти на апартаменти до ключ." },
                  { q: "Как да получа оферта?", a: "Просто попълнете формата за контакт или ни се обадете. Ще насрочим оглед на място, за да оценим работата и да предоставим детайлна оферта обикновено до 48 часа." },
                  { q: "Предоставяте ли гаранция?", a: "Да, предоставяме писмена гаранция за всички извършени дейности. Продължителността зависи от вида работа — обикновено от 2 до 5 години." },
                  { q: "Може ли да се правят промени по време на ремонта?", a: "Да, промените са възможни. Ще обсъдим всички последици върху графика и бюджета преди да продължим. Вярваме в гъвкавостта, за да получите точно това, което искате." }
                ].map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10 last:border-0">
                    <AccordionTrigger className="text-white hover:text-primary hover:no-underline font-semibold text-left px-4 py-5 text-lg">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 px-4 pb-5 text-base leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Light Section */}
      <section id="quote" className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-10">
              <div>
                <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Свържете се с нас</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">Започнете проекта си днес</h2>
                <p className="text-[#64748B] text-lg leading-relaxed">
                  Готови ли сте да преобразите дома си? Свържете се с нас за безплатна консултация и оферта. 
                  Екипът ни е готов да отговори на всички ваши въпроси.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-[#E2E8F0]">
                    <PhoneCall className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-foreground text-lg">Телефон</h4>
                    <p className="text-[#64748B] mb-1">Пон–Пет от 9:00 до 18:00</p>
                    <a href="tel:+359897744774" className="text-xl font-bold text-primary-foreground hover:text-primary transition-colors">+359 89 7744774</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-[#E2E8F0]">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-foreground text-lg">Офис</h4>
                    <p className="text-[#64748B] mb-1">Елате да се запознаем в офиса ни</p>
                    <p className="font-medium text-[#334155]">Бизнес Парк София, Сграда 12, София 1766</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-[#E2E8F0]">
                    <Hammer className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-foreground text-lg">Оглед на място</h4>
                    <p className="text-[#64748B]">
                      Предлагаме безплатни консултации на място за точна оценка на нуждите по вашия проект.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

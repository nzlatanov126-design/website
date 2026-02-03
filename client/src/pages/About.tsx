import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Ruler, CalendarClock, Users, Award, Target, Heart, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-[#0F172A] overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">За нас</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Изграждаме доверие чрез качество</h1>
              <p className="text-xl text-slate-400 mb-8">С над 15 години опит в ремонтните услуги, GDSC е вашият надежден партньор за всякакви проекти за обновяване на дома.</p>
              <Button size="lg" asChild className="bg-primary text-primary-foreground font-bold uppercase tracking-wider h-14 px-8 rounded-md">
                <Link href="/quote">Поискай оферта</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 md:py-28 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Нашата история</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-8">От малък екип до водеща компания</h2>
                <p className="text-[#64748B] mb-6 leading-relaxed text-lg">
                  GDSC започна като малък семеен бизнес през 2009 година с ясна визия - да предоставяме ремонтни услуги с най-високо качество и пълна прозрачност към клиентите.
                </p>
                <p className="text-[#64748B] mb-6 leading-relaxed text-lg">
                  Днес сме екип от над 50 специалисти, които споделят общи ценности - професионализъм, честност и внимание към детайла.
                </p>
                <p className="text-[#64748B] leading-relaxed text-lg">
                  Нашият успех се измерва не само в завършени проекти, но и в дългосрочните отношения с клиентите ни.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Завършени проекта", icon: Award },
                  { value: "15+", label: "Години опит", icon: CalendarClock },
                  { value: "50+", label: "Експерти в екипа", icon: Users },
                  { value: "98%", label: "Доволни клиенти", icon: Heart }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl text-center border border-[#E2E8F0] hover:shadow-lg transition-shadow">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <p className="text-4xl font-extrabold text-primary-foreground mb-2">{stat.value}</p>
                    <p className="text-sm text-[#64748B]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-[#0F172A]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Нашите ценности</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Принципите, които ни водят</h2>
              <p className="text-slate-400 text-lg">Всяко решение, което вземаме, е водено от нашите основни ценности.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: "Качество", desc: "Използваме само висококачествени материали и прилагаме стриктен контрол на всеки етап." },
                { icon: Ruler, title: "Прозрачност", desc: "Ясни оферти без скрити такси. Знаете точно какво получавате и колко струва." },
                { icon: CalendarClock, title: "Надеждност", desc: "Спазваме договорените срокове. Вашето време е ценно за нас." },
                { icon: Target, title: "Прецизност", desc: "Внимание към всеки детайл за безупречен краен резултат." }
              ].map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:bg-white/10 transition-colors"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#0F172A] p-10 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-8">Защо клиентите ни избират?</h3>
                  <ul className="space-y-5">
                    {[
                      "Безплатна консултация и оглед на място",
                      "Детайлна писмена оферта в рамките на 48 часа",
                      "Фиксирани цени без изненади",
                      "Писмена гаранция за всички дейности",
                      "Ежедневно почистване на обекта",
                      "Комуникация и отчети през целия проект"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Нашият подход</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-8">Партньорство, а не просто услуга</h2>
                <p className="text-[#64748B] mb-6 leading-relaxed text-lg">
                  Ние не просто изпълняваме ремонти - ние ставаме ваш партньор в целия процес. От първоначалната консултация до финалното предаване.
                </p>
                <p className="text-[#64748B] mb-10 leading-relaxed text-lg">
                  Вярваме, че добрата комуникация е ключът към успешен проект. Затова поддържаме постоянна връзка с клиентите си.
                </p>
                <Button asChild className="bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-md h-12 px-8">
                  <Link href="/quote" className="flex items-center gap-2">Свържете се с нас <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-[#0F172A]">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Готови ли сте да започнем?</h2>
            <p className="text-slate-400 text-lg mb-10">Свържете се с нас днес за безплатна консултация. Нека обсъдим вашия проект.</p>
            <Button size="lg" asChild className="bg-primary text-primary-foreground font-bold uppercase tracking-wider h-14 px-10 rounded-md">
              <Link href="/quote" className="flex items-center gap-2">Поискай оферта <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

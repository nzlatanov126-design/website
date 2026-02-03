import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Painting() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-10 md:py-20 bg-[#0F172A] text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Професионално бояджийство</h1>
              <p className="text-xl text-slate-400 mb-8">Безупречна обработка на стени и професионално боядисване за свеж, модерен вид на вашия дом или офис.</p>
              <Button size="lg" asChild className="rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider h-14 px-8">
                <a href="/#quote">Поискай оферта</a>
              </Button>
            </motion.div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold font-display mb-8">Какво е включено</h2>
                <ul className="space-y-4">
                  {[
                    "Подготовка и почистване на повърхностите",
                    "Запълване на пукнатини и дупки",
                    "Грундиране с качествен грунд",
                    "Боядисване с премиум боя (2+ слоя)",
                    "Защита на мебелите и почистване"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                <h2 className="text-3xl font-bold font-display mb-8">Нашият процес</h2>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Консултация", desc: "Обсъждаме цветове, покрития и специфични изисквания." },
                    { step: "02", title: "Подготовка", desc: "Внимателно маскиране и изглаждане на повърхностите." },
                    { step: "03", title: "Изпълнение", desc: "Професионално боядисване с прецизност и внимание към детайла." }
                  ].map((item, i) => (
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

        <section className="py-20 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold font-display mb-6">Ориентировъчни цени</h2>
            <p className="text-muted-foreground mb-8">
              Нашите цени са прозрачни и конкурентни. Крайната оферта зависи от състоянието на повърхностите и избора на боя, което изисква оглед на място.
            </p>
            <div className="p-6 bg-white border border-border rounded-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Цени от</p>
              <p className="text-4xl font-black text-foreground font-display">15 лв. / м²</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

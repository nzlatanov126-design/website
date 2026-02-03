import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function PlasterPutty() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-10 md:py-20 bg-[#0F172A] text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Мазилка и шпакловка</h1>
              <p className="text-xl text-slate-400 mb-8">Експертно изглаждане и мазилки за идеално равна повърхност, готова за всякакво покритие.</p>
              <Button size="lg" asChild className="rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider h-14 px-8">
                <a href="/quote">Поискай оферта</a>
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
                  {["Премахване на стара мазилка", "Дълбоко грундиране за по-добра адхезия", "Многослойно мазилкане", "Финишна шпакловка", "Машинно шлайфане за гладка повърхност"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                <h2 className="text-3xl font-bold font-display mb-8">Процес</h2>
                <div className="space-y-6">
                  {[{ step: "01", title: "Инспекция", desc: "Проверка на влажност и цялост на стените." }, { step: "02", title: "Мазилкане", desc: "Полагане на структурни слоеве за нивелиране." }, { step: "03", title: "Шпакловане", desc: "Финишно изглаждане за огледален резултат." }].map((item, i) => (
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

      </main>
      <Footer />
    </div>
  );
}

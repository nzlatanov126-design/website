import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 съвета за успешен ремонт на кухня",
    excerpt: "Научете как да планирате и изпълните ремонта на кухнята си без стрес. От избора на материали до организацията на пространството.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
    date: "15 януари 2026",
    readTime: "5 мин",
    author: "Петър Иванов",
    category: "Кухни"
  },
  {
    id: 2,
    title: "Как да изберем правилните плочки за банята",
    excerpt: "Пълно ръководство за избор на плочки - от материал и размер до цвят и текстура. Всичко, което трябва да знаете.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    date: "10 януари 2026",
    readTime: "7 мин",
    author: "Мария Георгиева",
    category: "Бани"
  },
  {
    id: 3,
    title: "Тенденции в интериорния дизайн за 2026",
    excerpt: "Открийте най-актуалните тенденции в интериорния дизайн тази година - от цветове до материали и стилове.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    date: "5 януари 2026",
    readTime: "6 мин",
    author: "Елена Димитрова",
    category: "Дизайн"
  },
  {
    id: 4,
    title: "Предимствата на LED осветлението в дома",
    excerpt: "Защо LED осветлението е най-добрият избор за вашия дом? Научете за енергийната ефективност и дизайнерските възможности.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop",
    date: "28 декември 2025",
    readTime: "4 мин",
    author: "Георги Стоянов",
    category: "Електро"
  },
  {
    id: 5,
    title: "Гипсокартон: Всичко, което трябва да знаете",
    excerpt: "От преградни стени до окачени тавани - пълен преглед на възможностите на гипсокартона в съвременния ремонт.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    date: "20 декември 2025",
    readTime: "8 мин",
    author: "Николай Петров",
    category: "Гипсокартон"
  },
  {
    id: 6,
    title: "Как да подготвим дома си за ремонт",
    excerpt: "Практични съвети как да се подготвите за предстоящ ремонт - от опаковане на вещи до временно настаняване.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop",
    date: "15 декември 2025",
    readTime: "5 мин",
    author: "Анна Николова",
    category: "Съвети"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-10 md:py-20 bg-accent text-accent-foreground overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Блог</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-white">Полезни съвети и идеи</h1>
              <p className="text-xl text-gray-200 mb-8">Открийте вдъхновяващи статии, практически съвети и последните тенденции в света на ремонтите и интериорния дизайн.</p>
              <Button size="lg" asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider h-14 px-8">
                <Link href="/quote">Поискай оферта</Link>
              </Button>
            </motion.div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-secondary/30 rounded-2xl overflow-hidden border border-border">
              <div className="aspect-video lg:aspect-auto lg:h-full">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2"><User className="w-4 h-4" /> {blogPosts[0].author}</span>
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {blogPosts[0].date}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {blogPosts[0].readTime}</span>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider rounded-full">
                  <a href="#" className="flex items-center gap-2">Прочети повече <ArrowRight className="w-4 h-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-display">Последни публикации</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, idx) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold font-display mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">Искате да получавате нови статии?</h2>
            <p className="text-gray-200 text-lg mb-8">Абонирайте се за нашия бюлетин и получавайте най-новите съвети и идеи директно във вашата поща.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Вашият имейл адрес"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider rounded-full px-8">
                Абонирай се
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, Send, Loader2, CheckCircle } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { Review } from "@shared/schema";

const serviceOptions = [
  { value: "turnkey", label: "Цялостен ремонт" },
  { value: "bathroom", label: "Ремонт на баня" },
  { value: "painting", label: "Боядисване и шпакловка" },
  { value: "flooring", label: "Подови настилки / плочки" },
  { value: "drywall", label: "Гипсокартон / окачени тавани" },
  { value: "finishing", label: "Довършителни работи" },
  { value: "commercial", label: "Търговски обекти" },
];

function StarRating({ rating, onRatingChange, interactive = false }: { 
  rating: number; 
  onRatingChange?: (r: number) => void;
  interactive?: boolean;
}) {
  const [hovered, setHovered] = useState(0);
  
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          onClick={() => interactive && onRatingChange?.(star)}
          data-testid={`star-${star}`}
        >
          <Star 
            className={`w-6 h-6 transition-colors ${
              (hovered || rating) >= star 
                ? 'fill-primary text-primary' 
                : 'fill-muted text-muted-foreground'
            }`} 
          />
        </button>
      ))}
    </div>
  );
}

function ReviewSubmissionForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: { name: string; rating: number; comment: string; service?: string }) => {
      const response = await apiRequest("POST", "/api/reviews", data);
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      setName("");
      setRating(0);
      setComment("");
      setService("");
    },
  });

  if (submitted) {
    return (
      <Card className="p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Благодарим за отзива!</h3>
        <p className="text-muted-foreground mb-6">
          Вашият отзив беше изпратен успешно и ще бъде публикуван след преглед.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitted(false)}
          data-testid="button-write-another"
        >
          Напиши нов отзив
        </Button>
      </Card>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || rating === 0 || !comment.trim()) return;
    
    mutation.mutate({
      name: name.trim(),
      rating,
      comment: comment.trim(),
      service: service || undefined,
    });
  };

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold mb-6">Оставете отзив</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Вашето име *</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван Иванов"
            required
            minLength={2}
            data-testid="input-name"
          />
        </div>

        <div className="space-y-2">
          <Label>Оценка *</Label>
          <StarRating rating={rating} onRatingChange={setRating} interactive />
          {rating === 0 && (
            <p className="text-sm text-muted-foreground">Моля, изберете оценка</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Услуга (по избор)</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger data-testid="select-service">
              <SelectValue placeholder="Изберете услуга" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment">Вашият отзив *</Label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Разкажете ни за вашия опит с GDCS..."
            rows={4}
            required
            minLength={10}
            data-testid="input-comment"
          />
        </div>

        {mutation.isError && (
          <p className="text-destructive text-sm">
            Грешка при изпращане. Моля, опитайте отново.
          </p>
        )}

        <Button 
          type="submit" 
          size="lg"
          disabled={mutation.isPending || rating === 0}
          className="w-full"
          data-testid="button-submit-review"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Изпращане...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Изпрати отзив
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}

function formatDate(date: Date | string | null) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("bg-BG", { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  });
}

export default function Testimonials() {
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  const serviceLabels: Record<string, string> = {
    turnkey: "Цялостен ремонт",
    bathroom: "Ремонт на баня",
    painting: "Боядисване и шпакловка",
    flooring: "Подови настилки / плочки",
    drywall: "Гипсокартон / окачени тавани",
    finishing: "Довършителни работи",
    commercial: "Търговски обекти",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-10 md:py-20 bg-[#0F172A] text-white overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Отзиви</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-white">Какво казват нашите клиенти</h1>
              <p className="text-xl text-slate-400 mb-8">Доверието на нашите клиенти е най-голямата ни награда. Прочетете техните истории и се убедете сами в качеството на нашата работа.</p>
              <Button size="lg" asChild className="rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider h-14 px-8">
                <Link href="/quote">Поискай оферта</Link>
              </Button>
            </motion.div>
          </div>
          <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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

        {/* Reviews Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Reviews List */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-8">Клиентски отзиви</h2>
                
                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                ) : reviews && reviews.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((review, idx) => (
                      <motion.div 
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-2xl relative group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-border"
                        data-testid={`review-card-${review.id}`}
                      >
                        <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4 group-hover:text-primary transition-colors" />
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic leading-relaxed text-sm">"{review.comment}"</p>
                        <div>
                          <h4 className="font-bold text-foreground">{review.name}</h4>
                          {review.service && (
                            <p className="text-primary text-xs font-semibold uppercase tracking-wide">
                              {serviceLabels[review.service] || review.service}
                            </p>
                          )}
                          <p className="text-muted-foreground text-xs mt-1">
                            {formatDate(review.createdAt)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <Card className="p-12 text-center">
                    <Quote className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Все още няма публикувани отзиви. Бъдете първият, който ще сподели своя опит!
                    </p>
                  </Card>
                )}
              </div>

              {/* Submission Form */}
              <div>
                <ReviewSubmissionForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">Готови ли сте да се присъедините към доволните ни клиенти?</h2>
            <p className="text-slate-400 text-lg mb-8">Свържете се с нас днес за безплатна консултация и оферта. Нека преобразим вашия дом заедно.</p>
            <Button size="lg" asChild className="rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-wider h-14 px-8">
              <Link href="/quote" className="flex items-center gap-2">Поискай оферта <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

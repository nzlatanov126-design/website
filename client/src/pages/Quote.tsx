import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Loader2, Send, CheckCircle2, Hammer } from "lucide-react";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Моля, въведете име и фамилия"),
  email: z.string().email("Моля, въведете валиден имейл адрес"),
  location: z.string().min(2, "Моля, въведете местоположение на обекта"),
  service: z.string().min(1, "Моля, изберете услуга"),
  message: z.string().min(10, "Моля, опишете вашия проект (минимум 10 символа)"),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const services = [
  { value: "turnkey", label: "Цялостен ремонт" },
  { value: "bathroom", label: "Ремонт на баня" },
  { value: "painting", label: "Боядисване и шпакловка" },
  { value: "flooring", label: "Подови настилки / плочки" },
  { value: "drywall", label: "Гипсокартон / окачени тавани" },
  { value: "finishing", label: "Довършителни работи" },
  { value: "commercial", label: "Търговски обекти" },
  { value: "other", label: "Друго" },
];

export default function Quote() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(data: QuoteFormData) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send quote request");
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Quote form error:", error);
      alert("Грешка при изпращане. Моля, опитайте отново или се обадете на +359 89 7744774");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-[#0F172A] overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Безплатна оферта</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Започнете проекта си днес</h1>
              <p className="text-xl text-slate-400">Попълнете формата и ще получите детайлна оферта в рамките на 48 часа.</p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Info */}
              <div className="hidden lg:block space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">Свържете се с нас</h2>
                  <p className="text-[#64748B] text-lg leading-relaxed">
                    Готови ли сте да преобразите вашия дом? Екипът ни е готов да отговори на всички ваши въпроси.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-[#E2E8F0]">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-foreground text-lg">Телефон</h4>
                      <p className="text-[#64748B] mb-1">Пон-Пет от 9:00 до 18:00</p>
                      <a href="tel:+359897744774" className="text-xl font-bold text-primary-foreground hover:text-primary transition-colors">+359 89 7744774</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-[#E2E8F0]">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-foreground text-lg">Офис</h4>
                      <p className="text-[#64748B] mb-1">Елате да се запознаем</p>
                      <p className="font-medium text-[#334155]">Бизнес Парк София, Сграда 12, София 1766</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-[#E2E8F0]">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-foreground text-lg">Работно време</h4>
                      <p className="text-[#64748B] mb-1">Понеделник - Петък</p>
                      <p className="font-medium text-[#334155]">09:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-[#E2E8F0]">
                      <Hammer className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-foreground text-lg">Безплатен оглед</h4>
                      <p className="text-[#64748B]">
                        Предлагаме безплатни консултации на място за точна оценка.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="order-first lg:order-last">
                <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-xl p-6 md:p-8">
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-foreground mb-4">Заявката е изпратена!</h3>
                      <p className="text-[#64748B] mb-6">
                        Благодарим ви за интереса! Ще се свържем с вас в рамките на 48 часа.
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false);
                          form.reset();
                        }}
                        variant="outline"
                        className="rounded-md border-[#E2E8F0]"
                      >
                        Изпрати нова заявка
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold text-primary-foreground mb-6">Получете безплатна оферта</h3>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-[#64748B]">
                                  Име и фамилия <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Иван Иванов" 
                                    className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-primary rounded-md h-12" 
                                    data-testid="input-name"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-medium text-[#64748B]">
                                    Имейл адрес <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="ivan@example.com" 
                                      type="email" 
                                      className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-primary rounded-md h-12" 
                                      data-testid="input-email"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="location"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-medium text-[#64748B]">
                                    Местоположение <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="напр. София, Център" 
                                      className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-primary rounded-md h-12" 
                                      data-testid="input-location"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-[#64748B]">
                                  Услуга <span className="text-red-500">*</span>
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger 
                                      className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-primary rounded-md h-12"
                                      data-testid="select-service"
                                    >
                                      <SelectValue placeholder="Изберете услуга" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {services.map((service) => (
                                      <SelectItem 
                                        key={service.value} 
                                        value={service.value}
                                        data-testid={`option-${service.value}`}
                                      >
                                        {service.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-[#64748B]">
                                  Детайли за проекта <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Опишете какво бихте искали да направим..." 
                                    className="min-h-[120px] bg-[#F8FAFC] border-[#E2E8F0] focus:border-primary rounded-md resize-none" 
                                    data-testid="textarea-message"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button 
                            type="submit" 
                            className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-wider h-12 rounded-md"
                            disabled={isSubmitting}
                            data-testid="button-submit"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" /> Изпращане...
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                Изпрати заявка <Send className="w-4 h-4" />
                              </span>
                            )}
                          </Button>
                          
                          <p className="text-xs text-center text-[#94A3B8] mt-4">
                            С изпращането се съгласявате с нашата <a href="#" className="underline hover:text-primary">политика за поверителност</a>.
                          </p>
                        </form>
                      </Form>
                    </>
                  )}
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

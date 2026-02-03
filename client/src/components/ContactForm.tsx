import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertInquiry } from "@shared/routes";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const mutation = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(api.inquiries.create.input),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-primary-foreground mb-6">Получете безплатна оферта</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#64748B]">Име и фамилия</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Иван Иванов" 
                    className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-primary focus:ring-primary/20 rounded-md h-12" 
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
                  <FormLabel className="text-sm font-medium text-[#64748B]">Имейл адрес</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="ivan@example.com" 
                      type="email" 
                      className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-primary focus:ring-primary/20 rounded-md h-12" 
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
                  <FormLabel className="text-sm font-medium text-[#64748B]">Местоположение</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="напр. София, Център" 
                      value={field.value || ""} 
                      onChange={field.onChange} 
                      className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-primary focus:ring-primary/20 rounded-md h-12" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#64748B]">Детайли за проекта</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Разкажете ни за вашите ремонтни планове..." 
                    className="min-h-[120px] bg-[#F8FAFC] border-[#E2E8F0] focus:border-primary focus:ring-primary/20 rounded-md resize-none" 
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
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
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
            С изпращането на тази форма се съгласявате с нашата <a href="#" className="underline hover:text-primary">политика за поверителност</a>.
          </p>
        </form>
      </Form>
    </div>
  );
}

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
    <div className="bg-card border border-border rounded-lg shadow-xl shadow-black/5 p-8 relative overflow-hidden">
      {/* Decorative accent top bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60" />

      <h3 className="text-2xl font-bold font-display mb-6">Get Your Free Quote</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="bg-secondary/50 border-transparent focus:bg-background transition-all" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" type="email" className="bg-secondary/50 border-transparent focus:bg-background transition-all" {...field} />
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
                  <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Property Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Sofia, Center" value={field.value || ""} onChange={field.onChange} className="bg-secondary/50 border-transparent focus:bg-background transition-all" />
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
                <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Project Details</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your renovation plans..." 
                    className="min-h-[120px] bg-secondary/50 border-transparent focus:bg-background transition-all resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:translate-y-[-2px] transition-all"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Request <Send className="w-4 h-4" />
              </span>
            )}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            By submitting this form, you agree to our <a href="#" className="underline hover:text-primary">privacy policy</a>.
          </p>
        </form>
      </Form>
    </div>
  );
}

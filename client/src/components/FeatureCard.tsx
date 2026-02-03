import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: "default" | "primary";
}

export function FeatureCard({ title, description, icon: Icon, variant = "default" }: FeatureCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-xl border transition-all duration-300 flex items-start gap-5 group",
      variant === "primary" 
        ? "bg-primary text-primary-foreground border-transparent" 
        : "bg-white border-[#E2E8F0] hover:border-primary/30 hover:shadow-lg"
    )}>
      <div className={cn(
        "shrink-0 w-14 h-14 rounded-lg flex items-center justify-center transition-colors",
        variant === "primary"
          ? "bg-[#0F172A]/20 text-primary-foreground"
          : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
      )}>
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h4 className={cn(
          "font-bold text-lg mb-2",
          variant === "primary" ? "text-primary-foreground" : "text-primary-foreground"
        )}>{title}</h4>
        <p className={cn(
          "text-sm leading-relaxed",
          variant === "primary" ? "text-primary-foreground/80" : "text-[#64748B]"
        )}>{description}</p>
      </div>
    </div>
  );
}

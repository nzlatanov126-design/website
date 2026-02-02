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
      "p-6 rounded-sm border transition-all duration-300 flex items-start gap-4 group",
      variant === "primary" 
        ? "bg-primary text-primary-foreground border-transparent shadow-lg" 
        : "bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-black/5"
    )}>
      <div className={cn(
        "shrink-0 w-12 h-12 rounded-sm flex items-center justify-center transition-colors",
        variant === "primary"
          ? "bg-white/20 text-white"
          : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className={cn(
          "font-bold text-lg mb-2 font-display",
          variant === "primary" ? "text-white" : "text-foreground"
        )}>{title}</h4>
        <p className={cn(
          "text-sm leading-relaxed",
          variant === "primary" ? "text-white/90" : "text-muted-foreground"
        )}>{description}</p>
      </div>
    </div>
  );
}

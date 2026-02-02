import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export function ServiceCard({ title, description, icon: Icon, image }: ServiceCardProps) {
  return (
    <div className="group bg-card border border-border/50 rounded-sm overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-secondary">
        {/* Descriptive alt text for screen readers, image is decorative/background */}
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Icon className="w-16 h-16 text-muted-foreground/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Floating Icon Badge */}
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-sm flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <button className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2 group/btn">
            Learn More
            <ArrowRight className="w-4 h-4 text-primary transform group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

import { Link } from "wouter";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  href?: string;
}

export function ServiceCard({ title, description, icon: Icon, image, href }: ServiceCardProps) {
  const content = (
    <div className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col h-full cursor-pointer">
      <div className="relative h-48 overflow-hidden bg-[#1E293B]">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
          />
        ) : (
          <div className="w-full h-full bg-[#1E293B] flex items-center justify-center">
            <Icon className="w-16 h-16 text-white/10" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-70" />
        
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <span className="text-sm font-semibold text-white/80 flex items-center gap-2 group-hover:text-primary transition-colors">
            Научете повече
            <ArrowRight className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} data-testid={`link-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {content}
      </Link>
    );
  }

  return content;
}

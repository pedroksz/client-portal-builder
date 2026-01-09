import { Zap, Smartphone, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Rapidez",
    description: "Acesso imediato às informações sem filas",
  },
  {
    icon: Smartphone,
    title: "Praticidade",
    description: "Apenas com seu celular e alguns cliques",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Canal seguro e verificado",
  },
];

const BenefitsCard = () => {
  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <h3 className="text-lg font-semibold text-primary mb-4 text-center">
        Por que usar nosso WhatsApp?
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          
          return (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center card-shadow card-hover border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-primary mb-1">
                {benefit.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenefitsCard;

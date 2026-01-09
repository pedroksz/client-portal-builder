import { CheckCircle, FileText, CircleDollarSign, Calendar, AlertCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: FileText,
    title: "2ª via de boleto",
    description: "Solicite a segunda via do seu boleto de pagamento de forma rápida e prática.",
    color: "text-primary",
  },
  {
    icon: CircleDollarSign,
    title: "Quitação de financiamento",
    description: "Obtenha informações sobre a quitação total do seu financiamento.",
    color: "text-accent",
  },
  {
    icon: Calendar,
    title: "Antecipação de parcelas",
    description: "Antecipe suas parcelas e economize nos juros do financiamento.",
    color: "text-primary",
  },
  {
    icon: AlertCircle,
    title: "Regularização de parcelas em atraso",
    description: "Regularize suas parcelas em atraso e evite problemas futuros.",
    color: "text-warning",
  },
];

const ServicesCard = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div 
      className="bg-card rounded-2xl p-6 card-shadow animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="flex items-center gap-3 mb-2">
        <CheckCircle className="w-5 h-5 text-accent" />
        <h3 className="text-lg font-semibold text-primary">
          Solicitações Disponíveis
        </h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Clique no serviço desejado para mais informações
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isExpanded = expandedIndex === index;
          
          return (
            <button
              key={index}
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all text-left card-hover"
            >
              <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 ${service.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="font-medium text-foreground block">
                  {service.title}
                </span>
                {isExpanded && (
                  <p className="text-sm text-muted-foreground mt-2 animate-fade-in">
                    {service.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCard;

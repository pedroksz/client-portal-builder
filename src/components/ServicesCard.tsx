import { CheckCircle, FileText, CircleDollarSign, Calendar, AlertCircle, LucideIcon } from "lucide-react";
import { useState } from "react";
import ServiceModal from "./ServiceModal";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
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
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <div 
        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm mb-8 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="px-6">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="w-5 h-5 text-accent" />
            <h3 
              className="font-semibold"
              style={{ color: 'rgb(36, 55, 130)' }}
            >
              Solicitações Disponíveis
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            Clique no serviço desejado para mais informações
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <button
                key={index}
                onClick={() => setSelectedService(service)}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-primary/30 hover:bg-gray-50 transition-all text-left"
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgb(239, 246, 255)' }}
                >
                  <Icon 
                    className="w-5 h-5"
                    style={{ color: 'rgb(36, 55, 130)' }}
                  />
                </div>
                <div className="flex-1">
                  <span 
                    className="font-medium"
                    style={{ color: 'rgb(36, 55, 130)' }}
                  >
                    {service.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <ServiceModal 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </>
  );
};

export default ServicesCard;

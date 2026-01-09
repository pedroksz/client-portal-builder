import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, openWhatsApp } from "@/config/company";

const WhatsAppCard = () => {
  return (
    <div 
      className="bg-success-light border-2 border-accent rounded-xl p-8 text-center shadow-sm animate-fade-in"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
        <MessageCircle className="w-8 h-8 text-accent-foreground" />
      </div>
      
      <h3 className="text-xl font-semibold text-accent mb-2">
        Atendimento via WhatsApp
      </h3>
      <p className="text-muted-foreground mb-6">
        Serviço rápido, prático e seguro das {company.serviceHours}
      </p>
      
      <a 
        href={`tel:${company.phoneLink}`}
        className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
      >
        <Phone className="w-6 h-6" />
        {company.phoneFormatted}
      </a>
      
      <p className="text-sm text-muted-foreground mt-2 mb-6">
        Adicione aos seus contatos
      </p>
      
      <Button 
        onClick={openWhatsApp}
        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base rounded-lg cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        SOLICITAR VIA WHATSAPP
      </Button>
    </div>
  );
};

export default WhatsAppCard;

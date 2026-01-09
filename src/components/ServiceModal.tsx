import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, LucideIcon } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const whatsappNumber = "5511948637288";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  if (!service) return null;

  const Icon = service.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="flex flex-col items-center pt-8 pb-6 px-6">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <DialogHeader className="text-center mb-4">
            <DialogTitle className="text-xl font-bold text-primary">
              {service.title}
            </DialogTitle>
          </DialogHeader>

          {/* Warning Box */}
          <div className="w-full bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
            <h4 className="font-bold text-gray-800 mb-3">AVISO IMPORTANTE:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• O Portal do Cliente está em atualização e temporariamente fora do ar.</li>
              <li>• A {service.title} está sendo realizada exclusivamente pelo nosso WhatsApp Oficial: (11) 4863-7288.</li>
              <li>• Adicione aos contatos e envie uma mensagem ou clique no botão abaixo.</li>
            </ul>
          </div>

          {/* WhatsApp Button */}
          <Button 
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-base rounded-lg"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar via WhatsApp
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, LucideIcon } from "lucide-react";
import { company, openWhatsApp } from "@/config/company";

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
  if (!service) return null;

  const Icon = service.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-6">
        <DialogHeader className="flex flex-col gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center mb-4">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: 'rgb(36, 55, 130)' }}
            >
              <Icon className="w-10 h-10" />
            </div>
          </div>
          <DialogTitle 
            className="font-semibold text-center text-2xl"
            style={{ color: 'rgb(36, 55, 130)' }}
          >
            {service.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Alert Box */}
          <div 
            className="relative w-full rounded-lg px-4 py-3 text-sm bg-blue-50 border-2"
            style={{ borderColor: 'rgb(36, 55, 130)' }}
          >
            <div 
              className="font-bold text-base mb-3"
              style={{ color: 'rgb(36, 55, 130)' }}
            >
              AVISO IMPORTANTE:
            </div>
            <div className="text-gray-700 space-y-2 text-sm">
              <p><span className="inline-block mr-1">•</span>O Portal do Cliente está em atualização e temporariamente fora do ar.</p>
              <p><span className="inline-block mr-1">•</span>A {service.title} está sendo realizada exclusivamente pelo nosso WhatsApp Oficial: {company.phoneFormatted}.</p>
              <p><span className="inline-block mr-1">•</span>Adicione aos contatos e envie uma mensagem ou clique no botão abaixo.</p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="mt-6">
            <Button 
              onClick={openWhatsApp}
              className="w-full text-white px-8 py-3 text-lg hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: 'rgb(16, 185, 129)' }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar via WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;

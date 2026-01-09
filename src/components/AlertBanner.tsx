import { Clock } from "lucide-react";

const AlertBanner = () => {
  return (
    <div className="bg-warning-light border-l-4 border-warning rounded-lg p-4 card-shadow animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
          <Clock className="w-5 h-5 text-warning" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-primary">
            Portal do Cliente - Fora do Ar
          </h2>
          <p className="text-muted-foreground mt-1">
            O Portal do Cliente está passando por uma atualização e, por isso, está fora do ar.
          </p>
          <p className="text-warning-foreground font-medium mt-2">
            Enquanto isso, todas as solicitações devem ser realizadas exclusivamente pelo nosso WhatsApp:
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;

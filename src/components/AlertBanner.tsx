import { CircleAlert } from "lucide-react";
import { company } from "@/config/company";

const AlertBanner = () => {
  return (
    <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-6 shadow-sm animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <CircleAlert className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-primary font-bold text-lg mb-2">
            {company.alertTitle}
          </h3>
          <div className="text-gray-700 space-y-2 text-sm">
            <p>O Portal do Cliente está passando por uma atualização e, por isso, está fora do ar.</p>
            <p className="font-semibold text-primary">
              Enquanto isso, todas as solicitações devem ser realizadas exclusivamente pelo nosso WhatsApp:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;

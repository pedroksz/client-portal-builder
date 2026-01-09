import AlertBanner from "@/components/AlertBanner";
import WhatsAppCard from "@/components/WhatsAppCard";
import ServicesCard from "@/components/ServicesCard";
import StepsCard from "@/components/StepsCard";
import BenefitsCard from "@/components/BenefitsCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <AlertBanner />
        <WhatsAppCard />
        <ServicesCard />
        <StepsCard />
        <BenefitsCard />
        
        <footer className="text-center text-sm text-muted-foreground pt-8 pb-4">
          <p>© {new Date().getFullYear()} Portal do Cliente. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

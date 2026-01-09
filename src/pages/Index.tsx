import AlertBanner from "@/components/AlertBanner";
import WhatsAppCard from "@/components/WhatsAppCard";
import ServicesCard from "@/components/ServicesCard";
import StepsCard from "@/components/StepsCard";
import BenefitsCard from "@/components/BenefitsCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <AlertBanner />
          <WhatsAppCard />
          <ServicesCard />
          <StepsCard />
          <BenefitsCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

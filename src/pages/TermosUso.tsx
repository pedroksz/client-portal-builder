import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Termos de Uso</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              Ao acessar e utilizar o Portal do Cliente, você concorda com os seguintes termos e condições.
            </p>
            
            <h3 className="text-foreground font-semibold mt-6">1. Aceitação dos Termos</h3>
            <p>
              Ao utilizar nossos serviços, você concorda em cumprir estes termos de uso. 
              Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
            </p>

            <h3 className="text-foreground font-semibold mt-6">2. Uso do Serviço</h3>
            <p>
              Você concorda em usar o serviço apenas para fins legais e de acordo com 
              estes termos. Você não deve usar o serviço de forma que possa danificar, 
              desabilitar ou sobrecarregar nossos sistemas.
            </p>

            <h3 className="text-foreground font-semibold mt-6">3. Responsabilidades</h3>
            <p>
              Você é responsável por manter a confidencialidade de suas informações de conta 
              e por todas as atividades que ocorram sob sua conta.
            </p>

            <h3 className="text-foreground font-semibold mt-6">4. Modificações</h3>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              As modificações entrarão em vigor imediatamente após a publicação.
            </p>

            <h3 className="text-foreground font-semibold mt-6">5. Limitação de Responsabilidade</h3>
            <p>
              Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais, 
              especiais ou consequentes decorrentes do uso ou incapacidade de uso do serviço.
            </p>

            <h3 className="text-foreground font-semibold mt-6">6. Contato</h3>
            <p>
              Para esclarecimentos sobre estes termos, entre em contato conosco 
              através do WhatsApp disponível em nossa página principal.
            </p>
          </CardContent>
        </Card>

        <Footer />
      </div>
    </div>
  );
};

export default TermosUso;

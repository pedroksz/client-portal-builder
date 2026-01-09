import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
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
            <CardTitle className="text-2xl text-primary">Política de Privacidade</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              A sua privacidade é importante para nós. É política do Portal do Cliente respeitar a sua 
              privacidade em relação a qualquer informação sua que possamos coletar no site.
            </p>
            
            <h3 className="text-foreground font-semibold mt-6">1. Informações que coletamos</h3>
            <p>
              Coletamos informações pessoais que você nos fornece diretamente, como nome, 
              e-mail, telefone e dados de contato quando você utiliza nossos serviços.
            </p>

            <h3 className="text-foreground font-semibold mt-6">2. Como usamos suas informações</h3>
            <p>
              Utilizamos as informações coletadas para fornecer, manter e melhorar nossos serviços, 
              processar transações e enviar comunicações relacionadas.
            </p>

            <h3 className="text-foreground font-semibold mt-6">3. Compartilhamento de informações</h3>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto quando 
              necessário para cumprir obrigações legais ou proteger nossos direitos.
            </p>

            <h3 className="text-foreground font-semibold mt-6">4. Segurança</h3>
            <p>
              Implementamos medidas de segurança adequadas para proteger suas informações 
              pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h3 className="text-foreground font-semibold mt-6">5. Contato</h3>
            <p>
              Se você tiver dúvidas sobre nossa política de privacidade, entre em contato 
              conosco através do WhatsApp disponível em nossa página principal.
            </p>
          </CardContent>
        </Card>

        <Footer />
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;

import { ArrowLeft, Building2, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const SobreNos = () => {
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
            <CardTitle className="text-2xl text-primary">Sobre Nós</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              O Portal do Cliente é uma plataforma dedicada a oferecer soluções práticas 
              e eficientes para nossos clientes, facilitando o acesso a serviços e informações 
              de forma rápida e segura.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                <Building2 className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Nossa Empresa</h3>
                <p className="text-sm text-muted-foreground">
                  Comprometidos com a excelência no atendimento ao cliente
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                <Users className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Nossa Equipe</h3>
                <p className="text-sm text-muted-foreground">
                  Profissionais qualificados prontos para ajudar você
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                <Target className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Nossa Missão</h3>
                <p className="text-sm text-muted-foreground">
                  Facilitar a vida dos nossos clientes com soluções inovadoras
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-semibold text-foreground">Nossos Valores</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Transparência em todas as nossas ações</li>
                <li>Compromisso com a satisfação do cliente</li>
                <li>Inovação constante em nossos serviços</li>
                <li>Respeito e ética nos relacionamentos</li>
                <li>Agilidade e eficiência no atendimento</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Footer />
      </div>
    </div>
  );
};

export default SobreNos;

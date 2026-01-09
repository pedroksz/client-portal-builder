import { ArrowLeft, Building2, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { company } from "@/config/company";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>

          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground mb-6">Sobre Nós</h1>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Quem Somos</h3>
              <p className="text-muted-foreground">
                A {company.name} é uma empresa especializada em {company.activity}, dedicada a auxiliar empresas e profissionais a alcançarem excelência 
                operacional e financeira.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                <Building2 className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Quem Somos</h3>
                <p className="text-sm text-muted-foreground">
                  Empresa especializada em {company.activity}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                <Target className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Nossa Missão</h3>
                <p className="text-sm text-muted-foreground">
                  Transformar desafios em oportunidades de crescimento
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
                <Heart className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Nossos Valores</h3>
                <p className="text-sm text-muted-foreground">
                  Ética, transparência e compromisso
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Oferecer soluções personalizadas de {company.activity} que transformem desafios 
                em oportunidades de crescimento sustentável, sempre com foco em resultados práticos 
                e mensuráveis.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Nossos Valores</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Excelência em atendimento e qualidade dos serviços</li>
                <li>Ética e transparência em todas as relações</li>
                <li>Compromisso com resultados sustentáveis</li>
                <li>Inovação e melhoria contínua</li>
                <li>Respeito e valorização das pessoas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Áreas de Atuação</h3>
              <p className="text-muted-foreground mb-2">
                Trabalhamos com diversos segmentos empresariais, oferecendo consultoria especializada em:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Planejamento estratégico e gestão empresarial</li>
                <li>Otimização de processos e controles internos</li>
                <li>Gestão financeira e análise de desempenho</li>
                <li>Desenvolvimento organizacional</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-border text-center">
              <p className="text-sm font-medium text-foreground">
                {company.name}
              </p>
              <p className="text-sm text-muted-foreground">
                CNPJ: {company.cnpj}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SobreNos;

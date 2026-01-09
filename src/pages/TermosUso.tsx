import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { company } from "@/config/company";

const TermosUso = () => {
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

          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <h1 className="text-2xl font-bold text-foreground mb-6">Termos de Uso</h1>
            
            <h3 className="text-foreground font-semibold mt-2">1. Aceitação dos Termos</h3>
            <p>
              Ao acessar e utilizar os serviços da {company.name}, inscrita no 
              CNPJ {company.cnpj}, você concorda em cumprir e estar vinculado aos seguintes 
              termos e condições de uso.
            </p>

            <h3 className="text-foreground font-semibold mt-6">2. Serviços Oferecidos</h3>
            <p>A {company.name} oferece serviços de {company.activity}, incluindo:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Consultoria em planejamento estratégico</li>
              <li>Gestão de processos operacionais</li>
              <li>Análise e otimização de desempenho empresarial</li>
              <li>Consultoria em gestão financeira</li>
              <li>Treinamento e desenvolvimento organizacional</li>
            </ul>
            <p className="font-semibold text-warning">
              IMPORTANTE: NÃO OFERECEMOS CONSULTORIA DE INVESTIMENTOS FINANCEIROS. Nossos serviços 
              são exclusivamente voltados para gestão empresarial e operacional.
            </p>

            <h3 className="text-foreground font-semibold mt-6">3. Cadastro e Acesso</h3>
            <p>
              Para utilizar nossos serviços, você pode precisar fornecer informações cadastrais. 
              Você é responsável por manter a confidencialidade de suas credenciais de acesso e 
              por todas as atividades realizadas em sua conta.
            </p>

            <h3 className="text-foreground font-semibold mt-6">4. Responsabilidades do Cliente</h3>
            <p>Ao utilizar nossos serviços, você concorda em:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Fornecer informações verdadeiras, precisas e atualizadas</li>
              <li>Utilizar os serviços apenas para fins lícitos e legítimos</li>
              <li>Não interferir ou interromper o funcionamento dos serviços</li>
              <li>Cumprir todas as leis e regulamentos aplicáveis</li>
              <li>Respeito os direitos de propriedade intelectual</li>
            </ul>

            <h3 className="text-foreground font-semibold mt-6">5. Pagamentos e Cobrança</h3>
            <p>
              Os valores dos serviços serão acordados previamente em contrato específico. O pagamento 
              pode ser realizado através de boleto bancário, transferência ou outras formas acordadas. 
              O não pagamento dentro do prazo estabelecido pode resultar na suspensão dos serviços e 
              cobrança de multa e juros conforme legislação vigente.
            </p>

            <h3 className="text-foreground font-semibold mt-6">6. Propriedade Intelectual</h3>
            <p>
              Todos os materiais, conteúdos, metodologias e ferramentas fornecidos pela {company.name} são protegidos por direitos autorais e propriedade intelectual. 
              É proibida a reprodução, distribuição ou uso comercial sem autorização prévia por escrito.
            </p>

            <h3 className="text-foreground font-semibold mt-6">7. Confidencialidade</h3>
            <p>
              Todas as informações comerciais, financeiras e estratégicas trocadas entre as partes 
              serão tratadas como confidenciais. Ambas as partes se comprometem a não divulgar 
              informações confidenciais a terceiros sem consentimento prévio.
            </p>

            <h3 className="text-foreground font-semibold mt-6">8. Limitação de Responsabilidade</h3>
            <p>
              A {company.name} se esforça para fornecer serviços de alta qualidade, 
              porém não garante resultados específicos. Não nos responsabilizamos por perdas indiretas, 
              lucros cessantes ou danos consequentes decorrentes do uso de nossos serviços, exceto nos 
              casos previstos em lei.
            </p>

            <h3 className="text-foreground font-semibold mt-6">9. Rescisão</h3>
            <p>
              Qualquer uma das partes pode rescindir o contrato de serviços mediante aviso prévio 
              conforme estabelecido em contrato específico. A rescisão não exime o cliente do 
              pagamento pelos serviços já prestados.
            </p>

            <h3 className="text-foreground font-semibold mt-6">10. Modificações nos Termos</h3>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
              entrarão em vigor imediatamente após sua publicação no site. O uso continuado dos 
              serviços após as alterações constitui aceitação dos novos termos.
            </p>

            <h3 className="text-foreground font-semibold mt-6">11. Lei Aplicável e Foro</h3>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o 
              foro da comarca de São Paulo/SP para dirimir quaisquer questões decorrentes destes termos.
            </p>

            <h3 className="text-foreground font-semibold mt-6">12. Contato</h3>
            <p>
              Para dúvidas, esclarecimentos ou suporte, entre em contato através do e-mail {company.email}.
            </p>

            <p className="text-sm italic mt-8">Última atualização: Janeiro de 2025</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermosUso;

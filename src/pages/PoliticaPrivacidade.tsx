import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { company } from "@/config/company";

const PoliticaPrivacidade = () => {
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
            <h1 className="text-2xl font-bold text-foreground mb-6">Política de Privacidade</h1>
            
            <h3 className="text-foreground font-semibold mt-2">1. Informações Gerais</h3>
            <p>
              A {company.name}, inscrita no CNPJ {company.cnpj}, está comprometida 
              com a proteção dos dados pessoais de seus clientes, em conformidade com a Lei Geral de 
              Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h3 className="text-foreground font-semibold mt-6">2. Dados Coletados</h3>
            <p>Coletamos os seguintes tipos de dados:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Dados de identificação: nome completo, CPF/CNPJ, RG, data de nascimento</li>
              <li>Dados de contato: e-mail, telefone, endereço</li>
              <li>Dados financeiros: informações bancárias, histórico de pagamentos</li>
              <li>Dados de navegação: endereço IP, cookies, logs de acesso</li>
            </ul>

            <h3 className="text-foreground font-semibold mt-6">3. Finalidade do Tratamento</h3>
            <p>Os dados coletados são utilizados para:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Prestação de serviços de {company.activity}</li>
              <li>Processamento de pagamentos e emissão de boletos</li>
              <li>Comunicação com clientes sobre serviços contratados</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
              <li>Melhoria contínua de nossos serviços</li>
            </ul>

            <h3 className="text-foreground font-semibold mt-6">4. Compartilhamento de Dados</h3>
            <p>
              Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para a 
              execução dos serviços contratados, cumprimento de obrigações legais ou mediante seu 
              consentimento expresso. Parceiros que processam dados em nosso nome são contratualmente 
              obrigados a mantê-los seguros e confidenciais.
            </p>

            <h3 className="text-foreground font-semibold mt-6">5. Segurança dos Dados</h3>
            <p>
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados 
              contra acesso não autorizado, perda, destruição ou alteração. Utilizamos criptografia, 
              controles de acesso e monitoramento contínuo de nossos sistemas.
            </p>

            <h3 className="text-foreground font-semibold mt-6">6. Seus Direitos</h3>
            <p>Conforme a LGPD, você tem direito a:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Solicitar a portabilidade de dados a outro fornecedor</li>
              <li>Revogar o consentimento</li>
            </ul>

            <h3 className="text-foreground font-semibold mt-6">7. Retenção de Dados</h3>
            <p>
              Mantemos seus dados pelo período necessário para cumprimento das finalidades descritas 
              nesta política, respeitando os prazos legais de retenção aplicáveis.
            </p>

            <h3 className="text-foreground font-semibold mt-6">8. Cookies</h3>
            <p>
              Utilizamos cookies para melhorar a experiência de navegação em nosso site. Você pode 
              gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>

            <h3 className="text-foreground font-semibold mt-6">9. Alterações na Política</h3>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos que você a revise 
              regularmente. A data da última atualização estará sempre indicada no final deste documento.
            </p>

            <h3 className="text-foreground font-semibold mt-6">10. Contato</h3>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato 
              conosco através do e-mail {company.email}.
            </p>

            <p className="text-sm italic mt-8">Última atualização: Janeiro de 2025</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;

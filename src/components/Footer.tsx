import { Link } from "react-router-dom";
import { company } from "@/config/company";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-12 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-4">Portal do Cliente</h3>
          <div className="flex justify-center space-x-6 text-sm opacity-80 mb-4">
            <Link 
              to="/politica-privacidade" 
              className="hover:opacity-100 transition-opacity"
            >
              Política de Privacidade
            </Link>
            <Link 
              to="/termos-uso" 
              className="hover:opacity-100 transition-opacity"
            >
              Termos de Uso
            </Link>
            <Link 
              to="/sobre-nos" 
              className="hover:opacity-100 transition-opacity"
            >
              Sobre Nós
            </Link>
          </div>
        </div>

        <div className="mb-4 text-xs opacity-70 max-w-3xl mx-auto">
          <p>
            <strong>Importante:</strong> A {company.name} é uma empresa de {company.activity}. Não somos instituição financeira e não intermediamos operações de crédito. Nossos serviços são de orientação e consultoria.
          </p>
        </div>

        <div className="border-t border-primary-foreground/10 pt-4">
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} {company.name} - {company.cnpj}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

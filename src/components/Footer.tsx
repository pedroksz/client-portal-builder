import { Link } from "react-router-dom";
import { company } from "@/config/company";

const Footer = () => {
  return (
    <footer 
      className="text-white py-8 mt-12"
      style={{ backgroundColor: '#243782' }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-4">Portal do Cliente</h3>
          <div className="flex justify-center space-x-6 text-sm text-slate-200 mb-4">
            <Link 
              to="/politica-privacidade" 
              className="hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link 
              to="/termos-uso" 
              className="hover:text-white transition-colors"
            >
              Termos de Uso
            </Link>
            <Link 
              to="/sobre-nos" 
              className="hover:text-white transition-colors"
            >
              Sobre Nós
            </Link>
          </div>
        </div>

        <div className="mb-4 text-xs text-slate-300 max-w-3xl mx-auto">
          <p>
            <strong>Importante:</strong> A {company.name} é uma empresa de {company.activity}. Não somos instituição financeira e não intermediamos operações de crédito. Nossos serviços são de orientação e consultoria.
          </p>
        </div>

        <div 
          className="border-t pt-4"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p 
            className="text-xs"
            style={{ color: 'rgba(255, 255, 255, 0.15)' }}
          >
            © {new Date().getFullYear()} {company.name} - {company.cnpj}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

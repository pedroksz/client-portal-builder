import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
          <Link 
            to="/politica-privacidade" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link 
            to="/termos-uso" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Termos de Uso
          </Link>
          <Link 
            to="/sobre-nos" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Sobre Nós
          </Link>
        </nav>

        {/* Company Info */}
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-foreground">
            Portal do Cliente
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ: 00.000.000/0001-00
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Portal do Cliente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

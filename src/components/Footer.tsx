
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <img src="/lovable-uploads/febb1070-4d04-49f9-955e-11464a17b4fa.png" alt="CS Motos Logo" className="h-12 w-auto object-contain mx-auto md:mx-0" />
            <p className="text-muted-foreground text-sm mt-2 text-center md:text-left">Sua confiança, nossa prioridade</p>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2025 CS Motos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/f8b3d4e5-2a1b-4c6d-9e8f-1a2b3c4d5e6f.png" 
                alt="GS Motos Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">GS Motos</h4>
              <p className="text-gray-400 text-sm">Sua confiança, nossa prioridade</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 GS Motos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

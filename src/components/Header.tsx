
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onWhatsAppClick?: (text: string) => void;
}

const Header = ({ onWhatsAppClick }: HeaderProps) => {
  const whatsappNumber = "5562981660042";
  
  const handlePhoneClick = () => {
    if (onWhatsAppClick) {
      onWhatsAppClick("Olá! Vim do site e gostaria de falar com um consultor.");
    }
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 shadow-xl sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              GS Motos
            </h1>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#motos" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Motos
              </a>
              <a href="#contato" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Contato
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center text-gray-300 text-sm">
              <Phone className="w-4 h-4 mr-2" />
              <span>(62) 9 8166-0042</span>
            </div>
            
            <Button
              onClick={handlePhoneClick}
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

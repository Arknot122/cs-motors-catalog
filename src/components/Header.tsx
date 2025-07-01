
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface HeaderProps {
  onWhatsAppClick: (text: string) => void;
}

const Header = ({ onWhatsAppClick }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white shadow-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold">🏍️</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                GS Motos
              </h1>
              <p className="text-sm text-gray-300">Sua próxima moto está aqui</p>
            </div>
          </div>
          <Button 
            onClick={() => onWhatsAppClick("Olá! Gostaria de mais informações sobre as motos disponíveis.")}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

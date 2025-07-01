
import { Phone } from "lucide-react";

interface HeaderProps {
  onWhatsAppClick?: (text: string) => void;
}

const Header = ({ onWhatsAppClick }: HeaderProps) => {
  return (
    <header className="bg-[#141414] shadow-xl sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a href="#motos" className="text-gray-300 hover:text-[#FF3333] transition-colors text-sm">
                Motos
              </a>
              <a href="#contato" className="text-gray-300 hover:text-[#FF3333] transition-colors text-sm">
                Contato
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center text-gray-300 text-sm">
              <Phone className="w-4 h-4 mr-2 text-[#FF3333]" />
              <span>(62) 9 8166-0042</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

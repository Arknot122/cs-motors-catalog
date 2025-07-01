
import { Phone } from "lucide-react";
import NavigationMenu from "./NavigationMenu";

interface HeaderProps {
  onWhatsAppClick?: (text: string) => void;
}

const Header = ({ onWhatsAppClick }: HeaderProps) => {
  return (
    <header className="bg-[#141414] shadow-xl sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-6">
            <div className="text-[#FF3333] font-black text-xl tracking-wider">
              CS <span className="text-white text-sm font-medium">MOTOS</span>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <NavigationMenu onWhatsAppClick={onWhatsAppClick} />
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-gray-300 text-sm">
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

import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";
import NavigationMenu from "./NavigationMenu";

interface HeaderProps {
  onWhatsAppClick?: (text: string) => void;
}

const Header = ({ onWhatsAppClick }: HeaderProps) => {
  return (
    <header className="bg-cs-dark-900 shadow-xl sticky top-0 z-40 border-b border-cs-dark-800">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Left: Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu />
          </div>
          
          {/* Center: Logo */}
          <div className="flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <img 
              alt="CS MOTOS Logo" 
              src="/lovable-uploads/ab727843-415e-4a73-808c-b54e53886e50.png" 
              className="h-12 md:h-16 w-auto object-contain" 
            />
          </div>
          
          {/* Right: Contact & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center text-gray-300 text-xs md:text-sm font-medium hover:text-white transition-colors duration-200">
              <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-cs-red-500" />
              <span>(62) 9 8166-0042</span>
            </div>
            
            {/* Mobile Menu */}
            <MobileMenu onWhatsAppClick={onWhatsAppClick} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
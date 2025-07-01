import { Phone } from "lucide-react";
interface HeaderProps {
  onWhatsAppClick?: (text: string) => void;
}
const Header = ({
  onWhatsAppClick
}: HeaderProps) => {
  return <header className="bg-cs-dark-900 shadow-xl sticky top-0 z-40 border-b border-cs-dark-800">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-3">
        <div className="grid grid-cols-3 items-center">
          {/* Empty left space */}
          <div></div>
          
          {/* Centered Logo */}
          <div className="flex justify-center">
            <img alt="CS MOTOS Logo" src="/lovable-uploads/5750d438-35f0-454c-b1e8-d0ce84673fbf.png" className="h-12 md:h-16 w-auto object-contain" />
          </div>
          
          {/* Contact Info */}
          <div className="hidden md:flex items-center justify-end space-x-4">
            <div className="flex items-center text-gray-300 text-xs md:text-sm font-medium hover:text-white transition-colors duration-200">
              <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-cs-red-500" />
              <span>(62) 9 8166-0042</span>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;
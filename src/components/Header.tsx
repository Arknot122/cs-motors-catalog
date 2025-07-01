import { Phone } from "lucide-react";
interface HeaderProps {
  onWhatsAppClick?: (text: string) => void;
}
const Header = ({
  onWhatsAppClick
}: HeaderProps) => {
  return <header className="bg-cs-dark-900 shadow-xl sticky top-0 z-40 border-b border-cs-dark-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-6">
            <img alt="CS MOTOS Logo" src="/lovable-uploads/ce171b81-5cd1-4518-a2bb-be2bbd8d2edc.png" className="h-14 w-auto md:h-10 mx-[111px] object-contain" />
          </div>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-gray-300 text-sm font-medium hover:text-white transition-colors duration-200">
              <Phone className="w-4 h-4 mr-2 text-cs-red-500" />
              <span>(62) 9 8166-0042</span>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;
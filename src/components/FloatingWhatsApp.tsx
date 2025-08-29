
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingWhatsAppProps {
  onWhatsAppClick: (text: string) => void;
}

const FloatingWhatsApp = ({ onWhatsAppClick }: FloatingWhatsAppProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <Button
        onClick={() => onWhatsAppClick("Olá! Vim do site e gostaria de falar sobre as motos disponíveis.")}
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full min-w-fit px-4 h-16 shadow-2xl border-4 border-white transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Consultar Agora"
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        <span className="text-sm font-semibold">Consultar Agora</span>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-90 transition-opacity duration-200 pointer-events-none">
        Fale Conosco!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;

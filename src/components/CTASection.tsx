
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface CTASectionProps {
  onWhatsAppClick: (text: string) => void;
}

const CTASection = ({ onWhatsAppClick }: CTASectionProps) => {
  return (
    <section className="py-8 md:py-16 px-6 md:px-4 bg-gradient-to-r from-cs-red-500 via-cs-red-600 to-cs-red-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto text-center max-w-2xl relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
          Fale com um Consultor
        </h3>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-red-100 leading-relaxed">
          Se interessou por algum modelo? Fale agora com um de nossos especialistas.
        </p>
        <Button 
          onClick={() => onWhatsAppClick("Olá! Gostaria de falar com um consultor sobre as motos disponíveis.")}
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg shadow-xl w-full sm:w-auto font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          CONSULTAR AGORA
        </Button>
      </div>
    </section>
  );
};

export default CTASection;


import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface CTASectionProps {
  onWhatsAppClick: (text: string) => void;
}

const CTASection = ({ onWhatsAppClick }: CTASectionProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white">
      <div className="container mx-auto text-center max-w-2xl">
        <h3 className="text-3xl font-bold mb-6">📞 Fale com um Consultor</h3>
        <p className="text-xl mb-8 text-red-100">
          Se interessou por algum modelo? Fale agora com um de nossos especialistas.
        </p>
        <Button 
          onClick={() => onWhatsAppClick("Olá! Gostaria de falar com um consultor sobre as motos disponíveis.")}
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg shadow-lg"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Atendimento via WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default CTASection;

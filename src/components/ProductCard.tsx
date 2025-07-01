
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap, Star } from "lucide-react";
import { useState } from "react";

interface Motorcycle {
  id: number;
  name: string;
  km: string;
  price: string;
  installment12: string;
  installment18: string;
  image: string;
  whatsappText: string;
}

interface ProductCardProps {
  motorcycle: Motorcycle;
  onWhatsAppClick: (text: string) => void;
}

const ProductCard = ({ motorcycle, onWhatsAppClick }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsAppClick = async () => {
    setIsLoading(true);
    
    // Simula um pequeno delay para feedback visual
    setTimeout(() => {
      onWhatsAppClick(motorcycle.whatsappText);
      setIsLoading(false);
    }, 500);
  };

  // Lógica para badges especiais
  const isHighlight = motorcycle.id <= 3; // Primeiras 3 motos são destaque
  const isZeroKm = motorcycle.km === "0";
  const isLowKm = parseInt(motorcycle.km.replace(/\./g, '')) < 15000;

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-red-200 relative">
      {/* Badges de destaque */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isHighlight && (
          <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white animate-pulse">
            <Star className="w-3 h-3 mr-1" />
            DESTAQUE
          </Badge>
        )}
        {isZeroKm && (
          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <Zap className="w-3 h-3 mr-1" />
            0 KM
          </Badge>
        )}
        {isLowKm && !isZeroKm && (
          <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
            BAIXA KM
          </Badge>
        )}
      </div>

      <div className="relative">
        <img 
          src={motorcycle.image} 
          alt={motorcycle.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {motorcycle.km === "0" ? "0 KM" : `${motorcycle.km} KM`}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h4 className="text-lg font-bold mb-3 text-gray-900">{motorcycle.name}</h4>
        
        <div className="space-y-3 mb-6">
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-lg border-l-4 border-red-500">
            <p className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              À vista: R$ {motorcycle.price}
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">
              <strong>12x</strong> R$ {motorcycle.installment12} ou <strong>18x</strong> R$ {motorcycle.installment18}
            </p>
            <p className="text-xs text-gray-500">*Entrada + parcelas</p>
          </div>
        </div>
        
        <Button 
          onClick={handleWhatsAppClick}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg text-base py-6 animate-pulse"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          {isLoading ? "Conectando..." : "CONSULTAR AGORA"}
        </Button>
        
        <p className="text-xs text-center text-gray-500 mt-2">
          Clique e fale direto com nosso consultor!
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

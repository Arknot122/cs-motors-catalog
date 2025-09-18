

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap, Star } from "lucide-react";
import { useState, useCallback, memo } from "react";
import OptimizedImage from "@/components/ui/optimized-image";

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

const ProductCard = memo(({ motorcycle, onWhatsAppClick }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsAppClick = useCallback(async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      onWhatsAppClick(motorcycle.whatsappText);
      setIsLoading(false);
    }, 300);
  }, [motorcycle.whatsappText, onWhatsAppClick]);

  // Lógica para badges especiais
  const isHighlight = motorcycle.id <= 3;
  const isZeroKm = motorcycle.km === "0";
  const isLowKm = parseInt(motorcycle.km.replace(/\./g, '')) < 15000;

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border-2 hover:border-primary/30 relative group animate-fade-in bg-card"
    >
      {/* Badges de destaque */}
      <div className="absolute top-2 md:top-3 left-2 md:left-3 z-10 flex flex-col gap-1 md:gap-2">
        {isHighlight && (
          <Badge className="bg-gradient-to-r from-cs-red-500 to-cs-red-600 text-white animate-pulse-subtle shadow-cs text-xs md:text-sm px-1.5 md:px-2">
            <Star className="w-2.5 h-2.5 md:w-3 md:h-3 mr-0.5 md:mr-1" />
            DESTAQUE
          </Badge>
        )}
        {isZeroKm && (
          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg text-xs md:text-sm px-1.5 md:px-2">
            <Zap className="w-2.5 h-2.5 md:w-3 md:h-3 mr-0.5 md:mr-1" />
            0 KM
          </Badge>
        )}
        {isLowKm && !isZeroKm && (
          <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg text-xs md:text-sm px-1.5 md:px-2">
            BAIXA KM
          </Badge>
        )}
      </div>

      <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center h-40 md:h-48">
        <OptimizedImage
          src={motorcycle.image}
          alt={motorcycle.name}
          className="w-full h-full transition-all duration-500 group-hover:scale-105"
          width={400}
          height={240}
          priority
        />
        
        <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-gradient-to-r from-cs-dark-800 to-cs-dark-900 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg backdrop-blur-sm">
          {motorcycle.km === "0" ? "0 KM" : `${motorcycle.km} KM`}
        </div>
      </div>
      
      <CardContent className="p-3 md:p-6">
        <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-cs-dark-900 group-hover:text-cs-red-600 transition-colors duration-200 leading-tight">
          {motorcycle.name}
        </h4>
        
        
        <Button 
          onClick={handleWhatsAppClick}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg text-sm md:text-base py-3 md:py-6 font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
              Conectando...
            </div>
          ) : (
            <>
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              CONSULTAR AGORA
            </>
          )}
        </Button>
        
        <p className="text-xs text-center text-gray-500 mt-2 md:mt-3 font-medium">
          Clique e fale direto com nosso consultor!
        </p>
      </CardContent>
    </Card>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;


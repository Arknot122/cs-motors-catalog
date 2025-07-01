
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Zap, Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Lazy loading observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      onWhatsAppClick(motorcycle.whatsappText);
      setIsLoading(false);
    }, 500);
  };

  // Lógica para badges especiais
  const isHighlight = motorcycle.id <= 3;
  const isZeroKm = motorcycle.km === "0";
  const isLowKm = parseInt(motorcycle.km.replace(/\./g, '')) < 15000;

  return (
    <Card 
      ref={cardRef}
      className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-cs-red-200 relative group animate-fade-in"
    >
      {/* Badges de destaque */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isHighlight && (
          <Badge className="bg-gradient-to-r from-cs-red-500 to-cs-red-600 text-white animate-pulse-subtle shadow-cs">
            <Star className="w-3 h-3 mr-1" />
            DESTAQUE
          </Badge>
        )}
        {isZeroKm && (
          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
            <Zap className="w-3 h-3 mr-1" />
            0 KM
          </Badge>
        )}
        {isLowKm && !isZeroKm && (
          <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
            BAIXA KM
          </Badge>
        )}
      </div>

      <div className="relative overflow-hidden">
        {/* Placeholder enquanto a imagem não carrega */}
        {!imageLoaded && isInView && (
          <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 text-sm">Carregando...</div>
          </div>
        )}
        
        {/* Imagem com lazy loading */}
        {isInView && (
          <img 
            src={motorcycle.image} 
            alt={motorcycle.name}
            className={`w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        )}
        
        <div className="absolute top-3 right-3 bg-gradient-to-r from-cs-dark-800 to-cs-dark-900 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
          {motorcycle.km === "0" ? "0 KM" : `${motorcycle.km} KM`}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h4 className="text-lg font-bold mb-3 text-cs-dark-900 group-hover:text-cs-red-600 transition-colors duration-200">
          {motorcycle.name}
        </h4>
        
        <div className="space-y-3 mb-6">
          <div className="bg-gradient-to-r from-cs-red-50 to-red-100 p-4 rounded-lg border-l-4 border-cs-red-500 shadow-sm">
            <p className="text-2xl font-bold text-gradient-cs">
              À vista: R$ {motorcycle.price}
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="text-sm text-cs-dark-700 mb-1 font-medium">
              <strong className="text-cs-red-600">12x</strong> R$ {motorcycle.installment12} ou <strong className="text-cs-red-600">18x</strong> R$ {motorcycle.installment18}
            </p>
            <p className="text-xs text-gray-500">*Entrada + parcelas</p>
          </div>
        </div>
        
        <Button 
          onClick={handleWhatsAppClick}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg text-base py-6 font-semibold transition-all duration-200 hover:shadow-xl transform hover:scale-[1.02]"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          {isLoading ? "Conectando..." : "CONSULTAR AGORA"}
        </Button>
        
        <p className="text-xs text-center text-gray-500 mt-3 font-medium">
          Clique e fale direto com nosso consultor!
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

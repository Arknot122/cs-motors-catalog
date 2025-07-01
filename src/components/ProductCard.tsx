
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-red-200">
      <div className="relative">
        <img 
          src={motorcycle.image} 
          alt={motorcycle.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
          {motorcycle.km} KM
        </div>
      </div>
      
      <CardContent className="p-6">
        <h4 className="text-lg font-bold mb-3 text-gray-900">{motorcycle.name}</h4>
        
        <div className="space-y-2 mb-4">
          <p className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            À vista: R$ {motorcycle.price}
          </p>
          <p className="text-sm text-gray-600">
            12x R$ {motorcycle.installment12} ou 18x R$ {motorcycle.installment18}
          </p>
        </div>
        
        <Button 
          onClick={() => onWhatsAppClick(motorcycle.whatsappText)}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Consultar via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

import { lazy, Suspense, useState, useCallback } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SearchOnly from "@/components/SearchOnly";
import SkeletonCard from "@/components/ui/skeleton-card";

const Footer = lazy(() => import("@/components/Footer"));

const Motorcycles = () => {
  const [filteredMotorcycles, setFilteredMotorcycles] = useState<typeof motorcycles>([]);
  
  const motorcycles = [
    {
      id: 1,
      name: "YAMAHA YS 150 – 24/25",
      km: "15.752",
      price: "18.995,00",
      installment12: "1.196,00",
      installment18: "980,00",
      image: "/lovable-uploads/6d509b8d-0dfe-491a-bad2-b57f6c3ea2ee.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a YAMAHA YS 150 – 24/25 com 15.752 KM"
    },
    {
      id: 2,
      name: "Honda CG Titan 160 21/21",
      km: "3.017",
      price: "16.721,00",
      installment12: "1.053,00",
      installment18: "863,00",
      image: "/lovable-uploads/9cf420ff-b473-49f4-9208-429e0f0a7ca9.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Titan 160 21/21 com 3.017 KM"
    },
    {
      id: 3,
      name: "Honda CG Titan 160 – 21/22",
      km: "29.044",
      price: "16.721,00",
      installment12: "1.053,00",
      installment18: "863,00",
      image: "/lovable-uploads/43a686dc-67c1-4c98-9eba-7813a4fbc2a7.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Titan 160 – 21/22 com 29.044 KM"
    },
    {
      id: 9,
      name: "Honda Biz 125 – 22/23",
      km: "11.163",
      price: "16.128,00",
      installment12: "1.015,00",
      installment18: "823,00",
      image: "/lovable-uploads/a291c83d-0258-4c54-a261-35ecd0da64bc.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda Biz 125 – 22/23 com 11.163 KM"
    },
    {
      id: 11,
      name: "Honda CG Fan 160 24/24",
      km: "6.066",
      price: "20.443,00",
      installment12: "1.287,00",
      installment18: "1.055,00",
      image: "/lovable-uploads/f744efc8-2b83-4ae6-987d-cadaef69df5e.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Fan 160 24/24 com 6.066 KM"
    },
    {
      id: 12,
      name: "Honda CG Fan 160 – 23/23",
      km: "18.258",
      price: "18.963,00",
      installment12: "1.194,00",
      installment18: "978,00",
      image: "/lovable-uploads/a7735d1a-3da4-4eb7-831e-5af2c9093d7a.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Fan 160 – 23/23 com 18.258 KM"
    },
    {
      id: 13,
      name: "Honda CG Titan 160 – 23/23",
      km: "26.249",
      price: "18.963,00",
      installment12: "1.194,00",
      installment18: "978,00",
      image: "/lovable-uploads/866ad016-7a06-4680-bd09-5397b57b8b23.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Titan 160 – 23/23 com 26.249 KM"
    },
    {
      id: 15,
      name: "Honda POP 100 – 24/25",
      km: "38.098",
      price: "10.934,00",
      installment12: "688,00",
      installment18: "564,00",
      image: "/lovable-uploads/e5abba61-65c3-439b-af19-80014d2b7a60.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda POP 100 – 24/25 com 38.098 KM"
    }
  ];

  const whatsappNumber = "5562981660042";

  const handleWhatsAppClick = useCallback((text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  }, [whatsappNumber]);

  const handleFilteredResults = useCallback((filtered: typeof motorcycles) => {
    setFilteredMotorcycles(filtered);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header onWhatsAppClick={handleWhatsAppClick} />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Nossas Motocicletas
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha sua moto ideal e fale direto com nosso consultor pelo WhatsApp
            </p>
          </div>
          
          {/* Search Only */}
          <SearchOnly 
            motorcycles={motorcycles}
            onFilteredResults={handleFilteredResults}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Suspense fallback={
              <>
                {Array.from({length: 6}).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </>
            }>
              {(filteredMotorcycles.length > 0 ? filteredMotorcycles : motorcycles).map((motorcycle) => (
                <ProductCard 
                  key={motorcycle.id} 
                  motorcycle={motorcycle} 
                  onWhatsAppClick={handleWhatsAppClick} 
                />
              ))}
            </Suspense>
          </div>
          
          {filteredMotorcycles.length === 0 && motorcycles.length > 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h4 className="text-xl font-semibold mb-2">Nenhuma moto encontrada</h4>
              <p className="text-muted-foreground">
                Tente ajustar os filtros ou buscar por outros termos
              </p>
            </div>
          )}
        </div>
      </main>

      <Suspense fallback={<div className="h-24 bg-gray-100 animate-pulse" />}>
        <Footer />
      </Suspense>
      
      <FloatingWhatsApp onWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
};

export default Motorcycles;
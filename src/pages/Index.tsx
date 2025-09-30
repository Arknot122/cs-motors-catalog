import { lazy, Suspense, useState, useCallback, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SearchOnly from "@/components/SearchOnly";
import SkeletonCard from "@/components/ui/skeleton-card";
import { usePerformanceMonitoring } from "@/hooks/use-performance";

// Lazy load heavy components
const CTASection = lazy(() => import("@/components/CTASection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

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

const Index = () => {
  const [filteredMotorcycles, setFilteredMotorcycles] = useState<Motorcycle[]>([]);
  
  // Performance monitoring
  usePerformanceMonitoring();
  
  // Memoize motorcycle data to prevent unnecessary re-computations
  const motorcycles = useMemo(() => [
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
      name: "Honda CG Start - 21/22",
      km: "30.017",
      price: "16.721,00",
      installment12: "1.053,00",
      installment18: "863,00",
      image: "/lovable-uploads/9cf420ff-b473-49f4-9208-429e0f0a7ca9.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Start - 21/22 com 30.017 KM"
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
      id: 12,
      name: "Honda CG Fan 160 – 24/24",
      km: "18.258",
      price: "18.963,00",
      installment12: "1.194,00",
      installment18: "978,00",
      image: "/lovable-uploads/a7735d1a-3da4-4eb7-831e-5af2c9093d7a.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Fan 160 – 24/24 com 18.258 KM"
    },
    {
      id: 14,
      name: "Honda CG Titan 160 – 23/23",
      km: "26.250",
      price: "Consultar",
      installment12: "Consultar",
      installment18: "Consultar",
      image: "/lovable-uploads/cg-titan-23-23-26250km.jpg",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Titan 160 – 23/23 com 26.250 KM"
    },
    {
      id: 13,
      name: "Honda CG Titan 160 – 23/23",
      km: "52.000",
      price: "18.963,00",
      installment12: "1.194,00",
      installment18: "978,00",
      image: "/lovable-uploads/866ad016-7a06-4680-bd09-5397b57b8b23.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Titan 160 – 23/23 com 52.000 KM"
    }
  ], []);

  const whatsappNumber = "5562981660042";

  const handleWhatsAppClick = useCallback((text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  }, [whatsappNumber]);

  const handleFilteredResults = useCallback((filtered: Motorcycle[]) => {
    setFilteredMotorcycles(filtered);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header onWhatsAppClick={handleWhatsAppClick} />
      <Hero />
      
      {/* Products Section */}
      <section id="motos" className="pt-0 pb-2 md:pb-4 px-2 md:px-4">
        <div className="container mx-auto">
          <div className="text-center mb-4 md:mb-6 px-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">
              Modelos Disponíveis
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Escolha sua moto ideal e fale direto com nosso consultor pelo WhatsApp
            </p>
          </div>
          
          {/* Search Only */}
          <SearchOnly 
            motorcycles={motorcycles}
            onFilteredResults={handleFilteredResults}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-0">
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
      </section>

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <CTASection onWhatsAppClick={handleWhatsAppClick} />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse" />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<div className="h-24 bg-gray-100 animate-pulse" />}>
        <Footer />
      </Suspense>
      
      {/* Botão WhatsApp Flutuante */}
      <FloatingWhatsApp onWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
};

export default Index;

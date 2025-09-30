import { lazy, Suspense, useState, useCallback } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SearchOnly from "@/components/SearchOnly";
import SkeletonCard from "@/components/ui/skeleton-card";

const Footer = lazy(() => import("@/components/Footer"));

interface Car {
  id: number;
  name: string;
  km: string;
  price: string;
  installment12: string;
  installment18: string;
  image: string;
  whatsappText: string;
}

const Cars = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  
  const cars: Car[] = [
    // Cars will be added here
  ];

  const whatsappNumber = "5562981660042";

  const handleWhatsAppClick = useCallback((text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  }, [whatsappNumber]);

  const handleFilteredResults = useCallback((filtered: Car[]) => {
    setFilteredCars(filtered);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header onWhatsAppClick={handleWhatsAppClick} />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Nossos Carros
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha seu carro ideal e fale direto com nosso consultor pelo WhatsApp
            </p>
          </div>
          
          {/* Search Only */}
          <SearchOnly 
            motorcycles={cars}
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
              {(filteredCars.length > 0 ? filteredCars : cars).map((car) => (
                <ProductCard 
                  key={car.id} 
                  motorcycle={car} 
                  onWhatsAppClick={handleWhatsAppClick} 
                />
              ))}
            </Suspense>
          </div>
          
          {cars.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚗</div>
              <h4 className="text-xl font-semibold mb-2">Em breve</h4>
              <p className="text-muted-foreground">
                Estamos preparando nosso catálogo de carros
              </p>
            </div>
          )}
          
          {filteredCars.length === 0 && cars.length > 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h4 className="text-xl font-semibold mb-2">Nenhum carro encontrado</h4>
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

export default Cars;

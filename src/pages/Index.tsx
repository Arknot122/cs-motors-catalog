import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  const motorcycles = [
    {
      id: 1,
      name: "YAMAHA YS 150 – 24/25",
      km: "15.752",
      price: "18.995,00",
      installment12: "1.196,00",
      installment18: "980,00",
      image: "/lovable-uploads/a2a4050a-23ec-4aea-8fd1-7a73796d1c3b.png",
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
      id: 7,
      name: "Honda Biz 125 – 22/22",
      km: "20.649",
      price: "16.176,00",
      installment12: "1.018,00",
      installment18: "835,00",
      image: "/lovable-uploads/1abed2dc-a2e0-4617-b4bd-059d2e7c68c4.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda Biz 125 – 22/22 com 20.649 KM"
    },
    {
      id: 8,
      name: "Yamaha YBR Factor 150 – 22/23",
      km: "25.272",
      price: "14.790,00",
      installment12: "931,00",
      installment18: "763,00",
      image: "/lovable-uploads/3cf003fd-3754-487a-9822-03bd85d1afa7.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Yamaha YBR Factor 150 – 22/23 com 25.272 KM"
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
      id: 10,
      name: "Honda CG Fan 160 – 24/24",
      km: "8.079",
      price: "20.443,00",
      installment12: "1.287,00",
      installment18: "1.055,00",
      image: "/lovable-uploads/ce61497f-2633-4ea9-9c52-96d4d7b3124f.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Fan 160 – 24/24 com 8.079 KM"
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
      id: 14,
      name: "Honda CG Fan 160 – 24/25",
      km: "6.066",
      price: "21.960,00",
      installment12: "1.383,00",
      installment18: "1.133,00",
      image: "/lovable-uploads/2b25823c-4ad8-4aab-b2bf-62abc5027e64.png",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Fan 160 – 24/25 com 6.066 KM"
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

  const handleWhatsAppClick = (text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header onWhatsAppClick={handleWhatsAppClick} />
      <Hero />
      
      {/* Products Section */}
      <section id="motos" className="pt-0 pb-2 md:pb-4 px-2 md:px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12 px-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">
              Modelos Disponíveis
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha sua moto ideal e fale direto com nosso consultor pelo WhatsApp
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-0">
            {motorcycles.map((motorcycle) => (
              <ProductCard 
                key={motorcycle.id} 
                motorcycle={motorcycle} 
                onWhatsAppClick={handleWhatsAppClick} 
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection onWhatsAppClick={handleWhatsAppClick} />
      <ContactSection />
      <Footer />
      
      {/* Botão WhatsApp Flutuante */}
      <FloatingWhatsApp onWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
};

export default Index;

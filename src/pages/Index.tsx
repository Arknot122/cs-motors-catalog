import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      whatsappText: "Olá, quero saber mais sobre a YAMAHA YS 150 – 24/25"
    },
    {
      id: 2,
      name: "Honda CG Titan 160 21/21",
      km: "3.017",
      price: "16.721,00",
      installment12: "1.053,00",
      installment18: "863,00",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
      whatsappText: "Olá, quero saber mais sobre a Honda CG Titan 160 21/21"
    },
    {
      id: 3,
      name: "Honda CB 600F Hornet 08/09",
      km: "28.543",
      price: "22.500,00",
      installment12: "1.415,00",
      installment18: "1.160,00",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=300&fit=crop",
      whatsappText: "Olá, quero saber mais sobre a Honda CB 600F Hornet 08/09"
    },
    {
      id: 4,
      name: "Yamaha Factor 125 19/20",
      km: "12.486",
      price: "13.800,00",
      installment12: "868,00",
      installment18: "712,00",
      image: "https://images.unsplash.com/photo-1572023597938-88bb7a2b3f58?w=400&h=300&fit=crop",
      whatsappText: "Olá, quero saber mais sobre a Yamaha Factor 125 19/20"
    },
    {
      id: 5,
      name: "Honda PCX 150 22/23",
      km: "8.920",
      price: "14.990,00",
      installment12: "943,00",
      installment18: "773,00",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
      whatsappText: "Olá, quero saber mais sobre a Honda PCX 150 22/23"
    },
    {
      id: 6,
      name: "Kawasaki Ninja 300 16/17",
      km: "18.635",
      price: "19.800,00",
      installment12: "1.245,00",
      installment18: "1.021,00",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=300&fit=crop",
      whatsappText: "Olá, quero saber mais sobre a Kawasaki Ninja 300 16/17"
    }
  ];

  const whatsappNumber = "5511999999999";

  const handleWhatsAppClick = (text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header onWhatsAppClick={handleWhatsAppClick} />
      <Hero />
      
      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            📋 Modelos Disponíveis
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};

export default Index;

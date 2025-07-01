
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
      name: "Honda CB 600F Hornet 08/09",
      km: "28.543",
      price: "22.500,00",
      installment12: "1.415,00",
      installment18: "1.160,00",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=300&fit=crop",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CB 600F Hornet 08/09 com 28.543 KM"
    },
    {
      id: 4,
      name: "Yamaha Factor 125 19/20",
      km: "12.486",
      price: "13.800,00",
      installment12: "868,00",
      installment18: "712,00",
      image: "https://images.unsplash.com/photo-1572023597938-88bb7a2b3f58?w=400&h=300&fit=crop",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Yamaha Factor 125 19/20 com 12.486 KM"
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
      image: "https://images.unsplash.com/photo-1572023597938-88bb7a2b3f58?w=400&h=300&fit=crop",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Yamaha YBR Factor 150 – 22/23 com 25.272 KM"
    },
    {
      id: 9,
      name: "Honda Biz 125 – 22/23",
      km: "11.163",
      price: "16.128,00",
      installment12: "1.015,00",
      installment18: "823,00",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda Biz 125 – 22/23 com 11.163 KM"
    },
    {
      id: 10,
      name: "Honda CG Fan 160 – 24/24",
      km: "8.079",
      price: "20.443,00",
      installment12: "1.287,00",
      installment18: "1.055,00",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Fan 160 – 24/24 com 8.079 KM"
    },
    {
      id: 11,
      name: "Honda CG Fan 160 24/24",
      km: "6.066",
      price: "20.443,00",
      installment12: "1.287,00",
      installment18: "1.055,00",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Fan 160 24/24 com 6.066 KM"
    },
    {
      id: 12,
      name: "Honda CG Fan 160 – 23/23",
      km: "18.258",
      price: "18.963,00",
      installment12: "1.194,00",
      installment18: "978,00",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Fan 160 – 23/23 com 18.258 KM"
    },
    {
      id: 13,
      name: "Honda CG Titan – 23/23",
      km: "0",
      price: "18.963,00",
      installment12: "1.194,00",
      installment18: "978,00",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Titan – 23/23 (0 KM)"
    },
    {
      id: 14,
      name: "Honda CG Fan 160 – 25/25",
      km: "0",
      price: "21.960,00",
      installment12: "1.383,00",
      installment18: "1.133,00",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
      whatsappText: "Olá! Vim do site e gostaria de saber sobre a Honda CG Fan 160 – 25/25 (0 KM)"
    },
    {
      id: 15,
      name: "Honda POP 100 – 24/25",
      km: "38.098",
      price: "10.934,00",
      installment12: "688,00",
      installment18: "564,00",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
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

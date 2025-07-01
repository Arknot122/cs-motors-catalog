
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

const Index = () => {
  const motorcycles = [
    {
      id: 1,
      name: "YAMAHA YS 150 – 24/25",
      km: "15.752",
      price: "18.995,00",
      installment12: "1.196,00",
      installment18: "980,00",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
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

  const whatsappNumber = "5511999999999"; // Substitua pelo número real

  const handleWhatsAppClick = (text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">🏍️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  CS Motors
                </h1>
                <p className="text-sm text-gray-300">Sua próxima moto está aqui</p>
              </div>
            </div>
            <Button 
              onClick={() => handleWhatsAppClick("Olá! Gostaria de mais informações sobre as motos disponíveis.")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Encontre sua próxima moto com facilidade
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Motos revisadas, com garantia e parcelamento facilitado. Confira abaixo nossos modelos disponíveis!
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Motos Revisadas
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Com Garantia
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              Parcelamento Facilitado
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            📋 Modelos Disponíveis
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorcycles.map((moto) => (
              <Card key={moto.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={moto.image} 
                    alt={moto.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {moto.km} KM
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-gray-900">{moto.name}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-2xl font-bold text-green-600">
                      À vista: R$ {moto.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      12x R$ {moto.installment12} ou 18x R$ {moto.installment18}
                    </p>
                  </div>
                  
                  <Button 
                    onClick={() => handleWhatsAppClick(moto.whatsappText)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-3xl font-bold mb-6">📞 Fale com um Consultor</h3>
          <p className="text-xl mb-8 text-blue-100">
            Se interessou por algum modelo? Fale agora com um de nossos especialistas.
          </p>
          <Button 
            onClick={() => handleWhatsAppClick("Olá! Gostaria de falar com um consultor sobre as motos disponíveis.")}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Atendimento via WhatsApp
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">📍 Contato</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold mb-2">Telefone</h4>
              <p className="text-gray-600">(11) 99999-9999</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">contato@csmotors.com.br</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-semibold mb-2">Endereço</h4>
              <p className="text-gray-600">Rua Exemplo, 123 – Cidade/UF</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-lg">🏍️</span>
              </div>
              <div>
                <h4 className="text-xl font-bold">CS Motors</h4>
                <p className="text-gray-400 text-sm">Sua confiança, nossa prioridade</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 CS Motors. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

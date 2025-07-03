import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5562981660042";

  const handleWhatsAppClick = (text: string) => {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header onWhatsAppClick={handleWhatsAppClick} />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Estamos prontos para ajudar você a encontrar a moto ideal
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Informações de Contato */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-cs-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(62) 9 8166-0042</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageCircle className="w-6 h-6 text-cs-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">Atendimento rápido e personalizado</p>
                      <button
                        onClick={() => handleWhatsAppClick("Olá! Vim do site e gostaria de mais informações.")}
                        className="text-cs-red-500 hover:text-cs-red-600 font-medium mt-1"
                      >
                        Enviar mensagem →
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-cs-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-cs-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Localização</h3>
                      <p className="text-gray-600">Goiânia - GO</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-br from-cs-red-500 to-cs-red-600 rounded-lg shadow-lg p-8 text-white">
                <h2 className="text-2xl font-semibold mb-6">
                  Pronto para encontrar sua moto?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Nossa equipe está preparada para atender você com excelência. 
                  Entre em contato agora mesmo e descubra as melhores opções do mercado.
                </p>
                
                <div className="space-y-4">
                  <button
                    onClick={() => handleWhatsAppClick("Olá! Gostaria de ver as motos disponíveis no estoque.")}
                    className="w-full bg-white text-cs-red-500 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                  >
                    Ver Motos Disponíveis
                  </button>
                  
                  <button
                    onClick={() => handleWhatsAppClick("Olá! Gostaria de informações sobre financiamento.")}
                    className="w-full border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-cs-red-500 transition-colors duration-300"
                  >
                    Informações sobre Financiamento
                  </button>
                </div>
              </div>
            </div>
            
            {/* Seção de FAQ rápido */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
                Perguntas Frequentes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Vocês fazem financiamento?
                  </h3>
                  <p className="text-gray-600">
                    Sim! Trabalhamos com as melhores condições de financiamento do mercado.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    As motos têm garantia?
                  </h3>
                  <p className="text-gray-600">
                    Todas as nossas motocicletas passam por revisão e vêm com garantia.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Posso fazer test drive?
                  </h3>
                  <p className="text-gray-600">
                    Claro! Agende uma visita e teste a moto antes da compra.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Aceitam moto como parte do pagamento?
                  </h3>
                  <p className="text-gray-600">
                    Sim, avaliamos sua moto atual e incluímos no negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp onWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
};

export default Contact;
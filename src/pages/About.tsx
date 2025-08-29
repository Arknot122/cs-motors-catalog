import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const About = () => {
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
              Sobre a CS Motos
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-cs-red-500">
                  Nossa História
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  A CS Motos é uma empresa especializada na venda de motocicletas seminovas e usadas, 
                  com anos de experiência no mercado. Nosso compromisso é oferecer veículos de qualidade 
                  com procedência garantida e preços justos.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Trabalhamos com as melhores marcas do mercado, sempre prezando pela transparência 
                  e confiabilidade em todas as nossas negociações.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Por que escolher a CS Motos?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cs-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Motos revisadas e com garantia</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cs-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Financiamento facilitado</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cs-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Atendimento personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cs-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Procedência garantida</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Encontre sua moto ideal
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Entre em contato conosco e descubra as melhores opções de motocicletas 
                disponíveis em nosso estoque.
              </p>
              <button
                onClick={() => handleWhatsAppClick("Olá! Vim do site e gostaria de conhecer mais sobre a CS Motos.")}
                className="bg-cs-red-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-cs-red-600 transition-colors duration-300"
              >
                CONSULTAR AGORA
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp onWhatsAppClick={handleWhatsAppClick} />
    </div>
  );
};

export default About;
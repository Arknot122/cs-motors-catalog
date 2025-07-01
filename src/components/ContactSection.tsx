
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-cs-dark-900">Contato</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-cs-red-200 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-r from-cs-red-500 to-cs-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-cs">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2 text-cs-dark-900 text-lg">Telefone</h4>
            <p className="text-cs-dark-600 font-medium">(62) 9 8166-0042</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-cs-red-200 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-r from-cs-red-500 to-cs-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-cs">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2 text-cs-dark-900 text-lg">Email</h4>
            <p className="text-cs-dark-600 font-medium">csmotorscanedo@hotmail.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-cs-red-200 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-r from-cs-red-500 to-cs-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-cs">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2 text-cs-dark-900 text-lg">Endereço</h4>
            <p className="text-cs-dark-600 font-medium text-center leading-relaxed">
              Av. Senador Canedo, Quadra 71, Lote 11, Casa III, Vila São Sebastião, Senador Canedo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

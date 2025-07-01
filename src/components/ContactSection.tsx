
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">📍 Contato</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 hover:border-cyan-200">
            <Phone className="w-8 h-8 text-red-500 mb-4" />
            <h4 className="font-semibold mb-2">Telefone</h4>
            <p className="text-gray-600">(11) 99999-9999</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 hover:border-cyan-200">
            <Mail className="w-8 h-8 text-red-500 mb-4" />
            <h4 className="font-semibold mb-2">Email</h4>
            <p className="text-gray-600">csmotorscanedo@hotmail.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 hover:border-cyan-200">
            <MapPin className="w-8 h-8 text-red-500 mb-4" />
            <h4 className="font-semibold mb-2">Endereço</h4>
            <p className="text-gray-600">Av. Senador Canedo, Quadra 71, Lote 11, Casa III, Vila São Sebastião, Senador Canedo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

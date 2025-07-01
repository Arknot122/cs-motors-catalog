
import { Clock, Users, Award } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-red-50 to-orange-50 border-y-2 border-red-200">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
            <Clock className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Últimas Unidades</h4>
            <p className="text-sm text-gray-600">Estoque limitado! Algumas motos têm apenas 1 unidade disponível.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">+500 Clientes</h4>
            <p className="text-sm text-gray-600">Mais de 500 clientes satisfeitos compraram suas motos conosco.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
            <Award className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Desconto Especial</h4>
            <p className="text-sm text-gray-600">Fale agora e ganhe desconto especial na sua moto!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

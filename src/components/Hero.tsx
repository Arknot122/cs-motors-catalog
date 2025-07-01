

const Hero = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Logo centralizada no topo com tamanhos responsivos otimizados */}
        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/5a74a683-d00a-4d01-b03c-f07f4fe6be15.png" 
            alt="GS Motos - Encontre sua próxima moto com facilidade" 
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-lg transition-all duration-300 hover:scale-105"
          />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-cyan-600 to-gray-800 bg-clip-text text-transparent">
          Encontre sua próxima moto com facilidade
        </h2>
        <p className="text-xl mb-8 text-gray-700">
          Motos revisadas, com garantia e parcelamento facilitado. Confira abaixo nossos modelos disponíveis!
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <span className="text-gray-800">Motos Revisadas</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
            <span className="text-gray-800">Com Garantia</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
            <span className="text-gray-800">Parcelamento Facilitado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


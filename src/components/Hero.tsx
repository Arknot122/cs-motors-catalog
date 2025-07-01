
const Hero = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Logo Placeholder */}
        <div className="flex justify-center mb-12">
          <div className="w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-500 text-sm mb-2">Logo Placeholder</div>
              <div className="text-gray-400 text-xs">Adicione sua logo aqui</div>
            </div>
          </div>
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

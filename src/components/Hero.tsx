
const Hero = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Logo CS MOTOS */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-gradient-to-r from-gray-900 to-black p-8 rounded-xl shadow-2xl">
            {/* CS com efeito de velocidade */}
            <div className="relative mb-2">
              <div className="text-6xl md:text-7xl lg:text-8xl font-black text-[#FF3333] tracking-wider relative">
                CS
                {/* Efeitos de velocidade */}
                <div className="absolute inset-0 text-[#FF3333] opacity-30 transform translate-x-1 translate-y-1 -z-10">
                  CS
                </div>
                <div className="absolute inset-0 text-[#FF3333] opacity-20 transform translate-x-2 translate-y-2 -z-20">
                  CS
                </div>
              </div>
            </div>
            
            {/* MOTOS */}
            <div className="text-white text-lg md:text-xl lg:text-2xl font-bold tracking-[0.3em] uppercase">
              MOTOS
            </div>
          </div>
        </div>
        
        <p className="text-xl mb-8 text-gray-700">
          Motos revisadas, com garantia e parcelamento facilitado. Confira abaixo nossos modelos disponíveis!
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#FF3333] rounded-full mr-2"></div>
            <span className="text-gray-800">Motos Revisadas</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#FF3333] rounded-full mr-2"></div>
            <span className="text-gray-800">Com Garantia</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#FF3333] rounded-full mr-2"></div>
            <span className="text-gray-800">Parcelamento Facilitado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

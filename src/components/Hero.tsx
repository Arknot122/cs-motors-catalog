const Hero = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Logo GS MOTOS - Reprodução exata da original */}
        <div className="flex justify-center mb-12">
          <div className="relative group cursor-pointer">
            {/* Container principal da logo */}
            <div className="relative w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40">
              
              {/* Silhueta da moto no topo */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-12">
                {/* Guidão */}
                <div className="absolute top-1 left-8 w-16 h-1 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full"></div>
                <div className="absolute top-0 left-10 w-2 h-3 bg-red-500 rounded-sm"></div>
                <div className="absolute top-0 right-10 w-2 h-3 bg-red-500 rounded-sm"></div>
                
                {/* Corpo da moto */}
                <div className="absolute top-3 left-6 w-20 h-4 bg-gradient-to-r from-cyan-500 via-cyan-400 to-red-500 rounded-lg opacity-80"></div>
                
                {/* Roda traseira */}
                <div className="absolute top-4 left-2 w-6 h-6 border-2 border-cyan-400 rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent"></div>
                
                {/* Roda dianteira */}
                <div className="absolute top-4 right-2 w-6 h-6 border-2 border-red-400 rounded-full bg-gradient-to-br from-red-400/20 to-transparent"></div>
              </div>

              {/* Letras GS principais com efeito 3D */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {/* Sombra/profundidade das letras */}
                  <div className="absolute top-1 left-1 text-7xl md:text-8xl lg:text-9xl font-black text-gray-800 opacity-60 tracking-tighter">
                    GS
                  </div>
                  
                  {/* Letras principais com gradiente */}
                  <div className="relative text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                    <span className="bg-gradient-to-br from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                      GS
                    </span>
                  </div>
                  
                  {/* Linhas de velocidade à esquerda do G */}
                  <div className="absolute left-[-2rem] top-6 space-y-1">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-red-500 to-transparent opacity-80"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-transparent opacity-60"></div>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-red-500 to-transparent opacity-40"></div>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-transparent opacity-20"></div>
                  </div>
                  
                  {/* Linhas de velocidade à direita do S */}
                  <div className="absolute right-[-2rem] top-6 space-y-1">
                    <div className="w-6 h-0.5 bg-gradient-to-l from-red-500 to-transparent opacity-80"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-l from-red-500 to-transparent opacity-60"></div>
                    <div className="w-10 h-0.5 bg-gradient-to-l from-red-500 to-transparent opacity-40"></div>
                    <div className="w-12 h-0.5 bg-gradient-to-l from-red-500 to-transparent opacity-20"></div>
                  </div>
                  
                  {/* Contornos ciano nas letras */}
                  <div className="absolute inset-0 text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                    <span className="text-transparent" style={{
                      WebkitTextStroke: '2px #06B6D4',
                      textStroke: '2px #06B6D4'
                    }}>
                      GS
                    </span>
                  </div>
                </div>
              </div>

              {/* Texto MOTOS */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {/* Sombra do texto MOTOS */}
                  <div className="absolute top-0.5 left-0.5 text-xl md:text-2xl lg:text-3xl font-black text-gray-600 opacity-50 tracking-[0.3em]">
                    MOTOS
                  </div>
                  
                  {/* Texto MOTOS principal */}
                  <div className="relative text-xl md:text-2xl lg:text-3xl font-black text-white tracking-[0.3em]">
                    MOTOS
                  </div>
                </div>
              </div>

              {/* Fundo escuro atrás de tudo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl -z-10 shadow-2xl"></div>
              
              {/* Brilho ciano ao redor */}
              <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.3)] -z-10"></div>
              
              {/* Efeito de hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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

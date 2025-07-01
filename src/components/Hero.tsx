
const Hero = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-cyan-400 to-white bg-clip-text text-transparent">
          Encontre sua próxima moto com facilidade
        </h2>
        <p className="text-xl mb-8 text-gray-200">
          Motos revisadas, com garantia e parcelamento facilitado. Confira abaixo nossos modelos disponíveis!
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
            Motos Revisadas
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
            Com Garantia
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-300 rounded-full mr-2"></div>
            Parcelamento Facilitado
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

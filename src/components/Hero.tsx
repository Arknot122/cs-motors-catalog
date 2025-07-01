
const Hero = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/f3842823-f1b2-40f9-a163-c9eff6201464.png" 
            alt="CS Motos Logo" 
            className="w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 object-contain"
          />
        </div>
        
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

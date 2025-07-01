import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Hero = () => {
  return (
    <AuroraBackground className="h-auto min-h-screen py-16">
      <motion.section
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="px-4 text-center text-gray-900 relative z-10"
      >
        <div className="container mx-auto max-w-4xl">
        {/* Logo CS MOTOS */}
        <div className="flex justify-center mb-12">
          
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
      </motion.section>
    </AuroraBackground>
  );
};
export default Hero;
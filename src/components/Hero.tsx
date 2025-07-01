import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Hero = () => {
  return (
    <AuroraBackground className="h-auto min-h-screen py-8 md:py-16">
      <motion.section
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="px-2 md:px-4 text-center text-gray-900 relative z-10"
      >
        <div className="container mx-auto max-w-4xl px-2 md:px-4">
        {/* Logo CS MOTOS */}
        <div className="flex justify-center mb-8 md:mb-12">
          
        </div>
        
        <motion.p 
          className="text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-8 text-gray-700 font-medium leading-relaxed px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
            className="inline-block overflow-hidden whitespace-nowrap"
            style={{ 
              borderRight: "2px solid #FF3333",
              animation: "blink 1s infinite"
            }}
          >
            Motos revisadas, com garantia e parcelamento facilitado. Confira abaixo nossos modelos disponíveis!
          </motion.span>
        </motion.p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm px-2">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF3333] rounded-full mr-1.5 md:mr-2"></div>
            <span className="text-gray-800 font-medium">Motos Revisadas</span>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF3333] rounded-full mr-1.5 md:mr-2"></div>
            <span className="text-gray-800 font-medium">Com Garantia</span>
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF3333] rounded-full mr-1.5 md:mr-2"></div>
            <span className="text-gray-800 font-medium">Parcelamento Facilitado</span>
          </div>
        </div>
        </div>
      </motion.section>
    </AuroraBackground>
  );
};
export default Hero;
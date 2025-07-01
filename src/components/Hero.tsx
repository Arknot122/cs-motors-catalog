import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TypewriterText } from "@/components/ui/typewriter-text";

const Hero = () => {
  return (
    <AuroraBackground className="h-auto min-h-screen py-6 md:py-16">
      <motion.section
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="px-3 md:px-4 text-center text-foreground relative z-10 flex flex-col items-center justify-center min-h-screen"
      >
        <div className="container mx-auto max-w-5xl px-2 md:px-4">
          {/* Logo CS MOTOS */}
          <motion.div 
            className="flex justify-center mb-8 md:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <img 
              alt="CS MOTOS Logo" 
              src="/lovable-uploads/5750d438-35f0-454c-b1e8-d0ce84673fbf.png" 
              className="h-16 md:h-20 lg:h-24 w-auto object-contain"
            />
          </motion.div>
          
          {/* Main Hero Text with Typewriter Effect */}
          <motion.div 
            className="mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <TypewriterText
              text="Motos revisadas, com garantia e parcelamento facilitado. Confira abaixo nossos modelos disponíveis!"
              delay={1200}
              speed={60}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-secondary max-w-4xl mx-auto block px-2"
            />
          </motion.div>

          {/* Feature Points */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-primary rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
              <span className="text-secondary font-medium">Motos Revisadas</span>
            </div>
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-primary rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
              <span className="text-secondary font-medium">Com Garantia</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-primary rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
              <span className="text-secondary font-medium">Parcelamento Facilitado</span>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </AuroraBackground>
  );
};
export default Hero;
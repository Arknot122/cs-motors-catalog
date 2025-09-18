import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 50,
  className = "" 
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // After typing is complete, keep cursor blinking for a while then hide it
      const cursorTimer = setTimeout(() => {
        setShowCursor(false);
      }, 2000);

      return () => clearTimeout(cursorTimer);
    }
  }, [currentIndex, text, speed, hasStarted]);

  return (
    <span className={className} style={{ position: 'relative' }}>
      {/* Invisible full text to reserve space */}
      <span style={{ visibility: 'hidden', position: 'absolute', top: 0, left: 0, width: '100%' }}>
        {text}
      </span>
      
      {/* Visible typewriter text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {displayText}
        {showCursor && (
          <motion.span
            className="inline-block w-0.5 h-[1em] bg-primary ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        )}
      </motion.span>
    </span>
  );
};

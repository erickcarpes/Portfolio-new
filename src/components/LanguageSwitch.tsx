import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Wait for the "implode" animation before toggling state
    setTimeout(() => {
        toggleLanguage();
    }, 400); // Halfway through animation

    // Reset animation lock
    setTimeout(() => {
        setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
        <motion.button
            onClick={handleToggle}
            className="relative w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={isAnimating ? {
                rotate: [0, 720], 
                scale: [1, 0, 1.2, 1],
                borderRadius: ["50%", "20%", "50%"]
            } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <AnimatePresence mode="wait">
                <motion.img 
                    key={language}
                    src={language === 'pt' ? 'https://flagcdn.com/w80/br.png' : 'https://flagcdn.com/w80/us.png'}
                    alt={language === 'pt' ? 'Português' : 'English'}
                    className="w-8 h-8 object-cover rounded-full shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                />
            </AnimatePresence>

            {/* Crazy Particles/Glow on Click */}
            {isAnimating && (
                <>
                     <motion.div 
                        className="absolute inset-0 bg-[#CF4BD6] mix-blend-color-dodge"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.div 
                        className="absolute w-full h-full border-2 border-white rounded-full"
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    />
                </>
            )}
        </motion.button>
    </div>
  );
}

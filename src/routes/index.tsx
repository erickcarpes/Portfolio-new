import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Career from '@/components/Career';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import TechStack from '@/components/TechStack'; // Import TechStack
import LanguageSwitch from '@/components/LanguageSwitch'; // Import LanguageSwitch
import LiquidEther from '@/components/LiquidEther';
import HyperSpeed from '@/components/Hyperspeed';
import BlurText from '@/components/BlurText';
import GradientText from '@/components/GradientText';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

export const Route = createFileRoute('/')({
  component: () => (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  ),
})

function Hero() {
  const { scrollYProgress } = useScroll();
  const contentScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const { t } = useLanguage();
  
  // Lazy load HyperSpeed to prevent WebGL context conflicts
  const [showHyperSpeed, setShowHyperSpeed] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHyperSpeed(true);
    }, 2000); // 2 second delay
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Layer 1: Liquid Ether */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#78B4AF', '#CF4BD6', '#7729A3']}
          mouseForce={10}
          cursorSize={90}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoRampDuration={0.6}
        />
      </div>

      {/* Background Layer 2: HyperSpeed (Lazy loaded with delay) */}
      {showHyperSpeed && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        >
        <HyperSpeed />
        </motion.div>
      )}
      {/* Content */}
      <motion.div
        style={{ scale: contentScale, opacity: contentOpacity }}
        className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <BlurText
                key={t.hero.line1} // Key to force re-render on lang change
                text={t.hero.line1}
                delay={50}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-6xl font-bold text-white tracking-tight"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
               <GradientText
                colors={["#78B4AF", "#CF4BD6", "#7729A3"]}
                animationSpeed={3}
                showBorder={false}
                className="text-4xl md:text-6xl font-bold tracking-tight">
                  {t.hero.word}
                </GradientText>
                <BlurText
                  key={t.hero.line2}
                  text={t.hero.line2}
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                />
            </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8"
        >
          <span className="text-sm md:text-base tracking-[0.2em] uppercase text-gray-400 font-light">
            {t.hero.role}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function App() {
  return (
    <main className="bg-black min-h-screen w-full text-white selection:bg-[#CF4BD6] selection:text-white transition-all duration-500">
      <LanguageSwitch />
      <Navbar />
      
      <Hero />
      <About />
      <Career />
      <TechStack />
      <Projects />
      <Contact />
      
    </main>
  )
}

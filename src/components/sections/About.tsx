import { motion } from 'framer-motion';
import BlurText from '../BlurText';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-900 px-6 py-20 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CF4BD6] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#78B4AF] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl w-full z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.2em] text-[#CF4BD6] mb-8 font-bold uppercase"
        >
          {t.about.title}
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 items-center">
            {/* Bio */}
            <div>
              <BlurText
                key={t.about.bio1} // distinct key to re-trigger animation on lang change
                text={t.about.bio1}
                delay={20}
                animateBy="words"
                direction="top"
                className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8"
              />
              
              <BlurText
                key={t.about.bio2}
                text={t.about.bio2}
                delay={20}
                animateBy="words"
                direction="top"
                className="text-lg text-gray-400 leading-relaxed"
              />
            </div>
        </div>
      </div>
    </section>
  );
}

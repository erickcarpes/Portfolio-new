import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Magnet from '../Magnet';

export default function TechStack() {
  const { t } = useLanguage();

  const halfIndex = Math.ceil(t.tech.items.length / 2);
  const topRow = t.tech.items.slice(0, halfIndex);
  const bottomRow = t.tech.items.slice(halfIndex);

  // Triple duplication for seamless loop
  const duplicatedTop = [...topRow, ...topRow, ...topRow];
  const duplicatedBottom = [...bottomRow, ...bottomRow, ...bottomRow];

  return (
    <section id="tech" className="w-full bg-zinc-900 py-24 overflow-hidden relative flex flex-col items-center">
        {/* Background decoration - same as About section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CF4BD6] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#78B4AF] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />

        <div className="text-center mb-16 z-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
                {t.tech.title}
            </motion.h2>
        </div>

        <div className="flex flex-col gap-8 w-full">
            {/* Top Row - Left */}
            <MarqueeRow items={duplicatedTop} direction="left" />
            
            {/* Bottom Row - Right */}
            <MarqueeRow items={duplicatedBottom} direction="right" />
        </div>
    </section>
  );
}

function MarqueeRow({ items, direction }: { items: any[], direction: "left" | "right" }) {
    return (
        <div className="relative w-full flex overflow-hidden group">
            <motion.div
                className="flex gap-8 px-4"
                animate={{ x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
                transition={{ 
                    duration: 30, 
                    ease: "linear", 
                    repeat: Infinity,
                }}
                style={{ width: "fit-content" }}
                // Pause on hover is handled by CSS below to avoid complex state
            >
                {items.map((item, index) => (
                    <div 
                        key={`${item.name}-${index}`} 
                        className="shrink-0"
                    >
                         <Magnet padding={15} magnetStrength={3}>
                            <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-4 bg-white/5 border border-white/10 rounded-full text-sm md:text-xl text-gray-300 font-medium hover:bg-[#CF4BD6] hover:text-white hover:border-[#CF4BD6] hover:shadow-[0_0_30px_rgba(207,75,214,0.5)] transition-all duration-300 backdrop-blur-sm group-hover/card:scale-105"
                            >
                                <img src={item.icon} alt={item.name} className="w-4 h-4 md:w-6 md:h-6" />
                                <span>{item.name}</span>
                            </a>
                        </Magnet>
                    </div>
                ))}
            </motion.div>
             <style>{`
            .group:hover div {
                animation-play-state: paused !important;
            }
        `}</style>
        </div>
    )
}

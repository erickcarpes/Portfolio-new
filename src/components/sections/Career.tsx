import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

export default function Career() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="career"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-6 py-20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#CF4BD6] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#78B4AF] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl w-full z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.2em] text-[#CF4BD6] mb-16 font-bold uppercase"
        >
          {t.career.title}
        </motion.h2>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-[#CF4BD6] via-[#78B4AF] to-transparent" />

          {/* Timeline Items */}
          {t.career.items.map((item: any, index: number) => (
            <motion.div
              key={item.company}
              variants={itemVariants}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0
                  ? 'md:flex-row flex-row'
                  : 'md:flex-row-reverse flex-row'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#CF4BD6] rounded-full z-10 shadow-[0_0_20px_rgba(207,75,214,0.6)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
              />

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}
              >
                <motion.div
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#CF4BD6]/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Company & Role */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-[#CF4BD6]/20 rounded-lg">
                      <Briefcase className="w-5 h-5 text-[#CF4BD6]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#CF4BD6] transition-colors">
                        {item.company}
                      </h3>
                      <p className="text-[#78B4AF] font-medium">{item.role}</p>
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {item.highlights.map((highlight: string, hIndex: number) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: hIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 bg-[#CF4BD6] rounded-full shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Magnet from './Magnet';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="min-h-screen w-full bg-black px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight"
        >
          {t.projects.title} <span className="text-[#CF4BD6]">{t.projects.titleSuffix}</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-zinc-900/50 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Image Side */}
              <div className="relative overflow-hidden rounded-2xl aspect-video lg:order-last">
                <div className="absolute inset-0 bg-[#CF4BD6]/20 group-hover:bg-transparent transition-colors z-10" />
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white group-hover:text-[#CF4BD6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-4 pt-4">
                  <Magnet padding={50} magnetStrength={5}>
                    <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-[#CF4BD6] hover:text-white transition-colors">
                      {t.projects.links.demo} <ExternalLink size={18} />
                    </a>
                  </Magnet>
                  <Magnet padding={50} magnetStrength={5}>
                    <a href="#" className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                      {t.projects.links.code} <Github size={18} />
                    </a>
                  </Magnet>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

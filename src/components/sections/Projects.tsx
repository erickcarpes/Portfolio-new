import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedImages, setSelectedImages] = useState<Record<number, number>>({});

  return (
    <section id="projects" className="min-h-screen w-full bg-black px-4 md:px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#CF4BD6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <span className="text-[#CF4BD6] text-xs md:text-sm font-mono tracking-wider uppercase mb-2 md:mb-4 block">
            {t.projects.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            {t.projects.title} <span className="text-[#CF4BD6]">{t.projects.titleSuffix}</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16 md:space-y-32">
          {t.projects.items.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className={`group relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Image Side - 7 columns */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-16/10 bg-zinc-900">
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Project number */}
                    <span className="absolute top-3 left-3 md:top-6 md:left-6 z-20 text-5xl md:text-8xl font-bold text-white/10 group-hover:text-[#CF4BD6]/20 transition-colors duration-500">
                      0{index + 1}
                    </span>
                    
                    {/* Main Image with animation */}
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={selectedImages[index] || 0}
                        src={project.images[selectedImages[index] || 0]} 
                        alt={project.title}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </AnimatePresence>
                    
                    {/* Status badge */}
                    <div className="absolute top-3 right-3 md:top-6 md:right-6 z-20">
                      <span className={`px-2 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
                        project.status === 'live' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : project.status === 'development'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.statusLabel}
                      </span>
                    </div>

                    {/* Quick action overlay - hidden on mobile (touch) */}
                    <div className="hidden md:flex absolute inset-0 z-20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={project.demoUrl || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#CF4BD6] hover:text-white"
                      >
                        {t.projects.links.viewProject} <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Thumbnail Gallery - only show if more than 1 image */}
                  {project.images.length > 1 && (
                    <div className="relative mt-3 md:mt-4">
                      {/* Left fade indicator */}
                      <div className="absolute left-0 top-0 bottom-2 w-8 bg-linear-to-r from-black to-transparent z-10 pointer-events-none opacity-50" />
                      {/* Right fade indicator */}
                      <div className="absolute right-0 top-0 bottom-2 w-8 bg-linear-to-l from-black to-transparent z-10 pointer-events-none opacity-50" />
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-2 md:gap-3 overflow-x-auto pb-3 px-2 scroll-smooth snap-x snap-mandatory"
                        style={{
                          scrollbarWidth: 'thin',
                          scrollbarColor: '#CF4BD6 rgba(255,255,255,0.1)',
                        }}
                      >
                        {project.images.map((img, imgIndex) => (
                          <motion.button
                            key={imgIndex}
                            onClick={() => setSelectedImages(prev => ({ ...prev, [index]: imgIndex }))}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative flex-shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-300 snap-start ${
                              (selectedImages[index] || 0) === imgIndex
                                ? 'border-[#CF4BD6] ring-2 ring-[#CF4BD6]/30 scale-105'
                                : 'border-white/10 hover:border-white/30'
                            }`}
                          >
                            <img 
                              src={img} 
                              alt={`${project.title} - Image ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {/* Active indicator overlay */}
                            {(selectedImages[index] || 0) === imgIndex && (
                              <div className="absolute inset-0 bg-[#CF4BD6]/10" />
                            )}
                          </motion.button>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Content Side - 5 columns */}
                <div className={`lg:col-span-5 space-y-4 md:space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1 lg:text-right' : ''}`}>
                  {/* Project type label */}
                  <span className="text-[#CF4BD6] text-xs md:text-sm font-mono tracking-wider uppercase">
                    {project.type}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-[#CF4BD6] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description card */}
                  <div className="bg-zinc-900/80 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/5 space-y-3">
                    {project.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className={`flex flex-wrap gap-1.5 md:gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-mono text-gray-300 bg-white/5 rounded-lg border border-white/10 hover:border-[#CF4BD6]/50 hover:text-[#CF4BD6] transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project date */}
                  <div className={`flex items-center gap-2 text-gray-500 text-xs md:text-sm ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>

                  {/* Action links */}
                  <div className={`flex gap-4 pt-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-white hover:text-[#CF4BD6] transition-colors text-sm md:text-base"
                      >
                        <span className="font-medium">{t.projects.links.demo}</span>
                        <ExternalLink size={16} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-white hover:text-[#CF4BD6] transition-colors text-sm md:text-base"
                      >
                        <span className="font-medium">{t.projects.links.code}</span>
                        <Github size={16} className="transform group-hover/link:rotate-12 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative line connecting projects */}
              {index < t.projects.items.length - 1 && (
                <div className="hidden lg:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

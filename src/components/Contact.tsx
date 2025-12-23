import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Magnet from './Magnet';
import { useLanguage } from '@/context/LanguageContext';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/erickcarpes' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/erick-carpes/' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "erickcarpesmmc@gmail.com";
  const { t } = useLanguage();

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-black flex flex-col justify-between px-6 py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-[#78B4AF]/20 to-[#CF4BD6]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grow flex flex-col justify-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
             {t.contact.title1} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#78B4AF] via-[#CF4BD6] to-[#7729A3]">
                {t.contact.title2}
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            {t.contact.subtitle}
          </p>

          <div className="flex justify-center mb-16">
            <Magnet padding={20} magnetStrength={3}>
              <button 
                onClick={copyEmail}
                className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white text-lg hover:bg-white/10 hover:scale-105 transition-all active:scale-95"
              >
                <Mail size={20} />
                {email}
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-gray-500 group-hover:text-white transition-colors" />}
              </button>
            </Magnet>
          </div>
        </motion.div>
      </div>

      <footer className="w-full border-t border-white/10 pt-12 pb-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-400 text-sm">
                {t.contact.rights}
            </div>

            <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                        <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            aria-label={link.name}
                        >
                            <link.icon size={24} />
                        </a>
                ))}
            </div>
        </div>
      </footer>
    </section>
  );
}

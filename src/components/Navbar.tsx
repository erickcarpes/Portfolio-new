
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, History } from "lucide-react";
import { useState } from "react";
import { useLanguage } from '@/context/LanguageContext';


export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const navItems = [
    { name: t.navbar.home, icon: Home, id: "hero" },
    { name: t.navbar.about, icon: User, id: "about" },
    { name: t.navbar.career, icon: History, id: "career" },
    { name: t.navbar.projects, icon: Briefcase, id: "projects" },
    { name: t.navbar.tech, icon: Code, id: "tech" },
    { name: t.navbar.contact, icon: Mail, id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md md:w-auto md:max-w-none">
      <div className="flex items-center justify-center gap-2 md:gap-4 py-2 md:py-3 px-3 md:px-4 bg-white/10 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative flex flex-col items-center justify-center p-1.5 md:p-2 rounded-full transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <item.icon
              size={20}
              className={`md:w-6 md:h-6 transition-colors duration-300 ${
                hoveredIndex === index ? "text-[#CF4BD6]" : "text-gray-400"
              }`}
            />
            
            {/* Tooltip - hidden on mobile */}
            {hoveredIndex === index && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -40 }}
                exit={{ opacity: 0, y: 10 }}
                className="hidden md:block absolute text-xs font-semibold text-white bg-black/80 px-2 py-1 rounded top-0 pointer-events-none whitespace-nowrap"
              >
                {item.name}
              </motion.span>
            )}
            
            {/* Active Indicator (Optional - could track scroll position later) */}
            <div className={`absolute -bottom-1 w-1 h-1 rounded-full bg-[#CF4BD6] opacity-0 transition-opacity ${hoveredIndex === index ? 'opacity-100' : ''}`} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

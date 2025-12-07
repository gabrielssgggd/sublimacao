import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Image, PenTool, Palette, Gamepad2, Tv, Trophy, Sparkles } from 'lucide-react';

const software = [
  { name: 'Photoshop', icon: <Layers className="w-6 h-6" />, ext: 'PSD', color: 'text-blue-400' },
  { name: 'CorelDraw', icon: <PenTool className="w-6 h-6" />, ext: 'CDR', color: 'text-green-400' },
  { name: 'Illustrator', icon: <Palette className="w-6 h-6" />, ext: 'AI', color: 'text-orange-400' },
  { name: 'PNG (Sem Fundo)', icon: <Image className="w-6 h-6" />, ext: 'PNG', color: 'text-purple-400' },
];

const categories = [
  { name: 'Artes Cristãs', icon: <Sparkles size={24} /> },
  { name: 'Heróis & Vilões', icon: <Gamepad2 size={24} /> },
  { name: 'Futebol', icon: <Trophy size={24} /> },
  { name: 'Filmes & Séries', icon: <Tv size={24} /> },
  { name: 'Infantil', icon: <Palette size={24} /> },
  { name: 'Streetwear', icon: <Layers size={24} /> },
];

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-dark-900 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000_100%)] opacity-80"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Software Compatibility Strip */}
        <div className="mb-28">
            <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-px w-12 bg-gray-800"></div>
                <h3 className="text-gray-400 uppercase tracking-[0.25em] text-xs font-bold">Compatibilidade Total</h3>
                <div className="h-px w-12 bg-gray-800"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
                {software.map((soft, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group flex items-center gap-5 px-6 py-5 bg-dark-850 border border-white/10 rounded-xl hover:bg-dark-800 hover:border-gold-500/30 hover:shadow-glow transition-all duration-300 w-full md:w-[260px]"
                    >
                        <div className={`p-3 rounded-lg bg-black/40 border border-white/5 ${soft.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-md`}>
                            {soft.icon}
                        </div>
                        <div>
                            <div className="font-bold text-white text-lg group-hover:text-gold-200 transition-colors">{soft.name}</div>
                            <div className="text-xs text-gray-500 font-mono bg-white/5 px-2 py-0.5 rounded inline-block mt-1 border border-white/5 group-hover:border-gold-500/10">{soft.ext}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Main Categories */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Tudo em <span className="text-gradient-gold">Um Só Lugar</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Não perca mais tempo procurando. Cubra todos os nichos mais lucrativos do mercado.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {categories.map((cat, idx) => (
                <motion.div
                    key={idx}
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="aspect-[4/5] relative group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black hover:from-white/10 hover:to-dark-800 hover:border-gold-500/40 hover:shadow-glow transition-all duration-300 cursor-default flex flex-col items-center justify-center p-6"
                >
                    <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-5 bg-white/5 rounded-full mb-4 text-gold-400 backdrop-blur-md border border-white/10 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-400 transition-colors shadow-lg"
                    >
                        {cat.icon}
                    </motion.div>
                    <span className="font-bold text-sm md:text-base text-gray-200 tracking-wide group-hover:text-white transition-colors text-center">{cat.name}</span>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
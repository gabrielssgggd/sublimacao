import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, ShieldCheck, Star } from 'lucide-react';

const Hero3D: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tilt effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 25 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const dragX = (event.clientX - rect.left) - width / 2;
    const dragY = (event.clientY - rect.top) - height / 2;
    x.set(dragX);
    y.set(dragY);
  }

  const rotateX = useTransform(mouseY, [-400, 400], [8, -8]);
  const rotateY = useTransform(mouseX, [-400, 400], [-8, 8]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden bg-dark-950" onMouseMove={handleMouseMove} ref={ref}>
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-gold-600/5 rounded-full blur-[140px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mb-12 relative"
        >
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 backdrop-blur-md shadow-glow hover:bg-gold-500/10 transition-colors"
          >
            <Star className="w-4 h-4 text-gold-400 fill-gold-400 animate-pulse" />
            <span className="text-gold-300 text-xs md:text-sm font-bold tracking-widest uppercase">Acesso Vitalício • Downloads Ilimitados</span>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1] mb-6 tracking-tight drop-shadow-2xl">
            Coleção <span className="text-gradient-gold relative inline-block">
              Zeus 2025
              {/* Decorative underline */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            O Maior Pacote de <strong className="text-gray-100">Artes para Sublimação</strong> do Brasil. 
            <br className="hidden md:block"/> 
            De <span className="line-through text-gray-600 decoration-red-500 decoration-2">R$ 97,00</span> por apenas <span className="text-gold-400 font-bold text-3xl align-middle ml-2 drop-shadow-md">R$ 9,99</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.a 
              href="#pricing"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255, 215, 0, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-full font-bold text-black text-lg md:text-xl flex items-center gap-3 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gold-300/50"
            >
              <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 ease-out"></div>
              <span className="relative z-10 tracking-tight">QUERO BAIXAR AGORA</span>
              <Download className="w-6 h-6 animate-bounce relative z-10" />
            </motion.a>
            
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium bg-black/40 px-4 py-2 rounded-lg border border-white/5 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Compra 100% Segura</span>
            </div>
          </div>
        </motion.div>

        {/* 3D Product Mockup - Single Image */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1200 }}
          className="relative w-full max-w-5xl flex items-center justify-center pt-8"
        >
           {/* Centerpiece: Single Hero Image */}
           <motion.div 
             className="relative z-20 w-full max-w-[900px] rounded-2xl overflow-hidden"
             initial={{ opacity: 0, scale: 0.8, y: 50 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             style={{ 
               transformStyle: "preserve-3d",
               z: 50
             }}
           >
             <img 
              src="https://i.postimg.cc/15C6pG8q/Generated-Image-December-06-2025-5-55PM.jpg" 
              alt="Coleção Zeus Bundle" 
              className="w-full h-auto object-cover rounded-2xl border-2 border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(255,160,0,0.1)]" 
             />
           </motion.div>

            {/* Glowing Ring Background behind image */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gold-500/10 rounded-full animate-[spin_60s_linear_infinite]" style={{ transform: 'translate(-50%, -50%) rotateX(70deg)' }}></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'translate(-50%, -50%) rotateX(70deg)' }}></div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-background z-0">
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[150px]"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium tracking-wide text-gray-300">Available for new projects</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-white max-w-4xl leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Code. Create. <br />
          <span className="text-gradient">Elevate.</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          I build premium websites that bring local businesses more customers. <br className="hidden md:block"/>
          <span className="text-gray-300">Design that converts. Code that performs.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <a 
            href="#contact"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a 
            href="#work"
            className="px-8 py-4 text-white font-medium rounded-full border border-white/10 hover:bg-white/5 transition-colors"
          >
            View my work
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}

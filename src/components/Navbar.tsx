import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import logoUrl from "@assets/AE270CF0-256C-421F-B504-A5E7A3214788_1776862074978.png";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src={logoUrl} alt="PixelByTB Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full relative z-10 object-contain bg-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white hidden sm:block">PixelByTB</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(100,100,255,0.2)]"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-200 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-center shadow-[0_0_20px_rgba(100,100,255,0.3)]"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

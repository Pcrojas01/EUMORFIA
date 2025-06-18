import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToCatalog = () => {
    document.getElementById('camisas')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStyles = () => {
    document.getElementById('estilos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark via-smoke to-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-6xl md:text-8xl font-gothic font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-primary">EU</span>
            <span className="text-light">MORFIA</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 font-urban mb-2">ROPA ALTERNATIVA</p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          {/* Main Quote */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <blockquote className="text-2xl md:text-3xl font-gothic text-light leading-relaxed mb-4">
              "Desde la sombra de la ciudad<br />
              hasta el espíritu del ritual."
            </blockquote>
            <p className="text-xl md:text-2xl text-primary font-bold font-urban">
              EUMORFIA viste tu fuerza.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={scrollToCatalog}
              className="btn-primary text-lg px-8 py-4 font-urban"
            >
              EXPLORAR CATÁLOGO
            </button>
            <button 
              onClick={scrollToStyles}
              className="btn-secondary text-lg px-8 py-4 font-urban"
            >
              VER LOOKBOOK
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
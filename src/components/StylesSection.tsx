import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StylesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('estilos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const styles = [
    {
      id: 'gothic',
      title: 'GÓTICO',
      subtitle: 'Elegancia oscura, rebelión silenciosa.',
      description: 'Sumérgete en la estética de las sombras. Diseños que hablan el lenguaje de la noche.',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '🩸'
    },
    {
      id: 'tribal',
      title: 'TRIBAL',
      subtitle: 'Diseños con alma ancestral.',
      description: 'Conecta con la sabiduría antigua. Símbolos que trascienden el tiempo.',
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '🌀'
    },
    {
      id: 'urban',
      title: 'URBANO ALTERNATIVO',
      subtitle: 'Expresión sin reglas, caos con estilo.',
      description: 'La calle es tu lienzo. Fusión perfecta entre rebeldía y arte.',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: '🧨'
    }
  ];

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`category-${category}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estilos" className="py-20 bg-gradient-to-b from-dark to-smoke">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-gothic font-bold text-primary mb-4">
            EXPLORA TU ESTILO
          </h2>
          <p className="text-xl text-gray-300 font-urban max-w-2xl mx-auto">
            Cada diseño cuenta una historia. ¿Cuál es la tuya?
          </p>
          <div className="w-32 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <motion.div
              key={style.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => scrollToCategory(style.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-smoke border border-gray-800 hover:border-primary transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={style.image} 
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-4xl">
                    {style.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-gothic font-bold text-primary mb-2 group-hover:text-red-400 transition-colors">
                    {style.title}
                  </h3>
                  <p className="text-lg text-gray-300 font-urban mb-3">
                    {style.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {style.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-urban font-bold group-hover:text-red-400 transition-colors">
                    <span>EXPLORAR COLECCIÓN</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesSection;
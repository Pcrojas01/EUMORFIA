import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BrandSection = () => {
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

    const element = document.getElementById('marca');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="marca" className="py-20 bg-gradient-to-br from-dark via-smoke to-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="mb-12">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-float shadow-2xl">
                <span className="text-white font-gothic font-bold text-4xl">E</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-gothic font-bold text-primary mb-4">
                NUESTRA MARCA
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Main Quote */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <blockquote className="text-3xl md:text-4xl font-gothic text-light leading-relaxed mb-8">
                "No somos una tienda.<br />
                <span className="text-primary">Somos un grito gráfico.</span>"
              </blockquote>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-6 text-lg md:text-xl text-gray-300 font-urban leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Fusionamos el <span className="text-red-400 font-bold">caos gótico</span> con la{' '}
                <span className="text-orange-400 font-bold">herencia tribal</span>, para vestir almas que no siguen caminos...{' '}
                <span className="text-primary font-bold">los abren.</span>
              </p>
              
              <p>
                Cada diseño es una declaración de independencia, una marca de identidad para quienes se atreven a ser diferentes.
              </p>
              
              <p>
                EUMORFIA no es solo ropa. Es la armadura de los rebeldes, el uniforme de los soñadores, 
                la segunda piel de quienes escriben su propia historia.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="card text-center">
                <div className="text-4xl mb-4">🩸</div>
                <h3 className="text-xl font-gothic font-bold text-red-400 mb-2">AUTENTICIDAD</h3>
                <p className="text-gray-400 text-sm">
                  Cada diseño nace de la pasión genuina por el arte alternativo.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="text-4xl mb-4">🌀</div>
                <h3 className="text-xl font-gothic font-bold text-orange-400 mb-2">HERENCIA</h3>
                <p className="text-gray-400 text-sm">
                  Honramos las tradiciones ancestrales con un toque moderno.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="text-4xl mb-4">🧨</div>
                <h3 className="text-xl font-gothic font-bold text-blue-400 mb-2">REBELDÍA</h3>
                <p className="text-gray-400 text-sm">
                  Desafiamos las normas para crear algo verdaderamente único.
                </p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-2xl font-gothic text-primary mb-6">
                ¿Listo para vestir tu fuerza?
              </p>
              <button 
                onClick={() => document.getElementById('camisas')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-4 font-urban"
              >
                DESCUBRE TU ESTILO
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
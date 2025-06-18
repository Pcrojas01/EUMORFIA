import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-dark border-t border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-float shadow-lg">
                <span className="text-white font-gothic font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="text-2xl font-gothic font-bold text-primary">EUMORFIA</h3>
                <p className="text-xs text-gray-400 font-urban">ROPA ALTERNATIVA</p>
              </div>
            </div>
            
            <p className="text-gray-400 font-urban leading-relaxed mb-6 max-w-md">
              Fusionamos el caos gótico con la herencia tribal, para vestir almas que no siguen caminos... los abren.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-smoke rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-smoke rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-smoke rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-gothic font-bold text-light mb-4">NAVEGACIÓN</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-primary transition-colors font-urban">Inicio</a></li>
              <li><a href="#camisas" className="text-gray-400 hover:text-primary transition-colors font-urban">Catálogo</a></li>
              <li><a href="#estilos" className="text-gray-400 hover:text-primary transition-colors font-urban">Estilos</a></li>
              <li><a href="#marca" className="text-gray-400 hover:text-primary transition-colors font-urban">Nuestra Marca</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-gothic font-bold text-light mb-4">CONTACTO</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-urban text-sm">info@eumorfia.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-urban text-sm">+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-urban text-sm">Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 font-urban text-sm">
            © 2025 EUMORFIA. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors font-urban text-sm">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors font-urban text-sm">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
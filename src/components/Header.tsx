import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state, dispatch } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartToggle = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-float shadow-lg">
              <span className="text-white font-gothic font-bold text-xl">E</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-gothic font-bold text-primary">EUMORFIA</h1>
              <p className="text-xs text-gray-400 font-urban">ROPA ALTERNATIVA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-light hover:text-primary transition-colors font-urban">INICIO</a>
            <a href="#camisas" className="text-light hover:text-primary transition-colors font-urban">CAMISAS</a>
            <a href="#estilos" className="text-light hover:text-primary transition-colors font-urban">ESTILOS</a>
            <a href="#contacto" className="text-light hover:text-primary transition-colors font-urban">CONTACTO</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-smoke rounded-lg px-4 py-2 max-w-xs">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-light placeholder-gray-400 outline-none flex-1 text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-light hover:text-primary transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button 
              onClick={handleCartToggle}
              className="relative text-light hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse-glow">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-light hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#inicio" className="text-light hover:text-primary transition-colors font-urban">INICIO</a>
              <a href="#camisas" className="text-light hover:text-primary transition-colors font-urban">CAMISAS</a>
              <a href="#estilos" className="text-light hover:text-primary transition-colors font-urban">ESTILOS</a>
              <a href="#contacto" className="text-light hover:text-primary transition-colors font-urban">CONTACTO</a>
            </nav>
            
            {/* Mobile Search */}
            <div className="flex items-center bg-smoke rounded-lg px-4 py-2 mt-4">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-light placeholder-gray-400 outline-none flex-1 text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
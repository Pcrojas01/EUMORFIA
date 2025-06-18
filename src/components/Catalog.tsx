import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Catalog = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

    const element = document.getElementById('camisas');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(product => product.category === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [activeFilter, searchTerm]);

  const filters = [
    { id: 'all', name: 'TODOS', count: products.length },
    { id: 'gothic', name: 'GÓTICO', count: products.filter(p => p.category === 'gothic').length },
    { id: 'tribal', name: 'TRIBAL', count: products.filter(p => p.category === 'tribal').length },
    { id: 'urban', name: 'URBANO', count: products.filter(p => p.category === 'urban').length },
  ];

  const getCategoryProducts = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return (
    <section id="camisas" className="py-20 bg-smoke">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-gothic font-bold text-primary mb-4">
            CATÁLOGO
          </h2>
          <p className="text-xl text-gray-300 font-urban max-w-2xl mx-auto">
            50 diseños únicos que definen tu personalidad
          </p>
          <div className="w-32 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar camisas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-light placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-urban font-bold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-dark text-gray-300 hover:bg-gray-800 hover:text-primary border border-gray-700'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category Sections */}
        {activeFilter === 'all' ? (
          <div className="space-y-16">
            {/* Gothic Section */}
            <div id="category-gothic">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-3xl font-gothic font-bold text-red-400 mb-2 flex items-center">
                  🩸 GÓTICO
                </h3>
                <p className="text-gray-400 font-urban">Elegancia oscura, rebelión silenciosa</p>
                <div className="w-24 h-1 bg-red-400 mt-2"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getCategoryProducts('gothic').map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tribal Section */}
            <div id="category-tribal">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-3xl font-gothic font-bold text-orange-400 mb-2 flex items-center">
                  🌀 TRIBAL
                </h3>
                <p className="text-gray-400 font-urban">Diseños con alma ancestral</p>
                <div className="w-24 h-1 bg-orange-400 mt-2"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getCategoryProducts('tribal').map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Urban Section */}
            <div id="category-urban">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-3xl font-gothic font-bold text-blue-400 mb-2 flex items-center">
                  🧨 URBANO ALTERNATIVO
                </h3>
                <p className="text-gray-400 font-urban">Expresión sin reglas, caos con estilo</p>
                <div className="w-24 h-1 bg-blue-400 mt-2"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getCategoryProducts('urban').map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Products */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-400 font-urban">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
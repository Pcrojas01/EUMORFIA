import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import StylesSection from './components/StylesSection';
import BrandSection from './components/BrandSection';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-dark text-light">
        <Header />
        <Hero />
        <StylesSection />
        <Catalog />
        <BrandSection />
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
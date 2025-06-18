import React from 'react';
import { Star, ShoppingCart, Tag } from 'lucide-react';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'gothic': return 'text-red-400';
      case 'tribal': return 'text-orange-400';
      case 'urban': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'gothic': return 'GÓTICO';
      case 'tribal': return 'TRIBAL';
      case 'urban': return 'URBANO';
      default: return category.toUpperCase();
    }
  };

  return (
    <div className="card group relative">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NUEVO
          </span>
        )}
        {product.isPopular && (
          <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            POPULAR
          </span>
        )}
        {product.onSale && (
          <span className="bg-yellow-500 text-dark text-xs font-bold px-2 py-1 rounded-full">
            OFERTA
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Category */}
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-gray-400" />
          <span className={`text-sm font-urban font-bold ${getCategoryColor(product.category)}`}>
            {getCategoryName(product.category)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-gothic font-bold text-light group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-400">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary font-urban">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={addToCart}
          className="w-full btn-primary flex items-center justify-center gap-2 group-hover:bg-red-600 transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
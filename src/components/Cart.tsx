import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, CreditCard, Smartphone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const closeCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const handleCheckout = () => {
    if (selectedPayment) {
      setShowCheckout(false);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        dispatch({ type: 'CLEAR_CART' });
        closeCart();
      }, 3000);
    }
  };

  const paymentMethods = [
    { id: 'pse', name: 'PSE', icon: '🏦', description: 'Pago Seguro en Línea' },
    { id: 'nequi', name: 'Nequi', icon: '📱', description: 'Pago móvil' },
    { id: 'debit', name: 'Tarjeta Débito', icon: '💳', description: 'Visa, Mastercard' },
    { id: 'credit', name: 'Tarjeta Crédito', icon: '💎', description: 'Visa, Mastercard, Amex' },
    { id: 'paypal', name: 'PayPal', icon: '🌐', description: 'Pago internacional' },
  ];

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={closeCart}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-dark border-l border-gray-800 z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-gothic font-bold text-light">
                  CARRITO ({state.items.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="text-gray-400 hover:text-light transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 font-urban">Tu carrito está vacío</p>
                  <button
                    onClick={closeCart}
                    className="btn-primary mt-4"
                  >
                    SEGUIR COMPRANDO
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      className="bg-smoke rounded-lg p-4 border border-gray-800"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-gothic font-bold text-light text-sm mb-1">
                            {item.name}
                          </h3>
                          <p className="text-gray-400 text-xs mb-2">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-primary font-bold font-urban">
                              {formatPrice(item.price)}
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                              >
                                <Minus className="w-4 h-4 text-light" />
                              </button>
                              <span className="text-light font-bold w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                              >
                                <Plus className="w-4 h-4 text-light" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="p-6 border-t border-gray-800 bg-smoke">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-gothic font-bold text-light">TOTAL:</span>
                  <span className="text-2xl font-bold text-primary font-urban">
                    {formatPrice(state.total)}
                  </span>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  FINALIZAR COMPRA
                </button>
              </div>
            )}
          </motion.div>

          {/* Checkout Modal */}
          <AnimatePresence>
            {showCheckout && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 flex items-center justify-center z-60 p-4"
              >
                <div className="bg-dark border border-gray-800 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-gothic font-bold text-primary mb-2">
                      MÉTODO DE PAGO
                    </h3>
                    <p className="text-gray-400 font-urban">
                      Selecciona tu método de pago preferido
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                          selectedPayment === method.id
                            ? 'border-primary bg-primary/10'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <div className="font-bold text-light">{method.name}</div>
                            <div className="text-sm text-gray-400">{method.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowCheckout(false)}
                      className="flex-1 btn-secondary"
                    >
                      CANCELAR
                    </button>
                    <button
                      onClick={handleCheckout}
                      disabled={!selectedPayment}
                      className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      PAGAR {formatPrice(state.total)}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Confirmation Modal */}
          <AnimatePresence>
            {showConfirmation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 flex items-center justify-center z-60 p-4"
              >
                <div className="bg-dark border border-primary rounded-2xl p-8 max-w-md w-full text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  
                  <h3 className="text-2xl font-gothic font-bold text-primary mb-4">
                    ¡COMPRA EXITOSA!
                  </h3>
                  
                  <p className="text-gray-300 font-urban mb-6">
                    Tu pedido ha sido procesado correctamente. Recibirás un email de confirmación en breve.
                  </p>
                  
                  <div className="text-sm text-gray-400">
                    Cerrando automáticamente...
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
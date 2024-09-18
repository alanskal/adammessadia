import { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
  priceId: string;
  quantity: number;
  name: string;
  size: string[];
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(p => p.priceId === item.priceId);

      if (existingProduct) {
        return prevCart.map(p =>
          p.priceId === item.priceId
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      } else {
        return [...prevCart, item];
      }
    });
  };



  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

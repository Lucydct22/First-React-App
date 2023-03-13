import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  console.log(cart)
  return (
    <CartContext.Provider value={{ cart, setCart, totalItems: cart.lenght }}>
      {children}
    </CartContext.Provider>
  );
};



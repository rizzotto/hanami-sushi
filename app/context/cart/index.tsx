"use client";

import { Data } from "@/app/types/Data";
import { ReactNode, createContext, useContext, useState } from "react";

interface CartContextType {
  cart: Data[];
  getCartPrice: () => string;
  getCartGrouped: () => Data[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  function getCartPrice() {
    return cart.length === 0
      ? "0"
      : cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    // .toFixed(2)
  }

  function getCartGrouped() {
    const groupedCart = new Map();

    cart.forEach((item) => {
      if (groupedCart.has(item.id)) {
        const existingItem = groupedCart.get(item.id);

        groupedCart.set(item.id, {
          ...existingItem,
          price: (
            parseInt(existingItem.price) + parseInt(item.price)
          ).toString(),
          quantity: (
            parseInt(existingItem.quantity) + parseInt(item.quantity)
          ).toString(),
        });
      } else {
        groupedCart.set(item.id, item);
      }
    });

    return Array.from(groupedCart.values());
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, getCartPrice, getCartGrouped }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};

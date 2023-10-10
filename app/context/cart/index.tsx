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
    const groupedCart: Data[] = [];

    cart.forEach((item) => {
      const [quantity, suff] = item.quantity.split(" ");
      if (groupedCart.includes(item)) {
        const index = groupedCart.indexOf(item);

        // not fully working
        if (index !== -1) {
          groupedCart[index] = {
            ...item,
            price: (parseInt(item.price) + parseInt(item.price)).toString(),
            quantity: `${(
              parseInt(quantity) + parseInt(quantity)
            ).toString()} ${suff}`,
          };
        }
      } else {
        groupedCart.push(item);
      }
    });

    return groupedCart;
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

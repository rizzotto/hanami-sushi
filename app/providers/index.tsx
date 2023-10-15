"use client";

import { CartProvider } from "../context/cart";
import Order from "../components/Order";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartProvider>
        {children}
        <Order />
      </CartProvider>
    </>
  );
};

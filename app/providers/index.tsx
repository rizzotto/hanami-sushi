"use client ";

import { CartProvider } from "../context/cart";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartProvider>{children}</CartProvider>
    </>
  );
};

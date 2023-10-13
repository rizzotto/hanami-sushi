"use client";
import { useCartContext } from "@/app/context/cart";
import Link from "next/link";
import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const { getCartPrice } = useCartContext();

  const listenScrollEvent = () => {
    setIsScrolled(window.scrollY > 10 ? true : false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      className={`sticky z-10 top-3 transition-all animate-slide-in-down ${
        isScrolled ? "bg-[#BBB2A3] rounded-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <Link
            href="/"
            className="ml-2 text-xl normal-case hover:bg-[--bg] text-[--fg] btn btn-ghost"
          >
            Hanami Sushi
          </Link>
        </div>
        <div className="navbar-center">
          <Link
            className="max-[770px]:hidden font-semibold p-2 text-[--fg] hover:bg-[--bg] m-2 rounded-lg transition"
            href={`/menu`}
          >
            Menu
          </Link>
          <Link
            className="max-[770px]:hidden font-semibold p-2 text-[--fg] hover:bg-[--bg] m-2 rounded-lg transition"
            href={`/about`}
          >
            About
          </Link>
          <Link
            className="max-[770px]:hidden font-semibold p-2 text-[--fg] hover:bg-[--bg] m-2 rounded-lg transition"
            href={`/cart`}
          >
            Cart
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex items-center mr-2 border border-[--fg]">
            <div className="px-3 py-2 text-[--fg] text-center min-w-[64px] border-r border-[--fg] font-semibold">
              {getCartPrice()}$
            </div>
            <Link href="/cart">
              <div className="px-3 py-[9px] hover:bg-[--bg] w-full flex items-center justify-center">
                <PiShoppingCartSimple size="1.4em" />
              </div>
            </Link>
          </div>
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 bg-[#FEFEFE] shadow menu menu-sm dropdown-content rounded-box w-52"
            >
              <li>
                <Link className="text-[--fg] hover:text-[--fg]" href={`/menu`}>
                  Menu
                </Link>
              </li>
              <li>
                <Link className="text-[--fg] hover:text-[--fg]" href={`/about`}>
                  About
                </Link>
                <Link className="text-[--fg] hover:text-[--fg]" href={`/cart`}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

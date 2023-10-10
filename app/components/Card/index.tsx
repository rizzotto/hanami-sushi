"use client";

import { useCartContext } from "@/app/context/cart";
import Image from "next/image";
import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const rotationsStick = [
  "rotate-[-10deg]",
  "rotate-[-3deg]",
  "rotate-0",
  "rotate-1",
  "rotate-2",
  "rotate-3",
  "rotate-6",
  "rotate-12",
  "rotate-[30deg]",
];

const rotationsCard = [
  "rotate-[-2deg]",
  "rotate-[-1deg]",
  "rotate-0",
  "rotate-1",
  "rotate-2",
];

export default function Card({
  actions = true,
  item,
}: {
  actions?: boolean;
  item: {
    title: string;
    image: string;
  };
}) {
  const { cart, setCart } = useCartContext();

  const getRandomIndex = React.useCallback(() => {
    return Math.floor(Math.random() * rotationsStick.length);
  }, []);

  const randomStick = React.useCallback(
    () => rotationsStick[getRandomIndex()],
    [getRandomIndex]
  );
  const randomCard = React.useCallback(
    () => rotationsCard[getRandomIndex()],
    [getRandomIndex]
  );

  const handleOnClick = () => {
    const copyCart = [...cart];
    copyCart.push(item);
    setCart(copyCart);
  };

  const { title, image } = item;

  return (
    <>
      <div
        className={`relative ${randomCard} ${
          !actions ? "pb-12" : "min-h-[350px]"
        } min-w-[270px] max-w-[270px] w-full p-5 bg-white flex flex-col items-center`}
      >
        <div className="bg-black h-full w-full flex items-center justify-center">
          <Image alt="food" src={image} objectFit="contain" />
        </div>
        {actions && <div className="mt-6 text-lg">{title}</div>}
        <div
          className={`w-12 h-6 bg-[#EEECD3] absolute top-[-10px] ${randomStick} opacity-60`}
        />
      </div>
      {actions && (
        <div className="flex border border-[--fg] items-center mx-3">
          <div className="px-1 py-2 w-full flex items-center justify-center border-r border-[--fg]">
            4,6$
          </div>
          <div className="px-1 py-2 w-full flex items-center justify-center border-r border-[--fg]">
            4 pcs
          </div>
          <button
            onClick={handleOnClick}
            className="hover:bg-[--bg] px-1 py-2 w-full flex items-center justify-center"
          >
            <PiShoppingCartSimple size="1.5em" />
          </button>
        </div>
      )}
    </>
  );
}

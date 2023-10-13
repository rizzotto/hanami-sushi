"use client";

import { useCartContext } from "@/app/context/cart";
import { Data } from "@/app/types/Data";
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
  small,
}: {
  actions?: boolean;
  item: Data;
  small?: boolean;
}) {
  const { cart, setCart } = useCartContext();

  const getRandomIndex = React.useCallback(() => {
    return Math.floor(Math.random() * rotationsStick.length);
  }, []);

  const [random, _] = React.useState({
    stick: rotationsStick[getRandomIndex()],
    card: rotationsCard[getRandomIndex()],
  });

  const handleOnClick = () => {
    const copyCart = [...cart];
    copyCart.push(item);
    setCart(copyCart);
  };

  const { title, image } = item;

  return (
    <>
      <div
        className={`relative ${random.card} ${
          !actions ? "pb-12" : "min-h-[350px]"
        } ${
          small
            ? "w-32 h-26 p-2 pb-6"
            : "min-w-[270px] max-w-[270px] w-full p-5"
        } bg-white flex flex-col items-center`}
      >
        <div
          className={`bg-black ${
            small ? "h-22 w-28" : "h-full w-full"
          }  flex items-center justify-center`}
        >
          <Image alt="food" src={image} style={{ objectFit: "contain" }} />
        </div>
        {actions && <div className="mt-6 text-lg">{title}</div>}
        {!small && (
          <div
            className={`w-12 h-6 bg-[#EEECD3] absolute top-[-10px] ${random.stick} opacity-60`}
          />
        )}
      </div>
      {actions && (
        <div className="flex border border-[--fg] items-center mx-3">
          <div className="px-1 py-2 w-full flex items-center justify-center border-r border-[--fg]">
            {item.price}$
          </div>
          <div className="px-1 py-2 w-full flex items-center justify-center border-r border-[--fg]">
            {item.quantity} {item.suffixQuantity}
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

"use client";

import { useCartContext } from "@/app/context/cart";
import Link from "next/link";
import React from "react";
import { GiSushis } from "react-icons/gi";
import useLocalStorage from "use-local-storage";

export default function Order() {
  const { order, setOrder } = useCartContext();
  const [_, time] = order.split("-");
  const targetTime = time;
  const [placeholder, setPlaceholder] = React.useState(false);
  const [orderStorage, setOrderStorage] = useLocalStorage<string>("order", "");

  // This cleans order when reaches the estimated time
  React.useEffect(() => {
    const clear = setTimeout(() => {
      const currentTime = new Date().toLocaleTimeString("en-US", {
        hour12: false,
      });
      setPlaceholder((prev) => !prev);

      if (currentTime >= targetTime) {
        setOrder("");
        setOrderStorage("");
      }
    }, 10);

    return () => {
      clearTimeout(clear);
    };
  }, [order, setOrder, setOrderStorage, time, targetTime, placeholder]);

  if (order === "") return;

  return (
    <div className="bottom-2 flex justify-end right-0 overflow-y-auto sticky">
      <Link href={order}>
        <button className="btn bg-[--bg] btn-outline hover:bg-[--bg] hover:border-[--fg] hover:text-[--fg] rounded-none">
          <GiSushis size={26} color="white" />
          <div className="normal-case text-white">Order</div>
        </button>
      </Link>
    </div>
  );
}

import { Data } from "@/app/types/Data";
import Card from "../Card";
import { useCartContext } from "@/app/context/cart";
import React from "react";

export default function CartItem({
  item,
  onDelete,
}: {
  item: Data;
  onDelete?: (id: number) => void;
}) {
  const { cart, setCart } = useCartContext();

  const handleClick = () => {
    onDelete?.(item.id);
  };

  // not working correctly, should increase by its value and not exponentially
  const handleAdd = React.useCallback(() => {
    const copyCart = [...cart];
    const [quantity, suff] = item.quantity.split(" ");

    const index = copyCart.indexOf(item);

    if (index !== -1) {
      copyCart[index] = {
        ...item,
        price: (parseInt(item.price) + parseInt(item.price)).toString(),
        quantity: `${(
          parseInt(quantity) + parseInt(quantity)
        ).toString()} ${suff}`,
      };
    }

    setCart(copyCart);
  }, [cart, item, setCart]);

  const handleMinus = React.useCallback(() => {
    const copyCart = [...cart];
    const [quantity, suff] = item.quantity.split(" ");

    const index = copyCart.indexOf(item);

    if (index !== -1) {
      copyCart[index] = {
        ...item,
        price: (parseInt(item.price) - parseInt(item.price)).toString(),
        quantity: `${(
          parseInt(quantity) - parseInt(quantity)
        ).toString()} ${suff}`,
      };
    }

    setCart(copyCart);
  }, [cart, item, setCart]);

  return (
    <div className="flex flex-col md:flex-row justify-between w-full items-center m-2">
      <div className="flex flex-col sm:flex-row items-center w-full justify-evenly mb-3">
        <Card actions={false} item={item} />

        <div className="flex flex-col gap-4 mt-4 sm:mt-0 sm:ml-4 w-full max-w-[200px]">
          <div className="text-xl font-bold">{item.title}</div>
          <div>{item.type}</div>
        </div>
      </div>

      <div className="flex items-center w-full justify-evenly">
        <div className="flex items-center border border-[--fg]">
          <div className="p-3 border-r border-[--fg]">{item.quantity}</div>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={handleAdd}
              className="px-6 border-b border-[--fg] hover:bg-[--bg]"
            >
              +
            </button>
            <button onClick={handleMinus} className="px-[25px] hover:bg-[--bg]">
              -
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-3 border border-[--fg] w-full max-w-[80px]">
          {item.price}$
        </div>

        <button
          onClick={handleClick}
          className="btn btn-circle hover:bg-[--bg]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#1b1b1b"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

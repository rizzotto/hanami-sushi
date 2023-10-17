import { Data } from "@/app/types/Data";
import Card from "../Card";
import { useCartContext } from "@/app/context/cart";
import React from "react";

export default function CartItem({
  item,
  onDelete,
  small = false,
}: {
  item: Data;
  onDelete?: (id: number) => void;
  small?: boolean;
}) {
  const { getCartGrouped, setCart } = useCartContext();

  const handleClick = () => {
    onDelete?.(item.id);
  };

  const cart = getCartGrouped();

  const handleAdd = React.useCallback(() => {
    const copyCart = [...cart];

    const index = copyCart.indexOf(item);

    if (index !== -1) {
      copyCart[index] = {
        ...item,
        price: (parseInt(item.price) + parseInt(item.solidPrice)).toString(),
        quantity: (
          parseInt(item.quantity) + parseInt(item.solidQuantity)
        ).toString(),
      };
    }

    setCart(copyCart);
  }, [cart, item, setCart]);

  const handleMinus = React.useCallback(() => {
    const copyCart = [...cart];

    const index = copyCart.indexOf(item);

    if (index !== -1) {
      copyCart[index] = {
        ...item,
        price: (parseInt(item.price) - parseInt(item.solidPrice)).toString(),
        quantity: (
          parseInt(item.quantity) - parseInt(item.solidQuantity)
        ).toString(),
      };
    }

    setCart(copyCart);
  }, [cart, item, setCart]);

  const renderActions = small ? (
    <div className="flex items-center">
      <div className="flex flex-col sm:flex-row items-center w-full justify-center mb-2">
        <Card small={small} actions={false} item={item} />
      </div>

      <div className="flex items-end flex-row w-full justify-evenly gap-3">
        <div className="ml-3">
          <div className="flex flex-col text-start items-start mb-3 w-full">
            <div className="text-md font-bold">{item.title}</div>
          </div>
          <div className="flex items-center border border-[--fg]">
            <div className="p-3 border-r border-[--fg] min-w-[82px] text-center">
              {item.price}$
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={handleAdd}
                className="px-6 py-[1px] border-b border-[--fg] hover:bg-[--bg]"
              >
                <div className="min-w-[12px]">+</div>
              </button>
              <button
                onClick={item.price > "0" ? handleMinus : undefined}
                aria-disabled={item.price <= "0"}
                className="px-6 py-[1px] hover:bg-[--bg] aria-disabled:bg-[#9b9b9b] aria-disabled:opacity-40 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-[#9b9b9b]"
              >
                <div className="min-w-[12px]">-</div>
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="btn btn-square rounded-none border border-[--fg] hover:bg-[--bg] hover:border-[--fg]"
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
  ) : (
    <>
      <div className="flex flex-col sm:flex-row items-center w-full justify-evenly mb-3">
        <Card small={small} actions={false} item={item} />

        <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-4 mb-4 sm:mb-0 mt-4 sm:mt-0 sm:ml-6 w-full max-w-[200px] min-w-[110px]">
          <div className="text-xl font-bold">{item.title}</div>
          {item.type}
        </div>
      </div>

      <div className="flex items-center w-full justify-evenly">
        <div className="flex items-center border border-[--fg]">
          <div className="p-3 border-r border-[--fg] min-w-[82px] text-center">
            {item.quantity} {item.suffixQuantity}
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={handleAdd}
              className="px-6 border-b border-[--fg] hover:bg-[--bg]"
            >
              <div className="min-w-[12px]">+</div>
            </button>
            <button
              onClick={item.price > "0" ? handleMinus : undefined}
              aria-disabled={item.price <= "0"}
              className="px-6 hover:bg-[--bg] aria-disabled:bg-[#9b9b9b] aria-disabled:opacity-40 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-[#9b9b9b]"
            >
              <div className="min-w-[12px]">-</div>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-3 border border-[--fg] w-full max-w-[90px] min-w-[82px]">
          {item.price}$
        </div>

        <button
          onClick={handleClick}
          className="btn btn-square rounded-none border border-[--fg] hover:bg-[--bg] hover:border-[--fg]"
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
    </>
  );

  return (
    <div className="flex flex-col md:flex-row justify-between w-full items-center m-2">
      {renderActions}
    </div>
  );
}

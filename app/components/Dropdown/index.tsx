import { useCartContext } from "@/app/context/cart";
import CartItem from "../CartItem";
import Link from "next/link";
import ItemDashed from "../ItemDashed";
import useLocalStorage from "use-local-storage";
import { Data } from "@/app/types/Data";

export default function Dropdown({ children }: { children: React.ReactNode }) {
  const { getCartGrouped, getCartPrice, setCart } = useCartContext();
  const [cartStorage, setCartStorage] = useLocalStorage<Data[]>("cart", []);

  const cart = getCartGrouped();

  const handleDelete = (id: number) => {
    const copyCart = [...cart];

    const indexToDelete = copyCart.findIndex((item) => item.id === id);
    if (indexToDelete !== -1) {
      copyCart.splice(indexToDelete, 1);
      setCart(copyCart);
      setCartStorage(copyCart);
    }
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
      {children}
      <ul
        tabIndex={0}
        className="dropdown-content overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-neutral-400 h-80 overflow-y-auto block bg-[#f1f1f1] z-[1] menu shadow-lg rounded-none p-3"
      >
        {cart.map((item, i) => (
          <CartItem
            onDelete={handleDelete}
            small
            key={`${item}-${i}`}
            item={item}
          />
        ))}

        <div className="flex flex-col items-center gap-2">
          <ItemDashed title="Total" value={`${parseInt(getCartPrice())}$`} />

          <Link href="/cart">
            <button className="btn btn-outline hover:bg-[--bg] hover:border-[--fg] hover:text-[--fg] rounded-none normal-case">
              Go To Checkout
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
}

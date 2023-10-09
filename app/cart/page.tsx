import Image from "next/image";
import Card from "../components/Card";
import cartTitle from "../assets/cart_title.svg";
import Link from "next/link";
import CartItem from "../components/CartItem";
import nigiri from "../assets/nigiri.svg";
import teriyaki from "../assets/teriyaki.svg";
import gunkan from "../assets/gunkan.svg";

export default function Cart() {
  const data = [
    {
      image: nigiri,
      price: "12$",
      quantity: "4pcs",
      title: "Nigiri",
      type: "sushi",
    },
    {
      image: teriyaki,
      price: "1$",
      quantity: "20ml",
      title: "Teriyaki",
      type: "sauces",
    },
    {
      image: gunkan,
      price: "8$",
      quantity: "2pcs",
      title: "Gunkan",
      type: "sushi",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-[70vh]">
      <Image alt="Cart title" src={cartTitle} objectFit="cover" />
      {data.length === 0 ? (
        <div className="flex flex-col items-center gap-4 my-auto">
          <div className="text-lg md:text-2xl">
            No Items on Cart. Please check on our Menu
          </div>
          <Link href="/menu">
            <button className="btn btn-outline btn-lg relative hover:bg-[--bg] hover:border-[--fg] hover:text-[--fg]">
              <div className="z-10">Order Now</div>
            </button>
          </Link>
        </div>
      ) : (
        <>
          {data.map((item, i) => (
            <CartItem key={`${item}-${i}`} item={item} />
          ))}

          <div className="w-full my-8 flex flex-col items-start justify-start md:max-w-[60%]">
            <div className="flex items-end w-full justify-center my-3">
              <div className="font-bold ">Cost Delivery</div>
              <div className="w-full border border-dashed border-[--fg]"></div>
              <div className="ml-4 px-6 py-3 border border-[--fg] w-full max-w-[100px]">
                12$
              </div>
            </div>

            <div className="flex items-end w-full justify-center my-3 ">
              <div className="font-bold ">Coupon Code</div>
              <div className="w-full border border-dashed border-[--fg]"></div>
              <input
                type="text"
                placeholder="Type here"
                className="ml-4 input input-bordered rounded-none w-full max-w-xs border-[--fg] bg-transparent text-[--fg] placeholder-[--fg]"
              />
            </div>

            <div className="flex items-end w-full justify-center mt-12 ">
              <div className="font-bold ">Total</div>
              <div className="w-full border border-dashed border-[--fg]"></div>
              <div className="px-6 py-3 ml-4 border border-[--fg] w-full max-w-[100px]">
                23,5$
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

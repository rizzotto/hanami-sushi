"use client";

import Image from "next/image";
import cartTitle from "../assets/cart_title.svg";
import checkoutTitle from "../assets/checkout_title.svg";
import Link from "next/link";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/cart";

export default function Cart() {
  const { cart, setCart, getCartGrouped, getCartPrice } = useCartContext();

  const handleDelete = (id: number) => {
    const copyCart = [...cart];

    const indexToDelete = copyCart.findIndex((item) => item.id === id);
    if (indexToDelete !== -1) {
      copyCart.splice(indexToDelete, 1);
      setCart(copyCart);
    }
  };

  const groupedCart = getCartGrouped();

  return (
    <div className="flex flex-col items-center min-h-[70vh]">
      <Image alt="Cart title" src={cartTitle} style={{ objectFit: "cover" }} />
      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-4 my-auto">
          <div className="text-lg md:text-2xl">
            No Items on Cart. Please check on our Menu
          </div>
          <Link href="/menu">
            <button className="btn btn-outline rounded-none normal-case btn-lg relative hover:bg-[--bg] hover:border-[--fg] hover:text-[--fg]">
              <div className="z-10">Order Now</div>
            </button>
          </Link>
        </div>
      ) : (
        <>
          {groupedCart.map((item, i) => (
            <CartItem
              onDelete={handleDelete}
              key={`${item}-${i}`}
              item={item}
            />
          ))}

          <div className="w-full my-8 flex flex-col items-start justify-start md:max-w-[60%]">
            <div className="flex items-end w-full justify-center my-3">
              <div className="font-bold ">Cost Delivery</div>
              <div className="w-full border border-dashed border-[--fg]"></div>
              <div className="ml-4 px-6 text-center py-3 border border-[--fg] w-full max-w-[100px]">
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
              <div className="px-6 py-3 ml-4 border text-center border-[--fg] w-full max-w-[100px]">
                {parseInt(getCartPrice() + 12)}$
              </div>
            </div>
          </div>

          {/* Checkout */}
          <Image
            alt="Checkout title"
            src={checkoutTitle}
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col gap-3 items-start mb-12">
            <div className="flex gap-4 w-full flex-col md:flex-row">
              {/* Name Input */}
              <div>
                <label className="label">
                  <span className="label-text">Your Name*</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-sm rounded-none border-[--fg] bg-transparent text-[--fg]"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="label">
                  <span className="label-text">Phone Number*</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-sm rounded-none border-[--fg] bg-transparent text-[--fg]"
                />
              </div>
            </div>
            {/* Street Inputs */}
            <div className="flex gap-4 w-full flex-col md:flex-row">
              <div>
                <label className="label">
                  <span className="label-text">Street*</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs rounded-none border-[--fg] bg-transparent text-[--fg]"
                />
              </div>

              <div className="flex gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Number*</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-[80px] rounded-none border-[--fg] bg-transparent text-[--fg]"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Floor</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-[80px] rounded-none border-[--fg] bg-transparent text-[--fg]"
                  />
                </div>
              </div>
            </div>
            {/* Time Inputs */}
            <div className="flex items-start md:items-end gap-4 w-full flex-col md:flex-row">
              <div>
                <label className="label">
                  <span className="label-text">Time*</span>
                </label>
                <select className="select select-bordered w-[295px] rounded-none border-[--fg] bg-transparent text-[--fg]">
                  <option disabled selected>
                    Who shot first?
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>

              {/* Checkbox */}
              <div className="flex">
                <label className="label cursor-pointer md:pb-3">
                  <input
                    type="checkbox"
                    // checked="checked"
                    className="checkbox rounded-none border-[--fg] bg-transparent text-[--fg]"
                  />
                  <span className="label-text ml-2">As soon as possible</span>
                </label>
              </div>
            </div>
            {/* Payment Method */}
            <div className="flex flex-col md:flex-row gap-2">
              <label className="label">
                <span className="label-text">Payment</span>
              </label>
              <div className="flex gap-3">
                <input
                  type="radio"
                  name="radio"
                  aria-label="Online Payment"
                  className="btn normal-case"
                  checked
                />
                <input
                  type="radio"
                  name="radio"
                  aria-label="Card"
                  className="btn normal-case"
                />
                <input
                  type="radio"
                  name="radio"
                  aria-label="Cash"
                  className="btn normal-case"
                />
              </div>
            </div>
            {/* TextArea */}
            <div>
              <label className="label">
                <span className="label-text">Observations</span>
              </label>
              <textarea className="textarea textarea-bordered w-[295px] max-w-sm rounded-none border-[--fg] bg-transparent text-[--fg]" />
            </div>
            {/* Order Button */}
            <button className="btn btn-outline hover:bg-[--bg] hover:border-[--fg] hover:text-[--fg] rounded-none normal-case">
              Create Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

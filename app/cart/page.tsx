"use client";

import Image from "next/image";
import cartTitle from "../assets/cart_title.svg";
import checkoutTitle from "../assets/checkout_title.svg";
import Link from "next/link";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/cart";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import { useRouter } from "next/navigation";

const getTimeSlots = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const timeSlots = [];

  const nextHour = hours + Math.floor((minutes + 30) / 60);
  const nextMinute = (minutes + 30) % 60;
  const formattedTime = `${String(nextHour).padStart(2, "0")}:${String(
    nextMinute
  ).padStart(2, "0")}`;
  timeSlots.push(formattedTime);

  for (let i = 1; i < 5; i++) {
    const nextHour = hours + Math.floor((minutes + 30 + i * 30) / 60);
    const nextMinute = (minutes + 30 + i * 30) % 60;
    const formattedTime = `${String(nextHour).padStart(2, "0")}:${String(
      nextMinute
    ).padStart(2, "0")}`;
    timeSlots.push(formattedTime);
  }
  return timeSlots;
};

export default function Cart() {
  const { cart, setCart, getCartGrouped, getCartPrice } = useCartContext();
  const times = getTimeSlots();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      asap: false,
      floor: "",
      name: "",
      number: "",
      observations: "",
      phoneNumber: "",
      street: "",
      time: times[0],
    },
  });

  const [payment, setPayment] = React.useState("online");
  const [asap, setAsap] = React.useState(false);
  const router = useRouter();

  const handleDelete = (id: number) => {
    const copyCart = [...cart];

    const indexToDelete = copyCart.findIndex((item) => item.id === id);
    if (indexToDelete !== -1) {
      copyCart.splice(indexToDelete, 1);
      setCart(copyCart);
    }
  };

  function random() {
    const min = 10000000;
    const max = 99999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onSubmit = (data) => {
    console.log(data);
    router.push(`/order/${random()}-${data.time}`);
  };

  const handlePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment(e.target.value);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3 items-start mb-12">
              <div className="flex gap-4 w-full flex-col md:flex-row">
                {/* Name Input */}
                <div>
                  <label className="label">
                    <span className="label-text">Your Name*</span>
                  </label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="input input-bordered w-full max-w-sm rounded-none border-[--fg] bg-transparent text-[--fg] placeholder:text-red-500"
                        placeholder={errors.name && "Name is required"}
                      />
                    )}
                    rules={{ required: "Name is required" }}
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label className="label">
                    <span className="label-text">Phone Number*</span>
                  </label>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="input input-bordered w-full max-w-sm rounded-none border-[--fg] bg-transparent text-[--fg] placeholder:text-red-500"
                        placeholder={
                          errors.phoneNumber && "Phone Number is required"
                        }
                      />
                    )}
                    rules={{ required: "Phone Number is required" }}
                  />
                </div>
              </div>
              {/* Street Inputs */}
              <div className="flex gap-4 w-full flex-col md:flex-row">
                <div>
                  <label className="label">
                    <span className="label-text">Street*</span>
                  </label>
                  <Controller
                    name="street"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="input input-bordered w-full max-w-xs rounded-none border-[--fg] bg-transparent text-[--fg] placeholder:text-red-500"
                        placeholder={errors.street && "Street is required"}
                      />
                    )}
                    rules={{ required: "Street is required" }}
                  />
                </div>

                <div className="flex gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text">Number*</span>
                    </label>
                    <Controller
                      name="number"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className="input input-bordered w-full max-w-[80px] rounded-none border-[--fg] bg-transparent text-[--fg] placeholder:text-red-500"
                          placeholder={errors.number && "Req"}
                        />
                      )}
                      rules={{ required: "Number is required" }}
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text">Floor</span>
                    </label>
                    <Controller
                      name="floor"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className="input input-bordered w-full max-w-[80px] rounded-none border-[--fg] bg-transparent text-[--fg]"
                        />
                      )}
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
                  <Controller
                    name="time"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="select select-bordered disabled:border disabled:border-[#363636] w-[295px] rounded-none border-[--fg] bg-transparent text-[--fg] placeholder:text-red-500"
                        placeholder={errors.time && "Time is required"}
                        disabled={asap}
                      >
                        {times.map((time, i) => (
                          <option key={`${time}-${i}`} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    )}
                    rules={{
                      required: !asap ? "Time is required" : undefined,
                    }}
                  />
                </div>

                {/* Checkbox */}
                <div className="flex">
                  <label className="label cursor-pointer md:pb-3">
                    <Controller
                      name="asap"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          checked={asap}
                          onChange={() => setAsap((prev) => !prev)}
                          type="checkbox"
                          className="checkbox rounded-none border-[--fg] bg-transparent text-[--fg]"
                          value={asap ? "true" : "false"}
                        />
                      )}
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
                    onChange={handlePayment}
                    value="online"
                    checked={payment === "online"}
                    aria-label="Online Payment"
                    className="btn normal-case"
                  />
                  <input
                    type="radio"
                    name="radio"
                    checked={payment === "card"}
                    onChange={handlePayment}
                    value="card"
                    aria-label="Card"
                    className="btn normal-case"
                  />
                  <input
                    type="radio"
                    name="radio"
                    checked={payment === "cash"}
                    onChange={handlePayment}
                    value="cash"
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
                <Controller
                  name="observations"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className="textarea textarea-bordered w-[295px] max-w-sm rounded-none border-[--fg] bg-transparent text-[--fg]"
                    />
                  )}
                />
              </div>

              {/* Order Button */}
              <button
                type="submit"
                className="btn btn-outline hover:bg-[--bg] hover:border-[--fg] hover:text-[--fg] rounded-none normal-case"
              >
                Create Order
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

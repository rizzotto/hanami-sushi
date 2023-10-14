"use client";
import Image from "next/image";
import orderTitle from "../../assets/order_title.svg";

export default function Order({ params }: { params: { id: string } }) {
  const [id, time] = params.id.split("-");
  const fTime = time.replace("%3A", ":");

  return (
    <div className="flex items-center justify-center flex-col gap-20">
      <Image
        alt="Order title"
        src={orderTitle}
        style={{ objectFit: "cover" }}
      />
      <div className="flex gap-4 items-center justify-center">
        <div className="font-bold">Your order number</div>
        <div className="flex items-center px-4 py-2 border border-[--fg] font-bold">
          {id}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* step 1 */}
        <div className="flex flex-col items-center justify-center gap-3 text-center ">
          <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[--fg]">
            <div className="font-bold text-xl">1</div>
          </div>
          <div className="font-bold">Processing the information</div>
        </div>
        <div className="h-40 border-r-2 md:w-60 md:h-0 md:border-b-2 md:border-r-0 border-[--fg] border-dashed my-6 md:my-0 md:mx-6" />
        {/* step 2 */}
        <div className="flex flex-col items-center justify-center gap-3 text-center ">
          <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[--fg]">
            <div className="font-bold text-xl">2</div>
          </div>
          <div className="font-bold">Preparing order</div>
        </div>
        <div className="h-40 border-r-2 md:w-60 md:h-0 md:border-b-2 md:border-r-0 border-[--fg] border-dashed my-6 md:my-0 md:mx-6" />
        {/* step 3 */}
        <div className="flex flex-col items-center justify-center gap-3 text-center ">
          <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[--fg]">
            <div className="font-bold text-xl">3</div>
          </div>
          <div className="font-bold">Courier on the way</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="font-bold">Estimated delivery time:</div>
        <div className="font-bold text-xl px-3 py-1 bg-[--bg] border border-[--fg]">
          {fTime}
        </div>
      </div>

      <button className="btn btn-outline hover:bg-[--bg] hover:border-[--fg] hover:text-[--fg] rounded-none normal-case">
        Back to menu
      </button>
    </div>
  );
}

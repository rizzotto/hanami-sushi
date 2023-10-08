import Image from "next/image";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function Card({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
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

  const getRandomIndex = () => {
    return Math.floor(Math.random() * rotationsStick.length);
  };

  const randomStick = rotationsStick[getRandomIndex()];
  const randomCard = rotationsCard[getRandomIndex()];

  return (
    <>
      <div
        className={`relative ${randomCard} min-h-[350px] min-w-[270px] w-full p-5 bg-white flex flex-col items-center`}
      >
        <div className="bg-black h-full w-full flex items-center justify-center">
          <Image alt="food" src={image} objectFit="contain" />
        </div>
        <div className="mt-6 text-lg">{title}</div>
        <div
          className={`w-12 h-6 bg-[#EEECD3] absolute top-[-10px] ${randomStick} opacity-60`}
        />
      </div>
      <div className="flex border border-[--fg] items-center mx-3">
        <div className="px-1 py-2 w-full flex items-center justify-center border-r border-[--fg]">
          4,6$
        </div>
        <div className="px-1 py-2 w-full flex items-center justify-center border-r border-[--fg]">
          4 pcs
        </div>
        <button className="hover:bg-[--bg] px-1 py-2 w-full flex items-center justify-center">
          <PiShoppingCartSimple size="1.5em" />
        </button>
      </div>
    </>
  );
}

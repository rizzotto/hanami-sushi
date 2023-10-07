import Image from "next/image";
import title from "../assets/sushi_title.svg";
import hosso from "../assets/hosso.svg";
import hossoTuna from "../assets/hosso_tuna.svg";
import gunkan from "../assets/gunkan.svg";
import gunkanSpoon from "../assets/gunkan_spoon.svg";
import nigiri from "../assets/nigiri.svg";
import sashimi from "../assets/sashimi.svg";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function Menu() {
  const sushis = [hossoTuna, gunkan, nigiri, hossoTuna, nigiri, gunkan];

  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <Image alt="Menu Title" src={title} width={200} height={100} />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sushis.map((sushi, i) => (
          <div className="flex flex-col gap-4" key={`${i}-${sushi}`}>
            <Image
              // className="min-w-[300px] min-h-[320px]"
              src={sushi}
              // width={200}
              // height={100}
              layout="cover"
              alt="sushi"
            />
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
          </div>
        ))}
      </div>
    </div>
  );
}

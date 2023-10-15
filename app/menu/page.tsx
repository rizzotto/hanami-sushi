import Image from "next/image";

import title from "../assets/sushi_title.svg";
import pokeTitle from "../assets/poke_title.svg";
import saucesTitle from "../assets/sauces_title.svg";

import Card from "../components/Card";
import { pokes, sauces, sushis } from "../(data)";

export default function Menu() {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-3">
      <Image
        className="m-6"
        alt="Menu Title"
        src={title}
        style={{ objectFit: "cover" }}
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sushis.map((sushi, i) => (
          <div className="flex flex-col gap-4" key={`${i}-${sushi}`}>
            <Card item={sushi} />
          </div>
        ))}
      </div>
      <Image
        className="m-6"
        alt="Poke Title"
        src={pokeTitle}
        style={{ objectFit: "cover" }}
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {pokes.map((poke, i) => (
          <div className="flex flex-col gap-4" key={`${i}-${poke}`}>
            <Card item={poke} />
          </div>
        ))}
      </div>
      <Image
        className="m-6"
        alt="Sauce Title"
        src={saucesTitle}
        style={{ objectFit: "cover" }}
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sauces.map((sauces, i) => (
          <div className="flex flex-col gap-4" key={`${i}-${sauces}`}>
            <Card item={sauces} />
          </div>
        ))}
      </div>
    </div>
  );
}

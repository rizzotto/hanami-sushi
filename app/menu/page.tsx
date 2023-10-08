import Image from "next/image";

import title from "../assets/sushi_title.svg";
import pokeTitle from "../assets/poke_title.svg";
import saucesTitle from "../assets/sauces_title.svg";

import hosso from "../assets/hosso.svg";
import hossoTuna from "../assets/hosso_tuna.svg";
import gunkan from "../assets/gunkan.svg";
import gunkanSpoon from "../assets/gunkan_spoon.svg";
import nigiri from "../assets/nigiri.svg";
import sashimi from "../assets/sashimi.svg";

import pokeShrimp from "../assets/poke_shrimp.svg";
import pokeSalmon from "../assets/poke_salmon.svg";
import pokeTuna from "../assets/poke_tuna.svg";
import pokeChicken from "../assets/poke_chicken.svg";

import ginger from "../assets/ginger.svg";
import teriyaki from "../assets/teriyaki.svg";
import sweetChilli from "../assets/sweet_chilli.svg";
import passionFruit from "../assets/passion_fruit.svg";

import { PiShoppingCartSimple } from "react-icons/pi";
import Card from "../components/Card";

export default function Menu() {
  const sushis = [
    { image: hossoTuna, title: "Tuna Hossomaki" },
    { image: hosso, title: "Salmon Hossomaki" },
    { image: gunkan, title: "Gunkan" },
    { image: nigiri, title: "Gunkan" },
    { image: sashimi, title: "Sashimi" },
    { image: gunkanSpoon, title: "Gunkan Spoon" },
  ];

  const pokes = [
    { image: pokeTuna, title: "Tuna Poke" },
    { image: pokeSalmon, title: "Salmon Poke" },
    { image: pokeChicken, title: "Chicken Poke" },
    { image: pokeShrimp, title: "Shrimp Poke" },
  ];

  const sauces = [
    { image: ginger, title: "Ginger" },
    { image: teriyaki, title: "teriyaki" },
    { image: sweetChilli, title: "Sweet Chilli" },
    { image: passionFruit, title: "Passion Fruit" },
  ];

  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-3">
      <Image className="m-6" alt="Menu Title" src={title} objectFit="cover" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sushis.map((sushi, i) => (
          <div className="flex flex-col gap-4" key={`${i}-${sushi}`}>
            <Card image={sushi.image} title={sushi.title} />
          </div>
        ))}
      </div>
      <Image
        className="m-6"
        alt="Poke Title"
        src={pokeTitle}
        objectFit="cover"
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {pokes.map((poke, i) => (
          <div className="flex flex-col gap-4" key={`${i}-${poke}`}>
            <Card image={poke.image} title={poke.title} />
          </div>
        ))}
      </div>
      <Image
        className="m-6"
        alt="Sauce Title"
        src={saucesTitle}
        objectFit="cover"
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sauces.map((sauces, i) => (
          <div className="flex flex-col gap-4" key={`${i}-${sauces}`}>
            <Card image={sauces.image} title={sauces.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

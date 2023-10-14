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
    {
      image: hossoTuna,
      title: "Tuna Hossomaki",
      price: "8",
      solidPrice: "8",
      quantity: "8",
      description: "Fresh Tuna, nori, rice",
      solidQuantity: "8",
      suffixQuantity: "pcs",
      type: "sushi",
      id: 1,
    },
    {
      image: hosso,
      title: "Salmon Hossomaki",
      price: "12",
      solidPrice: "12",
      description: "Fresh Salmon, nori, rice",
      quantity: "8",
      solidQuantity: "8",
      suffixQuantity: "pcs",
      type: "sushi",
      id: 2,
    },
    {
      image: gunkan,
      title: "Gunkan",
      price: "8",
      solidPrice: "8",
      description: "Fresh Salmon, cream cheese, radish, rice",
      quantity: "2",
      solidQuantity: "2",
      suffixQuantity: "pcs",
      type: "sushi",
      id: 3,
    },
    {
      image: nigiri,
      title: "Nigiri",
      price: "14",
      solidPrice: "14",
      quantity: "4",
      description: "Fresh Salmon, wasabi, rice",
      solidQuantity: "4",
      suffixQuantity: "pcs",
      type: "sushi",
      id: 4,
    },
    {
      image: sashimi,
      title: "Sashimi",
      price: "20",
      solidPrice: "20",
      description: "Thick fresh tuna",
      quantity: "8",
      solidQuantity: "8",
      suffixQuantity: "pcs",
      type: "sushi",
      id: 5,
    },
    {
      image: gunkanSpoon,
      title: "Gunkan Spoon",
      price: "8",
      solidPrice: "8",
      description: "Fresh Salmon, cream cheese, shrimp, scallion, rice",
      quantity: "2",
      solidQuantity: "2",
      suffixQuantity: "pcs",
      type: "sushi",
      id: 6,
    },
  ];

  const pokes = [
    {
      image: pokeTuna,
      title: "Tuna Poke",
      price: "20",
      solidPrice: "20",
      quantity: "400",
      description:
        "Fresh tuna, cream cheese, edamame, cucumber, shredded carrot, rice",
      solidQuantity: "400",
      suffixQuantity: "g",
      type: "poke",
      id: 7,
    },
    {
      image: pokeSalmon,
      title: "Salmon Poke",
      price: "24",
      solidPrice: "24",
      description:
        "Fresh salmon, cream cheese, edamame, cucumber, sliced carrot, scallion, rice",
      quantity: "400",
      solidQuantity: "400",
      suffixQuantity: "g",
      type: "poke",
      id: 8,
    },
    {
      image: pokeChicken,
      title: "Chicken Poke",
      price: "15",
      description:
        "Grilled chicken, corn, crisp onion, cucumber, cherry tomato, rice",
      solidPrice: "15",
      quantity: "400",
      solidQuantity: "400",
      suffixQuantity: "g",
      type: "poke",
      id: 9,
    },
    {
      image: pokeShrimp,
      title: "Shrimp Poke",
      description:
        "Grilled shrimp, nori, edamame, cherry tomato, scallion, rice",
      price: "22",
      solidPrice: "22",
      quantity: "400",
      solidQuantity: "400",
      suffixQuantity: "g",
      type: "poke",
      id: 10,
    },
  ];

  const sauces = [
    {
      image: ginger,
      title: "Ginger",
      price: "1",
      description: "Thin slices of ginger",
      solidPrice: "1",
      quantity: "25",
      solidQuantity: "25",
      suffixQuantity: "g",
      type: "sauces",
      id: 11,
    },
    {
      image: teriyaki,
      title: "teriyaki",
      price: "1",
      solidPrice: "1",
      description: "Sweet soy sauce",
      quantity: "30",
      solidQuantity: "30",
      suffixQuantity: "ml",
      type: "sauces",
      id: 12,
    },
    {
      image: sweetChilli,
      title: "Sweet Chilli",
      price: "1",
      description: "Chilli, pineapple, sugar, salt, vinegar",
      solidPrice: "1",
      quantity: "30",
      solidQuantity: "30",
      suffixQuantity: "ml",
      type: "sauces",
      id: 13,
    },
    {
      image: passionFruit,
      title: "Passion Fruit",
      price: "1",
      solidPrice: "1",
      description: "Passion fruit, sugar, salt, vinegar",
      quantity: "30",
      solidQuantity: "30",
      suffixQuantity: "ml",
      type: "sauces",
      id: 14,
    },
  ];

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

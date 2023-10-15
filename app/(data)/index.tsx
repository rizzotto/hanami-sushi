import hosso from "../assets/hosso.png";
import hossoTuna from "../assets/hosso_tuna.png";
import gunkan from "../assets/gunkan.png";
import gunkanSpoon from "../assets/gunkan_spoon.png";
import nigiri from "../assets/nigiri.png";
import sashimi from "../assets/sashimi.png";
import hossoSmall from "../assets/hosso_small.png";
import hossoTunaSmall from "../assets/hosso_tuna_small.png";
import gunkanSmall from "../assets/gunkan_small.png";
import gunkanSpoonSmall from "../assets/gunkan_spoon_small.png";
import nigiriSmall from "../assets/nigiri_small.png";
import sashimiSmall from "../assets/sashimi_small.png";

import pokeShrimp from "../assets/poke_shrimp.png";
import pokeSalmon from "../assets/poke_salmon.png";
import pokeTuna from "../assets/poke_tuna.png";
import pokeChicken from "../assets/poke_chicken.png";
import pokeShrimpSmall from "../assets/poke_shrimp_small.png";
import pokeSalmonSmall from "../assets/poke_salmon_small.png";
import pokeTunaSmall from "../assets/poke_tuna_small.png";
import pokeChickenSmall from "../assets/poke_chicken_small.png";

import ginger from "../assets/ginger.png";
import teriyaki from "../assets/teriyaki.png";
import sweetChilli from "../assets/sweet_chilli.png";
import passionFruit from "../assets/passion_fruit.png";
import gingerSmall from "../assets/ginger_small.png";
import teriyakiSmall from "../assets/teriyaki_small.png";
import sweetChilliSmall from "../assets/sweet_chilli_small.png";
import passionFruitSmall from "../assets/passion_fruit_small.png";

const sushis = [
  {
    image: hossoTuna,
    placeholder: hossoTunaSmall,
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
    placeholder: hossoSmall,
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
    placeholder: gunkanSmall,
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
    placeholder: nigiriSmall,
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
    placeholder: sashimiSmall,
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
    placeholder: gunkanSpoonSmall,
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
    placeholder: pokeTunaSmall,
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
    placeholder: pokeSalmonSmall,
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
    placeholder: pokeChickenSmall,
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
    placeholder: pokeShrimpSmall,
    title: "Shrimp Poke",
    description: "Grilled shrimp, nori, edamame, cherry tomato, scallion, rice",
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
    placeholder: gingerSmall,
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
    placeholder: teriyakiSmall,
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
    placeholder: sweetChilliSmall,
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
    placeholder: passionFruitSmall,
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

export { sushis, pokes, sauces };

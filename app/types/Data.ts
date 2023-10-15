import { StaticImageData } from "next/image";

export type Data = {
  description: string;
  id: number;
  image: StaticImageData;
  placeholder: StaticImageData;
  price: string;
  quantity: string;
  solidPrice: string;
  solidQuantity: string;
  suffixQuantity: string;
  title: string;
  type: string;
};

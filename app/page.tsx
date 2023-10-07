import hosso from "./assets/hosso.svg";
import hosso_tuna from "./assets/hosso_tuna.svg";
import gunkan from "./assets/gunkan.svg";
import gunkan_spoon from "./assets/gunkan_spoon.svg";
import nigiri from "./assets/nigiri.svg";
import sashimi from "./assets/sashimi.svg";
import title from "./assets/home_title.svg";
import plate from "./assets/sushi_plate.svg";
import ship from "./assets/sushi_ship.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-[80vh] items-center justify-start">
      {/* <h1>Home</h1> */}
      <Image
        alt="Home Title"
        quality={100}
        src={title}
        width={800}
        height={400}
      />
      <div className="">
        <button className="btn btn-outline">Order Now</button>
        {/* <Image alt="Ship" quality={100} src={ship} width={300} height={200} /> */}
      </div>
    </div>
  );
}

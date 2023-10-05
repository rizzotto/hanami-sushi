import hosso from "./assets/hosso.png";
import hosso_tuna from "./assets/hosso_tuna.png";
import gunkan from "./assets/gunkan.png";
import gunkan_spoon from "./assets/gunkan_spoon.png";
import nigiri from "./assets/nigiri.png";
import sashimi from "./assets/sashimi.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Image quality={100} src={hosso} width={300} height={300} />
    </main>
  );
}

import Card from "../Card";
import nigiri from "../../assets/nigiri.svg";
import AiOutlineClose from "react-icons/ai";

export default function CartItem({
  item,
}: {
  item: {
    image: string;
    title: string;
    type: string;
    quantity: string;
    price: string;
  };
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full items-center m-2">
      <div className="flex items-center w-full justify-evenly mb-3">
        <Card actions={false} image={item.image} />

        <div className="flex flex-col gap-4 ml-4 md:ml-0">
          <div className="text-xl font-bold">{item.title}</div>
          <div>{item.type}</div>
        </div>
      </div>

      <div className="flex items-center w-full justify-evenly">
        <div className="flex items-center border border-[--fg]">
          <div className="p-3 border-r border-[--fg]">{item.quantity}</div>
          <div className="flex flex-col items-center justify-center">
            <button className="px-6 border-b border-[--fg] hover:bg-[--bg]">
              +
            </button>
            <button className="px-[25px] hover:bg-[--bg]">-</button>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-3 border border-[--fg] w-full max-w-[80px]">
          {item.price}
        </div>

        <button className="btn btn-circle hover:bg-[--bg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#1b1b1b"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

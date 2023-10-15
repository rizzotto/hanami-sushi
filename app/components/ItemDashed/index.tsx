export default function ItemDashed({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-end w-full justify-center mt-2 p-3 ">
      <div className="font-bold">{title}</div>
      <div className="w-full border border-dashed border-[--fg]"></div>
      <div className="px-6 py-3 ml-4 border text-center border-[--fg] w-full max-w-[100px]">
        {value}
      </div>
    </div>
  );
}

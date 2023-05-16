// eslint-disable-next-line react/prop-types
export const Figure = ({ path, text }) => {
  return (
    <div className="relative w-full h-full col-span-full">
      <img src={path} className="rounded-lg w-full h-full" />
      <div className="grid place-items-center absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-lg">
        <h3 className=" text-[20px] text-[#FFFFFF] font-bold">{text}</h3>
      </div>
    </div>
  );
};

export const CategoryText = ({ string }) => {
  return (
    <div className="flex flex-col mt-2 lg:w-auto xl:w-[160px] h-20 flex justify-center">
      <button
        className="border border-[#3A5254] border-[2px] bg-transparent text-[#3A5254] px-2 py-2 
      rounded-sm hover:text-[#87acec] outline-none"
      >
        {string}
      </button>
    </div>
  );
};

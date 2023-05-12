export const Category = ({ string }) => {
  return (
    <div className="flex flex-col gap-2">
      <button className="w-5/5 h-30 border border-[#3A5254] border-[2px] bg-transparent text-[#3A5254] px-5 py-2 rounded-sm hover:text-[#87acec] outline-none">
        {string}
      </button>
    </div>
  );
};

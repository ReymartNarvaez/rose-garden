import { CategoryText } from "../components/sub-navbar/CategoryText";

export const SubNavbar = () => {
  return (
    <div className="hidden md:block text-center">
      <fieldset className="m-2  h-40 text-[#3A5254] border border-[#3A5254] border-[3px]  flex justify-center">
        <legend className="w-auto px-10 text-lg font-extrabold ">
          Rose-Garden
        </legend>
        <div className="mt-4 mt-10 flex md:flex-row md:gap-[11vw]">
          <CategoryText string="Spring Flowers" />
          <CategoryText string="Indoor plants" />
          <CategoryText string="Outdoor plants" />
          <CategoryText string="Pots" />
          <CategoryText string="Grow" />
        </div>
      </fieldset>
    </div>
  );
};

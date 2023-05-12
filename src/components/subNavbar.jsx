import { Category } from "./category";

export const SubNavbar = () => {
  return (
    <div className="text-center">
      <fieldset className="m-2  h-40 text-[#3A5254] border border-[#3A5254] border-[3px]  flex justify-center">
        <legend className="w-auto px-10 text-lg font-extrabold ">
          Rose-Garden
        </legend>
        <div className="mt-4 mt-10 flex md:flex-row md:gap-[11vw]">
          <Category string="Spring Flowers" />
          <Category string="Indoor plants" />
          <Category string="Outdoor plants" />
          <Category string="Pots" />
          <Category string="Grow" />
        </div>
      </fieldset>
    </div>
  );
};

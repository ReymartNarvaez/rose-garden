import { HomeImage } from "../components/home-page/HomeImage";
import { CategoryImage } from "../components/home-page/CategoryImage";
import { IntroText } from "../components/home-page/IntroText";

export const HomePage = () => {
  return (
    <div>
      <HomeImage />
      <div className="md:grid grid-cols-4 gap-4 m-2">
        <div className="row-span-1 grid place-items-center cursor-pointer mb-1">
          <CategoryImage
            path={"src/assets/image/PotsWithFlower.png"}
            text={"Spring Flowers"}
          />
        </div>
        <div className="row-span-1 grid place-items-center cursor-pointer mb-1">
          <CategoryImage
            path={"src/assets/image/Laterns.png"}
            text={"Garden Decoration"}
          />
        </div>
        <div className="row-span-1 grid place-items-center cursor-pointer mb-1">
          <CategoryImage
            path={"src/assets/image/OutDoorTable.png"}
            text={"Outdoor furniture"}
          />
        </div>
        <div className="md:row-span-2 grid place-items-center cursor-pointer mb-5">
          <CategoryImage path={"src/assets/image/saleImage.2.0.png"} />
        </div>
        <div className="row-span-1 col-span-2">
          <IntroText />
        </div>
        <div className="hidden sm:block row-span-1 grid place-items-center mb-5">
          <CategoryImage path={"src/assets/image/treeFlower.png"} />
        </div>
      </div>
    </div>
  );
};

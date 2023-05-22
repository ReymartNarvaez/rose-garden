import { StartImage } from "../main-components/startImage";
import { Figure } from "../components/homePage/figure";
import { IntroText } from "../components/homePage/introText";

export const Home = () => {
  return (
    <div>
      <StartImage />
      <div className="grid grid-cols-4 gap-4 m-1">
        <div className="row-span-1 ">
          <Figure
            path={"src/assets/image/PotsWithFlower.png"}
            text={"Spring Flowers"}
          />
        </div>
        <div className="row-span-1">
          <Figure
            path={"src/assets/image/Laterns.png"}
            text={"Garden Decoration"}
          />
        </div>
        <div className="row-span-1">
          <Figure
            path={"src/assets/image/OutDoorTable.png"}
            text={"Outdoor furniture"}
          />
        </div>
        <div className="row-span-2 grid place-items-center h-full">
          <Figure path={"src/assets/image/saleImage.2.0.png"} />
        </div>
        <div className="row-span-1 col-span-2">
          <IntroText />
        </div>
        <div className="row-span-1">
          <Figure path={"src/assets/image/treeFlower.png"} />
        </div>
      </div>
    </div>
  );
};

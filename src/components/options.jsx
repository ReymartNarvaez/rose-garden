import { Figure } from "./figure";
import { SaleFigure } from "./saleFigure";

export const Options = () => {
  return (
    <div className="flex col-row">
      <div className="flex col-row">
        <Figure
          path={"src/assets/image/PotsWithFlower.png"}
          text={"Spring Flowers"}
        />
        <Figure
          path={"src/assets/image/Laterns.png"}
          text={"Garden Decoration"}
        />
        <Figure
          path={"src/assets/image/OutDoorTable.png"}
          text={"Outdoor furniture"}
        />
      </div>
      <SaleFigure />
    </div>
  );
};

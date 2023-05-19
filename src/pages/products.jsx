import { Items } from "../components/items";
import { Product } from "../components/product";

export const Products = () => {
  return (
    <div className="">
      <div className="w-full h-auto grid grid-cols-4 place-items-center">
        {Items.map((items) => (
          <Product key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};

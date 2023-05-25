import { Items } from "../components/product-page/Items";
import { Product } from "../components/product-page/Product";

export const Products = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center w-full h-auto lg:grid grid-cols-4 place-items-center">
        {Items.map((items) => (
          <Product key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};

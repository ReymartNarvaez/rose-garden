import { useContext } from "react";
import { Product } from "../components/product-page/Product";
import { ProductContext } from "../context/ProductContextProvider";

export const Products = () => {
  const { items } = useContext(ProductContext);

  return (
    <div className="">
      <div className="flex flex-col justify-center w-full h-auto lg:grid grid-cols-4 place-items-center">
        {items.map((items) => (
          <Product key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};

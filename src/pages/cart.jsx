import { useContext } from "react";
import { Items } from "../components/items";
import { ProductContext } from "../context/productContextProvider";
import { CartItem } from "../components/cartItem";

export const Cart = () => {
  const { cartItems } = useContext(ProductContext);

  return (
    <div className="grid place-items-center h-screen">
      <div className="w-2/3">
        {Items.map((items) => {
          if (cartItems[items.id] !== 0) {
            return <CartItem data={items} />;
          }
        })}
      </div>
    </div>
  );
};

import { useContext } from "react";
import { ProductContext } from "../../context/ProductContextProvider";

export const CartItem = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ProductContext);

  return (
    <div className="grid sm:grid-cols-1 md:sm:grid-cols-3 gap-4 flex items-center shadow-lg rounded-lg md:p-4 rounded-2xl  mt-8">
      <img
        className="md:w-[200px] w-full rounded-lg"
        src={productImage}
        alt="Product Image"
      />
      <div className="w-[100%] text-[180%] m-10">
        <p className="font-bold mb-2">{productName}</p>
        <p className="text-gray-600">{price} kr</p>
      </div>
      <div className="flex justify-center mb-2">
        <button
          onClick={() => removeFromCart(id)}
          className="border-2 border-gray-300 rounded-md w-[20%] p-1"
        >
          -
        </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          className="border-2 border-gray-300 rounded-md text-center w-[30%] mx-2 p-1"
        />
        <button
          onClick={() => addToCart(id)}
          className="border-2 border-gray-300 rounded-md w-[20%] p-1"
        >
          +
        </button>
      </div>
    </div>
  );
};

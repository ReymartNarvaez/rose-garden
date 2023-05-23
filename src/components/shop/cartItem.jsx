import { useContext } from "react";
import { ProductContext } from "../../context/productContextProvider";

export const CartItem = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ProductContext);

  return (
    <div className="flex items-center shadow-lg rounded-lg p-4 rounded-2xl m-30 mt-8">
      <img
        className="w-[200px] rounded-lg"
        src={productImage}
        alt="Product Image"
      />
      <div className="w-[100%] text-[30px] m-10">
        <p className="font-bold">{productName}</p>
        <p className="text-gray-600">{price} kr</p>
      </div>
      <div className="mr-8">
        <button
          onClick={() => removeFromCart(id)}
          className="border-2 border-gray-300 rounded-md w-[20%] p-1"
        >
          -
        </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          className="border-2 border-gray-300 rounded-md text-center w-[30%] m-2 p-1"
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

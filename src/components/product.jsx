import { useContext } from "react";
import { ProductContext } from "../context/productContextProvider";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ProductContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="rounded-2xl w-300 h-350 m-100 flex flex-col justify-center items-center bg-[]">
      <img
        className="w-[50%] rounded-lg"
        src={productImage}
        alt="Product Image"
      />
      <div className="">
        <p className="text-lg font-bold">{productName}</p>
        <p className="text-gray-600">{price} kr</p>
      </div>
      <button
        onClick={() => addToCart(id)}
        className="hover:text-[#E1D9D9] hover:bg-[#9EB5B7] bg-[#3A5254] text-white px-4 py-2 rounded mb-8"
      >
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );
};

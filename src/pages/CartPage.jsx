import { useContext } from "react";
import { Items } from "../components/product-page/Items";
import { ProductContext } from "../context/ProductContextProvider";
import { CartItem } from "../components/cart-page/CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ProductContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center h-auto overflow-hidden m-1">
      <div className="sm:m-1 md:w-2/3">
        {Items.map((items) => {
          if (cartItems[items.id] !== 0) {
            return <CartItem data={items} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="grid place-items-center">
          <p className="mt-8 font-extrabold">Subtotal: {totalAmount} kr</p>
          <div className="grid grid-cols-2 mt-8">
            <button
              onClick={() => navigate("/")}
              className="border border-[#3A5254] hover:text-[#E1D9D1] text-[#3A5254] rounded px-4 mx-3"
            >
              {" "}
              Continue Shopping
            </button>
            <button className="hover:text-[#E1D9D9] hover:bg-[#9EB5B7] bg-[#3A5254] text-white px-4 py-2 rounded mx-3">
              {" "}
              Checkout{" "}
            </button>
          </div>
        </div>
      ) : (
        <h1> Your Cart is Empty</h1>
      )}
    </div>
  );
};

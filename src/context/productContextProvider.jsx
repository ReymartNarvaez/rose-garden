import { useState, createContext } from "react";
import { Items } from "../components/shop/items";

export const ProductContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Items.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const product in cartItems) {
      if (cartItems[product] > 0) {
        let itemInfo = Items.find((item) => item.id === Number(product));
        totalAmount += cartItems[product] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  console.log(cartItems);
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

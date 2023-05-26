import { useState, createContext, useEffect } from "react";
import { Items } from "../components/product-page/Items";
import pot1 from "../assets/productImage/pot1.png";
import pot2 from "../assets/productImage/pot2.png";
import pot3 from "../assets/productImage/pot3.png";
import pot4 from "../assets/productImage/pot4.png";

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
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/rg/products");
        const data = await response.json();
        const transformedData = data.map((item) => {
          let productImage;

          switch (item.productImage) {
            case "pot1":
              productImage = pot1;
              break;
            case "pot2":
              productImage = pot2;
              break;
            case "pot3":
              productImage = pot3;
              break;
            case "pot4":
              productImage = pot4;
              break;
            default:
              productImage = item.productImage;
          }

          return {
            ...item,
            productImage: productImage,
          };
        });
        setItems(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
    items,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

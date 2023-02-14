import { createContext, useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);

  const addToCart = (item, place) => {
    if (!restaurant || restaurant.placeId !== place.placedId) {
      setRestaurant(place);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{ cart, restaurant, setRestaurant, addToCart, clearCart, sum }}
    >
      {children}
    </CartContext.Provider>
  );
};

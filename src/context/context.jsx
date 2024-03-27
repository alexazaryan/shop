import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  alert: "",
  displayName: "",
  showBasket: false,
};
// console.log(initialState.order);

export const ContextProvider = ({ children }) => {
  //
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  // addToCart
  value.addToCard = (data) => {
    dispatch({ type: "ADD_TO_CARD", payload: data });
  };
  //
  // addToCart
  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };
  //

  // showBasket start
  value.showBasketCart = () => {
    dispatch({ type: "SHOW_BASKET" });
  };
  // showBasket end

  // plus start
  value.decrementQuantity = (orderId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: orderId });
  };
  // end

  // minus start
  value.incrementQuantity = (orderId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: orderId });
  };
  // end

  // удаление продукта из корзины
  value.deleteProductCart = (id) => {
    dispatch({ type: "DELETE_PRODUCT_CART", payload: id });
  };
  //end

  return <ShopContext.Provider value={value}>{children} </ShopContext.Provider>;
};
